import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contexto',
  templateUrl: './contexto.component.html',
  styleUrls: ['./contexto.component.scss']
})
export class ContextoComponent {

  showSecret = false;
  showInput = false;
  enteredCode: string = '';
  secretCode = '1136'; // Este es el código que desbloqueará el texto.

  showSecretInput() {
    this.showInput = true;
  }

  checkCode() {
    if (this.enteredCode === this.secretCode) {
      this.showInput = false;
      this.showSecret = true;
      this.showSweetAlert(); // Muestra SweetAlert si el código es correcto
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Código incorrecto',
        text: 'Inténtalo de nuevo.',
      });
      this.enteredCode = ''; // Limpia el campo de entrada.
    }
  }

  showSweetAlert() {
    Swal.fire({
      title: 'Texto desbloqueado',
      text: 'Este es el texto secreto.',
      icon: 'info',
      confirmButtonText: 'Entendido',
    });
  }
  
  vegeta(){
    const audioElement = new Audio();
    audioElement.src = '../assets/Videos/feliz cumple vegeta.mp3';
    audioElement.load();
    audioElement.play();

    audioElement.addEventListener('ended', () => {
      console.log('La reproducción ha finalizado.');
    });
  }

  // yo(){
  //   Swal.fire({
  //     html: '<video src="assets/fotos/io.mp4" controls></video>',
  //     showConfirmButton: false // Para ocultar el botón "Aceptar"
  //   });
  // }
}