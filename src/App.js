import logo from "./logo.svg";
import "./Bootstrap.css";
import "./App.css";
import React from "react";
import Plant from "./components/Plant";

function App() {
  const [formData, setFormData] = React.useState({
    name: "",
    imageUrl: "",
    price: 0,
  });

  const [plants, setPlants] = React.useState([]);
  const [totalQTYs, setTotalQTYs] = React.useState(0)

  function handleOnChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPlants((previousData) => [...previousData, formData]);

    // setPlants(
    //   [...plants, formData]
    // )
  }

  const plantCards = plants.map((plant, index) => (
    <Plant key={index + 1} plant={plant} setTotalQTYs={setTotalQTYs}/>
  ));

  return (
    <>
    <h1 className="text-center">Total QTY: {totalQTYs}</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          className="form-control m-2"
        />
        <input
          placeholder="Image URL"
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleOnChange}
          className="form-control m-2"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleOnChange}
          className="form-control m-2"
        />
        <button type="submit" className="btn btn-success btn-sm mx-2">Add Plant</button>
      </form>

      <div className="row">
      {plantCards}
      </div>
    </>
  );
}

export default App;
