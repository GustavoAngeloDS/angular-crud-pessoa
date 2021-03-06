import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { CidadeService } from './services/cidade.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ListarCidadeComponent,
    InserirCidadeComponent,
    EditarCidadeComponent,
    ModalCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgSelectModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
