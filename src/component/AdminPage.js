import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

const schema = yup.object().shape({
  picture: yup
    .mixed()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 2000000;
    })
    .test("type", "We only support jpeg", (value) => {
      return value && value[0].type === "image/jpeg";
    }),
});

function AdminPage() {
  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema,
    mode: "onBlur",

  });

  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = data => {
    console.log(data);
  };

  const onSubmitEmail = data1 => {
    console.log(data1);
  };

  return (

    <div className="form_hole">
      <div className="form-one ">

        <form key={1} onSubmit={handleSubmit(onSubmit)} className="form_handle" >
          <div className="label_form">
            <label className="form-input-head">Name:</label>
            <input name="name" type="text" ref={register({ required: true })} />
            {errors.name && <span class="error-msg"> Must be name required</span>}
          </div>
          <div className="label_form">
            <label className="form-input-head">Available:</label>
            <input name="available" type="number" ref={register({ required: true })} />
            {errors.available && <span class="error-msg"> Must be available Number required</span>}
          </div>
          <div className="label_form">
            <label>Image:</label>
            <input ref={register({ required: true })} type="file" name="picture" />
            {errors.picture && <span class="error-msg"> Image must be uplaod</span>}
          </div>
          <div className="label_form">
            <label>Price:</label>
            <input name="price" type="number" ></input>
            {errors.price && <span class="error-msg">Must be  Price required</span>}
          </div>
          <div className="label_form">
            <label>Color:</label>
            <select className="select_box " name="color" ref={register({ required: true })}>
              <option value="">Choose your Color</option>
              <option value="color">Red</option>
              <option value="color">Green</option>
              <option value="color">Blue</option>
              <option value="color">Yellow</option>
              <option value="color">White</option>
            </select>
            {errors.color && <span class="error-msg">Must be  Color required</span>}
          </div>
          <div className="label_form">
            <label>Category:</label>
            <input name="category" ref={register({ required: true, maxLength: 30 })} />
            {errors.category && <span class="error-msg">  Must be  Category required</span>}
          </div>
          <div className="label_form">
            <label>Ratings:</label>
            <input name="ratings" type="number" ref={register({ required: true, min: 1, max: 5 })} />
            {errors.ratings && <span class="error-msg">  Must be  valid Ratings required </span>}
          </div>
          <div className="label_form">
            <label>OfferPercentage:</label>
            <input name="OfferPercentage" type="number" ref={register({ required: true, min: 1, max: 100 })} />
            {errors.OfferPercentage && <span class="error-msg"> Must be  valid Percenatge required</span>}
          </div>

          <div className="label_form_btn">
            <button>Submit</button>
          </div>
        </form>
      </div>

      <div className="formtwo">

        <form key={2} onSubmit={handleSubmit2(onSubmitEmail)} className="form_handle">


          <label className="comp-label">Comapany:</label>
          
          <div className="label_form">
            <label>Name:</label>
            <input name="name" type="text" ref={register2({ required: true })} />
            {errors2.name && <span class="error-msg"> Must be  name required</span>}
          </div>
          <div className="label_form">

            <label>Ratings:</label>
            <input name="ratings" type="number" ref={register2({ required: true, min: 1, max: 5 })} />
            {errors2.ratings && <span class="error-msg"> Must be  valid ratings required</span>}
          </div>
          <div className="label_form">
            <label>Email:</label>
            <input name="email"
              ref={register2({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })} />
            {errors2.email && <span class="error-msg">Valid email must  be required</span>}
          </div>
          <div className="label_form_btn">
            <button>Submit</button>
          </div>
        </form>

      </div>
    </div>

  );
}
export default AdminPage
