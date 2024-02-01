import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  public characters: Character[] = [
    {name: 'Krillin', power: 500},
    {name: 'Goku', power: 100000},
    {name: 'Vegeta', power: 50000},
    {name: 'Trunks', power: 1000},
  ];

  onNewCharacter( character: Character ): void {
    this.characters.push(character);
  }

  onDeleteCharacter( index: number ): void {
    this.characters.splice(index, 1);
  }

}
