import React from 'react';

const CarouselBootstrap = () => (
  <div id="carouselExampleIndicators" className="carousel slide mb-4" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://picsum.photos/id/1018/900/300" alt="Primeiro slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Primeira Imagem</h5>
          <p>Exemplo de imagem do carousel Bootstrap.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://picsum.photos/id/1015/900/300" alt="Segundo slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Segunda Imagem</h5>
          <p>Outra imagem de exemplo.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://picsum.photos/id/1019/900/300" alt="Terceiro slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Terceira Imagem</h5>
          <p>Mais uma imagem do carousel.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Próximo</span>
    </button>
  </div>
);

export default CarouselBootstrap;