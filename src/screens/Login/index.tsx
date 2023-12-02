import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

export const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Perigoso Flix</Text>
      </View>
      
      <View style={styles.containerInput}>
        <TextInput 
          placeholder="Login" 
          style={styles.input}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Password" 
          style={styles.input}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

