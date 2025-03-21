import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flor-amarilla2',
  templateUrl: './flor-amarilla2.component.html',
  styleUrls: ['./flor-amarilla2.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('2s ease-in', style({
          opacity: 1
        }))
      ])
    ]),
  ]

})
export class FlorAmarilla2Component implements OnInit {
  @Output() close = new EventEmitter<void>();

  mensajeVisible = false;

  hearts: number[] = []
  petals: number[] = []

  shootingStars: number[] = []

  stars: number[] = []
  flowers: number[] = []
  faseLuna = 'llena';

  ngOnInit() {
    // Generamos 100 estrellas
    this.stars = Array(100).fill(0)
    // Generamos 20 flores
    this.flowers = Array(15).fill(0)
    // generamos 10 estrellas fugaces
    this.shootingStars = Array(10).fill(0)
    // Generamos 10 corazones
    this.hearts = Array(10).fill(0)
    // Generamos 10 petalos
    this.petals = Array(10).fill(0)
  }

  cambiarFaseLuna() {
    const fases = ['llena', 'creciente', 'menguante', 'nueva'];
    this.faseLuna = fases[(fases.indexOf(this.faseLuna) + 1 % fases.length)];
  }

  mostrarMensajeSecreto() {
    this.mensajeVisible = true;
    setTimeout(() => this.mensajeVisible = false, 3000);
  }

  estrellasfugaces() {
    return {
      'top.%': Math.random() * 100,
      'left.%': Math.random() * 100,
      'transform': 'rotate(' + (Math.random() * 360) + 'deg)'
    }
  }

  getRandomPosition() {
    return {
      'top.%': Math.random() * 100,
      'left.%': Math.random() * 100
    }
  }

  getRandomColor() {
    return `hsl(${Math.random() * 360}, 70%, 60%)`
  }

  // Agrega esta función en la clase
  getYellowColor() {
    const saturation = 70 + Math.random() * 20;
    const lightness = 50 + Math.random() * 20;
    return `hsl(55, ${saturation}%, ${lightness}%)`;
  }

}
