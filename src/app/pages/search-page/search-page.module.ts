import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { SearchServiceModule } from 'src/app/services/search/search.service.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserCardModule } from 'src/app/components/user-card/user-card.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchServiceModule,
    SearchModule,
    FlexLayoutModule,
    UserCardModule,
    NgxPaginationModule
  ],
  exports: [SearchPageComponent]
})
export class SearchPageModule { }
