import { Component, OnInit } from '@angular/core';
import { SpeechEnum } from '../../enum/speech.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  disableForm: boolean = true;
  hideSpeechList: boolean = false;
  selectedView: any;
  speechList = [
    {
      id: 1,
      subject: "Speech 1",
      detail: 'Speech Detail 1...',
      author: 'Rowan Atkinson',
      date: {
        year: 2019,
        month: 11,
        day: 12
      }
    },
    {
      id: 2,
      subject: "Speech 2",
      detail: 'Speech Detail 2...',
      author: 'Matt Spinx',
      date: {
        year: 2016,
        month: 7,
        day: 1
      }
    },
    {
      id: 3,
      subject: "Speech 3",
      detail: 'Speech Detail 3...',
      author: 'James Spill',
      date: {
        year: 200,
        month: 3,
        day: 23
      }
    },
    {
      id: 4,
      subject: "Speech 4",
      detail: 'Speech Detail 4...',
      author: 'Jean Claudette',
      date: {
        year: 2019,
        month: 6,
        day: 23
      }
    }
  ];
  speechClone = this.speechList;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.selectedView = this.speechList[0];
  }

  handleSpeechFormData(data): void {
    const form = { id: this.speechList.length + 1, ...data };
    this.speechList.push(form);
  }

  handleSelectedLocation(selected: number): void {
    if (selected === SpeechEnum.View) {
      this.disableForm = true;
      this.hideSpeechList = false;
      this.selectedView = this.speechList[0];
    } else  {
      this.disableForm = false;
      this.hideSpeechList = true;
      this.selectedView = {};
    }
  }

  handleSelectedUser(user): void {
    this.selectedView = user;
  }

  handleSearch(keyword): void {
    if (keyword !== '')
      this.speechList = this.speechList.filter(f => f.subject.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
    else
      this.speechList = this.speechClone;

    if (!this.speechList.length)
      this.selectedView = {};
    else
      this.selectedView = this.speechList[0];
  }

  confirmDelete(user): void {
    const ref = this.modalService.open(ModalDialogComponent);
    ref.result.then(confirm => {
      this.speechList = this.speechList.filter(f => f.id !== user.id);
  
      if (this.speechList.length)
        this.selectedView = this.speechList[0];
      else
        this.selectedView = {};
    }, error => console.log('cancel', error))
  }

}
