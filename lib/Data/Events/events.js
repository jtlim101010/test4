'use strict';
/**
 * @module
 */

import EventRegistrants from './eventRegistrants';

/** Events Class */
export default class Events {
  /**
   * Parent Object
   * @member {Eloqua}
   */
  #parent;

  /**
   * Constructor
   * @param {Eloqua} options Parent object
   */
  constructor(options) {
    this.#parent = options;
    this.registrants = new EventRegistrants(this.#parent);
  }

}

