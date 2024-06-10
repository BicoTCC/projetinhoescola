export default function Login() {
    return (
        <div>

            {/* logo */}
            <div className="logo">
                <img src="/img/logo_bico.jfif" alt="*" className="logo_bico" />
            </div>
            {/* fim logo */}
            <main>
                <div className="container">
                    <div>
                        <h2>Bem Vindo (a)</h2>
                        <p>
                            <form action="#">
                                <div className="icone_input">
                                    {/* <i className="fa-solid fa-envelope fa-xl icones" style="color: #ffffff;"></i> */}
                                    <input type="text" id="cpf" name="cpf" placeholder="Cpf" required />
                                </div>
                                <div className="icone_input">
                                    {/* <i className="fa-solid fa-lock fa-xl icones" style="color: #ffffff;"></i> */}
                                    <input type="password" id="password" name="password" placeholder="Senha" required />
                                </div>
                                <a href="/html/esqueci_senha.html" className="forgot-password">Esqueci minha senha</a>
                            </form>
                        </p>
                        <p className="btns">
                            <a href="../index.html" className="botoes">
                                <button type="submit" className="btn">Login</button>
                            </a>
                            <a href="/html/criar_conta.html" className="botoes">
                                <button type="submit" className="btn">Criar Conta</button>
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
