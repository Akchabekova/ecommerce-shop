import React from 'react';
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import Announcement from "../../components/Announcement";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import {ButtonTemplate} from "../../mixines/mixines";

const Container = styled.div`
  background-color: rgba(245, 245, 245, 0.94);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const SignIn = styled.div`
width: 30%;
  padding: 30px 0;
margin: 20px 0;
  height: 400px;
`;
const SignInTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
`;
const SignInInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Input = styled.input`
  margin-bottom: 10px;
  padding: 15px 25px;
  flex: 5;
  border-radius: 4px;
  border: 1px solid darkcyan;
`;
const SignInSubtitle = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;
  color:#625e5e;
  :hover{
    color: black;
  }
`;
const Button = styled.button`
${ButtonTemplate};
  width: 100%;
`;
const CreateAccount = styled.div`
  width: 30%;
  margin-bottom: 40px;


`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const CreateAccTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

const Errors = styled.div`
    margin-bottom: 5px;
    color: red;
`;


const Register = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, "Your password is too short.").required('Password is required'),
            passwordConfirmation: Yup.string().min(6, "Your password is too short.")
                .oneOf([Yup.ref("password"), null], "Password must match").required('Password is required'),
        }),
        onSubmit: values => {
            console.log(values)
            // alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <Announcement/>
            <Header/>
           <Container>
               <SignIn>
              <SignInTitle>
                  CUSTOMER LOGIN
              </SignInTitle>
                   <SignInInput>
                       <Input placeholder="E-mail" />
                       <Input placeholder="Password" />
                   </SignInInput>
                   <SignInSubtitle>
                       Forgot Your Password?
                   </SignInSubtitle>
                   <Button>
                       LOGIN
                   </Button>
               </SignIn>
               <CreateAccount>
                   <CreateAccTitle>REGISTER</CreateAccTitle>
                   <Form onSubmit={formik.handleSubmit}>
                   {/*<Input placeholder="First Name" />*/}
                   {/*<Input placeholder="Last Name" />*/}
                   <Input placeholder="E-mail" id="email"
                          type="email" {...formik.getFieldProps('email')} />
                          {formik.touched.email && formik.errors.email ? (
                              <Errors>{formik.errors.email}</Errors>
                          ) : null}
                   <Input placeholder="Password" id="password"
                          type="text" {...formik.getFieldProps('password')}/>
                       {formik.touched.password && formik.errors.password ? (
                           <Errors>{formik.errors.password}</Errors>
                       ) : null}
                    <Input placeholder="Confirm password" id="passwordConfirmation"
                           type="text" {...formik.getFieldProps('passwordConfirmation')}/>
                       {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                           <Errors>{formik.errors.passwordConfirmation}</Errors>
                       ) : null}
                   </Form>
                   <Button type="submit" >CREATE ACCOUNT</Button>
               </CreateAccount>
           </Container>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Register;