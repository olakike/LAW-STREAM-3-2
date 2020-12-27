import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground, 
    ActivityIndicator
} from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { auth } from '../config/firebase';


const signinValidationSchema = yup.object().shape({
    email: yup.string()
        .required('Required')
        .email('Invalid Email'),
    password: yup.string()
        .required('Password is required')
});


const Signin = ({navigation}) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async ( values ) => {
        setIsLoading(true);
        try {
            const { email, password } = values;
            const { user } = await auth.signinWithEmailandPassword(email, password);
            navigation.navigate('Dashboard');
            console.log(user);
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setErrorMsg('Invalid email address or password');
                setIsLoading(false);
            }
            if (error.code === 'auth/wrong-password') {
                setErrorMsg('Invalid email address or password');
                setIsLoading(false);
            }
        }
    }
    

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/backgroundpic.jpg')} style={styles.backgroundImage}>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => handleLogin(values)}
                    validationSchema={signinValidationSchema}
                > 
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View style={styles.body}>

                            <Text style={styles.text3}> Welcome  </Text>

                            <Text style={styles.text}> Login to Continue </Text>

                            <TextInput
                                style={styles.input}
                                placeholder='Enter valid email'
                                placeholderTextColor="grey"
                                keyboardType='email-address'
                                autoCapitalize='none'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                onKeyPress={() => setErrorMsg('')}
                            />
                            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                            
                            <TextInput
                                style={styles.input}
                                placeholder='Please enter valid password'
                                autoCapitalize='none'
                                placeholderTextColor="grey"
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                onKeyPress={() => setErrorMsg('')}
                            />
                            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                            
                            {isLoading ? (
                                <TouchableOpacity onPress={ handleSubmit }  style={styles.button}>
                                    <ActivityIndicator size="small" color="orange " />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={ handleSubmit } style={styles.button} >
                                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Dashboard')}> Enjoy Your Learning </Text>
                                </TouchableOpacity>
                            )}    

                            <Text style={styles.textForgotPassword} onPress={() => navigation.navigate('ForgotPassword')}> Forgot Password? </Text>

                            <Text> Don't have an account yet? <Text style={styles.textSignup} onPress={() => navigation.navigate('Signup')}> Sign up </Text> </Text>

                        </View>

                    )}    

                </Formik> 

            </ImageBackground>    

        </View>
    )
};


export default Signin;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        paddingBottom: 60
    },
    input: {
        width: 350,
        height: 50,
        borderColor: '#477A71',
        borderWidth: 1,
        marginBottom: 20,
        paddingStart: 8,
        borderRadius: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#477A71',
        width: 250,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 20
    },
    buttonText: {
        color: 'orange',
        fontWeight: 'bold',
        margin: 10,
    },
    textForgotPassword: {
        color: 'orange',
        paddingBottom: 5,
        marginTop: 50
    },
    textSignup: {
        color: 'orange',
        fontWeight: 'bold'
    },
    errorText: {
        color: 'orange',
        width: "100%",
        textAlign: 'left',
        paddingLeft: 30
    }
});
