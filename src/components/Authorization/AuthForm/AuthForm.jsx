import {useNavigate} from "react-router-dom";
import {Formik} from "formik";
import InputMask from "react-input-mask";
import React from "react";
import style from "./AuthForm.module.scss";

const AuthForm = () => {
    const navigate = useNavigate();

    return <div className={style.formWrapper}>
        <Formik
            initialValues={{ phone: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                navigate("/requests");
                setSubmitting(false);
            }}
            validate={values => {
                const phone = values.phone.replace(/[^+\d]/g, '');
                const errors = {};
                if (phone.length !== 13 || !values.password || /[А-ЯЁ][а-яё]/i.test(values.password)) {
                    errors.password = 'Неправильный номер телефона или пароль';
                }
                return errors;
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="phone">Номер телефона:</label>
                    <InputMask
                        type="tel"
                        name="phone"
                        mask="+38 (999) 999 9999"
                        placeholder="+38 (___) ___ ____"
                        onChange={handleChange}
                        value={values.phone}
                    />
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        value={values.password}
                    />
                    <span className={style.error}>
                        {errors.password && touched.password && errors.password}
                    </span>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
}

export default AuthForm;