import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export class Bigyapan extends LitElement {
    static get properties() {
        return {
            link: { type: String },
            image: { type: String }
        }
    }

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.link = '';
        this.image = '';
    }

    render() {
        return html`<div class="grid place-items-center">
            <a href="${this.link}"><img src="${this.image}"> </a>
        </div>`;
    }
}

customElements.define('ronb-bigyapan', Bigyapan);

export class RONBCategoryChip extends LitElement {
    static get properties() {
        return {
            title: { type: String },
        }
    }

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.title = '';
    }
    render() {
        return html`<span class="hidden md:inline-block mb-3 bg-gradient-to-tr from-red-500 to-yellow-500 text-xs text-white px-2 py-1 rounded-md">${this.title}</span>`
    }
}

customElements.define('ronb-category', RONBCategoryChip);


export class RONBPostTitle extends LitElement {
    static get properties() {
        return {
            title: { type: String },
        }
    }

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.title = '';
    }

    render() {
        return html`<h2 class="font-mukta font-bold text-lg sm:text-xl md:text-3xl leading-5 md:leading-tight text-gray-700 mb-2 transition duration-200 ">
                    ${this.title}
                </h2>`
    }
}
customElements.define('ronb-post-title', RONBPostTitle);

export class ButtonScrollTop extends LitElement {
    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`<button class="w-10 h-10 bg-black text-white fixed bottom-4 right-4 rounded inline-flex items-center justify-center group" 
        x-data="{showBTT: false}" 
        x-init="window.addEventListener('scroll', () => { console.log('sc'); window.pageYOffset > 200 ? (showBTT = true): (showBTT = false) })" 
        x-show="showBTT"
        @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
        x-transition:enter="transition duration-200 transform ease-out"
        x-transition:enter-start="scale-75"
        x-transition:leave="transition duration-100 transform ease-in"
        x-transition:leave-end="opacity-0 scale-90"
         aria-label="Scroll to top">
        <svg class="w-6 h-6 animate group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
    </button>`
    }
} 
customElements.define('btn-top', ButtonScrollTop);