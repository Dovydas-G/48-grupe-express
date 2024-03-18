import { PageTemplate } from "../lib/PageTemplate.js";

class PageCalc extends PageTemplate {
    constructor(time) {
        super(time);
        this.pageTitle = 'Calc';
        this.page = 'calc';
        
    }

    scripts() {
        return `<script src="/js/calc.js" type="module" defer></script>`;
    }

    main() {
        return `<main>
                        <section class="container">
                            <h1 class="display-5 fw-bold">Calc page</h1>
                        </section>
                        <section class="container">
                                <form class="calc-form">
                                    <div class="form-row">
                                        <input id="first_number" type="text" value="0" required>
                                        <span>+</span>
                                        <input id="second_number" type="text" value="0" required>
                                        <span>=</span>
                                        <span id="result"></span>
                                    </div>
                                    <div class="form-row">
                                        <button type="submit">calc</button>
                                    </div>
                                </form>
                        </section>
        
                </main>`;
    }
}

export { PageCalc };