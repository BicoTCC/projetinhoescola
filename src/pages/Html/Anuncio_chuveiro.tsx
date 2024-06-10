export default function anuncio_chuveiro() {
    return (
        <main>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/chuveiro_eletricista.jfif" className="d-block w-100" alt="..." height="390vh" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/foto_chuveiro_parte2.jpg" className="d-block w-100" alt="..." height="390vh" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/parte_interna_chuveiro.jpg" className="d-block w-100" alt="..." height="390vh" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <p>
                <section>
                    <span className="titulo">
                        <h3>Eletricista</h3>
                        <span className="alinhar_span">(85736291)</span>
                    </span>
                    <span>
                        <button className="btn_sobre">
                            Preciso de um eletricista, meu chuveiro simplismente queimou, quando ligo solta fumaça.
                        </button>
                    </span>
                </section>
            </p>
            <section>
                <span>
                    <h3>Informações</h3>
                </span>
                <span>
                    <button className="btn_informacao">
                        <p className="p_inf">
                            <span className="span_inf">São paulo</span>
                            <span className="span_inf">Aceito oferta</span>
                            <span className="span_inf">Campinas</span>
                        </p>
                        <p className="p_inf">
                            <span className="span_inf">Pagamento por serviço</span>
                            <span className="span_inf">Valor R$70,00</span>
                        </p>
                    </button>
                </span>
            </section>
            <section className="section_interesses">
                <a href="#" className="sem_decorar">
                    <span>
                        <button className="btn_denunciar bounce-effect">Denunciar anuncio!</button>
                    </span>
                </a>
                <a href="/html/conversa.html" className="sem_decorar">
                    <span>
                        <button className="btn_interesse bounce-effect">TENHO INTERESSE!!</button>
                    </span>
                </a>
            </section>
        </main>
    )
}
