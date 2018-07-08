import { Injectable } from '@angular/core';
import {Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  accordChange = new Subject();

  useAccChange(data){
    this.accordChange.next(data);
  }
}
