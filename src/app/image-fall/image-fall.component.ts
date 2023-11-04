import { Component } from '@angular/core';

@Component({
  selector: 'app-image-fall',
  templateUrl: './image-fall.component.html',
  styleUrls: ['./image-fall.component.scss']
})
export class ImageFallComponent {
  // Declarar la propiedad 'images' y asignarle un array de rutas de imágenes
  images: string[] = [
    '../assets/fotos/4c78970ece656a2ead941a86f03e4e86-pastel-de-cumpleanos.png',
    '../assets/fotos/58597f7d4f6ae202fedf28aa.png',
    '../assets/fotos/efbd4fca-2d0c-49bd-9776-6c9c8dc54821.png',
    // Agrega más rutas de imágenes aquí
  ];
}
