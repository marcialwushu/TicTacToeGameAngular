
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GameService } from './game.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatGridListModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
