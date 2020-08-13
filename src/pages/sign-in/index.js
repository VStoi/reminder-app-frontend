import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from 'antd';
import { Link } from "react-router-dom";
import { signInAction } from "../../redux/actions";
import { useDispatch } from "react-redux";
import {connect} from "react-redux";

import "./sign-in.scss"


const SignInPage = ({signIn}) => {
    const dispatch = useDispatch();
     const validateSchema = Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6)
                .max(50)
                .required("Required")
        })
    const handleSubmit = (data) => {
         dispatch(signInAction(data))
    }
    return (
        <div className="sign-in-wrapper">
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validateSchema}
                onSubmit={handleSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <p className="Sign_in__input_label">Email</p>
                        <Input
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <div className="error">{errors.email && touched.email && errors.email}</div>
                        <p className="Sign_in__input_label">Password</p>
                        <Input
                            type="password"
                            name="password"
                            placeholder="******"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <div className="error">{errors.password && touched.password && errors.password}</div>
                        <Button className="Sign_in__submit" type="primary" onClick={handleSubmit} disabled={signIn.isLoading}>
                            Submit
                        </Button>
                        <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                    </form>
                )}
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {signIn} = state;
    return {
        signIn: signIn
    }
};

export default connect(mapStateToProps)(SignInPage);