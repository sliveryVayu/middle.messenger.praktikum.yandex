import Handlebars from 'handlebars';
import template from './template.hbs?raw';

import './style.css';

export default (props) => {
  return Handlebars.compile(template)(props)
}