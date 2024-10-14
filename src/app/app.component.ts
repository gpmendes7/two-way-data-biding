import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minhaProp = true;

  pessoa: any = {
    status: 1,
    name: undefined,
  }

  toggleProp() {
    this.minhaProp = !this.minhaProp;
  }

  isTruthy() {
    // return {};
    // return [];
    // return true;
    // return 1;
    // return "teste";
    // return 'teste';
    // return "0";
    // return "false";
    // return this.pessoa.status;
  }

  isFalsy() {
    // return false;
    // return 0;
    // return "";
    // return '';
    // return null;
    // return undefined;
    // return -0;
    // return NaN;
    // return this.pessoa.name;
    return this.pessoa.endereco?.rua;
  }
}
