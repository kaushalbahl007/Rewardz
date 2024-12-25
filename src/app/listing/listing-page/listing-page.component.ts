import { Component } from '@angular/core';

export interface Item {
  pk: number;                 // Primary key or unique identifier
  name: string;               // Name of the item
  points: number;             // Points associated with the item
  display_img_url: string;    // URL for the display image
  quantity: number;           // Quantity of the item available
  valid_until: string;        // Validity date for the item
  low_quantity: number;       // Threshold for low quantity warning
}

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent {
  items:Item[] = [
    {
      pk: 987,
      name: "amul",
      points: 150,
      display_img_url: "",
      quantity: 0,
      valid_until: "",
      low_quantity: 10,
    },
    {
      pk: 987,
      name: "sport",
      points: 150,
      display_img_url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09a74b1023f2497989f9ad55005f1538_9366/CLEAR_FACTOR_SHOES_Black_EX2038_01_standard.jpg",
      quantity: 0,
      valid_until: "2024-12-31T00:00:00",
      low_quantity: 10,
    },
    {
      pk: 988,
      name: "nike",
      points: 200,
      display_img_url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e05ab9bfc6bd450bb4a7afe5160d73c5_9366/Runfalcon_5_Running_Shoes_White_IE8818_01_standard.jpg",
      quantity: 5,
      valid_until: "2024-12-31T00:00:00",
      low_quantity: 10,
    },
    {
      pk: 989,
      name: "puma",
      points: 100,
      display_img_url: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d86dfaff2f44016a81641788f831893_9366/Run_It_Tee_Blue_IW8423_HM1.jpg",
      quantity: 20,
      valid_until: "2024-12-31T00:00:00",
      low_quantity: 10,
    },
    {
      pk: 990,
      name: "adidas",
      points: 300,
      display_img_url: "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/77b2b8682fad4f75ae36ee94f9b23231_9366/Own_the_Run_Base_AEROREADY_Shorts_Blue_IW0036_21_model.jpg",
      quantity: 8,
      valid_until: "2024-12-31T00:00:00",
      low_quantity: 10,
    },
    {
      pk: 987,
      name: "zebra",
      points: 150,
      display_img_url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09a74b1023f2497989f9ad55005f1538_9366/CLEAR_FACTOR_SHOES_Black_EX2038_01_standard.jpg",
      quantity: 0,
      valid_until: "2024-12-31T00:00:00",
      low_quantity: 10,
    },
  ];
  searchQuery: string="";

  get filteredItems() {
    return this.items.filter(item => 
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSearchQueryChanged(query: string) {
    this.searchQuery = query;  // Update the search query in the parent component
  }

  onSortEventChange(event:Item[]){
    this.items=event
  }
  
}
