import React from 'react';
import validate from './ValidateInfo';
import useForm from './useForm';
import './Form.css';


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          فرم ثبت نام
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>نام کاربری</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='نام خود را وارد نمایید'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>ایمیل</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='ایمیل خود را وارد نمایید'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>رمز عبور</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='رمز عبور خود را وارد نمایید'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>تایید رمز عبور</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='رمز عبور را دوباره وارد نمایید'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          ثبت نام
        </button>
        <span className='form-input-login'>
          حساب کاربری دارید؟ وارد شوید <a href='#'>اینجا</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;