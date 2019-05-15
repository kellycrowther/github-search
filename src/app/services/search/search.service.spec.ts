import { TestBed, async } from '@angular/core/testing';

import { SearchService } from './search.service';
import { GithubProviderModule } from 'src/app/providers/github-provider.service.module';
import { GithubProviderService } from 'src/app/providers/github-provider.service';

describe('SearchService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GithubProviderModule
      ],
      providers: [
        GithubProviderService
      ]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });
});
