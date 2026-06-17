import {annotate} from 'rough-notation';

// ekstrak type karena package-nya ga nge-export type-nya secara eksplisit
type RoughAnnotation = ReturnType<typeof annotate>;
type RoughAnnotationConfig = NonNullable<Parameters<typeof annotate>[1]>;

// delkarasi variabel global custom ke object Window biar ts ga error aja
declare global {
  interface Window {
    __rno_kf_s: Node;
  }
}

export default class VanillaRoughNotation extends HTMLElement {
  public type: RoughAnnotationConfig['type'];
  public animation: boolean;
  public animationDuration: number;
  public color: string;
  public strokeWidth: number;
  public padding: number | [number, number] | [number, number, number, number];
  public showOnLoad: boolean;
  public order: number;
  public brackets: string | string[];
  public multiline: boolean;
  public iterations: number;

  private annotation: RoughAnnotation | null;

  constructor() {
    super();
    this.type = 'underline';
    this.animation = true;
    this.animationDuration = 800;
    this.color = 'currentColor';
    this.strokeWidth = 1;
    this.padding = 5;
    this.showOnLoad = false;
    this.order = 0;
    this.brackets = 'right';
    this.multiline = true;
    this.iterations = 2;

    this.annotation = null;
  }

  private setAttributes(): void {
    this.type =
      (this.getAttribute('type') as RoughAnnotationConfig['type']) || this.type;
    this.animation = this.hasAttribute('animation')
      ? this.getAttribute('animation') === 'true'
      : this.animation;

    const durationAttr = this.getAttribute('animationDuration');
    this.animationDuration = durationAttr
      ? Number(durationAttr)
      : this.animationDuration;

    this.color = this.getAttribute('color') || this.color;

    const strokeAttr = this.getAttribute('strokeWidth');
    this.strokeWidth = strokeAttr ? Number(strokeAttr) : this.strokeWidth;

    const paddingAttr = this.getAttribute('padding');
    if (paddingAttr) {
      try {
        this.padding = JSON.parse(paddingAttr);
      } catch {
        this.padding = Number(paddingAttr) || this.padding;
      }
    }

    this.showOnLoad = this.hasAttribute('showOnLoad');

    const orderAttr = this.getAttribute('order');
    this.order = orderAttr ? Number(orderAttr) : this.order;

    this.multiline = this.hasAttribute('multiline')
      ? this.getAttribute('multiline') === 'true'
      : this.multiline;
    this.brackets = this.getBrackets();

    const iterationsAttr = this.getAttribute('iterations');
    this.iterations = iterationsAttr ? Number(iterationsAttr) : this.iterations;
  }

  /**
   * Passing arrays into web components as attributes is a bit
   * yucky but we'll have to work with that so we have a smooth experience.
   *
   * JSON.parse expects the elements to be quoted with double quotes
   */
  private getBrackets(): string | string[] {
    let brackets: string | string[] =
      this.getAttribute('brackets') || this.brackets;

    if (typeof brackets === 'string' && brackets.includes('[')) {
      try {
        brackets = JSON.parse(brackets.replace(/'/g, '"'));
      } catch (e) {
        console.error('Failed to parse brackets attribute:', e);
      }
    }
    return brackets;
  }

  connectedCallback(): void {
    this.setAttributes();

    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
    }

    // pastiin shadowRoot ga null bisi error di ts
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = '<slot></slot>';

    const slot = this.shadowRoot.querySelector('slot');
    if (!slot) return;

    const assignedNodes = slot
      .assignedNodes()
      .filter((node): node is HTMLElement => node instanceof HTMLElement);

    assignedNodes.forEach((an) => {
      this.annotation = annotate(an, {
        type: this.type,
        animate: this.animation,
        animationDuration: this.animationDuration,
        color: this.color,
        strokeWidth: this.strokeWidth,
        padding: this.padding as any,
        brackets: this.brackets as any,
        multiline: this.multiline,
        iterations: this.iterations,
      });
    });

    // clone the style element from the windows styles to shadow dom.
    if (window.__rno_kf_s) {
      this.shadowRoot.append(window.__rno_kf_s.cloneNode(true));
    }

    window.requestAnimationFrame(() => {
      if (this.showOnLoad && this.annotation) {
        this.annotation.show();
      }
    });
  }

  public isShowing(): boolean {
    return this.annotation != null && this.annotation.isShowing();
  }

  public show(): void {
    if (this.annotation) {
      this.annotation.show();
    }
  }

  public hide(): void {
    if (this.annotation) {
      this.annotation.hide();
    }
  }

  override remove(): void {
    if (this.annotation) {
      this.annotation.remove();
    }
  }
}

if (!customElements.get('rough-notation')) {
  customElements.define('rough-notation', VanillaRoughNotation);
}
