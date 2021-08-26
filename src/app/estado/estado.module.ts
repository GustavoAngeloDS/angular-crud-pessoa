import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EstadoService } from './services/estado.service';
import { SharedModule } from '../shared/shared.module';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ListarEstadoComponent,
    InserirEstadoComponent,
    EditarEstadoComponent,
    ModalEstadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgSelectModule
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
