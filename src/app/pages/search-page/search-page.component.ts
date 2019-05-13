import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  public users$: Observable<any>;

  constructor(public searchService: SearchService) { }

  public searchUsers(query: string): void {
    this.users$ = this.searchService.searchUsers(query);
    this.users$.subscribe((data) => console.info('users: ', data));
  }

}
