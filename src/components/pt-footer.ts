import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';

@customElement('pt-footer')
class PtFooter extends LitElement {
  override render() {
    return html`
      <footer>
        <p>
          Built with TypeScript, Lit, and Vite
          <svg
            class="heart-icon"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </p>
      </footer>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      --text: #212529;
    }

    footer {
      padding: 2rem 0;
      padding-bottom: 13rem;
      border-top: 3px solid #e4e7e9;
      color: var(--text);
      font-family:
        system-ui,
        -apple-system,
        'Segoe UI',
        Roboto,
        sans-serif;
    }

    @media (min-width: 768px) {
      padding-bottom: 15rem;
    }

    p {
      color: var(--text);
      margin: 0;
      font-size: 1rem;
      gap: 0.35rem;
      flex-wrap: wrap;
    }

    .heart-icon {
      width: 1em;
      height: 1em;
      fill: var(--text);
      display: inline-block;
      vertical-align: middle;
    }
  `;
}

declare global {
  interface HTMLElementTagName {
    'pt-footer': PtFooter;
  }
}
