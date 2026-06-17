import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';

import type {IProject} from '@/lib/data';

import {projects} from '@/lib/data';

@customElement('pt-project')
class PtProject extends LitElement {
  static override properties = {
    projects: {
      type: Array,
    },
  };

  projects: Array<IProject> = projects;

  override render() {
    return html`
      <section>
        <h2>Projects</h2>

        <p>Here are some projects that I have worked on:</p>

        <div class="card-wrapper">
          ${this.projects.map(
            (i) => html`
              <a
                class="card"
                href="${i.link}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <!-- <img src="${i.image}" alt="${i.alt}" /> -->

                <h4 class="card-title">${i.title}</h4>

                <div class="card-body">
                  <p class="short">${i.description}</p>

                  <p class="stack">${i.stack.join(', ')}</p>
                </div>
              </a>
            `
          )}
        </div>
      </section>
    `;
  }

  static override styles = css`
    :host {
      display: block;

      --text: #4f565c;
      --text-h: #212529;
      --bg: #fafafae6;

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.2);

      --card-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
      --card-shadow-hover: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }

    section {
      padding-top: 5rem;
      max-width: 1140px;
      margin: 0 auto;
      font-family:
        system-ui,
        -apple-system,
        'Segoe UI',
        Roboto,
        sans-serif;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-h);
    }

    .card-wrapper {
      margin-top: 2.5rem;
      display: grid;
      justify-items: center;
      gap: 1.5rem;
      padding-bottom: 1rem;
    }
    .card {
      text-decoration: none;
      background-color: var(--bg);
      color: var(--text);
      border-radius: 0.5rem;
      box-shadow: var(--card-shadow);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1 1 300px;
      max-width: 350px;
      cursor: pointer;
      border: 2px solid var(--text);
      transition:
        transform 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: var(--card-shadow-hover);
    }
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-title,
    .card-body {
      padding: 1.25rem;
    }
    .card-title {
      margin: 0;
      padding-bottom: 0;
    }
    .card-body {
      padding-top: 0;
      padding-bottom: 0;
      font-size: 1rem;
      line-height: 1.5;
    }

    .card-title {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.5;
      max-height: 1.5em;
      transition: max-height 0.3s ease-in-out;
    }
    .card-title:hover {
      max-height: 30em;
      height: auto;
      display: block;
      overflow: visible;
      -webkit-line-clamp: unset;
    }
    .short {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.5;
      max-height: 3em;
      transition: max-height 0.3s ease-in-out;
    }
    .short:hover {
      max-height: 30em;
      height: auto;
      display: block;
      overflow: visible;
      -webkit-line-clamp: unset;
    }
    .stack {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.5;
      max-height: 1.5em;
      transition: max-height 0.3s ease-in-out;
    }
    .stack:hover {
      max-height: 30em;
      height: auto;
      display: block;
      overflow: visible;
      -webkit-line-clamp: unset;
    }

    @media (min-width: 640px) {
      .card-wrapper {
        grid-template-columns: repeat(2, 1fr);
        justify-items: stretch;
      }
    }

    @media (min-width: 768px) {
      .card-wrapper {
        grid-template-columns: repeat(3, 1fr);
        justify-items: stretch;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'pt-project': PtProject;
  }
}
