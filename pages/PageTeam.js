import { teamData } from "../data/servicesData.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class PageTeam extends PageTemplate {
    constructor(params) {
        super();
        this.pageTitle = 'Service';
        this.page = 'services';
        this.params = params;
    }

    main() {


        let listHTML = '';

        for (const team of teamData) {
            listHTML += `
            <div class="col-lg-4">
                <img class="card-img-top" style="height: 450px; object-fit: cover;"  src="${team.src}" alt="Service image">
                <h2 class="fw-normal">${team.title}</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <p><a class="btn btn-secondary" href="${team.href}">View details »</a></p>
            </div><!-- /.col-lg-4 -->`
        }

      return    `
            <div class="container marketing">
                <div class="row">
                        ${listHTML}
                </div>
            </div>`
    }
}

export { PageTeam };