import {Injectable} from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words: IWord[] = [
    {word: 'japan', mean: 'Nhật Bản'},
    {word: 'watashi', mean: 'Tôi'},
    {word: 'cat', mean: 'mèo'},

  ]

  constructor() {
  }

  getAll() {
    return this.words
  }

  findByWord(word: string) {
    return this.words.find(item => item.word === word);

  }

}
