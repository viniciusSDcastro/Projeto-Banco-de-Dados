import React, { Fragment, useState } from "react";

const EditAtua = ({ atua }) => {
  const [filme, setFilme] = useState(atua.filme);
  const [ator, setAtor] = useState(atua.ator);
  const [personagem, setPersonagem] = useState(atua.personagem);
  const BaseUrl = "https://expressjs-postgres-production-cece.up.railway.app"
console.log(`Filme e ator em Atuação`,filme,ator)
  const updateAtua = async e => {
    e.preventDefault();
    try {
      const body = { filme, ator, personagem };
      console.log(filme, ator, personagem)
      const response = await fetch(
        `${BaseUrl}/atua/${atua.id_elenco}`,
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
        data-target={`#id_atuacao${atua.id}`}
      >
        Editar
      </button>

      <div
        class="modal"
        id={`id_atuacao${atua.id}`}
        onClick={() => setFilme(filme)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Editar Elenco</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setFilme(atua.filme)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <label>Id do Filme</label>
              <input
                type="text"
                className="form-control"
                value={filme}
                onChange={e => setFilme(e.target.value)}
              />
              <label>Id do Ator</label>
              <input
                type="number"
                className="form-control"
                value={ator}
                onChange={e => setAtor(e.target.value)}
              />
              <label>personagem</label>
               <input
                type="text"
                className="form-control"
                value={personagem}
                onChange={e => setPersonagem(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateAtua(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setFilme(atua.filme)}
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

export default EditAtua;