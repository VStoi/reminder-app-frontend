import React from "react";
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Button} from 'antd';
import {Link} from "react-router-dom";
import {signInAction, signUpActions} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";

import "./sign-up.scss"


const SignUpPage = ({signUp}) => {
    const dispatch = useDispatch();
    const validateSchema = Yup.object({
        firstName: Yup.string()
            .min(2)
            .max(50)
            .required('Required'),
        lastName: Yup.string()
            .min(2)
            .max(50)
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(6)
            .max(50)
            .required("Required")
    })
    const handleSubmit = (data) => {
        dispatch(signUpActions(data))
    }
    return (
        <div className="sign-up-wrapper">
            <Formik
                initialValues={{email: '', password: '', firstName: '', lastName: ''}}
                validationSchema={validateSchema}
                onSubmit={handleSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <p className="Sign_in__input_label">First name</p>
                        <Input
                            type="firstName"
                            name="firstName"
                            placeholder="Steve"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                        />
                        <div className="error">{errors.firstName && touched.firstName && errors.firstName}</div>
                        <p className="Sign_in__input_label">Last Name</p>
                        <Input
                            type="lastName"
                            name="lastName"
                            placeholder="Petrov"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                        />
                        <div className="error">{errors.lastName && touched.lastName && errors.lastName}</div>
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
                        <Button
                            className="Sign_in__submit"
                            type="primary"
                            onClick={handleSubmit}
                            disabled={signUp.isLoading}
                        >
                            Submit
                        </Button>
                        <p>Have an account? <Link to="/sign-in">Sign In</Link></p>
                    </form>
                )}
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {signUp} = state;
    return {
        signUp: signUp
    }
};

export default connect(mapStateToProps)(SignUpPage);