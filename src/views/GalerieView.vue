<template>
  <div class="galerie">
    <div class="container-fluid">
      <div class="row d-flex align-items-center">
        <h1 class="p-5 titre doctor">Galerie</h1>
      </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/edelwebb.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/royaume.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/cv.png" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="row justify-content-around p-3">
        <div class="col-8 col-md-3 flex-column bg-galerie">
          <div>
            <h2>Edelwebb</h2>
          </div>
          <div>
            <p>Ma premiére réalisation c'est bien entendu mon site.</p>
          </div>
        </div>
        <div class="h10 col-md-1"></div>
        <div class="col-8 col-md-3 flex-column bg-galerie">
          <div>
            <h2><a href="https://leroyaumedolympe.fr/" title="le royaume d'olympe" target="_blank">Le royaume d'olympe</a></h2>
          </div>
          <div>
            <p>Le site d'une chatterie.</p>
          </div>
        </div>
        <div class="h10 col-md-1"></div>
        <div class="col-8 col-md-3 flex-column bg-galerie">
          <div>
            <h2>Mon CV</h2>
          </div>
          <div>
            <p>projet réalisé pendant ma formation.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
 