import { Injectable } from '@angular/core';
import { RbListItem } from './rb-list-item';
import { MockRbListItems } from './mock-rb-list-items';

@Injectable()
export class RbListService {
  public items: RbListItem[];
  constructor() {
    this.items = MockRbListItems;
  }
}
