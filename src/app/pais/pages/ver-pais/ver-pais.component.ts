import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private _paisService: PaisService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this._paisService.getPaisByCode(id).subscribe( pais => {
    //     console.log(pais);
    //   });
    // });

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this._paisService.getPaisByCode(id)),
      tap(console.log)
    )
    .subscribe(resp => {
      this.pais = resp[0];
    });
  }

}
