import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import FroalaEditor from './froala.component';

describe('FroalaEditor', () => {
  let component: FroalaEditor;
  let fixture: ComponentFixture<FroalaEditor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FroalaEditor ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FroalaEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});