import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { ImageLoaderModule } from '@digital-lending-workspace/image-loader';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ImageLoaderModule, ProductRoutingModule],
  providers: [ProductService],
})
export class ProductModule {}
