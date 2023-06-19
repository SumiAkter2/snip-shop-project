import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  useParams } from "react-router-dom";

const UpdateProduct = () => {
    const id = useParams();
    console.log(id);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
        .then(data=>console.log(data))
        },
     [id])
    console.log(fetch);

    const {
    register,
    // formState: { errors },
    handleSubmit,
    } = useForm();
    
const onSubmit = (data) => {     
  fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title:`${data.Name}`})
})
        .then(res => res.json())
        .then(console.log);
        alert('Update Product');
  };
    return (
        <div>
              <div className="hero min-h-screen">
  <div className="hero-overlay bg-black bg-opacity-20"></div>
            <div className='border p-8 rounded-md shadow-2xl'>
              

                    <form className=""
                        onSubmit={handleSubmit(onSubmit)}>
                      <h1 className='tittle'>Update Product</h1>
                      <input
                        type="text"
                            name="Name" 
                            defaultValue={id.id}
                        // placeholder="Name"
                        className="input input-bordered input-info w-full max-w-xs my-4"
                        {...register("Name", { required: true })}
                      />

                      {/* <span className="label-text-alt text-error ">
                        {errors.Name?.type === "required" &&
                          "!Name is required"}
                      </span> */}
                   <br />
                      <input
                        type="text"
                        name="Price"
                        placeholder="Type Price"
                        className="input input-bordered input-info w-full max-w-xs"
                        {...register("Price", { required: true })}
                      />

                      {/* <span className="label-text-alt text-error ">
                        {errors.Price?.type === "required" &&
                          "!Price is required"}
                      </span> */}
                   
                   <br />
                 <button className="btn btn-active rounded-md btn-info mt-4">Add Now</button>
                </form>
               
                </div>
 
 
</div>
        </div>
    );
};

export default UpdateProduct;