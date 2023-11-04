import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent {

  showNotification() {
    Swal.fire({
      title: 'Pue bueno, esto fue toda la pagina',
      text: 'Espero que hayas disfrutado de la pagina que lo hice con mucho cariño para ti 💜',
      icon: 'info',
      confirmButtonText: 'Ta´ bien ',
    });
  }

  showImageFall = false; // Inicialmente, las imágenes están ocultas

// Lógica para mostrar las imágenes cuando sea necesario
mostrarImagenesDeCaida() {
  this.showImageFall = true;
}

}
