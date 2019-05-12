import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getData().subscribe((data) => {
      console.info('DATA: ', data);
    });
  }

}
