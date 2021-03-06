/// <reference path="../../typings/angular2/angular2.d.ts" />

import  "reflect-metadata";
import {Component, View, bootstrap} from "angular2/angular2";


// Annotation section
@Component({
  selector: "my-app"
})
@View({
  template: `<h1>Hello {{ name }}</h1><br/> This is my first Angular 2 App`
})
// Component controller
class MyAppComponent {
  name: string;

  constructor() {
    this.name = "All";
  }
}


bootstrap(MyAppComponent);
