import React, { Fragment, useState } from "react";

const InputFilme = () => {
  const [nome, setNome] = useState("");
  const [duracao, setDuracao] = useState("");
  const [class_indicativa, setClassificao] = useState("");
  const BaseUrl = "https://expressjs-postgres-production-cece.up.railway.app"
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nome,class_indicativa, duracao };
      const response = await fetch(`${BaseUrl}/filmes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response)
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Lista de Filmes</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="nome do filme"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
         <input
            type="number"
            className="form-control ml-2"
            placeholder="classificação indicativa"
            value={class_indicativa}
            onChange={e => setClassificao(e.target.value)}
        />
        <input
            type="number"
            className="form-control ml-2"
            placeholder="duracao em minutos"
            value={duracao}
            onChange={e => setDuracao(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputFilme;