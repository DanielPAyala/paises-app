import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  isError: boolean = false;

  paises: Country[] = [];

  constructor(private _paisService: PaisService) { }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.paises = [];
    this._paisService.buscarCapital(this.termino)
    .subscribe({
      next: (resp) => this.paises = resp,
      error: (err) => {this.isError = true; this.paises = []}
    });
  }

  sugerencias(termino: string) {
    this.isError = false;
  }

}
