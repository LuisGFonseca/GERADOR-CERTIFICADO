import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  ngOnInit(): void {
    this.menssagem();
  }

  menssagem(){
    console.log('Meu componente navbar inicializou (dentro da função)');
  }
}
