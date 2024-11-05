export default function Plant({ plant, setTotalQTYs}) {


const handleOnQtyChange = (event)=> {
    setTotalQTYs(
        (previousQty) => previousQty + Number(event.target.value)
    )
    // setTotalQTYs(totalQTYs + Number(event.target.value))
}
  return (
    <div className="card col-3 mx-2 my-2">
      <img src={plant.imageUrl} className="card-img-top" alt={plant.name} />
      <div className="card-body">
        <h5 className="card-title">{plant.name}</h5>
        <p className="card-text">Price: {plant.price}</p>
        <p>
          {" "}
          QTY:
          <input onChange={handleOnQtyChange} type="number" className="form-control" />
        </p>
        <button className="btn btn-sm btn-success">In Stock</button>
      </div>
    </div>
  );
}
