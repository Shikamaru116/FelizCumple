import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContextoComponent } from './contexto/contexto.component';
import { FinalComponent } from './final/final.component';
import { ImageFallComponent } from './image-fall/image-fall.component';
import { FlorAmarillaComponent } from './components/flor-amarilla/flor-amarilla.component';
import { CartaComponent } from './components/carta/carta.component';
import { FlorAmarilla2Component } from './flor-amarilla2/flor-amarilla2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CalculatorComponent,
    ContextoComponent,
    FinalComponent,
    ImageFallComponent,
    FlorAmarillaComponent,
    CartaComponent,
    FlorAmarilla2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
