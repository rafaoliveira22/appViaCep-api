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
            valorCep : 0
        };
    }


    //DIDMOUNT - DEPOIS QUE O APLICATIVO FOR INICIADO,ELE EXECEUTA
    async componentDidMount(){
        const response = await api.get('06520620/json');

        let cep = response.data['cep'];

        this.setState({
            valorCep:cep
        });
    }


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
                        placeholderTextColor="#AAAAAA"/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Consultar</Text>
                    </TouchableOpacity>
                </View>

                {/*RESULTADOS*/}
                <ScrollView style={styles.result}>
                    <Text style={styles.titleResult}>Resultado</Text>
                    
                    <Text style={styles.resultConsult}>Rua</Text>
                    <Text style={styles.resultConsult}>Bairro: </Text>
                    <Text style={styles.resultConsult}>Cidade: </Text>
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
    result:{
        alignSelf:'center'
    },

    titleResult:{
        fontSize:26,
        fontWeight:'bold',
        color:'#353535',
        marginTop:20
    },

    resultConsult:{
        fontSize:24,

        borderRadius:15,
        borderWidth:2,
        borderColor:'#3065AC',
        padding:20,
        marginTop:10,
        width:350,
        backgroundColor:'#fff'
    }
});



