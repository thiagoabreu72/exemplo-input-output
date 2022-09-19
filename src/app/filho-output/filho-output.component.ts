import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho-output',
  templateUrl: './filho-output.component.html',
  styleUrls: ['./filho-output.component.scss']
})
export class FilhoOutputComponent {
  @Output() novoItem = new EventEmitter<string>();

  adicionaItem(valor: string) {
    this.novoItem.emit(valor);
  }

}
