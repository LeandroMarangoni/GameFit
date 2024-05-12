import React, { useState } from 'react';
import { Button, Dimensions, Text, TextInput, View } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebaseConfig'

import styles from './styles';
import CircleImage from '../../components/CircleImage'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const screenWidth = Dimensions.get('window').width;
    const diameter = screenWidth / 100;

    const handleLogin = async () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user")
                navigation.navigate('Home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <CircleImage diameter={diameter*50} color="white"></CircleImage>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={"#8E8E8E"}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInputs}
                />
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor={"#8E8E8E"}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.textInputs}
                />
                <Button title="Login" onPress={handleLogin} />
            </View>
            <View style={styles.subContainer}>
                <Button title="Register" onPress={() => navigation.navigate('Register')} />
            </View>
        </View>
    );
};

export default LoginScreen;