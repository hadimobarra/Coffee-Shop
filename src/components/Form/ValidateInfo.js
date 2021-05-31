export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username) {
      errors.username = 'لطفا نام خود را وارد نمایید';
    }
    else if (!/^[A-Za-z]+/.test(values.name)) {
      errors.name = 'ورودی صحیح نمی باشد';
    }
  
    if (!values.email) {
      errors.email = 'لطفا ایمیل خود را وارد نمایید';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'ایمیل نامعتبر است';
    }
    if (!values.password) {
      errors.password = 'لطفا رمز خود را وارد نمایید';
    } else if (values.password.length < 6) {
      errors.password = 'رمز عبور باید حداقل شامل شش حرف باشد';
    }
  
    if (!values.password2) {
      errors.password2 = 'لطفا رمز عبور را دوبارهه وارد نمایید';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'رمز عبور یکسان نیست!';
    }
    return errors;
  }