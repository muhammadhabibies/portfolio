import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';

import '@/lib/vanilla-rough-notation-group';
import '@/lib/vanilla-rough-notation';
import '@/components/pt-navbar';
import '@/components/pt-about';
import '@/components/pt-project';
import '@/components/pt-contact';
import '@/components/pt-footer';

/**
 * Main element.
 */
@customElement('pt-main')
export class PtMain extends LitElement {
  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  override render() {
    return html`
      <main>
        <pt-navbar></pt-navbar>

        <pt-about id="about"></pt-about>

        <pt-project id="project"></pt-project>

        <pt-contact id="contact"></pt-contact>

        <pt-footer></pt-footer>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pt-main': PtMain;
  }
}
