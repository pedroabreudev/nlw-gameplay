import React from 'react';
import {
  View,
  Text

} from 'react-native';
import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile () {

    const textos = [
    "Hoje é dia de conquista!",
    "Hoje a vitória será sua!",
    "Hoje GG não escapa!",
    "Hoje é dia de ganhar!",
    "Hoje é dia de vitória!"
  ]

  const randomIndex = Math.floor(Math.random() * 5)

  const { user } = useAuth();
  console.log(user);
  return(
    <View style = {styles.container}>      
      
      <Avatar urlImage={user.avatar} />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            { user.firstName }
          </Text>
        </View>
        <Text style={styles.message}>
          { textos[randomIndex] }
        </Text>
      </View>         
    </View>
  );  
}