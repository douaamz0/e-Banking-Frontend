import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Correction ici : styleUrls au lieu de styleUrl
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {}

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

  ngOnInit(): void {}
}
