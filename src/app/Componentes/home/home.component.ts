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
  //DECLARACION DE VARIABLES DE FORMULARIO
Nombre:any;
Apellido: any;
correo:any;
contrasena: any;
confirmarcontra:any;
telefono: any;
  //FIN DE VARIABLES DE FORMULARIO
  numero:any;
  suma:any;
  sueldos=[1000,1223,12323,232,34454];
    ngOnInit(): void {
      this.numero=3;
      //this.almacenar();
      this.informacion();
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
  localStorage.setItem('Nombre', this.Nombre),
  localStorage.setItem('Apellido', this.Apellido),
  localStorage.setItem('correo', this.correo),
  localStorage.setItem('contraseña', this.contrasena),
  localStorage.setItem('confir', this.confirmarcontra),
  localStorage.setItem('telefono', this.telefono);
}
nav(){
  this.router.navigate(['web1'])
}
}
