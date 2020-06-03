import { Injectable } from '@angular/core';
import About from '../../models/About';
import { BaseService } from '../base.service';

@Injectable()
export class AboutService extends BaseService {
  public url = '/api/v1/abouts';
  public model = About;
}


