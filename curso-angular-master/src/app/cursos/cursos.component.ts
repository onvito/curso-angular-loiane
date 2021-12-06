import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
    beHappy: any;

    cursos: string[];
  constructor(private cursosService: CursosService) { 

    this.beHappy = "https://www.youtube.com/watch?v=S3IdLBelqmY";
    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
