import { Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[dlImageLoader]',
})
export class ImageLoaderDirective {
  private dlImageLoaderAction = new BehaviorSubject<string | null>(null);
  dlImageLoader$ = this.dlImageLoaderAction.pipe(filter((url) => Boolean(url)));
  get dlImageLoader() {
    return this.dlImageLoaderAction.value;
  }
  set dlImageLoader(value: string | null) {
    this.dlImageLoaderAction.next(value);
  }

  constructor() {
    console.log('Hello dlImageLoader');
  }
}
