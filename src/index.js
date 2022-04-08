// import _ from 'lodash';
// import printMe from './print.js';
// import './style.css';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

function component() {
  const element = document.createElement('simple-greeting');
  element.setAttribute('name', 'world')
//   const btn = document.createElement('button');

//   btn.innerHTML = 'Click me';
//   btn.onclick = printMe;

//   element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());

import {html, css, LitElement} from 'lit';

export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);


document.body.appendChild(component());