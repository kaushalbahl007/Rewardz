import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery:string=""

  @Output() searchQueryChanged = new EventEmitter<string>();  // EventEmitter to send search query to parent

  

  onSearchChange() {
    this.searchQueryChanged.emit(this.searchQuery);  // Emit the search query whenever it changes
  }
}
