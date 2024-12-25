import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SortModalComponent } from '../sort-modal/sort-modal.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() item: any;
  @ViewChild(SortModalComponent)
  private timerComponent!: SortModalComponent;

  

  @Output() sortEvent = new EventEmitter<any[]>();
  originalItems: any[] = [];


  ngOnInit(): void {
    
    this.originalItems = JSON.parse(JSON.stringify(this.item));
  }

  
  onSortApplied(event: string) {
    if (event === 'az') {
      this.item = [...this.item.sort((a: any, b: any) => a.name.localeCompare(b.name))]; // Sort ascending
    } else if (event === 'za') {
      this.item = [...this.item.sort((a: any, b: any) => b.name.localeCompare(a.name))]; // Sort descending
    }else{
      this.resetItems()
    }
    this.sortEvent.emit(this.item)
  }


  resetItems() {
    this.item = [...this.originalItems]; // Reset to the original order
  }

  openPopModal(){
   this.timerComponent.openModal()
  }
}
