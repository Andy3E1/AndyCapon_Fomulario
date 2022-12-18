import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { 
  }
  Nombre:any;
Apellido: any;
correo:any;
contrasena: any;
confirmarcontra:any;
telefono: any;
  numero:any;
  suma:any;
  sueldos=[1000,1223,12323,232,34454];
    ngOnInit(): void {
      this.numero=3;
      //this.almacenar();
      this.informacion();
      localStorage.clear();
}
navegar(){this.router.navigate(['web1']); }
navegacion(){this.router.navigate(['volver']);}
pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}

almacenar(){
  localStorage.setItem('valor', this.numero)
  localStorage.setItem('mensaje', 'Hola mi nombre es Andy Capón')
}
//******FORMULARIO********* */
informacion(){
  localStorage.setItem('Nombre', this.Nombre.toString());
  localStorage.setItem('Apellido', this.Apellido.toString());
  localStorage.setItem('correo', this.correo.toString());
  localStorage.setItem('contraseña', this.contrasena.toString());
  localStorage.setItem('confir', this.confirmarcontra.toString());
  localStorage.setItem('telefono', this.telefono.toString());
}
nav(){
  this.router.navigate(['web1'])
}
}
