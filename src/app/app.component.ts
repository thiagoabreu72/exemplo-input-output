import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'input-output';
  currentItem = 'Televisão';

  buscaValorInput(valor: any) {
    //this.currentItem = valor;
    console.log(valor);
  }

  itens: string[] = [];

  addItem(novoItem: string) {
    this.itens.push(novoItem);
  }

}
