import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'test-auth',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './(auth).page.html',
  styleUrl: './(auth).page.css',
})
export default class AuthComponent {}
