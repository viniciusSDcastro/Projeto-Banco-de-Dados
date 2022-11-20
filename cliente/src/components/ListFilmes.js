import React, { Fragment, useEffect, useState } from "react";

import EditFilme from "./EditFilme";

const ListFilmes = () => {
  const [filmes, setFilmes] = useState([]);

  //delete filme function
const BaseUrl = "https://expressjs-postgres-production-cece.up.railway.app"
  const deleteFilme = async id => {
    try {
      const filmeDeletado = await fetch(`${BaseUrl}/filmes/${id}`, {
        method: "DELETE"
      });
      // console.log("filme deletado", filmeDeletado.status)
      if(filmeDeletado.status ===500){
        alert('Não é possivel deletar porque filme existe em elenco')
      }
      else{
        setFilmes(filmes.filter(filme => filme.id !== id));
      }
      
    } catch (erro) {
      alert('Linha não pode ser deletada por que filme existe na tabela elenco');
    }
  };

  const getFilmes = async () => {
    try {
      //const response = await fetch("http://localhost:5000/filmes");
      const response = await fetch("https://expressjs-postgres-production-cece.up.railway.app/filmes");
      console.log(response)
      const jsonData = await response.json();

      setFilmes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFilmes();
  }, []);

  console.log(filmes);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>filme</th>
            <th>Classificação</th>
            <th>Duracao</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {filmes.map(filme => (
            <tr key={filme.id}>
              <td>{filme.id}</td>
              <td>{filme.nome}</td>
              <td>{filme.class_indicativa}</td>
              <td>{filme.duracao}</td>
              <td>
                <EditFilme filme={filme} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteFilme(filme.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListFilmes;