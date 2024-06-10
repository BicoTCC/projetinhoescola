export default function esqueci_senha() {
    return (
        <div>
            <p>
                <div className="container">
                    <img src="/img/logo_bico.jfif" alt="" className="logo_bico" />
                </div>
            </p>

            <main>
                <h1>Redefinir Senha</h1>
                <section className="informacao">
                    <form action="" className="inf_forms">
                        <input type="text" id="e-mail" name="e-mail" placeholder="E-mail" required className="inf_input" />
                        <input type="password" id="senha" name="senha" placeholder="Redefinir Senha" required className="inf_input" />
                        <input type="password" id="confirma_senha" name="confirma_senha" placeholder="Confirmar Senha" required
                            className="inf_input" />
                    </form>
                </section>
                <section className="section_login">
                    <a href="/html/login.html" className="link_login">
                        <button className="btn_login bounce-effect">
                            <span>Enviar</span>
                        </button>
                    </a>
                </section>
            </main>
        </div>
    )
}
