import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';

import type {RoughAnnotation} from '@/lib/vanilla-rough-notation-group';
import type {PropertyValues} from 'lit';

@customElement('pt-about')
class PtAbout extends LitElement {
  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    window.setTimeout(() => {
      (document.querySelector('#rn-1') as unknown as RoughAnnotation).show();
      window.setTimeout(() => {
        (document.querySelector('#rn-2') as unknown as RoughAnnotation).show();
        window.setTimeout(() => {
          (
            document.querySelector('#rn-3') as unknown as RoughAnnotation
          ).show();
          window.setTimeout(() => {
            (
              document.querySelector('#rn-4') as unknown as RoughAnnotation
            ).show();
          }, 2_000);
        }, 1_000);
      }, 1_000);
    }, 3_000);
  }

  override render() {
    return html`
      <section>
        <div class="content">
          <h1>
            Hello! I'm Habibie, a
            <rough-notation
              multiline="true"
              id="rn-1"
              color="#e6e6e6e6"
              type="highlight"
              iterations="2"
              strokeWidth="3"
              order="1"
            >
              <span>developer</span>
            </rough-notation>
            based in Bandung, Indonesia.
          </h1>

          <p>
            I focus on building
            <rough-notation
              multiline="true"
              id="rn-2"
              color="#e6e6e6e6"
              type="highlight"
              iterations="2"
              strokeWidth="3"
              order="1"
            >
              <span>structured, efficient,</span>
            </rough-notation>
            and
            <rough-notation
              multiline="true"
              id="rn-3"
              color="#e6e6e6e6"
              type="highlight"
              iterations="2"
              strokeWidth="3"
              order="1"
            >
              <span>scalable</span>
            </rough-notation>
            applications. Passionate about continuous learning and delivering
            clean code to solve real-world problems.
          </p>

          <p>
            I'm currently looking for a new role as a developer.
            <rough-notation
              id="rn-4"
              multiline="true"
              type="circle"
              color="orange"
              iterations="2"
              strokeWidth="3"
              order="2"
            >
              <a class="hire" href="#contact" rel="noopener noreferrer"
                >Hire me?</a
              >
            </rough-notation>
          </p>

          <div class="button-wrapper">
            <a
              href="https://www.linkedin.com/in/muhammad-habibie-syihab-77233a1a6"
              target="_blank"
              rel="noopener noreferrer"
              class="linkedin"
              >View Linkedin</a
            >
            <a
              href="https://github.com/muhammadhabibies"
              target="_blank"
              rel="noopener noreferrer"
              class="github"
              >View Github</a
            >
          </div>
        </div>

        <img src="img/pp.png" alt="Muhammad Habibie Syihab" class="image" />
      </section>

      <style>
        section {
          margin: 0 auto;
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
          align-items: center;
          padding: 6rem 0 0;
          text-align: center;
          max-width: 1140px;
          font-family:
            system-ui,
            -apple-system,
            'Segoe UI',
            Roboto,
            sans-serif;
        }

        h1 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #212529;
        }
        .hire {
          text-decoration: none;
          color: inherit;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          line-height: 1.6;
          color: #4d4d4d;
        }

        .button-wrapper {
          margin-top: 1rem;
          font-size: 1rem;
          display: flex;
          gap: 1rem;
        }
        .button-wrapper a {
          font-size: inherit;
          font-family: inherit;
          cursor: pointer;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          border: 2px solid transparent;
          cursor: pointer;
        }
        button:focus-visible,
        a:focus-visible {
          outline: 3px solid #ff5722;
          outline-offset: 4px;
        }
        .button-wrapper .linkedin:hover,
        .button-wrapper .github:hover {
          opacity: 0.9;
          transition: opacity 0.3s;
        }
        .button-wrapper .linkedin {
          background: #141414;
          border-color: transparent;
          color: #e6e6e6;
        }
        .button-wrapper .linkedin:hover {
          border-color: #141414;
        }
        .button-wrapper .github {
          background: #fff;
          color: #4d4d4d;
          border-color: #a5a5a5;
        }

        .image {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
          background-color: #fff;
          border: 1px solid #dee2e6;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        }

        @media (min-width: 768px) {
          section {
            flex-direction: row;
            align-items: start;
            gap: 2rem;
            padding: 6rem 0 4rem;
          }

          h1 {
            font-size: 2.3rem;
          }

          .content {
            font-size: 1.2rem;
            text-align: start;
            align-items: start;
          }
          .button-wrapper {
            font-size: 1.2rem;
          }
          .button-wrapper a {
            padding: 0.5rem 2rem;
          }

          .image {
            width: 350px;
            height: 400px;
            border-radius: 5%;
          }
        }
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pt-about': PtAbout;
  }
}
