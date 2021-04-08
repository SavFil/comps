import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DividerComponent} from './divider/divider.component';


@NgModule({
  exports: [DividerComponent],
  declarations: [DividerComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
