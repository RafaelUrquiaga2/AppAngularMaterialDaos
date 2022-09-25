import { Component, OnInit } from '@angular/core';
import { LogoApiService } from './services/logo-api.service';
import { NewsApiService } from './services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppAngularMaterialDaos';
  /*Este articles es el mismo que está en el archivo
  articles.component.ts xq fue inyectado hacía aca*/
  articles: Array<any> = [];
  sources: Array<any> = [];

  constructor(private newsApi: NewsApiService, private logoApi: LogoApiService) {
    
  }

  /*Ya que implementas el OnInit, entonces lo implementas para que
  no te salga el error de que no lo estás implementando*/
  ngOnInit() {
    //subscribe es utilizado como... ¿Que quiero que pase luego de esta funcion?
    this.newsApi.initArticles().subscribe ((data: any) =>
      this.articles = (data['articles']));
    this.newsApi.getSources().subscribe((data:any)=> {
      this.sources = data['sources'];
      this.sources.map(source => source.urlToLogo = this.logoApi.getUrlToLogo(source));
    });
  }

  searchArticlesForSource(source: any) {
    console.log(`selected source is: ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id).subscribe((data:any) => {
      this.articles = data['articles'];
      this.articles.map(article => article.source.urlToLogo = source.urlToLogo);
    });
  }
}
