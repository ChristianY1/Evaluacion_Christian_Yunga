import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CrearImagenService } from 'src/app/services/crear-imagen.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  imagenes:Observable<any[]>;

  constructor(private route: ActivatedRoute, private router: Router,
    public crearimagenService: CrearImagenService) { }

  ngOnInit() {
    this.imagenes = this.crearimagenService.getImagenes();
  }

}
