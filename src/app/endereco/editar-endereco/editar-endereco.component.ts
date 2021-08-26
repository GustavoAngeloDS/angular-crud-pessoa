import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from 'src/app/cidade/services/cidade.service';
import { PessoaService } from 'src/app/pessoa/services/pessoa.service';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {

  @ViewChild("formEndereco") formEndereco!: NgForm;

  endereco!: Endereco;
  cidades!: Cidade[];

  constructor(private enderecoService: EnderecoService, private cidadeService: CidadeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.endereco = this.enderecoService.buscarPorId(id);
    this.cidades = this.cidadeService.listarTodos();
  }

  atualizar(): void{
    if(this.formEndereco.form.valid){
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }

}
