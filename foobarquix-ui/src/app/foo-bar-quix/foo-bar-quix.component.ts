import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooBarQuixService } from '../foo-bar-quix.service';

@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {

  submitedNumbers : NumberConverted[]  = [{numberToConvert:1, result:'1'},{numberToConvert:3, result:'Test'}];

  constructor(private fooBarQuixService: FooBarQuixService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  convertNumber(inputNumber: number): void {
    const obs= this.fooBarQuixService.convertNumber(inputNumber);
    obs.subscribe(
      res => {
        let nbConverted : NumberConverted = {numberToConvert:inputNumber,result:res['result']};
        this.submitedNumbers.push(nbConverted)
        console.debug(nbConverted);
        alert(nbConverted.result)
      }
    )
  }

}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}
