class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Chan Villegas Miguel Angel
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
