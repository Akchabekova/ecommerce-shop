import React from 'react';
import Announcement from "../Announcement";
import Header from "../Header";
import styled from "styled-components";
import {ButtonTemplate} from "../../mixines/mixines";
import NewsLetter from "../NewsLetter";
import Footer from "../Footer";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {signInUser} from "../../redux/slices/userSlice";

const Container = styled.div`
  background-color: rgba(245, 245, 245, 0.94);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Form = styled.form`
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
  color: #625e5e;

  :hover {
    color: black;
  }
`;
const Button = styled.button`
  ${ButtonTemplate};
  width: 100%;
`;

const Errors = styled.div`
  margin-bottom: 5px;
  color: red;
`;
const SignIn = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
       },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, "Your password is too short.").required('Password is required'),
        }),
        onSubmit: values => {
            delete values.passwordConfirmation
            dispatch(signInUser(values))
        //     axios.post("/api/auth/login", values)
        //         .then(({ data }) => console.log("successfully", data))
        //         .catch(e => console.log("failed" , e))
        },

    });
    return (
        <div>
            <Announcement/>
            <Header/>
            <Container>
                <Form onSubmit={formik.handleSubmit}>
                    <SignInTitle>
                        CUSTOMER LOGIN
                    </SignInTitle>
                    <SignInInput>
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
                    </SignInInput>
                    <SignInSubtitle>
                        Forgot Your Password?
                    </SignInSubtitle>
                    <Button type="submit" >
                        LOGIN
                    </Button>
                </Form>
           </Container>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default SignIn;