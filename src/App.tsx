import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [filial, setFilial] = useState<string>("Selecione a Filial");
  const [numberEmp, setNumberEmp] = useState<string>("09");
  const [name, setName] = useState<string>("Selecione o Responsável");
  const [diff, setDiff] = useState<string>("Selecione se há diferença");
  const [namePast, setNamePast] = useState<string>("Selecione o nome da pasta");
  const [timeDay, setTimeDay] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilial(e.target.value);
    verify(e);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const verifyDayHour = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour >= 6 && currentHour < 12) {
      setTimeDay("Bom Dia!");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeDay("Boa Tarde!");
    } else {
      setTimeDay("Boa Noite!");
    }
  };
  const verify = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Rede Conectividade") {
      setNamePast("CONECT");
      setNumberEmp("10");
    }
    if (e.target.value === "Rede Informática / Filial Andradina") {
      setNamePast("INF");
      setNumberEmp("09");
    }
    if (e.target.value === "Rede Informática / Filial Campo Grande - MS") {
      setNamePast("INF_05");
      setNumberEmp("09");
    }
    verifyDayHour();
  };

  const handleDiffChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiff(e.target.value);
    alert(`Você tem certeza que selecinou a certa.`);
  };

  const [dataHora, setDataHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDateHora = new Date();
      setDataHora(newDateHora);
    }, 1000); // Atualize a cada segundo
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const timeZone = "America/Sao_Paulo"; // Substitua pelo fuso horário desejado

  const formattedHora = dataHora.toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  });
  const data = new Date();
  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const ano = data.getFullYear().toString().slice(-2);

  const dataFormatada = `${dia}.${mes}.${ano}`;

  const formattedDataHora = `${dataFormatada} ${formattedHora}`;

  return (
    <>
      <section className="containerBody">
        <div className="inputContainer">
          <h1>SALDO X ENDEREÇAMENTO by Jr;</h1>
          <div className="emailTitle">
            {" "}
            Nome do responsável <i className="fa-solid fa-signature"> </i>
          </div>
          <div className="inputName">
            <input
              type="checkbox"
              name="nome"
              value="Marcelo"
              checked={name === "Marcelo"}
              onChange={handleNameChange}
            />
            <p>Marcelo</p>
          </div>
        </div>
        <div className="emailTitle">
          Nome da Filial <i className="fa-solid fa-briefcase"></i>
        </div>
        <div className="radioBtn">
          <div className="inputName">
            <input
              type="checkbox"
              name="filial"
              value="Rede Conectividade"
              checked={filial === "Rede Conectividade"}
              onChange={handleChange}
            />
            <p>Três Lagoas</p>
            <input
              type="checkbox"
              name="filial"
              value="Rede Informática / Filial Andradina"
              checked={filial === "Rede Informática / Filial Andradina"}
              onChange={handleChange}
            />

            <p>Andradina</p>
            <input
              type="checkbox"
              name="filial"
              value="Rede Informática / Filial Campo Grande - MS"
              checked={filial === "Rede Informática / Filial Campo Grande - MS"}
              onChange={handleChange}
            />
            <p>Campo Grande</p>
          </div>
        </div>
        <div className="emailTitle">
          Diferença de saldo ? <i className="fa-solid fa-not-equal"></i>
        </div>
        <div className="inputName">
          <input
            type="checkbox"
            name="diff"
            value=" Foram"
            checked={diff === " Foram"}
            onChange={handleDiffChange}
          />{" "}
          SIM
          <input
            type="checkbox"
            name="diff"
            value=" Não foram"
            checked={diff === " Não foram"}
            onChange={handleDiffChange}
          />{" "}
          NÃO
        </div>
        <div className="control">
          Responsável selecionado: <p className="selectedText">{name}</p>
          Filial selecionada: <p className="selectedText">{filial}</p>
          Diferenças{" "}
          <p className="selectedText">{diff} identificadas diferenças</p>
        </div>
        {/* 
        COMEÇA PARTE DAS
         INFORMAÇÕES 
         */}
        <section>
          <div className="emailTitle">
            Titulo do e-mail <i className="fa-solid fa-envelope"></i>
          </div>
          <p className="titleText">
            CONFRONTO DE SALDOS ATUAL X ENDEREÇO - {formattedDataHora} - EMPRESA{" "}
            {numberEmp} - {filial}
          </p>
          <div className="emailTitle">
            Corpo do e-mail <i className="fa-solid fa-envelope"></i>{" "}
          </div>
          <div className="titleTexts">
            {name}, {timeDay} <br />
            Segue o relatório de confronto de saldos referente à {filial}.{diff}{" "}
            identificadas diferenças de saldo nos armazéns
          </div>
          <div className="emailTitle">
            Nome do Arquivo <i className="fa-solid fa-box-archive"></i>{" "}
          </div>
          <div className="titleText">
            CONFRONTO DE SALDOS ATUAL X ENDEREÇO_ {dataFormatada}_{namePast}
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
