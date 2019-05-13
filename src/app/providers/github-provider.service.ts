import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class GithubProviderService {

  constructor(public http: HttpClient) { }

  public searchUsers(query?: string): Observable<any> {
    let params = new HttpParams();
    if (query) {
      params = params.append('q', query);
    }
    return this.http.get('/search/users', { params })
      .pipe(
        map((data) => {
          if (!data) {
            console.warn('GithubProviderService->searchUsers() Invalid Data');
            throwError('GithubProviderService->searchUsers() Invalid Data');
          }
          return data;
        }),
        catchError(e => {
          console.error('GithubProviderService->searchUsers() Error', e);
          return throwError(e || 'Error searchUsers()');
        }));
  }
}
