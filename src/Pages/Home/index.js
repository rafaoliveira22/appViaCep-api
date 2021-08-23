import * as React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

    //navegacao pra tela Consult
    const navigation = useNavigation();
    
    function openScreenConsult(){
        navigation.navigate('Consult');
    }

  return (
    <View style={styles.container}> 
    
      <View>
        <Text style={styles.title}>O 
        <Text style={styles.title_yellow}> melhor</Text> aplicativo de consulta de <Text style={styles.title_yellow}>endereço</Text> via cep da região.</Text>
        <Text style={styles.subtitle}>Bora Conhecer?</Text>

        <Image
          style={styles.image}
          source={require('../../assets/img/imagePage.png')}
       />
      </View>
      

    
    <View style={styles.buttonContainer} >
      <TouchableOpacity 
        style={styles.button} 
        onPress={openScreenConsult}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'#3065AC',
  },

  // TITLES ---
  title:{
    color:'#fff',
    fontSize:40,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
  },

  title_yellow:{
    color:'#FDF396',
    fontSize:40,
    fontWeight:'bold',
  },

  subtitle:{
    color:'#FDF396',
    fontSize:32,
    fontWeight:'bold',
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
  },

  buttonContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20,
    marginRight:20,
  },

  // BUTTON  ---
  button:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignSelf: 'flex-end',
    backgroundColor:'#FDF396',
    borderRadius:50,

    maxHeight:67,
    width:'100%',
  },

  buttonText:{
    fontSize:30,
    fontWeight:'bold',
    color:'#3065AC',
  },

  image:{
    alignSelf:'center',

    width:350,
    height:300,
  }
});
