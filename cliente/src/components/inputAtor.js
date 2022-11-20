import React, { Fragment, useState } from "react";

const InputAtor = () => {
    const [nome, setNome] = useState("");
    const [pais, setPais] = useState("");
    const [idade, setIdade] = useState("");
    
    const BaseUrl = "https://expressjs-postgres-production-cece.up.railway.app"
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { nome, pais, idade };
            console.log(body)
            const response = await fetch(`${BaseUrl}/ator`,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log('AAAAAAAAAAAAAAAAA')
            console.log(`RESPOSTA: ${response}`)
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Lista de Atores</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="nome do ator/atriz"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <input
            type="text"
            className="form-control ml-2"
            placeholder="país de origem"
            value={pais}
            onChange={e => setPais(e.target.value)}
        />
        <input
            type="number"
            className="form-control ml-2"
            placeholder="idade"
            value={idade}
            onChange={e => setIdade(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
        </Fragment>
    )
}

export default InputAtor;