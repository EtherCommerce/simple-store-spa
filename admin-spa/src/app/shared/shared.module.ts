import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSourcePipe } from './data-source.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataSourcePipe
  ],
  exports: [
    CommonModule,
    DataSourcePipe
  ]
})
export class SharedModule { }
