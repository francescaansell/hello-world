import { html, css, LitElement} from 'lit';
/**
 * @todo
 * Add an input field that updates as the value changes
 * Add a button that subtracts from the counter but won't allow going below 0
 * Reflect the the counter property and use this value to write CSS that changes the background color of the button based on the counter being 10
 * Bonus: Disable the subtract button when hitting 0; enable it when hitting anything other than 0
 */
export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
        background-color: white; 
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  __decrease() {
    if (this.counter > 0){
      this.counter -= 1;
    }
  }

  render() { 
    return html`
      <h2>${this.title} Number ${this.counter}</h2>
      <button @click=${this.__increment}>increment</button>
      <button id="deacreaseBtn" @click=${this.__decrease}>decrease</button>
    `;
  }
}
