import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { CidadeService } from './services/cidade.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarCidadeComponent,
    InserirCidadeComponent,
    EditarCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
