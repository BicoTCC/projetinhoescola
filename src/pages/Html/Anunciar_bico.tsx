export default function anunciar_bico() {
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
            <section className="sair">
                <a href="../index.html" className="voltar">
                    {/* <i className="fa-solid fa-x fa-xl" style="color: #000000;"></i> */}
                </a>
            </section>
            <main>
                <p>
                    <button className="add_foto">
                        <form action="/upload" method="post" enctype="multipart/form-data" className="imgs">
                            <p className="p_foto">
                                <img src="img/camera_png.png" alt="" className="img_camera" />
                                <span className="titulo_foto">INCLUIR FOTOS</span>
                            </p>
                            <input type="file" id="foto" name="foto" accept="image/*" />
                        </form>
                    </button>
                </p>
                <div>
                    <form action="" className="form_inf">
                        <input type="text" placeholder="Profissional Desejado" className="profissional_desejado" />
                        <br />
                        <input type="text" placeholder="Região" className="profissional_desejado" />
                        <br />
                        <select name="Localização" id="Localização" className="estados">
                            <option value="Estados">Estados</option>
                            <option value="Acre (AC)">Acre (AC)</option>
                            <option value="Alagoas (AL)">Alagoas (AL)</option>
                            <option value="Amapá (AP)">Amapá (AP)</option>
                            <option value="Amazonas(AM)">Amazonas(AM)</option>
                            <option value="Bahia (BA)">Bahia (BA)</option>
                            <option value="Ceará (CE)">Ceará (CE)</option>
                            <option value="Distrito Federal (DF)">Distrito Federal (DF)</option>
                            <option value="Espírito Santo (ES)">Espírito Santo (ES)</option>
                            <option value="Goiás (GO)">Goiás (GO)</option>
                            <option value="Maranhão (MA)">Maranhão (MA)</option>
                            <option value="Mato Grosso (MT)">Mato Grosso (MT)</option>
                            <option value="Mato Grosso do Sul (MS)">Mato Grosso do Sul (MS)</option>
                            <option value="Minas Gerais (MG)">Minas Gerais (MG)</option>
                            <option value="Pará (PA) ">Pará (PA)</option>
                            <option value="Paraíba (PB)">Paraíba (PB)</option>
                            <option value="Paraná (PR)">Paraná (PR)</option>
                            <option value="Pernambuco (PE)">Pernambuco (PE)</option>
                            <option value="Piauí (PI) ">Piauí (PI)</option>
                            <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
                            <option value="Rio Grande do Norte(RN)">Rio Grande do Norte (RN)</option>
                            <option value="Rio Grande do Sul (RS)">Rio Grande do Sul (RS)</option>
                            <option value="Rondônia (RO)">Rondônia (RO)</option>
                            <option value="Roraima (RR)">Roraima (RR)</option>
                            <option value="Santa Catarina (SC)">Santa Catarina (SC)</option>
                            <option value="São Paulo (SP)">São Paulo (SP)</option>
                            <option value="Sergipe (SE)">Sergipe (SE)</option>
                            <option value="Tocantins (TO)">Tocantins (TO)</option>
                        </select>
                    </form>
                </div>
                <div className="centralizar">
                    <form action="" className="centralizar">
                        <span className="titulo_descricao">Descrição do Bico</span>
                        {/* <textarea name="descrição" id="" cols="40" rows="7" className="caixa"> </textarea> */}
                        <span className="titulo_pagamento">Pagamento por...</span>
                        <div className="pagamento_div">
                            <input type="number" placeholder="Hora" className="input_pagamento1 input_pagamento2" />
                            <input type="text" placeholder="Serviço" className="input_pagamento1 input_pagamento2" />
                        </div>
                        <input type="text" placeholder="Digite o Valor Cobrado" className="input_pagamento1 input_pagamento3" />
                    </form>
                </div>
                <p>
                    <h2>Selecione (opcional)</h2>
                    <div className="pagamento_div">
                        <button className="btn_urgente">
                            <input type="radio"> urgente </input>
                        </button>
                        <button className="btn_oferta">
                            <input type="radio"> Aceito oferta </input>
                        </button>
                    </div>
                </p>
                <div className="button">
                    <form action="">
                        <input type="reset" value="Limpar" />
                    </form>
                </div>
            </main>
        </div>
    )
}