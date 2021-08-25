import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { ModalCidadeComponent } from '../modal-cidade/modal-cidade.component';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {

  cidades!: Cidade[];

  constructor(private cidadeService: CidadeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cidades = this.listarTodos();
  }

  listarTodos(): Cidade[] {
    return this.cidadeService.listarTodos();
  }

  remover($event: any, cidade: Cidade): void {
    $event.preventDefault();

    if(confirm('Deseja realmente remover a cidade "'+cidade.nome+'" ?')){
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodos();
    }
  }

  abrirModalCidade(cidade: Cidade) {
    const modalRef = this.modalService.open(ModalCidadeComponent);
    modalRef.componentInstance.cidade = cidade;
  }

}
