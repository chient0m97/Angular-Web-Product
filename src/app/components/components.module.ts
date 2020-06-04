import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main.component';
import { BaseComponent } from './base.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DirectivesModule } from '../common/directives/directives.module';
import { PipesModule } from '@vicoders/angular';
import { DropdownMenuComponent } from './homepage/dropdown-menu/dropdown-menu.component';
import { DroprightMenuComponent } from './homepage/dropright-menu/dropright-menu.component';
import { DropdownMenuDetailComponent } from './homepage/dropdown-menu/dropdown-menu-detail/dropdown-menu-detail.component';
import { DroprightMenuDetailComponent } from './homepage/dropright-menu/dropright-menu-detail/dropright-menu-detail.component';
import { ProductsPerfumeComponent } from './products/products-perfume/products-perfume.component';
import { DetailProductsComponent } from './products/detail-products/detail-products.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { DetailNewsComponent } from './news/detail-news/detail-news.component';
import { ListNewsComponent } from './news/list-news/list-news.component';

@NgModule({
  declarations: [AboutComponent, ProductsComponent, NewsComponent, ContactsComponent, PageNotFoundComponent, MainComponent, HomepageComponent, BaseComponent, DropdownMenuComponent, DroprightMenuComponent, DropdownMenuDetailComponent, DroprightMenuDetailComponent, ProductsPerfumeComponent, DetailProductsComponent, ListProductsComponent, DetailNewsComponent, ListNewsComponent],
  imports: [CommonModule, RouterModule, FormsModule, BrowserAnimationsModule, DirectivesModule, PipesModule],
  providers: [],
  exports: []
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule
    };
  }
}
