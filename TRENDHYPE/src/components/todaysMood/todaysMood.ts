export enum Attribute1 {
    "button1" = "button1",
    "answer"  = "answer",
    "findout" = "findout",
    "button2" = "button2",
    "image"   = "image",
}

class todaysMood extends HTMLElement {
    button1?: string;
    answer?: string;
    findout?: string;
    button2?: string;
    image?: string;

    static get observedAttributes() {
        return Object.keys(Attribute1);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute1, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
           
            `;
        }
    }
}

customElements.define('todays-mood', todaysMood);
export default todaysMood;
