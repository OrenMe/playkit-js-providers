//@flow

import MediaEntry from './media-entry';

export default class EntryList {
  /**
   * @member - entry list items
   * @type {Array<MediaEntry>}
   */
  items: Array<MediaEntry>;

  constructor() {
    this.items = [];
  }
}
