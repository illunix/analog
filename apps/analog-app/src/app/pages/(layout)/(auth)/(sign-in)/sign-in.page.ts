import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'test-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-in.page.html',
  styleUrl: './sign-in.page.css',
})
export default class SignInComponent {}
