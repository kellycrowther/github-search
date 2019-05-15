import { TestBed, async } from '@angular/core/testing';

import { GithubProviderService } from './github-provider.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GithubProviderService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        HttpClient,
        GithubProviderService,
        HttpHandler
      ]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: GithubProviderService = TestBed.get(GithubProviderService);
    expect(service).toBeTruthy();
  });
});
