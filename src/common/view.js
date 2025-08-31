export class AbstractView {

    constructor() {
        this.app = document.getElementById('root');
    }

    setTitle(title) {
        document.setTitle = title;
    }

    render() {
        return;
    }

    destroy() {
        return;
    }
 
}