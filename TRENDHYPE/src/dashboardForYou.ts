import * as components from './components/indexPadre';
import NavBar, { Attribute } from './components/NavBar/navBar';
import MoodBanner, { Attribute1} from './components/moodBanner/moodBanner';

class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <nav-bar></nav-bar>
                <<mood-banner></mood-banner>
            `;

            const navBar = this.shadowRoot.querySelector('nav-bar');
            if (navBar) {
                navBar.setAttribute(Attribute.image, 'https://github.com/IsabellaCabrera/assets-img/blob/b3b693bcae3ee222d805cc6b1dca3d9058c8d388/TrendHype.png');  
                navBar.setAttribute(Attribute.foryou, 'For You');
                navBar.setAttribute(Attribute.following, 'Following');
            }   
        
            const moodBanner = this.shadowRoot.querySelector('mood-banner');
            if (moodBanner) {
                moodBanner.setAttribute(Attribute1.button1, 'Daily tracker');
                moodBanner.setAttribute(Attribute1.answer, 'Answer daily questions');
                moodBanner.setAttribute(Attribute1.findout, 'Find out today`s mood');
                moodBanner.setAttribute(Attribute1.button2, 'Answer now');
                moodBanner.setAttribute(Attribute1.image, 'https://github.com/IsabellaCabrera/assets-img/blob/main/Group%2018.png');
            }

            
    }
} 
}

customElements.define('app-container', AppContainer);
export default AppContainer;
