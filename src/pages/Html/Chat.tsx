export default function chat() {
    return (
        <div>
            <header>
                <img src="/img/logo_bico.jfif" alt="logo" />
                <form action="">
                    <div className="container">
                        <i className="fas fa-search icon_pesquisa"></i>
                        <input type="text" name="q" placeholder="Pesquisar..." />
                        <input type="reset" value="X" className="cancelar" />
                    </div>
                </form>
            </header>


            <main>
                <h1>Conversas</h1>
                <p>
                    <section>
                        <a href="/html/conversa.html" className="link_converssa">
                            <button className="button_converssa">
                                <img src="/img/foto_giovanna.enc" alt="" className="foto_converssa" />
                                <span className="span_converssa">
                                    <div className="div_nome">Romão</div>
                                    <span>
                                        {/* <i className="fa-solid fa-check fa-lg" style="color: #337eff;"></i> */}
                                        Amanhã entro em contato com...
                                    </span>
                                </span>
                            </button>
                        </a>
                    </section>
                </p>
                <hr />
                <p>
                    <section>
                        <a href="/html/conversa.html" className="link_converssa">
                            <button className="button_converssa">
                                <img src="/img/bruno_foto.jfif" alt="" className="foto_converssa" />
                                <span className="span_converssa">
                                    <div className="div_nome">
                                        Bruno
                                        <span className="span_menssagem"></span>
                                    </div>
                                    <span>
                                        Obrigado pelo trabalho feito qual...
                                    </span>
                                </span>
                            </button>
                        </a>
                    </section>
                </p>
                <hr />
                <p>
                    <section>
                        <a href="/html/conversa.html" className="link_converssa">
                            <button className="button_converssa">
                                <img src="/img/beatriz_foto.enc" alt="" className="foto_converssa" />
                                <span className="span_converssa">
                                    <div className="div_nome">Beatriz</div>
                                    <span>
                                        {/* <i className="fa-solid fa-check fa-lg" style="color: #616161;"></i> */}
                                        Agradeço o serviço, pode enviar...
                                    </span>
                                </span>
                            </button>
                        </a>
                    </section>
                </p>
                <hr />
                <p>
                    <section>
                        <a href="/html/conversa.html" className="link_converssa">
                            <button className="button_converssa">
                                <img src="/img/amanda_foto.jfif" alt="" className="foto_converssa" />
                                <span className="span_converssa">
                                    <div className="div_nome">
                                        Amandinha
                                        <span className="span_menssagem"></span>
                                    </div>
                                    <span>
                                        Passa seu pix, vou mandar o paga...
                                    </span>
                                </span>
                            </button>
                        </a>
                    </section>
                </p>
                <hr />
                <p>
                    <section>
                        <a href="/html/conversa.html" className="link_converssa">
                            <button className="button_converssa">
                                <img src="/img/pedro_foto.enc" alt="" className="foto_converssa" />
                                <span className="span_converssa">
                                    <div className="div_nome">Pedro</div>
                                    <span>
                                        {/* <i className="fa-solid fa-check fa-lg" style="color: #616161;"></i> */}
                                        Consegue me adiantar o horári...
                                    </span>
                                </span>
                            </button>
                        </a>
                    </section>
                </p>
            </main>
        </div>
    )
}
