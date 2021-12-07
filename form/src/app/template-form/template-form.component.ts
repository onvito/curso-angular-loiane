import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'Marcelo Victor',
    email: 'lvictor462@gmail.com'
  }

  onSubmit(f: any) {
    console.log(f)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
