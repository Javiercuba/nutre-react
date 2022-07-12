import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import Update from "./update";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export default function Read(getIDuser) {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62a35d1421232ff9b21e9c6a.mockapi.io/Alimentos`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);
 

  const setData = (data) => {
    let { id, nome } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Nome", nome);
  };

  const getData = () => {
    axios
      .get(`https://62a35d1421232ff9b21e9c6a.mockapi.io/Alimentos`)
      .then((getData) => {
        setAPIData([...APIData,getData.data]);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62a35d1421232ff9b21e9c6a.mockapi.io/Alimentos/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="Scrool">
      <table>
        <caption>Nutrientes Selecionados</caption>
        <thead>
          <tr>
            <th scope="col">Nome do alimento</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => (
            <tr>
              <td align="center">{data.Nome}</td>

              <td>
                {" "}
                <Button onClick={() => setData(data)}>Modificar</Button>
              </td>
              <td>
                {" "}
                <Button aria-label="delete" onClick={() => onDelete(data.ID)}>
                  <DeleteIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
