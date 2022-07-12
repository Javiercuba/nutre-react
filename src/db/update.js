import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import Modal from "@mui/material/Modal";


export default function Update() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => { setOpen(false) };
  const [id, setID] = useState(null);
  const [NomeAlimento, setNomeAlimento] = useState("");
  

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setNomeAlimento(localStorage.getItem("Nome"));
  }, []);

  const updateAPIData = () => {
    axios.put(`https://62a35d1421232ff9b21e9c6a.mockapi.io/Alimentos/${id}`, {
      NomeAlimento,
    });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Form className="create-form">
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              value={NomeAlimento}
              onChange={(e) => setNomeAlimento(e.target.value)}
            />
          </Form.Field>
          <Button type="submit" onClick={updateAPIData}>
            Update
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
