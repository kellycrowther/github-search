import { async, ComponentFixture, TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';

import { SearchPageComponent } from './search-page.component';
import { UserCardModule } from 'src/app/components/user-card/user-card.module';
import { NoContentModule } from 'src/app/components/no-content/no-content.module';
import { GetStartedModule } from 'src/app/components/get-started/get-started.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from 'src/app/services/search/search.service';
import { of } from 'rxjs';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      imports: [
        UserCardModule,
        NoContentModule,
        GetStartedModule,
        SearchModule,
        NgxPaginationModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    searchService = TestBed.get(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchUsers()', () => {
    it('should call searchService.searchUsers()', fakeAsync(() => {
      spyOn(searchService, 'searchUsers').and.returnValue(of(null));
      component.searchUsers('query');
      flushMicrotasks();
      expect(searchService.searchUsers).toHaveBeenCalled();
    }));
  });
});
