import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input()
  title: string = '';

  @Output()
  emitterForm: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  labelButton: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  propagate() {
    this.emitterForm.emit(null);
  }
}
