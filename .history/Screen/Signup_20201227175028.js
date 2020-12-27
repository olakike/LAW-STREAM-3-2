
import React, { useState } from 'react';
import { 
    StyleSheet,
    View, 
    Text, 
    TextInput, 
    Alert,
    TouchableOpacity,
    ActivityIndicator,  
    ImageBackground 
} from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { auth } from '../config/firebase';


const signupValidationSchema = yup.object().shape({
    email: yup.string()
        .required('Required*')
        .email('Invalid Email'),
    username: yup.string()
        .required('Required*'),    
    password: yup.string()
        .required('Password is required')
        .min(6 )
});


const Signup = ({navigation}) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (values) => {
        setIsLoading(true);
        try{
            const { username, email, password } = values;
            const user = await auth.createUserWithEmailAndPassword(email, password);
            if (user) {
                const profile = firestore.collection('users').doc(user.uid);
                profile.set({
                    username,
                    email
                });
                setIsLoading(false);
                Alert.alert('User registered successfully!');
            } 
            navigation.navigate('Dashboard');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                // setErrorMsg(error.message); OR
                setErrorMsg('Email addresss already exist');
                setIsLoading(false);
            }    
        }
    }

    return (
        <View style = {styles.container}>
            <ImageBackground source={require('../assets/backgroundpic.jpg')} style={styles.backgroundImage}>

                <Formik
                    initialValues={{ email: '', username: '', password: '' }}
                    onSubmit={ values => handleSignup(values) }
                    validationSchema={ signupValidationSchema }
                > 
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View style={styles.body}>
                        
                            <Text style={styles.text}>
                                Sign Up to Get Started
                            </Text>

                            <Text style={styles.errorMsg}> {errorMsg && <Text>{errorMsg}</Text>}</Text>

                            <TextInput
                                style={styles.input}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                placeholder='abcd@gmail.com'
                                placeholderTextColor="grey"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                onKeyPress={() => setErrorMsg('')}
                            />
                            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                            <TextInput
                                style={styles.input}
                                placeholder='username'
                                autoCapitalize="none"
                                placeholderTextColor="grey"
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                onKeyPress={() => setErrorMsg('')}
                            />
                            {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

                            <TextInput
                                style={styles.input}
                                placeholder='********'
                                placeholderTextColor="grey"
                                secureTextEntry={true}
                                autoCapitalize="none"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                onKeyPress={() => setErrorMsg('')}
                            />
                            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                            
                            {isLoading ? (
                                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                                    <ActivityIndicator size="small" color="orange " />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={handleSubmit} style= {styles.button}>
                                    <Text style={styles.buttonText}> Get Started </Text>
                                </TouchableOpacity>
                            )}
                            
                            <Text style={styles.text2}> Already have an account? <Text style={styles.textSignin} onPress={() => navigation.navigate('Signin')}> Sign in </Text> </Text>
                        
                        </View> 
                           
                    )} 

                </Formik>     

            </ImageBackground>    
        </View>
    )
};


export default Signup;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        alignItems: 'center',
        justifyContent: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 60
    },
    input: {
        width: 350,
        height: 50,
        borderColor: '#477A71',
        borderWidth: 1,
        marginBottom: 20,
        paddingStart: 30,
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
    textSignin: {
        color: 'orange',
        fontWeight: 'bold'
    },
    text2: {
        marginTop: 20
    },
    errorText: {
        color: 'orange',
        width: "100%", 
        textAlign: 'left',
        paddingLeft: 30
    }, 
    errorMsg: {
        color: 'orange',
        paddingVertical: 10
    }
});