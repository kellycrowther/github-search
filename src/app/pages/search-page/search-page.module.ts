import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule
  ],
  exports: [SearchPageComponent]
})
export class SearchPageModule { }
