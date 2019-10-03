import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpeechEnum } from '../../enum/speech.enum';

@Component({
  selector: 'app-speech-header',
  templateUrl: './speech-header.component.html',
  styleUrls: ['./speech-header.component.scss']
})
export class SpeechHeaderComponent implements OnInit {

  selected: number = 0;
  searchKeyword: string = '';
  locationData: SpeechEnum;
  addShow: boolean = false;
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() location: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setLocation(data): void {
    this.selected = data;
    this.location.emit(data);
  }

  searchSubmit(): void {
    console.log('searchKeyword', this.searchKeyword);
    this.search.emit(this.searchKeyword);
  }

}
