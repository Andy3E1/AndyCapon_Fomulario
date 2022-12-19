import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ventana3',
  templateUrl: './ventana3.component.html',
  styleUrls: ['./ventana3.component.css']
})
export class Ventana3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

navegar(){this.router.navigate(['web1']); }
navegacion(){this.router.navigate(['volver']);}
pag_2(){this.router.navigate(['web2']);}
pag_3(){this.router.navigate(['web3']);}

}