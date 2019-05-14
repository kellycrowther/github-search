import { Injectable } from '@angular/core';
import { GithubProviderService } from 'src/app/providers/github-provider.service';
import { Observable, of } from 'rxjs';
import { IUserResults, IUserDetail } from 'src/app/models/user';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public data: GithubProviderService) { }

  public searchUsers(query?: string, page?: number, perPage?: string): Observable<IUserResults> {
    if (query.trim().length > 0) {
      return this.data.searchUsers(query, page, perPage).pipe(shareReplay(1));
    } else {
      return of(null);
    }
  }

  public getUserDetail(user: string): Observable<IUserDetail> {
    return this.data.getUserDetail(user).pipe(shareReplay(1));
  }
}
