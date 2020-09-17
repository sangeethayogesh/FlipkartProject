import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import axios from 'axios'

function AdminPage() {
  const { register, errors, handleSubmit, Unregister } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://clanizon-ecommerce.getsandbox.com/products', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    

    <div className="form_hole">

      <div className="form-one ">

        <form onSubmit={handleSubmit(onSubmit)} className="form_handle" >
        <div className="label_form">
            <label>Category:</label>
            <input name="category" ref={register({ required: true, maxLength: 30 })} />
            {errors.category && <span class="error-msg">  Must be  Category required</span>}
          </div>
          <div className="label_form">
            <label className="form-input-head">Name:</label>
            <input name="name" type="text" id="name1" ref={register({ required: true })} />
            {errors.name && <span class="error-msg"> Must be name required</span>}
          </div>
          <div className="label_form">
            <label>Ratings:</label>
            <input name="ratings" id="ratings1" type="number" ref={register({ required: true, min: 1, max: 5 })} />
            {errors.ratings && <span class="error-msg">  Must be  valid Ratings required </span>}
          </div>
          <div className="label_form">
            <label>Color:</label>
            <select className="select_box " name="color" ref={register({ required: true })}>
              <option value="">Choose your Color</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="White">White</option>
            </select>
            {errors.color && <span class="error-msg">Must be  Color required</span>}
          </div>
          <div className="label_form">
            <label>Price:</label>
            <input name="price" type="number" ref={register({ required: true })} ></input>
            {errors.price && <span class="error-msg">Must be  Price required</span>}
          </div>
          <div className="label_form">
            <label>OfferPercentage:</label>
            <input name="offerPercentage" type="number" ref={register({ required: true, min: 1, max: 100 })} />
            {errors.offerPercentage && <span class="error-msg"> Must be  valid Percenatge required</span>}
          </div>
          <div className="label_form">
            <label className="form-input-head">Available:</label>
            <input name="available" type="number" ref={register({ required: true })} />
            {errors.available && <span class="error-msg"> Must be available Number required</span>}
          </div>
          <div className="label_form">
          <label className="form-input-head">Description:</label>
          <textarea className = "text_box" name="description" ref={register} />
          {errors.description && <span class="error-msg"> Must be description required</span>}
          </div>
          <div className="label_form">
            <label>Image:</label>
            <input ref={register({ required: true })} type="file" name="picture" />
            {errors.picture && <span class="error-msg"> Image must be uplaod</span>}
          </div>
          <label className="comp-label">Comapany:</label>
          <div className="label_form">
            <label>Name:</label>
            <input name="company.name" id ="name2" type="text" ref={register({ required: true })} />
            {errors.company && <span class="error-msg"> Must be  name required</span>}
          </div>
          <div className="label_form">

            <label>Ratings:</label>
            <input name="company.ratings" type="number" id="rating2" ref={register({ required: true, min: 1, max: 5 })} />
            {errors.company && <span class="error-msg"> Must be  valid ratings required</span>}
          </div>
          <div className="label_form">
            <label>Email:</label>
            <input name="company.email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })} />
            {errors.company && <span class="error-msg">Valid email must  be required</span>}
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
