import { useForm } from 'react-hook-form';
import bg from '../../assets/images/banner/base.png'

const AddProduct = () => {

     const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
    return (
      <div className="hero min-h-screen" style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       
      }}>
  <div className="hero-overlay bg-black bg-opacity-20"></div>
            <div className='border p-8 rounded-md shadow-2xl'>
              

                     <form className="" onSubmit={handleSubmit(onSubmit)} >
                 
                   <h1 className='tittle'>Add A Product</h1>
                      <input
                        type="text"
                        name="Name" 
                        placeholder="Type Product Name"
                        className="input input-bordered input-info w-full max-w-xs   my-4"
                        {...register("Name", { required: true })}
                      />

                      <span className="label-text-alt text-error ">
                        {errors.Name?.type === "required" &&
                          "!Name is required"}
                      </span>
                   <br />
                      <input
                        type="text"
                        name="Price"
                        placeholder="Type Price"
                        className="input input-bordered input-info w-full max-w-xs   my-4"
                        {...register("Price", { required: true })}
                      />

                      <span className="label-text-alt text-error ">
                        {errors.Price?.type === "required" &&
                          "!Price is required"}
                      </span>
                   
                 <br />
                   {/* <input type='file' onchange="readURL(this);" /> */}

                    <br />
                      <input onChange="readURL(this);"
                       type="file"
                        name="Image"
                        placeholder="Choose Image"
                        className="input input-bordered input-info w-full max-w-xs   my-4"
                        {...register("Image", { required: true })}
                      />
               
                      <span className="label-text-alt text-error ">
                        {errors.Image?.type === "required" &&
                          "!Image is required"}
                      </span>
                   <br />
                     
                    
                 

                

                 <button className="btn btn-active rounded-md btn-info mt-4">Add Now</button>
                </form>
               
                </div>
 
 
</div>
    
    );
};

export default AddProduct;