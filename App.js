import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SuperGame RN - Demo</Text>
      <Image source={require('./assets/hero.png')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#111'},
  title:{color:'#fff',fontSize:18,marginBottom:12},
  img:{width:128,height:128}
});
