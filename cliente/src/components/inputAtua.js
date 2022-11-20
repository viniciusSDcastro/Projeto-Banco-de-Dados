import React, { Fragment, useState } from "react";

/*
response
*/

const InputAtua = () => {
    const [filme, setFilme] = useState("");
    const [ator, setAtor] = useState("");
    const [personagem, setPersonagem] = useState("");
    const BaseUrl = "https://expressjs-postgres-production-cece.up.railway.app"
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            //setFilme(parseInt(filme))
            //setAtor(parseInt(ator))
            const body = { filme, ator, personagem };
            //console.log(`filme = ${typeof filme}`)
            //console.log(`ator = ${ator}`)
            //console.log(`personagem = ${personagem}`)
            const response = await fetch(`${BaseUrl}/atua`,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response.status)
            if(response.status == 500){
                alert('os valores inseridos não existem ou na tabela filme ou ator ')
            }
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Lista de Elenco</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="number"
          className="form-control"
          value={filme}
          placeholder="id do filme"
          onChange={e => setFilme(e.target.value)}
        />
        <input
            type="number"
            className="form-control ml-2"
            placeholder="id do ator/atriz"
            value={ator}
            onChange={e => setAtor(e.target.value)}
        />
        <input
            type="text"
            className="form-control ml-2"
            placeholder="nome do personagem"
            value={personagem}
            onChange={e => setPersonagem(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
        </Fragment>
    )
}

export default InputAtua;