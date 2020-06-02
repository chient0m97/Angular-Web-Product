import { Injectable } from '@angular/core';
import { BaseService } from '<%= resolveRelativePath('src/app/api/base.service', generateFilePathForApi(`api/${dasherize(name)}/${dasherize(name)}.service.ts`)) %>';
import <%= resolveModelName() %> from '<%= resolveRelativePath(`src/app/models/${resolveModelName()}`, generateFilePathForApi(`api/${dasherize(name)}/${dasherize(name)}.service.ts`)) %>';

@Injectable()
export class <%= classify(name) %>Service extends BaseService {
  public url = '/api/v1/<%= camelize(name) %>s';
  public model = <%= resolveModelName() %>;
}


