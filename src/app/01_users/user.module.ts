import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentUserComponent } from './component-user/component-user.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    declarations: [
    ComponentUserComponent,HighlightDirective],
    imports: [ CommonModule],
    exports: [ComponentUserComponent],
  })

export class UserModule {}