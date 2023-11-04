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
  secretCode = '2116'; // Este es el código que desbloqueará el texto.

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
        title: 'Que no mujer',
        text: 'No le pongas jajaja ya le cambie de codigo por si las dudas.',
      });
      this.enteredCode = ''; // Limpia el campo de entrada.
    }
  }

  showSweetAlert() {
    Swal.fire({
      title: 'Ahora si jaja ya se desbloqueo xd',
      text: 'Este es el texto secreto.',
      icon: 'info',
      confirmButtonText: 'Entendido',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
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