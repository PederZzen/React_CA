import * as yup from 'yup'

export const schema = yup 
 .object({
    fullName: yup
     .string()
     .min(3, 'Minimum 3 characters')
     .required("Please enter your name"),
    subject: yup
     .string()
     .min(3, 'Minimum 3 characters')
     .required("Please fill in subject"),
    email: yup //HUSK REGEX!!!
     .string()
     .matches("espen@espen.no")
     .required("Please fill in email"),
    body: yup
     .string()
     .min(3, "Minimum 3 characters")
     .required("Please enter a message")
 })
 .required()