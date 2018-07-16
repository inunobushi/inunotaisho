import { HttpHeaders } from '@angular/common/http';

export const contentHeaders = new HttpHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const xWwwFormUrlEncodedHeaders = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded',
});

export const accessControlAllowOriginHeaders = new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
});