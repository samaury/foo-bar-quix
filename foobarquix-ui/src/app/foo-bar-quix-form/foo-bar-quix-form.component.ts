import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FooBarQuixService } from '../foo-bar-quix.service';

@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {
  @Output() submitNumberOutput = new EventEmitter<number>();
  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit(valueToSubmit){
    this.submitNumberOutput.emit(valueToSubmit)
  }
} 
