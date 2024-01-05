import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { Cake } from '../models/cake';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  // Define arrays
  allItems: Cake[] = [];
  filteredItems: Cake[] = []; // Array to store filtered items
  searchTerm: string = '';
  selectedCategory: string | null=null; // Initially, no category is selected

  constructor(private cakeService: CakeService, private router: Router) {}

  ngOnInit(): void {
    this.cakeService.getCakes().subscribe((cakes) => {
      this.allItems.push(...cakes); // Add cakes to allItems
    });

    // this.cakeService.getBrownies().subscribe((brownies) => {
    //   this.allItems.push(...brownies); // Add brownies to allItems
    // });

    // this.cakeService.getCookies().subscribe((cookies) => {
    //   this.allItems.push(...cookies); // Add cookies to allItems
    // });

    // this.cakeService.getCupcakes().subscribe((cupcakes) => {
    //   this.allItems.push(...cupcakes); // Add cupcakes to allItems
    // });

    this.filteredItems = this.allItems;
  }

  filterCakesByCategory(category: string | null): void {
    this.selectedCategory = category;
    this.filterCakes();
  }

  filterCakes(): void {
    // Filter items based on the selected category and search term
    this.filteredItems = this.allItems.filter((item) => {

    const categoryMatch = this.selectedCategory === null || item.category === this.selectedCategory;
    const searchTermMatch = this.searchTerm
      ? item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      : true; // Show all items when no search term is provided

    return categoryMatch && searchTermMatch;
    });
  }

  clearSearch(): void {
    this.searchTerm = ''; // Clear the search term
    this.filterCakes(); // Re-run the filtering with an empty search term
  }

  redirectToOrder(itemId: number): void {
    this.router.navigate(['order', itemId]); // Redirect to the order component with the item ID as a parameter
  }
  
}
