import React from 'react';
import {
  SafeAreaView,
  Button,
  View,
  Text,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as Keychain from 'react-native-keychain';
import user from '../../assets/data/userData';
import styles from './style';
const Login = ({ navigation }) => {
  const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email').required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required')
  });

  const loginSubmit = async ({ email, password }) => {
    console.log('email : ', email);
    if (user.email === email.toLowerCase() && user.pass === password) {
      await Keychain.setGenericPassword(email, password);
      navigation.navigate('Bottom');
    } else {
      Alert.alert('Email ya da Şifre Yanlış');
    }
  };
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <Text>Instagram</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => loginSubmit(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
              <>
                <TextInput
                  name='email'
                  placeholder='Email Address'
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <TextInput
                  name='password'
                  placeholder='Password'
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <Button onPress={handleSubmit} title='LOGIN' disabled={!isValid} />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
