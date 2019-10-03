import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent implements OnChanges {

  @Input() speechList: any = [];
  @Input() disableClick: boolean;
  @Output() selectedUser: EventEmitter<any> = new EventEmitter();

  selectedList = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disableClick) {
      if (this.disableClick) this.selectedList = null;
      else this.selectedList = 0;
    }
  }

  selectUser(user, index): void {
    if (this.disableClick) return;
    this.selectedUser.emit(user);
    this.selectedList = index;
  }

}
