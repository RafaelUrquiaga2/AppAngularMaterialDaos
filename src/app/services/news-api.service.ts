import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = 'fecf4feeffa64e4da682e7d268612ce5';
  constructor(private http: HttpClient) { }

  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }

  getSources() {
    return this.http.get(`https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: String) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }
}

//https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=fecf4feeffa64e4da682e7d268612ce5

//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fecf4feeffa64e4da682e7d268612ce5