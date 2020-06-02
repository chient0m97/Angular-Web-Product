import { PipesModule } from '<%= resolveRelativePath('src/app/common/pipes/pipes.module', generateFilePath(`${dasherize(name)}/${dasherize(name)}.module.ts`)) %>';
import { PipesModule as VicodersPipesModule} from '@vicoders/angular';
import { DirectivesModule } from '<%= resolveRelativePath('src/app/common/directives/directives.module', generateFilePath(`${dasherize(name)}/${dasherize(name)}.module.ts`)) %>';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { AngularReactiveFormModule } from '@vicoders/reactive-form';

@NgModule({
  imports: [
    CommonModule,
    <%= classify(name) %>RoutingModule,
    FormsModule,
    PipesModule,
    VicodersPipesModule,
    DirectivesModule,
    AngularReactiveFormModule
  ],
  declarations: [
    <%= classify(name) %>Component,
    ListComponent,
    EditComponent,
    CreateComponent
  ]
})
export class <%= classify(name) %>Module { }
