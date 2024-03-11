import { PageTemplate } from "../lib/PageTemplate.js";


class PageLocations extends PageTemplate {
    constructor(params) {
        super();
        this.pageTitle = 'Service';
        this.page = 'services';
        this.params = params;
    }

    main() {
        
      return    `
      <div class="container marketing">

          <!-- START THE FEATURETTES -->


          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
              <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div class="col-md-5">
              <img class="card-img-top" style="height: 450px; object-fit: cover;"  src="/img/location1.jpg" alt="Service image">
            </div>
          </div>

          <hr class="featurette-divider">

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
              <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div class="col-md-5 order-md-1">
              <img class="card-img-top" style="height: 450px; object-fit: cover;"  src="/img/location2.jpg" alt="Service image">
            </div>
          </div>

          <hr class="featurette-divider">

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-body-secondary">Checkmate.</span></h2>
              <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
            </div>
            <div class="col-md-5">
              <img class="card-img-top" style="height: 450px; object-fit: cover;"  src="/img/location3.jpg" alt="Service image">
            </div>
          </div>
  
  
        <!-- /END THE FEATURETTES -->
  
    </div>`
    }
}

export { PageLocations };