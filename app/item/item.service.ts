import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
  private items = new Array<Item>(
    new Item(1, "Ford Mortgage", new Date(2013, 11, 2), 5 * 12),
    new Item(2, "Saint Peter", new Date(2014, 2, 2), 5 * 12),
    new Item(3, "Henaville Subdivision", new Date(2010, 1, 17), 25 * 12),
    new Item(4, "Bogo Property", new Date(2016, 7, 28), 2.5 * 12),
    new Item(5, "Sergeville Property", new Date(2016, 1, 24), 5 * 12),
    new Item(6, "Avida Property Equity", new Date(2016, 3, 17), 3 * 12),
  );

  getItems(): Item[] {
    return this.items;
  }

  getItem(id: number): Item {
    return this.items.filter(item => item.id === id)[0];
  }
}
