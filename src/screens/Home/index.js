// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../firebaseConfig'

const HomeScreen = ({  }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await auth.signOut();
    navigation.goBack();
  };

  return (
    <View>
      <Text>Bem-vindo à Tela Home!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
