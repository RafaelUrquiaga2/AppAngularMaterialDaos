import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  /* Como esto es una inyeccion de dependencias o, como esto va a ser inyectado desde
  otro lado. Vamos a poder inyectarlo desde aca para el marco general, para que todo
  se vea como una sola web vamos a utilizar la etiqueta @Input() */
  @Input() articles: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
