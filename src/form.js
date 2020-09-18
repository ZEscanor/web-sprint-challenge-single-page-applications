import React from 'react';


export default function Form (props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props



    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        //we do this because the value checkbox returns is "ON" and not true so we need to have a use case
        const {name, value, type, checked} = evt.target
        const valueToUse = type === "checkbox" ? checked:value;
        change(name,valueToUse);
    }
     
    return(
        <form className="form container" onSubmit={onSubmit}>
            <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
       <div className="header">Build Your Own Pizza</div>
       
       <div className="size"> Size O' Pizza:
       
       <select name='size' value={values.size} onChange = {onChange} >
             <option value="">--SELECT PIZZA SIZE YO--</option>
             <option value="Small">Small</option>
             <option value="Medium">Medium</option>
             <option value="Large">Large</option>

           </select>
       
      </div>
       <div className='form-group checkboxes'>
        <label>Special Sauce
            <input
            type="checkbox"
            name= "specialSauce"
            checked = {values.specialSauce}
            onChange = {onChange}
            />
        </label>

        <label>Mystery Sauce
            <input
            type="checkbox"
            name= "mysterySauce"
            checked = {values.mysterySauce}
            onChange = {onChange}
            />
        </label>

        <label>BBQ Sauce
            <input
            type="checkbox"
            name= "bbqSauce"
            checked = {values.bbqSauce}
            onChange = {onChange}
            />
        </label>

        <label>spinachAlfredo
            <input
            type="checkbox"
            name= "spinachAlfredo"
            checked = {values.spinachAlfredo}
            onChange = {onChange}
            />
        </label>
        </div>
        <div className="toppings">

        <label>Pepporoni
            <input
            type="checkbox"
            name= "pepperoni"
            checked = {values.pepperoni}
            onChange = {onChange}
            />
        </label>

        <label>Sausage
            <input
            type="checkbox"
            name= "sausage"
            checked = {values.sausage}
            onChange = {onChange}
            />
        </label>

        <label>Bacon
            <input
            type="checkbox"
            name= "bacon"
            checked = {values.bacon}
            onChange = {onChange}
            />
        </label>
        <label> Onions
            <input
            type="checkbox"
            name= "onions"
            checked = {values.onions}
            onChange = {onChange}
            />
        </label>
        <label>Special Instructions
          <input
            value={values.specialInstructions}
            onChange={onChange}
            name='specialInstructions'
            type='text'
          />
        </label>
        <label>Name:
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        </div>
        <button className="button" disabled={disabled}>Submit</button>
        </form>

    )
}