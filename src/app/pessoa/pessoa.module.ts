import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './services/pessoa.service';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
