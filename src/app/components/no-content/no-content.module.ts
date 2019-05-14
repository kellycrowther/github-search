import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoContentComponent } from './no-content.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NoContentComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [NoContentComponent]
})
export class NoContentModule { }
