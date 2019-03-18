import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTweetComponent } from './modal-tweet.component';

describe('ModalTweetComponent', () => {
  let component: ModalTweetComponent;
  let fixture: ComponentFixture<ModalTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
