import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IUserResults } from '../models/user';

@Injectable()
export class GithubProviderService {

  constructor(public http: HttpClient) { }

  public searchUsers(query?: string): Observable<IUserResults> {
    let params = new HttpParams();
    if (query) {
      params = params.append('q', query);
    }
    return this.http.get('/search/users', { params })
      .pipe(
        map((data: IUserResults) => {
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
