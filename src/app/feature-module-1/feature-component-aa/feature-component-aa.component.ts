import { Component, OnInit } from '@angular/core';
import{Person} from '../../models/person'
import { kMaxLength } from 'buffer';

@Component({
  selector: 'app-feature-component-aa',
  templateUrl: './feature-component-aa.component.html',
  styleUrls: ['./feature-component-aa.component.css']
})
export class FeatureComponentAaComponent implements OnInit {

  personInfo : Person = new Person();

  constructor() { }

  ngOnInit(): void {
    this.setDefaultPerson();
    
  }

  setDefaultPerson(){
    this.personInfo = {name: 'Matilde', surname:'Filipello', gender:'female'};
    console.log(this.personInfo)
  }


}


