import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IUserResults, IUserDetail } from '../models/user';

@Injectable()
export class GithubProviderService {

  constructor(public http: HttpClient) { }

  public searchUsers(query: string, page: number, perPage: string): Observable<IUserResults> {
    let params = new HttpParams();
    params = page ? params.append('q', query) : params;
    params = page ? params.append('page', page.toString()) : params;
    params = page ? params.append('perPage', perPage) : params;

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
