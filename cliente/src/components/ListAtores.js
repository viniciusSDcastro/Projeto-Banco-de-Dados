import React, { Fragment, useEffect, useState } from "react";

import EditAtor from "./EditAtor";

const ListAtores = () => {
  console.log('AAA')
    const [atores, setAtores] = useState([]);
    const BaseUrl = "https://expressjs-postgres-production-cece.up.railway.app"
    const deleteAtor = async id => {
      try {
        const atorDeletado = await fetch(`${BaseUrl}/ator/${id}`, {
          method: "DELETE"
        });
        console.log(atorDeletado.status)
        if(atorDeletado.status === 500){
          alert('não é possivel deletar ator porque ator existe na tabela elenco')
        }
        else{
          setAtores(atores.filter(ator => ator.id !== id));
        }
        
      } catch (err) {
        console.error(err.message);
      }
    };

    const getAtores = async () => {
        try {
          const response = await fetch(`${BaseUrl}/ator`);
          const jsonData = await response.json();
    
          setAtores(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
      useEffect(() => {
        getAtores();
      }, []);
      console.log(atores)
      return (
        <Fragment>
          {" "}
          <table class="table mt-5 text-center">
            <thead>
              <tr>
                <th>id</th>
                <th>ator/atriz</th>
                <th>País</th>
                <th>Idade</th>
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
              {atores.map(ator => (
                
                <tr key={ator.id}>
                  <td>{ator.id}</td>
                  <td>{ator.nome}</td>
                  <td>{ator.pais}</td>
                  <td>{ator.idade}</td>
                  <td>
                  <EditAtor ator={ator} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAtor(ator.id)}
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
}

export default ListAtores;