import { Component } from '@angular/core';

@Component({
  selector: 'app-flor-amarilla',
  templateUrl: './flor-amarilla.component.html',
  styleUrls: ['./flor-amarilla.component.scss']
})
export class FlorAmarillaComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
