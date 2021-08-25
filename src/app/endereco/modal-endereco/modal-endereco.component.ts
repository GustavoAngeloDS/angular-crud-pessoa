import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.component.html',
  styleUrls: ['./modal-endereco.component.css']
})
export class ModalEnderecoComponent implements OnInit {

  @Input() endereco!: Endereco;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
