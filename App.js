import React, { Component } from 'react';
import { Text, View,StyleSheet,Image,TouchableOpacity,FontFamily} from 'react-native';
import { Icon, InlineIcon } from '@iconify/react';
import angleDoubleRight from '@iconify-icons/fa/angle-double-right';
export default class App extends Component {
  render() {
    return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    }}
  >
    <View style={{ flex: 1, marginTop: 70 }}>
      <Text style={{ color: "green", fontSize: 50,FontFamily:'Font1'}}>Health Care</Text>
    </View>
    
<Image style={{marginTop:3,marginBottom:5}}
	source = {require('./Images/Doctor1.jpg')}/>
    <View style={styles.container}>
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={this.onPress}
      Icon="angle-double-right"
    >

      <Text style={{fontSize:20,color:'white'}}>Let's Start</Text>
      
    </TouchableOpacity>
  </View>
    );
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
paddingHorizontal: 10
},
button: {
alignItems: "center",
backgroundColor: "green",
padding: 10,
marginBottom:70,
width:280,
borderRadius:20
},
}
)