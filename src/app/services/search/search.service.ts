import { Injectable } from '@angular/core';
import { GithubProviderService } from 'src/app/providers/github-provider.service';
import { Observable, of } from 'rxjs';
import { IUserResults } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public data: GithubProviderService) { }

  public searchUsers(query?: string): Observable<IUserResults> {
    if (query.trim().length > 0) {
      return this.data.searchUsers(query);
    } else {
      return of(null);
    }
  }
}
