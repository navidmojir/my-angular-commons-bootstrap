import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { Role } from '../../utils/enums';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  currentUsername = "";

  @Input() navbarItems: any[] = []; 

  constructor(private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.authService.init().subscribe(
      () => {
        this.currentUsername = this.authService.getCurrentUsername();
        this.makeNavItems();
      }
    )
  }

  private makeNavItems() {
    this.navbarItems.push(
      {
        text: "دسترسی های من",
        routerLink: '/my-permissions'
      }
    );

    if(this.authService.hasRole(Role.ADMIN) || this.authService.hasRole(Role.SUPERVISOR)) {
      this.navbarItems.push(
        {
          text: "دسترسی ها",
          routerLink: '/permissions'
        }
      );
    }
    
    if(this.authService.hasRole(Role.ADMIN)) {
      this.navbarItems.push(
        {
          text: "سامانه ها",
          routerLink: '/softwares'
        }
      );
      this.navbarItems.push(
        {
          text: "کاربران",
          routerLink: '/users'
        }
      );
      this.navbarItems.push(
        {
          text: "واحدهای سازمانی",
          routerLink: '/organizational-units'
        }
      );
    }

  }

  isItemActive(navbarItem: any) {
    if(this.router.url == navbarItem.routerLink)
      return true;
    return false;
  }
}
