/**
 * Copyright 2021, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { oneOf } from 'prop-types';
import { tracked } from '@glimmer/tracking';
import { ALIGNMENTS } from './denali-menu-enums';
import { action } from '@ember/object';

export default class DenaliMenuComponent extends Component {
  @tracked isActive = false;

  @arg(oneOf(ALIGNMENTS)) alignContent;

  get alignContentClass() {
    return this.alignContent ? `is-${this.alignContent}` : undefined;
  }

  get isActiveClass() {
    return this.isActive ? 'is-active' : undefined;
  }

  @action
  toggleIsActive() {
    this.isActive = !this.isActive;
  }
}
