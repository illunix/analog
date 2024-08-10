import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouteMeta, injectLoad } from '@analogjs/router';
import { NgForOf, NgIf } from '@angular/common';
import { load } from './(home).server';

export const routeMeta: RouteMeta = {
  title: 'Product List',
};

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf, NgIf],
  template: `<label>Products</label>`,
})
export default class ProductListComponent {
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
