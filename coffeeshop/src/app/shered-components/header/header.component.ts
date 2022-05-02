import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  menu :any;
 navbar :any;
 navLinks :any;


  constructor() {
    
   }

  ngOnInit(): void {
   this.menu = document.querySelector('#menu-bars');
   this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('header .navbar a');

  }



  onclick(){
    this.menu.classList.toggle('fa-times');
    this.navbar.classList.toggle('active');
  }

  onscroll(){
    this.menu.classList.remove('fa-times');
    this.navbar.classList.remove('active');
  }

}
