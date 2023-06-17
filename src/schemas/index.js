import * as yup from "yup"

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please Enter a valid email!").required("Required"),
    password: yup.string().min(5).required("Required"),
})