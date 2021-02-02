import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { destTuristico } from 'src/app/model/destTuristico';
import { CrearImagenService } from 'src/app/services/crear-imagen.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  datos: destTuristico = new destTuristico();

  constructor(private route: ActivatedRoute,
    private router: Router,
    public crearService: CrearImagenService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.datos)
    this.crearService.saveImagen(this.datos);
  }

}
