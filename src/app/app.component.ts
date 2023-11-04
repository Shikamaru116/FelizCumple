import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'felizCumple';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showNotification();
    }, 2000);

    
  }

  showNotification() {
    Swal.fire({
      title: 'Holi 😋.',
      text: 'JAJAJA la pagina tiene alguno que otra cosa escondida en ciertas partes ya dependeria de ti encontrarlos xd',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(../assets/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../assets/nyan-cat.gif")
        left top
        no-repeat
      `,
      confirmButtonText: 'Ta´ bien', 
    }).then((result) => {
      if (result.isConfirmed) {
        this.playAudio();
        Swal.fire({
          icon: 'success',
          title: 'Musiquita pero del bueno jaja',
          text: 'No dura mucho para no sea molesto',
          showConfirmButton: false,
          timer: 3500
        })
      }
      else{
        this.playAudio();
        Swal.fire({
          icon: 'success',
          title: 'Musiquita pero del bueno jaja',
          text: 'No dura mucho para no sea molesto',
          showConfirmButton: false,
          timer: 3500
        })
      }
    });
  }

  playAudio() {
    const audioElement = new Audio();
    audioElement.src = '../assets/videoplayback.m4a';
    audioElement.load();
    audioElement.play();

    audioElement.addEventListener('ended', () => {
      console.log('La reproducción ha finalizado.');
    });
  }


}
