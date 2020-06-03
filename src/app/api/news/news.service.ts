import { Injectable } from '@angular/core';
import News from '../../models/News';
import { BaseService } from '../base.service';

@Injectable()
export class NewsService extends BaseService {
  public url = '/api/v1/newss';
  public model = News;
}


