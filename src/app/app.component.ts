import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ErnestoApp';

  Menu=[{
    'titulo':'¿Quien soy?',
    'icon':'',
    'url':''
  },
  {
    'titulo':'Formación académica',
    'icon':'',
    'url':''
  },
  {
    'titulo':'Experiencia laboral',
    'icon':'',
    'url':''
  }
  ,
  {
    'titulo':'Habilidades',
    'icon':'',
    'url':''
  }];
}
