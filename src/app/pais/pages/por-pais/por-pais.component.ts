import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  isError: boolean = false;

  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  mostrarSugerencias: boolean = false;

  constructor(private _paisService: PaisService) { }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.paises = [];
    this.mostrarSugerencias = false;
    this._paisService.buscarPais(this.termino)
    .subscribe({
      next: (resp) => {this.paises = resp},
      error: (err) => {this.isError = true; this.paises = []}
    });
  }

  sugerencias(termino: string) {
    (termino.trim().length === 0) ? 
    this.mostrarSugerencias = false
    : this.mostrarSugerencias = true;
    
    this.isError = false;
    this.termino = termino;
    
    // TODO: crear sugerencias
    this._paisService.buscarPais(this.termino)
    .subscribe({
      next: (resp) => this.paisesSugeridos = resp.splice(0, 5),
      error: (err) => this.paisesSugeridos = []
    })
  }

}
