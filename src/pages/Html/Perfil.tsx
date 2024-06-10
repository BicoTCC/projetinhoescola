export default function perfil() {
    return (
        <div>
            <header>
                <a href="/html/conversa.html">
                    <button className="voltar">
                        {/* <i className="fa-solid fa-circle-chevron-left fa-2xl" style="color: #000000;"></i> */}
                    </button>
                </a>
            </header>
            <main>
                <section className="altura">
                    <section className="container">
                        <div className="container_img">
                            <img src="/img/luan_foto.enc" alt="" className="foto_perfil" />
                            <p>
                                <span className="apelido">Luan</span>
                            </p>
                        </div>
                        <div>
                            <h2>Luan Yuzo Macedo</h2>
                        </div>
                    </section>
                    <span className="data_inicio">No bico desde Fevereiro de 2024</span>
                    <div className="linha"></div>
                    <section className="section_conteudo">
                        <div className="habilidades">
                            <span className="titulo1">Habilidades</span>
                        </div>
                        <div className="conteudo">
                            <p className="span_conteudo"> Nenhuma habilidade selecionada</p>
                        </div>
                    </section>
                    <section className="section_conteudo">
                        <p>
                            <div className="habilidades">
                                <span className="titulo1">Avaliações</span>
                                <span className="titulo2">1 avaliação</span>
                            </div>
                        </p>
                        <div className="conteudo">
                            <p className="span_conteudo">
                                <button className="borda_foto_comentario">
                                    <p className="borda_foto_comentario">
                                        {/* <i className="fa-solid fa-user fa-xl" style="color: #000000;"></i> */}
                                    </p>
                                </button>
                                <span className="espaco_foto_escrita alinhar">
                                    {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                    {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                    {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                    {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                    {/* <i className="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i> */}
                                    <br />
                                    Nenhuma habilidade selecionada
                                </span>
                            </p>
                        </div>
                    </section>
                </section >
            </main >
        </div >
    )
}
