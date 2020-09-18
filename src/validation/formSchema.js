import * as yup from 'yup'

export default yup.object().shape({
    size: yup.string()
    .required("input field cant be empty")
    .min(2,"Username can be empty"),
    specialInstructions: yup.string()
    .min(0,"Username must be at least 0 character"),
    name: yup.string().min(2,"name must be at least 2 chars"),
    //checkbox

    // use oneOf if you have a selction as so 
    // .oneOf([entry,entry,entry])
    // checkbox
    specialSauce: yup.boolean().oneOf([true,false], "Must Accept All"
    ),
    mysterySauce:yup.boolean().oneOf([true,false], "Must Accept Terms of Service"),
    originalRed: yup.boolean().oneOf([true,false], "Must Accept Terms of Service"),
    bbqSauce:yup.boolean().oneOf([true,false], "Must Accept Terms of Service"),
    spinachAlfredo: yup.boolean().oneOf([true,false], "Must Accept Terms of Service"),
    //submit

    pepperoni:yup.boolean().oneOf([true,false], "Must Accept Terms of Service"),
    sausage:yup.boolean().oneOf([true,false], "Must Accept Terms of Service"),
    bacon:yup.boolean().oneOf([true,false], "Must Accept Terms of Service"),
    onions:yup.boolean().oneOf([true,false], "Must Accept Terms of Service"),
})