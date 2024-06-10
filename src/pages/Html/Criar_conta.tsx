export default function criar_conta() {
  return (
    <div>
            <p>
    <div className="container">
        <img src="/img/logo_bico.jfif" alt="" className="logo_bico" />
    </div>
    </p>
 
    <main>
        <h1>Criar Conta</h1>
        <section className="informacao">
            <form action="" className="inf_forms">
                <input type="text" id="nome_completo" name="nome_completo" placeholder="Nome Completo" required
                    className="inf_input" />
                <input type="text" id="apelido" name="apelido" placeholder="Apelido" required className="inf_input" />
                <input type="text" id="CPF" name="CPF" placeholder="CPF" required className="inf_input" />
                <input type="text" id="e-mail" name="e-mail" placeholder="E-mail" required className="inf_input" />
                <input type="text" id="confirma_e-mail" name="confirma_e-mail" placeholder="Confirmar E-mail" required
                    className="inf_input" />
                <input type="tel" id="telefone" name="telefone" placeholder="Telefone" required className="inf_input" />
                <input type="password" id="senha" name="senha" placeholder="Senha" required className="inf_input" />
                <input type="password" id="confirma_senha" name="confirma_senha" placeholder="Confirmar Senha" required
                    className="inf_input" />
            </form>
        </section>
        <section className="section_login">
            <a href="/html/login.html" className="link_login">
                <button className="btn_login bounce-effect">
                    <span>Login</span>
                </button>
            </a>
        </section>
    </main>
    </div>
  )
}
