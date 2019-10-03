import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechHeaderComponent } from './speech-header.component';

describe('SpeechHeaderComponent', () => {
  let component: SpeechHeaderComponent;
  let fixture: ComponentFixture<SpeechHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
