import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { FeatureComponentAaComponent } from './feature-component-aa/feature-component-aa.component';



@NgModule({
  declarations: [FeatureComponentAaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FeatureComponentAaComponent
  ]
})
export class FeatureModule1Module { }
