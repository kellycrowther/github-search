import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import config from '../../assets/configuration.json';

const baseURL = 'https://api.github.com';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let changedRequest = request;
    const headerSettings: { [name: string]: string | string[]; } = {};
    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }
    headerSettings['Content-Type'] = 'application/json';
    // tslint:disable-next-line:no-string-literal
    headerSettings['Authorization'] = 'token ' + config.token;
    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
      headers: newHeader,
      url: baseURL + request.url
    });
    return next.handle(changedRequest);
  }
}
