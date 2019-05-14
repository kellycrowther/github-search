import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { Observable } from 'rxjs';
import { IUserResults } from 'src/app/models/user';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public query: string;
  public totalCount: number;
  public currentPage = 1;
  public users$: Observable<IUserResults>;
  public hasSearched = false;

  constructor(public searchService: SearchService) { }

  public ngOnInit(): void {
    this.searchUsers('');
  }

  public searchUsers(query: string, page?: number, perPage?: string): void {
    this.query = query;
    if (page) {
      this.currentPage = page;
    }
    this.users$ = this.searchService.searchUsers(this.query, this.currentPage, perPage).pipe(
      tap((userResults: IUserResults) => {
        if (userResults) {
          this.totalCount = userResults.total_count;
          this.hasSearched = true;
        }
      })
    );
  }

}
