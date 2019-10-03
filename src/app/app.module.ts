import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './container/home/home.component';
import { SpeechHeaderComponent } from './components/speech-header/speech-header.component';
import { SpeechListComponent } from './components/speech-list/speech-list.component';
import { SpeechFormComponent } from './components/speech-form/speech-form.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpeechHeaderComponent,
    SpeechListComponent,
    SpeechFormComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [ModalDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
