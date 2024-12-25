import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-sort-modal',
  templateUrl: './sort-modal.component.html',
  styleUrls: ['./sort-modal.component.scss']
})
export class SortModalComponent {

  @Output() sortApplied = new EventEmitter<string>();
  isModalOpen = false;
  selectedOption: string = 'name';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  applySort() {
    this.sortApplied.emit(this.selectedOption);
    this.closeModal();
  }

  onClick(value:string){ 
    this.selectedOption=value
  }

  resetAll(){
    this.selectedOption=""
    this.sortApplied.emit(this.selectedOption);
    this.closeModal()
  }

}
