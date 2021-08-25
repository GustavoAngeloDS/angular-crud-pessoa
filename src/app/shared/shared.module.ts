import { NgModule } from '@angular/core';
import { NumericoDirective } from './directives/numerico.directive';
import { MinimoValidatorDirective } from './directives/minimo-validator.directive';
import { MeuPipePipe } from './pipes/meu-pipe.pipe';
import { AlfaDirective } from './directives/alfa.directive';


@NgModule({
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe,
    AlfaDirective
  ],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe    
  ]
})
export class SharedModule { }