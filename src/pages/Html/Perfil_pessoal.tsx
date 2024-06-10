export default function perfil_pessoal() {
    return (
        <div>
            <header>
                <a href="#">
                    <button className="voltar">
                        {/* <i className="fa-sharp fa-solid fa-gear fa-2xl" style="color: #FFD43B;"></i> */}
                    </button>
                </a>
            </header>
            {/* <!-- <i className="fa-sharp fa-solid fa-gear fa-2xl" style="color: #FFD43B;"></i> --> */}
            <main>
                <section className="altura">
                    <section className="container">
                        <div className="container_img">
                            <img src="/img/dani_foto.jfif" alt="" className="foto_perfil" />
                            <p>
                                <span className="apelido">Dani</span>
                            </p>
                        </div>
                        <div>
                            <h2>Daniel Glingani</h2>
                            <span className="descricao">Oi, sou especialista em carpintaria na região de Campinas. <br /> Entre em
                                contato!</span>
                        </div>
                    </section>
                </section>
                <span className="data_inicio">No bico desde Março de 2024</span>
                <div className="linha">
                    <p>
                        <section>
                            <span className="titulo">Habilidades</span>
                            <span>
                                <button className="btn_informacao">
                                    <p className="p_inf">
                                        <span className="span_inf">Atecioso</span>
                                        <span className="span_inf">Roer</span>
                                        <span className="span_inf">Carpinteiro</span>
                                    </p>
                                    <p className="p_inf">
                                        <span className="span_inf">Eletricista</span>
                                        <span className="span_inf">Escultor</span>
                                    </p>
                                </button>
                            </span>
                        </section>
                    </p>
                    <div className="habilidades">
                        <span className="titulo1">Avaliações</span>
                        <span className="titulo2">2 avaliação</span>
                    </div>
                    <div className="conteudo">
                        <p className="span_conteudo">
                            <button className="borda_foto_comentario">
                                <p className="borda_foto_comentario">
                                    {/* <i className="fa-solid fa-user fa-2xl" style="color: #000000;"></i> */}
                                </p>
                            </button>
                            <span className="espaco_foto_escrita alinhar">
                                {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                <br />
                                Exelente atendimento
                            </span>
                        </p>
                    </div>
                    <div className="conteudo">
                        <p className="span_conteudo">
                            <button className="borda_foto_comentario">
                                <p className="borda_foto_comentario">
                                    {/* <i className="fa-solid fa-user fa-2xl" style="color: #000000;"></i> */}
                                </p>
                            </button>
                            <span className="espaco_foto_escrita alinhar">
                                {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                <br />
                                Foi um pouco rude
                            </span>
                        </p>
                    </div>
                </div>
            </main >
        </div>
    )
}
