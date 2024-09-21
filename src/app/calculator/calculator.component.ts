import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  num1: number = 2;
  num2: number = 1;
  result: number | null = null;

  ngOnInit() {
    this.multiply();
  }

  multiply() {
    this.result = this.num1 * this.num2;
    if (this.result === 462) {
      
      this.playVideo();
    }
  }

  playVideo() {
    Swal.fire({
      html: '<video src="assets/Videos/messi.mp4" controls></video>',
      showConfirmButton: false 
    });
  }

  messi(){
    Swal.fire(
      '¿Una calculadora?',
      'Te preguntaras para que una calculadora, jaja pues para calcular pero, ¿que calcularas? Esa es la pregunta',
      'question'
    )
  }
}
