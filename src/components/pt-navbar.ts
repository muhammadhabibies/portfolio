import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';

import {focusStyles} from '@/lib/shared-styles';

interface IMenuItems {
  id: string;
  label: string;
}

const menuItems: Array<IMenuItems> = [
  {id: 'about', label: 'About'},
  {id: 'project', label: 'Projects'},
  {id: 'contact', label: 'Contact'},
];

const defaultActiveMenu = '#about';

@customElement('pt-navbar')
export class PtNavbar extends LitElement {
  static override properties = {
    isMenuOpen: {type: Boolean},
    activeSection: {type: String},
    _menuItems: {state: true},
  };

  isMenuOpen = false;
  activeSection = defaultActiveMenu;
  private _menuItems: Array<IMenuItems> = menuItems;
  private _observer: IntersectionObserver | null = null;

  constructor() {
    super();
    this.isMenuOpen = false;
    this.activeSection = window.location.hash || defaultActiveMenu;
  }

  override connectedCallback() {
    super.connectedCallback();
    this._initScrollObserver();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._observer) this._observer.disconnect();
  }

  private _handleToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private _handleNavLinkClick(hash: string) {
    this.activeSection = hash;
    this.isMenuOpen = false;
  }

  private _initScrollObserver() {
    const options = {
      root: null, // pake viewport browser
      rootMargin: '-20% 0px -60% 0px', // deteksi tengah/atas layar
      threshold: 0,
    };

    this._observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // isIntersecting: kalo elemen section masuk ke area viewport yang ditentukan
        if (entry.isIntersecting) this.activeSection = `#${entry.target.id}`;
      });
    }, options);

    this._menuItems.forEach((i) => {
      const element = document.getElementById(i.id);
      if (element && this._observer) this._observer.observe(element);
    });
  }

  override render() {
    return html`
      <nav>
        <div class="container">
          <a
            class="brand"
            href="#about"
            @click="${() => this._handleNavLinkClick('#about')}"
            rel="noopener noreferrer"
          >
            Muhammad Habibie Syihab
          </a>

          <button class="hamburger" @click="${this._handleToggleMenu}">
            ☰
          </button>

          <div class="nav-links ${this.isMenuOpen ? 'open' : ''}">
            ${this._menuItems.map(
              (i) => html`
                <a
                  class="nav-link ${this.activeSection === `#${i.id}`
                    ? 'active'
                    : ''}"
                  href="#${i.id}"
                  rel="noopener noreferrer"
                  @click="${() => this._handleNavLinkClick(`#${i.id}`)}"
                >
                  ${i.label}
                </a>
              `
            )}
          </div>
        </div>
      </nav>
    `;
  }

  static override styles = [
    focusStyles,
    css`
      :host {
        display: block;
        --text: #212529;
      }

      nav {
        position: fixed;
        top: 0;
        left: 0;
        background: #fff;
        width: 100%;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        z-index: 1030;
        font-family:
          system-ui,
          -apple-system,
          sans-serif;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 1rem;
        gap: 0 1rem;
      }
      .brand {
        color: var(--text);
        font-size: 1.25rem;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex: 1;
        min-width: 0;
        margin-right: 1rem;
      }

      .hamburger {
        display: block;
        background: transparent;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.55);
        font-size: 1.5rem;
        padding: 0.25rem 0.75rem;
        border-radius: 0.25rem;
        cursor: pointer;
      }
      .nav-links {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.35s ease-in-out;
      }

      .nav-links.open {
        max-height: 300px;
        opacity: 1;
        margin-top: 1rem;
      }
      .nav-link {
        color: rgba(0, 0, 0, 0.55);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.15s;
      }
      .nav-link:hover {
        color: rgba(0, 0, 0, 0.75);
      }
      .nav-link.active {
        color: var(--text) !important;
        font-weight: 500;
      }

      @media (min-width: 992px) {
        .container {
          flex-wrap: nowrap;
          max-width: 1100px;
        }

        .hamburger {
          display: none;
        }

        .nav-links {
          display: flex;
          flex-direction: row;
          width: auto;
          max-height: none;
          opacity: 1;
          overflow: visible;
          gap: 1.6rem;
        }

        .nav-links.open {
          margin-top: 0;
        }
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'pt-navbar': PtNavbar;
  }
}
