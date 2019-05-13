import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchServiceModule } from 'src/app/services/search/search.service.module';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchServiceModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
