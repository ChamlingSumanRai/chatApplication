import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

// import { useState } from 'react-redux';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
// import {TwoWheeler} from '@mui/icons-material';
// import {HailSharp} from '@mui/icons-material';
// import { useSelector } from 'react-redux';

const Register = ( )=> {

  // const z = useSelector(state=>state.user)
  // console.log(z)
  
// const [role, setRole]= useState('user')  
  
    return (  
        <div>
    
      
        <Formik
          initialValues={{
            fullName: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            role: ''
                    }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/register', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>

              <Field name="fullName" placeholder="fullName"/>
              {errors.fullName && touched.fullName ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field name="phoneNumber" placeholder="phoneNumber"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field name="password" placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>
              <Field name="confirmPassword"  placeholder="confirmPassword"/>
              {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
              <br/>
              <Field name="role" placeholder="role"/>
              {errors.role && touched.role? (
                <div>{errors.role}</div>
              ) : null}
              <br/>
              
              {/* <Stack direction="row" spacing={1}>
              <Chip icon={<TwoWheeler />} label="Rider" onClick = {()=> setRole('rider')} color = {role == 'passenger'? 'primary': 'success'} />
               <Chip icon={<HailSharp />} label="Passenger" variant="outlined" color = {role == 'rider'? 'primary': 'success'} onClick = {()=> setRole('passenger')} />
               
               </Stack> */}

              <button type="submit">Submit</button>
              Already User <Link href="/">Signin</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register