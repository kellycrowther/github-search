import { Injectable } from '@angular/core';
import { GithubProviderService } from 'src/app/providers/github-provider.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public data: GithubProviderService) { }

  public searchUsers(query?: string): Observable<any> {
    return this.data.searchUsers(query);
  }
}
