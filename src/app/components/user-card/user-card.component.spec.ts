import { async, ComponentFixture, TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GithubProviderService } from 'src/app/providers/github-provider.service';
import { GithubProviderModule } from 'src/app/providers/github-provider.service.module';
import { IUser } from 'src/app/models/user';
import { SearchService } from 'src/app/services/search/search.service';
import { of } from 'rxjs';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent ],
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        GithubProviderModule
      ],
      providers: [
        GithubProviderService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.user = { login: 'kellycrowther' } as IUser;
    searchService = TestBed.get(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should call searchService.getUserDetail()', fakeAsync(() => {
      spyOn(searchService, 'getUserDetail').and.returnValue(of(null));
      component.ngOnInit();
      flushMicrotasks();
      expect(searchService.getUserDetail).toHaveBeenCalled();
    }));
  });
});
