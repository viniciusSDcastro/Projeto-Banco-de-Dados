import React, { Fragment, useEffect, useState } from "react";
import EditAtua from "./EditAtua";


const ListAtua = () => {
  console.log('AAA')
    const [listaAtua, setListaAtua] = useState([]);
    const BaseUrl = "https://expressjs-postgres-production-cece.up.railway.app"
    const deleteAtua = async id => {
      try {
        console.log(`O ID de dentro é ${id}`)
        console.log(listaAtua)
        const deleteAtua = await fetch(`${BaseUrl}/atua/${id}`, {
          method: "DELETE"
        });
        getElenco()
      } catch (err) {
        console.error(err.message);
      }
    };

    const getElenco = async () => {
        try {
          const response = await fetch(`${BaseUrl}/atua`);
          const jsonData = await response.json();
          
          console.log(`dados de atuação: ${jsonData}`);
          setListaAtua(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
      useEffect(() => {
        getElenco();
      }, []);
      console.log(listaAtua)
      return (
        <Fragment>
          {" "}
          <table class="table mt-5 text-center">
            <thead>
              <tr>
                <th>filme</th>
                <th>Ator</th>
                <th>personagem</th>
                <th> Editar</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {listaAtua.map(atua => (
                <tr key={`atua${atua.id}`}>
                  <td>{atua.filme}</td>
                  <td>{atua.ator}</td>
                  <td>{atua.personagem}</td>
                  <td>
                  <EditAtua atua={atua}/>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAtua(atua.id)}
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

export default ListAtua;