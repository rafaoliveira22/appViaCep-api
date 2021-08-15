import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';

//IMPORT API
import api from '../../services/api';


class Consult extends Component{
    constructor(props){
        super(props);

        // ESTADOS
        this.state={
            valorStreet:0,
            valorDistrict:0,
            valorCity:0
        };
    }


    // FUNÇÃO PARA CONSULTAR O CEP
    async consultCep(){
        const response = await api.get('06520620/json');
    
        //ARMAZENANDO VALOR DA API
        let street = response.data['logradouro'];
        let district = response.data['bairro'];
        let city = response.data['localidade'];
    
        this.setState({
            valorStreet:street,
            valorDistrict:district,
            valorCity:city
        });
    }//function


    //RENDERIZAÇÃO DA TELA
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Olá, seja bem vindo a página pra consulta de endereço.
                    </Text>
                    <Text style={styles.subtitle}>
                        Digite seu 
                    <Text style={styles.subGray}> Cep </Text> 
                        e clique em consultar
                    </Text>
                </View>

                <View style={styles.iconContainer}>
                    
                    <View style={styles.iconTextContainer}>
                        <Text style={styles.iconText}>Rua</Text>
                        <Text style={styles.iconText}>Bairro</Text>
                        <Text style={styles.iconText}>Cidade</Text>
                    </View>
                    
                    <View style={styles.iconImage}>
                        <Image style={styles.icon} source={require('../../assets/icon/icon-street-black.png')} />
                        <Image style={styles.icon} source={require('../../assets/icon/icon-district.png')} />
                        <Image style={styles.icon} source={require('../../assets/icon/icon-city.png')} />
                    </View>

                </View>

                <View style={styles.buttonContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="CEP..."
                        placeholderTextColor="#AAAAAA"
                        keyboardType = 'numeric'
                        />
                    <TouchableOpacity style={styles.button} onPress={this.consultCep}>
                        <Text style={styles.buttonText}>Consultar</Text>
                    </TouchableOpacity>
                </View>

                {/*RESULTADOS*/}
                <ScrollView style={styles.resultContainer}>
                    <Text style={styles.titleResult}>Resultado</Text>
                    
                    <View style={styles.result}>
                        <Image style={styles.iconResult} source={require('../../assets/icon/icon-street-black.png')} />
                        <Text style={styles.resultConsult}>Logradouro: {this.state.valorStreet}</Text>
                    </View>

                    <View style={styles.result}>
                        <Image style={styles.iconResult} source={require('../../assets/icon/icon-district.png')} />
                        <Text style={styles.resultConsult}>Bairro: {this.state.valorDistrict}</Text>
                    </View>
                
                    <View style={styles.result}>
                        <Image style={styles.iconResult} source={require('../../assets/icon/icon-city.png')} />                    
                        <Text style={styles.resultConsult}>Cidade: {this.state.valorCity}</Text>
                    </View>

                </ScrollView>
            </View>
        );
    }//render
}//class


export default Consult;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',

        backgroundColor:'#FDF396'
    },

    // TITLES ---
    title:{
        fontSize:32,
        fontWeight:'bold',
        color:'#353535',
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
        marginTop:20,

        lineHeight:50
    },

    subtitle:{
        fontSize:20,
        color:'#AAAAAA',
        marginLeft:20,
        marginRight:20,
        marginBottom:40
    },

    subGray:{
        fontSize:20,
        fontWeight:'bold',
        color:'#AAAAAA'
    },

    // ICONS ---
    iconContainer:{
        flex:1,
    },
    
    iconTextContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',

        alignItems:'center',
    },

    iconText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#3065AC',

        textAlign:'center'
    },

    iconImage:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',

        marginTop:20,
        marginBottom:60,
    },

    icon:{
        width:60,
        height:60,

        backgroundColor:'#FFF',
        borderWidth:2,
        borderColor:'#3065AC',
        borderRadius:10,
        padding:20,
    },

    // INPUT CEP ---
    input:{
        borderWidth:2,
        borderColor:'#FDF396',
        borderBottomColor:'#3065AC',

        marginTop:40,
        color:'#AAAAAA',
        fontSize:20,
        fontWeight:'bold'
    },

    // BUTTON CONSULTAR  ---
    buttonContainer:{
        marginLeft:20,
        marginRight:20
    },

    button:{
        width:'100%',
        height:67,
        backgroundColor:'#3065AC',
        alignSelf:'center',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:50,
        marginTop:40
    },

    buttonText:{
        fontSize:30,
        color:'#fff',
        fontWeight:'bold'
    },


    // RESULT ---
    resultContainer:{
        alignSelf:'center'
    },

    titleResult:{
        fontSize:26,
        fontWeight:'bold',
        color:'#353535',
        marginTop:20
    },

    resultConsult:{
        padding:20,
        fontSize:24,
    },

    result:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:15,
        borderWidth:2,
        borderColor:'#3065AC',
        marginTop:10,
        width:350,
        backgroundColor:'#fff'
    },

    iconResult:{
        width:60,
        height:60,

        marginLeft:20,
    }
});



