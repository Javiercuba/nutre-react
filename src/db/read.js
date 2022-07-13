import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./../firebase-config";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const [food, setFood] = useState([]);
  const usersCollectionRef = collection(db, "foodconsumed");

  useEffect(() => {
    const getMeals = async () => {
      const data = await getDocs(usersCollectionRef);
      setFood(data.docs.map((doc) => ({ ...doc.data(), idUser: doc.id })));
    };
    getMeals();
  }, []);

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

  const onDelete = async (id) => {
    const foodDoc = doc(db, "foodconsumed", id);
    await deleteDoc(foodDoc);
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
          {food.map((data) => (
            <tr>
              <td align="center">{data.Name}</td>

              <td>
                {" "}
                <Button onClick={() => setData(data)}>Modificar</Button>
              </td>
              <td>
                {" "}
                <Button
                  aria-label="delete"
                  onClick={() => onDelete(data.idUser)}
                >
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
