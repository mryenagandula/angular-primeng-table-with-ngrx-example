import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, TableModule } from 'primeng';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule
  ],
  exports:[
    CardModule,
    TableModule,
    ButtonModule
  ]
})
export class SharedModule { }
