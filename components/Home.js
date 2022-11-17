import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from "react-native";

const image = { uri: "https://i.pinimg.com/474x/18/f5/3c/18f53cfa9b65c7382c001efedbc43368.jpg" };

export default function Home({navigation}){
    return(

        <View style={styles.bloco}>

<ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>
        
            <Text style={styles.texto}>PREVISÃO TEMPORAL</Text>

            <Text style={styles.texto}>Cidades: </Text>

            <View>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Mongagua")}>
                    <Text style={styles.textBtn}>Mongagua</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Santos")}>
                    <Text style={styles.textBtn}>Santos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Guaruja")}>
                    <Text style={styles.textBtn}>Guarujá</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Campinas")}>
                    <Text style={styles.textBtn}>Campinas</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Peruibe")}>
                    <Text style={styles.textBtn}>Peruibe</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    bloco: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    texto:{
        bottom: 60,
        fontSize: 30,
        textAlign: 'center',
        color: '#fff'
    },
    btn: {
        backgroundColor: '#0294E8',
        marginTop: 20,
        width: 180,
        height: 50,
        marginLeft: '5%',
        borderRadius: 5
    },
    textBtn: {
        fontSize:20,
        color: '#FFF',
        textAlign: 'center',
        top: 9
    },
});