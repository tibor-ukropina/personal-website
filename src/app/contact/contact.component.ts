import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  name: string = "";
  email: string = "";
  message: string = "";

  submitForm(){
    alert("Thank you for visiting my website! This feature is currently in development, so please send your request to my email ukropina@outlook.com")
  }
}