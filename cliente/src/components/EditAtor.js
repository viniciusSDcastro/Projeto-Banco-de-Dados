import React, { Fragment, useState } from "react";

const EditAtor = ({ ator }) => {
  const [nome, setNome] = useState(ator.nome);
  const [pais, setPais] = useState(ator.pais);
  const [idade, setIdade] = useState(ator.idade);
  const BaseUrl = "https://expressjs-postgres-production-cece.up.railway.app"
  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { nome, pais, idade };
      console.log(`O nome aqui é ${nome}`)
      const response = await fetch(
        `${BaseUrl}/ator/${ator.id}`,
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
        data-target={`#id_ator${ator.id}`}
      >
        Editar
      </button>

      <div
        class="modal"
        id={`id_ator${ator.id}`}
        onClick={() => setNome(nome)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Editar Ator</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setNome(ator.nome)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <label className="align-baseline">Nome</label>
              <input
                type="text"
                className="form-control mb-1"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
              <label>País</label>
              <input
                type="text"
                className="form-control mb-1"
                value={pais}
                onChange={e => setPais(e.target.value)}
              />
              <label>Idade</label>
              <input
                type="number"
                className="form-control"
                value={idade}
                onChange={e => setIdade(e.target.value)}
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
                onClick={() => setNome(ator.nome)}
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

export default EditAtor;