import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.experiencia);

  }

  experiencia=[
    {
    'id':"html5",
    'nombre':"HTML 5",
    'imagen':"../assets/resources/html.png",
    'experiencia':"Se ha desarrollado multiples páginas web para el sector privado y algunas otras que siguen en línea."
  },
  {
    'id':"js",
    'nombre':"Javascript",
    'imagen':"../assets/resources/javascript.png",
    'experiencia':"Desarrollo de funcionalidades enfocadas a eventos e interección con php e inserción de cookies."
  },{
    'id':"php",
    'nombre':"PHP",
    'imagen':"../assets/resources/php.png",
    'experiencia':"Interacción con web services de tipo Soap y envío de información recopilada en foormularios. Envío de correos de parte de una página web."
  },{
    'id':"css",
    'nombre':"CSS3",
    'imagen':"../assets/resources/css.png",
    'experiencia':"Determinación y animaciones de estilos y utilización de mediaquerys para hacer los sitios responsivos"
  },{
    'id':"bootstrap",
    'nombre':"Bootstrap",
    'imagen':"../assets/resources/bootstrap.png",
    'experiencia':"Implementación de hojas de estilo y determinación de diseños responsivos por medio de clases."
  },{
    'id':"angular",
    'nombre':"Angular",
    'imagen':"../assets/resources/angular.png",
    'experiencia':"Programación de páginas de tipo SPA que permiten hacer interfaces funcionales."
  },{
    'id':"git",
    'nombre':"Git y Github",
    'imagen':"../assets/resources/github.png",
    'experiencia':"Control de versiones y repositorio en línea de los proyectos."
  },{
    'id':"ingles",
    'nombre':"Inglés",
    'imagen':"../assets/resources/ingles.jpg",
    'experiencia':"Certificación B2 por medio de Centro de Lenguas Extranjeras."
  }];

}
