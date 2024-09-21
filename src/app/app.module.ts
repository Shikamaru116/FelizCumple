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

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CalculatorComponent,
    ContextoComponent,
    FinalComponent,
    ImageFallComponent,
    FlorAmarillaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
