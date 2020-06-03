import { Injectable } from '@angular/core';
import Contacts from '../../models/Contacts';
import { BaseService } from '../base.service';

@Injectable()
export class ContactsService extends BaseService {
  public url = '/api/v1/contactss';
  public model = Contacts;
}


