import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() navbarItems: any[] = [
    {
      text: "دسترسی های من",
      routerLink: '/my-permissions'
    },
    {
      text: "دسترسی ها",
      routerLink: '/permissions'
    },
    {
      text: "سامانه ها",
      routerLink: '/softwares'
    }
    ,
    {
      text: "کاربران",
      routerLink: '/users'
    }
    ,
    {
      text: "واحدهای سازمانی",
      routerLink: '/organizational-units'
    }
  ];

  constructor(private router: Router){}

  isItemActive(navbarItem: any) {
    if(this.router.url == navbarItem.routerLink)
      return true;
    return false;
  }
}
