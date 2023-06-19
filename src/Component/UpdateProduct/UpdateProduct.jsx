import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {

    const products = useLoaderData();
    const [product, setProduct] = useState([])
    // console.log(product.products,product.title);
    const {
    register,
    // formState: { errors },
    handleSubmit,
    } = useForm();
    
     products.map(p => {
            setProduct(p);
        console.log(product)});
    // const onSubmit = (data) => {
       
//   fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({data})
// })
//         .then(res => res.json())
//         .then(console.log);
//         alert('Added A Product')
//   };
    return (
        <div>
              <div className="hero min-h-screen">
  <div className="hero-overlay bg-black bg-opacity-20"></div>
            <div className='border p-8 rounded-md shadow-2xl'>
              
{product.title}
                     <form className="" onSubmit={handleSubmit(onSubmit)} >
                 
                   <h1 className='tittle'>Add A Product</h1>
                      <input
                        type="text"
                        name="Name" 
                           defaultValue={`${product.title}`}
                        className="input input-bordered input-info w-full max-w-xs   my-4"
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
                    <label className="label">
                        Choose a Image</label>
                    <input
                        // onChange="readURL(this);"
                       type="file"
                        name="Image"
                        placeholder="Choose Image"
                        className="input input-bordered input-info w-full max-w-xs "
                        {...register("Image", { required: true })}
                      />
                   <br />
                      {/* <span className="label-text-alt text-error ">
                        {errors.Image?.type === "required" &&
                          "!Image is required"}
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