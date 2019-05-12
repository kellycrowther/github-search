import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { GithubProviderModule } from 'src/app/providers/github-provider.service.module';

@NgModule({
  imports: [CommonModule, GithubProviderModule],
  providers: [
    SearchService
  ],
  schemas: [],
  exports: []
})
export class SearchServiceModule { }
