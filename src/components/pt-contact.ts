import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

import {focusStyles} from '@/lib/shared-styles';

@customElement('pt-contact')
class PtContact extends LitElement {
  override render() {
    return html`
      <section>
        <div class="container">
          <h2>Get in touch</h2>

          <p>
            Do you have a job opportunity or idea you'd like to discuss? Feel
            free to reach me at
            <a
              href="mailto=muhammadhabibiesyihab@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >muhammadhabibiesyihab@gmail.com</a
            >. You can also find me on
            <a
              href="https://www.instagram.com/muhammad_habibies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram</a
            >,
            <a
              href="https://github.com/muhammadhabibies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            and
            <a
              href="https://www.linkedin.com/in/muhammad-habibie-syihab-77233a1a6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin</a
            >.
          </p>
        </div>
      </section>
    `;
  }

  static override styles = [
    focusStyles,
    css`
      :host {
        display: block;

        --text: #212529;
        --text-h: #4d4d4d;
      }

      section {
        display: flex;
        padding: 2rem 0 1rem;
        align-items: center;
        width: 100%;
        max-width: 1140px;
        margin: 0 auto;
        color: var(--text);
        font-family:
          system-ui,
          -apple-system,
          'Segoe UI',
          Roboto,
          sans-serif;
      }

      .container {
        margin-top: 5rem;
      }

      h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 0;
        color: var(--text);
      }

      p {
        line-height: 1.5;
      }

      a {
        color: var(--text-h);
        font-weight: 700;
        text-decoration: none;
        transition: opacity 0.15s ease-in-out;
      }
      a:hover {
        text-decoration: underline;
        opacity: 0.9;
      }

      @media (min-width: 768px) {
        section {
          padding: 3rem 0;
          margin-bottom: 2.5rem;
        }
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagName {
    'pt-contact': PtContact;
  }
}
