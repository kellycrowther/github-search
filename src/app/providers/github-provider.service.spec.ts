import { TestBed } from '@angular/core/testing';

import { GithubProviderService } from './github-provider.service';

describe('GithubProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubProviderService = TestBed.get(GithubProviderService);
    expect(service).toBeTruthy();
  });
});
