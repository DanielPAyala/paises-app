import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  isError: boolean = false;

  paises: Country[] = [];

  constructor(private _paisService: PaisService) { }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.paises = [];
    this._paisService.buscarPais(this.termino)
    .subscribe({
      next: (resp) => {this.paises = resp},
      error: (err) => {this.isError = true; this.paises = []}
    });
  }

  sugerencias(termino: string) {
    this.isError = false;
    // TODO: crear sugerencias
  }

}
