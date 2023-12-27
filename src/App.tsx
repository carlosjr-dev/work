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
      setTimeDay("Bom Dia !");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeDay("Boa Tarde !");
    } else {
      setTimeDay("Boa Noite !");
    }
  };
  const verify = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Rede Informática / Filial Três Lagoas - MS") {
      setNamePast("INF_06");
      setNumberEmp("09");
    }
    if (e.target.value === "Rede Informática / Filial Andradina - SP") {
      setNamePast("INF_01");
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
          
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="302" height="56" viewBox="0 0 302 56" fill="none">
  <path d="M17.5624 31.0438V1.38252H26.1581V31.8607C26.1581 39.4646 21.5201 44.5548 12.6771 44.5548C4.76163 44.5548 0 40.1558 0 31.6094V27.3361H7.79177V31.1695C7.79177 35.3799 9.15223 37.4536 12.6771 37.4536C16.6348 37.4536 17.5624 35.6312 17.5624 31.0438Z" fill="white"/>
  <path d="M56.8367 43.1094H49.2305V38.7733C47.1279 42.2925 43.9741 43.9263 39.769 43.9263C33.7088 43.9263 29.4418 39.3389 29.4418 32.552V12.1913H37.481V31.2952C37.481 35.1913 39.2125 37.0766 42.6136 37.0766C46.695 37.0766 48.8594 34.123 48.8594 30.0383V12.1913H56.8367V43.1094Z" fill="white"/>
  <path d="M87.9419 43.1094H79.841V24.3826C79.841 19.6066 78.4805 18.2869 74.6464 18.2869C70.4414 18.2869 68.4007 20.6749 68.4007 25.388V43.1094H60.3615V12.1913H68.0296V16.7159C69.8848 13.2596 72.9768 11.3743 77.8621 11.3743C83.675 11.3743 87.9419 14.9563 87.9419 21.6804V43.1094Z" fill="white"/>
  <path d="M99.687 43.1094H91.6479V12.1913H99.687V43.1094Z" fill="white"/>
  <path d="M99.687 8.48363H91.6479V0.879784H99.687V8.48363Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M118.324 43.9263C108.492 43.9263 102.679 37.2651 102.679 27.6503C102.679 17.847 108.677 11.3743 118.324 11.3743C127.848 11.3743 133.784 17.7842 133.784 27.6503C133.784 37.4536 127.786 43.9263 118.324 43.9263ZM118.324 37.0766C123.21 37.0766 125.683 33.9345 125.683 27.6503C125.683 21.3662 123.21 18.2869 118.324 18.2869C113.439 18.2869 110.965 21.3662 110.965 27.6503C110.965 33.9345 113.439 37.0766 118.324 37.0766Z" fill="white"/>
  <path d="M144.734 43.1094H136.695V12.1913H144.239V15.8989C146.898 11.7514 149.99 11.3743 153.268 11.3743H154.319V19.7323C153.577 19.6066 152.835 19.5438 152.093 19.5438C147.145 19.5438 144.734 22.0574 144.734 27.0219V43.1094Z" fill="white"/>
  <path d="M194.099 43.1094H186.988L186.802 38.9618C184.823 42.481 180.124 44.5548 174.496 44.5548C163.118 44.5548 155.883 33.8088 155.883 22.1831C155.883 9.86615 162.809 0 176.104 0C185.875 0 193.419 5.90712 194.038 14.2651H185.38C184.947 10.3689 180.804 7.22679 176.104 7.22679C169.24 7.22679 164.664 12.6312 164.664 22.5602C164.664 29.4099 168.065 37.2023 176.042 37.2023C181.67 37.2023 186.06 32.8662 186.06 27.6503H176.97V20.6749H194.099V43.1094Z" fill="white"/>
  <path d="M205.305 43.1094H197.266V12.1913H204.81V15.8989C207.469 11.7514 210.561 11.3743 213.839 11.3743H214.89V19.7323C214.148 19.6066 213.406 19.5438 212.664 19.5438C207.717 19.5438 205.305 22.0574 205.305 27.0219V43.1094Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M242.153 43.1094H234.671C234.424 42.3553 234.238 41.287 234.176 40.3444C232.259 42.481 229.044 43.9263 224.962 43.9263C218.036 43.9263 214.82 40.47 214.82 35.4427C214.82 26.5192 220.695 25.5137 228.796 24.3826C232.816 23.817 233.929 23.0001 233.929 20.8634C233.929 18.8525 231.95 17.6585 228.796 17.6585C225.148 17.6585 223.663 19.4809 223.292 22.246H215.81C215.934 15.8361 219.397 11.3743 229.167 11.3743C238.814 11.3743 242.153 15.7733 242.153 23.5656V43.1094ZM234.052 31.358L234.114 27.9646C233.31 28.7815 231.888 29.2214 228.92 29.787C224.344 30.6667 222.86 31.9864 222.86 34.6258C222.86 36.9509 224.22 38.0821 226.755 38.0821C230.899 38.0821 233.991 35.0028 234.052 31.358Z" fill="white"/>
  <path d="M253.119 27.0848L254.758 20.3339L256.867 11.5242C249.739 12.4164 245.142 17.3314 245.142 27.2733C245.142 33.4302 246.905 37.8929 249.898 40.6397L253.12 27.1799L253.119 27.0848Z" fill="#9E94E0"/>
  <path d="M269.87 15.3644L265.97 23.2514H273.155C272.938 20.0468 271.776 17.3644 269.87 15.3644Z" fill="#9E94E0"/>
  <path d="M255.714 43.5798C253.493 43.1028 251.54 42.1337 249.937 40.6759L256.888 38.4815L255.714 43.5798Z" fill="#9E94E0"/>
  <path d="M273.093 31.9236C272.29 38.5689 267.284 43.2136 260.689 43.8512L268.384 31.9236H273.093Z" fill="#9E94E0"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M302 43.1094H294.517C294.27 42.3553 294.085 41.287 294.023 40.3444C292.106 42.481 288.89 43.9263 284.809 43.9263C277.883 43.9263 274.667 40.47 274.667 35.4427C274.667 26.5192 280.542 25.5137 288.643 24.3826C292.662 23.817 293.775 23.0001 293.775 20.8634C293.775 18.8525 291.797 17.6585 288.643 17.6585C284.994 17.6585 283.51 19.4809 283.139 22.246H275.656C275.78 15.8361 279.243 11.3743 289.014 11.3743C298.661 11.3743 302 15.7733 302 23.5656V43.1094ZM293.899 31.358L293.961 27.9646C293.157 28.7815 291.735 29.2214 288.766 29.787C284.19 30.6667 282.706 31.9864 282.706 34.6258C282.706 36.9509 284.067 38.0821 286.602 38.0821C290.745 38.0821 293.837 35.0028 293.899 31.358Z" fill="white"/>
  <path d="M259.399 44.7207C259.646 44.7207 259.893 44.7158 260.138 44.7061L252.852 56L255.544 44.315C256.788 44.5809 258.077 44.7207 259.399 44.7207Z" fill="#9E94E0"/>
</svg></h1>
<p>Saldo x Endereçamento</p>
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
              value="Rede Informática / Filial Andradina - SP"
              checked={filial === "Rede Informática / Filial Andradina - SP"}
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
            <input
              type="checkbox"
              name="filial"
              value="Rede Informática / Filial Três Lagoas - MS"
              checked={filial === "Rede Informática / Filial Três Lagoas - MS"}
              onChange={handleChange}
            />
            <p>Três Lagoas</p>
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
            identificadas diferenças de saldos nos armazéns.
          </div>
          <div className="emailTitle">
            Nome do Arquivo <i className="fa-solid fa-box-archive"></i>{" "}
          </div>
          <div className="titleText">
            CONFRONTO DE SALDOS ATUAL X ENDEREÇO_{dataFormatada}_{namePast}
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
