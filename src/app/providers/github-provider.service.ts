import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IUserResults, IUserDetail } from '../models/user';

@Injectable()
export class GithubProviderService {

  constructor(public http: HttpClient) { }

  public searchUsers(query: string = '', page: number, perPage: string): Observable<IUserResults> {
    let params = new HttpParams();
    params = params.append('client_id', 'a1931bea2198da57172c');
    params = params.append('client_secret', '5e45a309348e005bd77897a98b94dea9ca48c5aa');
    query = encodeURIComponent(query).replace(/%20/g, '+');
    params = params.append('q', query);
    params = params.append('page', page.toString());
    params = params.append('per_page', perPage);
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

  public getUserDetail(user: string): Observable<IUserDetail> {
    let params = new HttpParams();
    params = params.append('client_id', 'a1931bea2198da57172c');
    params = params.append('client_secret', '5e45a309348e005bd77897a98b94dea9ca48c5aa');
    return this.http.get(`/users/${user}`)
      .pipe(
        map((data: any) => {
          if (!data) {
            console.warn('GithubProviderService->getUserDetail() Invalid Data');
            throwError('GithubProviderService->getUserDetail() Invalid Data');
          }
          return data;
        }),
        catchError(e => {
          console.error('GithubProviderService->getUserDetail() Error', e);
          return throwError(e || 'Error getUserDetail()');
        }));
  }
}
