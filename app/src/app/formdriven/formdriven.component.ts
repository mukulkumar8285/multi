import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-formdriven',
  standalone: true,
  imports: [FormsModule, CommonModule , SkeletonLoaderComponent],
  templateUrl: './formdriven.component.html',
  styleUrls: ['./formdriven.component.css']
})
export class FormdrivenComponent {
  isLoading: boolean = false; // State to track loading

  constructor(private router: Router) {}

  userlogin(item: any) {
    this.isLoading = true; // Set loading to true
    console.log('login button clicked', item);
    
    // Simulate a network request
    setTimeout(() => {
      this.router.navigate(['formreactive']);
      this.isLoading = false; // Reset loading state after navigation
    }, 2000); // Simulating a 2-second delay
  }
}
