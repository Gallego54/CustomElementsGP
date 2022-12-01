class CloseButton extends HTMLButtonElement {
    constructor(){
        super(); 
        this.addEventListener('click', this.#closeHandle)
    }

    get idRef () {
        return this.getAttribute('idRef') || '';
    }

    #closeHandle = function(){
        const closeRef = this.idRef!==''
        ? document.getElementById(this.idRef)
        : null;

        if (closeRef !== null) {
            closeRef.parentElement.removeChild(closeRef)
        }
    }

    connectedCallback() {
        console.log('Custom element added to page.');

    }
      
    disconnectedCallback() {
        console.log('Custom Element removed from page.');
    }
    
    adoptedCallback() {
        console.log('Custom Element moved to new page.');
    }

    static get observedAttributes() { return ['idRef']; }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom element attributes changed.');
    }
}

window.customElements.define('close-button', CloseButton, {extends: 'button'})