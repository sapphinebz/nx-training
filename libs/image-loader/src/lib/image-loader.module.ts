import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoaderDirective } from './image-loader.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ImageLoaderDirective
  ],
  exports: [
    ImageLoaderDirective
  ],
})
export class ImageLoaderModule {}
