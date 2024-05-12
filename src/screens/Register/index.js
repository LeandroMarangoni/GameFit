import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebaseConfig'

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.goBack()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <View>
            <Text>Email:</Text>
            <TextInput
                placeholder="Digite seu email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Text>Senha:</Text>
            <TextInput
                placeholder="Digite sua senha"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Sign Up" onPress={ handleLogin } />
            <Button title="Sign In" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default RegisterScreen;