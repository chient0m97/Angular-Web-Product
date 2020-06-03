import { PermissionService } from './permission/permission.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RoleService } from './role/role.service';
import { AdminApiService } from './admin/admin.service';
import { FileService } from './file/file.service';
import { SliderService } from './slider/slider.service';
import { UserService } from './user/user.service';
import { AboutService } from './about/about.service';
import { ContactsService } from './contacts/contacts.service';
import { NewsService } from './news/news.service';
import { ProductsService } from './products/products.service';

@Injectable()
export class ApiService {
  constructor(
    public auth: AuthService,
    public role: RoleService,
    public permission: PermissionService,
    public file: FileService,
    public admin: AdminApiService,
    public slider: SliderService,
    public user: UserService,
    public about: AboutService,
    public contacts: ContactsService,
    public news: NewsService,
    public products: ProductsService,
  ) {}
}
