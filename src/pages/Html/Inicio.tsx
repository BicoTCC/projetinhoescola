import styles from '../Css/Celular/Inicio.module.css'

export default function Inicio() {
    return (
        <div>
            <body>
                <header>
                    <img src="img/logo_bico.jfif" alt="logo" />
                    <form action="">
                        <div className="container">
                            <i className="fas fa-search icon_pesquisa"></i>
                            <input type="text" name="q" placeholder="Pesquisar..." />
                            <input type="reset" value="X" className="cancelar" />
                        </div>
                    </form>
                </header>
                <main>
                    <p>
                        <section className="btns">
                            <ul className="ul_anuncio_filtro">
                                <a href="/html/anunciar_bico.html" className="anuncio_filtro">
                                    <li>
                                        <button className="btn_anuncio_filtro">Anuncie seu bico</button>
                                    </li>
                                </a>
                                <a href="html/filtrar.html" className="anuncio_filtro">
                                    <li>
                                        <button className="btn_anuncio_filtro">Filtrar</button>
                                    </li>
                                </a>
                            </ul>
                        </section>
                    </p>
                    <p>
                        <a href="/html/anuncio_chuveiro.html">
                            <button className="button_anuncio bounce-effect">
                                <img src="/img/chuveiro_eletricista.jfif" alt="" className="imagens" />
                                <span className="anuncio_container">
                                    <h3>ELETRICÍSTA</h3>
                                    <span> Preciso de um eletricista, meu...</span>
                                </span>
                            </button>
                        </a>
                    </p>
                    {/* Urgentes */}
                    <p>
                        <a href="#">
                            <button className=" bounce-effect btn_urgente">
                                <img src="/img/jardim_jardineiro.jfif" alt="" className="imagens" />
                                <span className="urgente">
                                    <h3 className="titulo_urgente">JARDINEIRO</h3>
                                    <span>Estou precisando de um jardineiro...</span>
                                </span>
                                <span className="alinhar">URGENTE!</span>
                            </button>
                        </a>
                    </p>
                    {/* Fim dos Urgentes */}
                    <p>
                        <a href="#">
                            <button className="button_anuncio bounce-effect">
                                <img src="/img/sem_imagem_foto.jfif" alt="" className="imagens" />
                                <span className="anuncio_container">
                                    <h3>AJUDA_DE_PEDREIRO</h3>
                                    <span> Procuro um auxiliar para uma ob...</span>
                                </span>
                            </button>
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            <button className="button_anuncio bounce-effect">
                                <img src="/img/roupa_costureira.jfif" alt="" className="imagens" />
                                <span className="anuncio_container">
                                    <h3>COSTUREIRAS</h3>
                                    <span> Comprei roupas oline e estão...</span>
                                </span>
                            </button>
                        </a>
                    </p>

                    {/* Urgentes */}

                    <p>
                        <a href="#">
                            <button className=" bounce-effect btn_urgente">
                                <img src="/img/cano_encanador.jfif" alt="" className="imagens" />
                                <span className="urgente">
                                    <h3 className="titulo_urgente">ENCANADOR</h3>
                                    <span>Meus marido furou o cano da cozi...</span>
                                </span>
                                <span className="alinhar">URGENTE!</span>
                            </button>
                        </a>
                    </p>

                    {/* Fim dos Urgentes */}

                    <p>
                        <a href="#">
                            <button className="button_anuncio bounce-effect">
                                <img src="/img/sem_imagem_foto.jfif" alt="" className="imagens" />
                                <span className="anuncio_container">
                                    <h3>PINTOR</h3>
                                    <span>Sou pintor com varias tecnicas...</span>
                                </span>
                            </button>
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            <button className="button_anuncio bounce-effect">
                                <img src="/img/sem_imagem_foto.jfif" alt="" className="imagens" />
                                <span className="anuncio_container">
                                    <h3>CARPINTEIRO</h3>
                                    <span> Tenho uma ideia de moveis para minha...</span>
                                </span>
                            </button>
                        </a>
                    </p>
                </main>
            </body>
        </div>
    )
}
