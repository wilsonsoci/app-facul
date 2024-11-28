import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView, Button, Handle } from "react-native";
import { router, Router } from "expo-router";
import Constants from "expo-constants";
import * as React from 'react';
import { fonts } from "../utils/fonts";

const statusBarHeight = Constants.statusBarHeight;

export default function Main() {
  return(
      <ScrollView style={styles.container}>
      <SafeAreaView style = {styles.container}>
      
      
      <Text style={styles.legbutton}>Ainda não tem uma conta?</Text>

      <TouchableOpacity onPress={()=>router.push('/screens/register')}>

        <Text style={styles.button}>Cadastre-se</Text>
       
      </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.5}/>
          
        <Text style={styles.subtitle}>Casa de Cultura</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img1}
          source={require('../Images/Image1.png') }/>
        </TouchableOpacity>

        <Text style={styles.textimg1}>Artesanato</Text>
        
        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img2}
          source={require('../Images/Image2.png') }/>
        </TouchableOpacity>

        <Text style={styles.textimg2}>Dança</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img3}
          source={require('../Images/Image3.png') }/>
        </TouchableOpacity>

        <Text style={styles.textimg3}>Teatro</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img4}
          source={require('../Images/Image4.jpg') }/>
        </TouchableOpacity>

        <Text style={styles.textimg4}>Reforço</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img5}
          source={require('../Images/Image5.png') }/>
        </TouchableOpacity>
        
        <Text style={styles.textimg5}>Violão</Text>

        <TouchableOpacity onPress={()=>router.push('/screens/register')}>
          <Image style={styles.img6}
          source={require('../Images/Image6.jpg') }/>
        </TouchableOpacity>
        <Text style={styles.textimg6}>Capoeira</Text>
      </SafeAreaView>
      </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E2D3F",
  },
  backgroundImage: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: statusBarHeight + 8,

  },
  subtitle: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff708',
    fontSize: 30,
    position: 'absolute',
    left: 475,
    top: 20,
    fontFamily: fonts.Popcat
  },
  button: {
    width: '10%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    position: 'absolute',
    right: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 7,
    paddingHorizontal: 22,
    paddingTop: 9,
    top: 40
  },
  legbutton:{
    width: '20%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -50,
    top: 20,
    color: 'gray'
  },
  img1: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 100,
    left: 280,
  },
  img2: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 100,
    left: 700
  },
  img3: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 400,
    left: 280
  },
  img4: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 400,
    left: 700
  },
  img5: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 690,
    left: 280
  },
  img6: {
    width: '20%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 50,
    marginTop: 690,
    left: 700
  },
  textimg1: {
    alignItems: "center",
    justifyContent: 'center',
    left: 340,
    marginTop: 320,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.ShineBubble
  },
  textimg2: {
    alignItems: "center",
    justifyContent: 'center',
    left: 800,
    marginTop: 320,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.ShineBubble
  },
  textimg3: {
    alignItems: "center",
    justifyContent: 'center',
    left: 370,
    marginTop: 620,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.ShineBubble
  },
  textimg4: {
    alignItems: "center",
    justifyContent: 'center',
    left: 780,
    marginTop: 620,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.ShineBubble
  },
  textimg5: {
    alignItems: "center",
    justifyContent: 'center',
    left: 370,
    marginTop: 900,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.ShineBubble
  },
  textimg6: {
    alignItems: "center",
    justifyContent: 'center',
    left: 775,
    marginTop: 900,
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.ShineBubble
  },

});