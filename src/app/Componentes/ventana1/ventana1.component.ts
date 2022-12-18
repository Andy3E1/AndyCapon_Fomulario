import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ventana1',
  templateUrl: './ventana1.component.html',
  styleUrls: ['./ventana1.component.css']
})
export class Ventana1Component implements OnInit {

  constructor(private router:Router) { }
  Nombre:any
  Apellido: any;
  correo:any
  contraseña:any
  confirmarcontra:any
  telefono:any
  ngOnInit(): void {
    this.recuperar();
    this.recuperar_Formulario();

  }
resultado:any;
mensaje:any;
navegar(){this.router.navigate(['web1']); }
navegacion(){this.router.navigate(['volver']);}
pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}

//********************************** */
recuperar()
{
  this.resultado=localStorage.getItem('valor');
  this.mensaje=localStorage.getItem('mensaje');
}
recuperar_Formulario(){
  this.Nombre= localStorage.getItem('Nombre')
  this.Apellido= localStorage.getItem('Apellido')
  this.correo= localStorage.getItem('correo')
  this.contraseña= localStorage.getItem('contraseña')
  this.confirmarcontra= localStorage.getItem('confir' )
  this.telefono= localStorage.getItem('telefono')

}
}

