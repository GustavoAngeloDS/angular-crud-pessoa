import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {

  enderecos!: Endereco[];

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco): void {
    $event.preventDefault();
    let sp = ' - ';
    let enderecoCompleto = 
      endereco.cep + sp
    + endereco.bairro + sp
    + endereco.rua + sp
    + endereco.numero;

    if(confirm('Deseja realmente remover o endereço "'+enderecoCompleto+'" ?')){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }
}
