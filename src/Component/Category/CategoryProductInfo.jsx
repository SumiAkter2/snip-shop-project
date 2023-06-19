import { Link } from "react-router-dom";
import addImg from "../../assets/images/category/Vector (1).png";

const CategoryProductInfo = ({ product }) => {
  const handleToAdd = (product) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: `${product.title}` }),
    })
      .then((res) => res.json())
      .then(console.log);
    alert("Added A Product");
  };
  const handleToDelete = (product) => {
    const confirm = window.confirm("Are You Sure To Delete?");
    if (confirm) {
      fetch(`https://dummyjson.com/products/${product.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(console.log);
      alert("Deleted");
    }
  };
  return (
    <div className="w-52 mx-auto mt-20 rounded-md ">
      <img
        src={product.images[2]}
        alt="product-img"
        className="w-72 h-36 rounded-md "
      />
      <div className="w-48">
        <h1 className="font-bold mt-4">{product.title} </h1>
        <div className="flex justify-between mt-6">
          <div className="flex gap-x-3 items-center">
            <p>$ {product.price}</p>
            <p className="text-error text-xs">
              {" "}
              {product.discountPercentage}% OFF
            </p>
          </div>
          <button className="border-0 btn" onClick={() => handleToAdd(product)}>
            <img src={addImg} alt="add-button" />
            ADD{" "}
          </button>
        </div>
        <div className="flex justify-between mt-6">
          <Link to={`/${product.id}`}>
            <button className="border-0 btn btn-info">Update </button>
          </Link>
          <div className="flex gap-x-3 items-center">
            <button
              className="border-0 btn btn-error"
              onClick={() => handleToDelete(product)}
            >
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductInfo;
