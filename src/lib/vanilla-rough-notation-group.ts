import {annotationGroup} from 'rough-notation';

export type RoughAnnotation = Parameters<typeof annotationGroup>[0][number];

interface RoughNotationElement extends HTMLElement {
  order: number;
  annotation: RoughAnnotation | null;
}

export default class VanillaRoughNotationGroup extends HTMLElement {
  public annotationElements: RoughNotationElement[];
  public showOnLoad: boolean;
  private _groupInstance: ReturnType<typeof annotationGroup> | null = null;

  constructor() {
    super();
    this.annotationElements = [];
    this.showOnLoad = false;
  }

  private setProperties(): void {
    this.showOnLoad = this.hasAttribute('showOnLoad');
  }

  connectedCallback(): void {
    this.setProperties();

    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
    }

    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = '<slot></slot>';

    const slot = this.shadowRoot.querySelector('slot');
    if (!slot) return;

    // pake event 'slotchange' buat ngedeteksi secara akurat
    // kapan child element selesai dimasukkan ke dalam slot oleh browser.
    slot.addEventListener('slotchange', () => {
      this.annotationElements = slot
        .assignedNodes()
        .filter(
          (node): node is RoughNotationElement =>
            node.nodeName === 'ROUGH-NOTATION'
        );

      if (this.showOnLoad) {
        // kasih jeda async biar child element sempet ngejalanin
        // connectedCallback() dan bikin objek .annotation
        setTimeout(() => {
          this.show();
        }, 0);
      }
    });
  }

  public show(): void {
    if (this.annotationElements.some((el) => el.order !== undefined)) {
      this.annotationElements.sort((a, b) => {
        return (a.order || 0) - (b.order || 0);
      });
    }

    const annotations = this.annotationElements
      .map((ae) => ae.annotation)
      .filter(
        (anno): anno is RoughAnnotation => anno !== null && anno !== undefined
      );

    if (annotations.length > 0) {
      this._groupInstance = annotationGroup(annotations);
      this._groupInstance.show();
    }
  }
}

if (!customElements.get('rough-notation-group')) {
  customElements.define('rough-notation-group', VanillaRoughNotationGroup);
}
