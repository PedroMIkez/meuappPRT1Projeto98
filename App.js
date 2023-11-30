import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Header} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaProvider>
        <View style= {styles.container}>
          <Header
            backgroundColor={'#00FF00'}
            centerComponent={{
              text:'Dicionário Minecraft',
              style:{color:'black',fontSize:40},
            }}
          />
        </View>
      </SafeAreaProvider>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#8B4513',
    alignItems: 'center',
    justifyContent: 'top',
  },
});
