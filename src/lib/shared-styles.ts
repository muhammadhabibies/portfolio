import {css} from 'lit';

export const focusStyles = css`
  *:focus-visible,
  :host(:focus-visible) {
    outline: 3px solid var(--global-focus-color, #ff5722) !important;
    outline-offset: 4px !important;
    border-radius: 1px;
  }
`;

export const buttonStyles = css`
  button {
    background-color: #141414;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
