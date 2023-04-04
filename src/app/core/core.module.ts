import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteNamePipe } from './pipes/complete-name.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CompleteNamePipe],
  exports: [CompleteNamePipe]
})
export class CoreModule { }
