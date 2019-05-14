import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetStartedComponent } from './get-started.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [GetStartedComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [GetStartedComponent]
})
export class GetStartedModule { }
