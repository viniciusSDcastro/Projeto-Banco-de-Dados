import React, { Fragment, useState } from "react";

const EditFilme = ({ filme }) => {
  const [nome, setNome] = useState(filme.nome);
  const [class_indicativa, setClassificao] = useState(filme.class_indicativa);
  const [duracao, setDuracao] = useState(filme.duracao);
  console.log('Tá entrando aqui!!!!')
  const BaseUrl = "https://expressjs-postgres-production-cece.up.railway.app"
  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { nome , class_indicativa, duracao };
      console.log(body)
      const response = await fetch(
        `${BaseUrl}/filmes/${filme.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${filme.id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${filme.id}`}
        onClick={() => setNome(nome)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Filme</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setNome(filme.nome)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <label>Nome do Filme</label>
              <input
                type="text"
                className="form-control"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
              <label>Classificação Indicativa</label>
              <input
                type="number"
                className="form-control"
                value={class_indicativa}
                onChange={e => setClassificao(e.target.value)}
              />
              <label>Duração</label>
              <input
                type="number"
                className="form-control"
                value={duracao}
                onChange={e => setDuracao(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setNome(filme.nome)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditFilme;