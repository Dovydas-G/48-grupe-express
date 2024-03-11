import { servicesData } from "../data/servicesData.js";
import { serviceInnerData } from "../data/servicesData.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class PageServiceInner extends PageTemplate {
    constructor(params) {
        super();
        this.pageTitle = 'Service';
        this.page = 'services';
        this.params = params;
    }

    main() {
        let serviceObj = null;

        for (const service of servicesData) {
            if (service.id === this.params.serviceId) {
                serviceObj = service;
                break;
            }
        }

        if (serviceObj === null) {
            return `
                    <main>
                        <section class="container-fluid py-5">
                            <h1 class="display-5 fw-bold">Service not found</h1>
                            <a href="/services" class="btn btn-primary btn-lg">Go to services list</a>
                        </section>
                    </main>`
        }

        let listHTML = '';

        for (const service of serviceInnerData) {
            listHTML += `
                 <div class="col">
                     <div class="card shadow-sm">
                         <img class="card-img-top" style="height: 300px; object-fit: cover;"  src="${service.src}" alt="Service image">
                         <div class="card-body">
                            <h3>${service.title}</h3>
                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                             <div class="d-flex justify-content-between align-items-center">
                                 <div class="btn-group">
                                    <a href="${service.href}" class="btn  btn-primary my-2">Read more</a>
                                 </div>
                                 <small class="text-body-secondary">9 mins</small>
                             </div>
                         </div>
                     </div>
                 </div>`
        }

        return `
        <main>
            <div class="album py-5 bg-body-tertiary">
                <div class="container">
                    <div  class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        ${listHTML}
                    </div>
                </div>
            </div>
        </main>`;
    }
    
}

export { PageServiceInner };