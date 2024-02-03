import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Header from "./Component/header";
import DeleteIcon from "@mui/icons-material/Delete";
import { ReportGmailerrorred } from "@mui/icons-material";
function App() {
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = (event) => {
    setData([...data, form]);
    setForm(form);
    console.log("Data submitted Successfully");
    // setName("");
    //setEmail("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <>
      <div className="App">
        <Header Title="Keep Records" />
        <div className="form">
          <Stack direction="row" spacing={2}>
            <TextField
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              id="outlined-basic"
              label="name"
              variant="outlined"
            />
            <TextField
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              id="outlined-basic"
              label="email"
              variant="outlined"
            />
            <Button
              className=""
              onClick={addData}
              variant="contained"
              color="success"
            >
              ADD
            </Button>
          </Stack>
        </div>

        <div className="data">
          <div className="data-val">
            <h4>Name</h4>
            <h4>email</h4>
            <h4>Remove</h4>
          </div>
          {data.map((element, index) => {
            return (
              <div key={index} className="data-val">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Button
                  onClick={() => removeItem(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
