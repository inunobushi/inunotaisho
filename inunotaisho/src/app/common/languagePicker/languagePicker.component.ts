import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { GlobalLoaderFacade } from '../../sharedServices/globalLoaderFacade/global-loader-facade.service';
import { NotificationsService } from 'angular2-notifications';
import { AppSettings } from '../../common/config';
import { Language, LANGUAGE_CONFIG } from './language.model';

@Component({
    selector: 'languageSelector',
    templateUrl: './languagePicker.component.html',
})

export class LanguagePickerComponent implements OnInit {

    selectedLanguage: Language = null;
    languages: Language[] = LANGUAGE_CONFIG;

    isChangingLanguages: boolean = false;

    constructor(private translateService: TranslateService,
        // private globalLoaderService: GlobalLoaderFacade,
        private notificationService: NotificationsService) {
    }

    ngOnInit() {

        this.changeLangTo(
            this.languages.find(
                item => item.languageCode === this.translateService.currentLang,
            ),
        );

        this.translateService.onLangChange
            .subscribe(
                (next) => {
                    this.changeLangTo(
                        this.languages.find(
                            item => item.languageCode === next.lang,
                        ),
                    );
                },
        );
    }

    changeLangTo(lang: Language): void {
        if (this.selectedLanguage && (this.selectedLanguage.languageCode === lang.languageCode)) {
            return;
        }

        // due to https://github.com/ocombe/@ngx-translate/core/issues/390
        // if the request fails, the error function passed to subscribe() will never be called, so we cannot enforce
        // this rule
        // if (this.isChangingLanguages) {
        // 	return;
        // }

        // this.isChangingLanguages = true;

        this.selectedLanguage = lang;

        // this.globalLoaderService.start();

        this.translateService
            .use(
                lang.languageCode,
        )
            .subscribe(
                (success) => {
                    this.isChangingLanguages = false;
                    // this.globalLoaderService.complete();
                },
                (error) => {
                    this.isChangingLanguages = false;
                    // this.globalLoaderService.complete();

                    this.notificationService.error(
                        this.translateService.instant('LanguagePickerComponent-TITLE'),
                        this.translateService.instant('LanguagePickerComponent-FAILED_TO_CHANGE'),
                        AppSettings.NOTIFICATIONS_ERROR_OPTIONS,
                    );
                },
        );

    }
}