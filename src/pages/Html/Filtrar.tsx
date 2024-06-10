export default function filtrar() {
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
                <div className="div-centralizada">
                    <div className="cabecalho2">Filtrar:
                        <a href="../index.html">
                            {/* <i className="fa-solid fa-x fa-sm" style="color: #000000;"></i> */}
                        </a>
                    </div>

                    <h2>Localização</h2>
                    <select name="Localização" id="Localização" className="estados">
                        <option value="Estados">ESTADOS</option>
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
                    <br />
                    <input type="range" id="tempB" name="temp" list="values" min="0" max="60" />

                    <datalist id="values" className="opicao">
                        <option value="0" label="0km"></option>
                        <option value="10" label="10km"></option>
                        <option value="20" label="20km"></option>
                        <option value="30" label="30km"></option>
                        <option value="40" label="40km"></option>
                        <option value="50" label="50km"></option>
                        <option value="60" label="60km"></option>
                    </datalist>
                    <br />
                    <section className="canto">
                        <h2>Disponibilidade</h2>
                        <div className="turnos">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                            <div className="turnos">
                                <span>Manhã</span>
                            </div>
                        </div>
                        <div className="turnos">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                            <div className="turnos">
                                <span>Tarde</span>
                            </div>
                        </div>
                        <div className="turnos">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                            <div className="turnos">
                                <span>Noite</span>
                            </div>
                        </div>
                    </section>
                </div>
                <a href="#">
                    <span className="div_filtrar">
                        <button className="btn_filtrar bounce-effect">
                            Filtrar
                        </button>
                    </span>
                </a>
            </main>

        </div>
    )
}
