/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface NovaBadge {
    /**
    * The score
    */
    'score': string;
  }
  interface NovaBadgeAttributes extends StencilHTMLAttributes {
    /**
    * The score
    */
    'score'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'NovaBadge': Components.NovaBadge;
  }

  interface StencilIntrinsicElements {
    'nova-badge': Components.NovaBadgeAttributes;
  }


  interface HTMLNovaBadgeElement extends Components.NovaBadge, HTMLStencilElement {}
  var HTMLNovaBadgeElement: {
    prototype: HTMLNovaBadgeElement;
    new (): HTMLNovaBadgeElement;
  };

  interface HTMLElementTagNameMap {
    'nova-badge': HTMLNovaBadgeElement
  }

  interface ElementTagNameMap {
    'nova-badge': HTMLNovaBadgeElement;
  }


}
