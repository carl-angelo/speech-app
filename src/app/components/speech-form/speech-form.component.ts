import { Component, OnChanges, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-speech-form',
  templateUrl: './speech-form.component.html',
  styleUrls: ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnChanges {

  @Input() disableForm: boolean;
  @Input() selectedView: any;
  @Input() hideSpeechList: boolean;
  @Output() speechFormData: EventEmitter<any> = new EventEmitter();
  @Output() deleteRecord: EventEmitter<any> = new EventEmitter();
  speechForm: any;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.speechForm = this.formBuilder.group({
      detail: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disableForm) {
      if (this.disableForm === true) {
        this.speechForm.disable();
      } else {
        this.speechForm.enable();
      }
    }
    if (changes.selectedView) {
      this.speechForm.patchValue({
        detail: this.selectedView.detail,
        subject: this.selectedView.subject,
        author: this.selectedView.author,
        date: this.selectedView.date
      });
    }
  }

  submitForm(): void {
    if (this.speechForm.valid) {
      this.speechFormData.emit(this.speechForm.value);
      this.speechForm.reset();
    } else {
      this.errorMessage = 'Invalid data!';
    }
  }

  removeData(): void {
    this.deleteRecord.emit(this.selectedView);
  }

}
