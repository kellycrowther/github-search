import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { SearchServiceModule } from 'src/app/services/search/search.service.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchServiceModule
  ],
  exports: [SearchPageComponent]
})
export class SearchPageModule { }
