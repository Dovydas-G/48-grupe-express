import { teamData } from "../data/servicesData.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class PageTeamInner extends PageTemplate {
    constructor(params, time) {
        super(time);
        this.pageTitle = 'Service';
        this.page = 'services';
        this.params = params;
    }

    main() {
        let teamObj = null;

        for (const team of teamData) {
            if (team.id === this.params.teamId) {
                teamObj = team;
                break;
            }
        }

        if (teamObj === null) {
            return `
                    <main>
                        <section class="container-fluid py-5">
                            <h1 class="display-5 fw-bold">Service not found</h1>
                            <a href="/services/:serviceId/team" class="btn btn-primary btn-lg">Go to services list</a>
                        </section>
                    </main>`
        }

        return `<main>
                        <section class="container column">
                            <h1 class="display-5 fw-bold">${teamObj.title}</h1>
                            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                            <img class="card-img-top" style="height: auto;  object-fit: cover;"  src="${teamObj.src2}" alt="Service image">
                            <a href="/services/:serviceId/team/:teamId/projects" class="btn btn-primary btn-lg">Read more</a>
                        </section>
                </main>`;
    }
}

export { PageTeamInner };