import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() min: string = "";
  @Input() max: string = "";
  @Input() step: string = "";

  @Input() valor!: any | null;
  @Output() valorChange = new EventEmitter<any | null>();

  private _valorInterno!: any | null;

  get valorInterno(): any {
    return this._valorInterno;
  }

  set valorInterno(value: any) {
    this._valorInterno = value;
    this.valor = this.valorInterno;
    this.valorChange.emit(this._valorInterno)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
