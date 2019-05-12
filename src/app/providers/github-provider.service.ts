import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class GithubProviderService {

  constructor(public http: HttpClient) { }

  public getRepo(): Observable<any> {
    return this.http.get('/repos/vmg/redcarpet/issues?state=closed')
      .pipe(
        map((data) => {
          if (!data) {
            console.warn('GithubProviderService->getRepo() Invalid Data');
            throwError('GithubProviderService->getRepo() Invalid Data');
          }
          return data;
        }),
        catchError(e => {
          console.error('GithubProviderService->getRepo() Error', e);
          return throwError(e || 'Error getRepo()');
        }));
  }
}
