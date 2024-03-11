import { projectsData } from "../data/servicesData.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class PageProjects extends PageTemplate {
    constructor(params) {
        super();
        this.pageTitle = 'Service';
        this.page = 'services';
        this.params = params;
    }

    main() {

        let listHTML = '';

        for (const project of projectsData) {
            listHTML += `
                 <div class="col">
                     <div class="card shadow-sm">
                        <img class="card-img-top" style="height: 300px; object-fit: cover;"  src="${project.src}" alt="Service image">
                         <div class="card-body">
                            <h3>${project.title}</h3>
                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                             <div class="d-flex justify-content-between align-items-center">
                                 <div class="btn-group">
                                    <a href="${project.href}" class="btn  btn-primary my-2">Read more</a>
                                 </div>
                                 <small class="text-body-secondary">9 mins</small>
                             </div>
                         </div>
                     </div>
                 </div>`
        }

        return `
        <main>
            <section class="py-5 text-center container">
              <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                  <h1 class="">Projects</h1>
                </div>
              </div>
            </section>
        
            <div class="album py-5 bg-body-tertiary">
              <div class="container">
        
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  ${listHTML}
                </div>
              </div>
            </div>
      </main>`;
    }
}

export { PageProjects };