  
import React from 'react';
import './Form.css';
import logo from '../../assets/images/c.jpg';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>ثبت نام شما با موفقیت انجام شد</h1>
      <img className='form-img-2' src={logo} alt='success-image' />
    </div>
  );
};

export default FormSuccess;