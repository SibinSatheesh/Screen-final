import React, {Component} from 'react';
import { View, StyleSheet, Text, FlatList,ScrollView ,Image} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/AntDesign'
export default class screen2 extends Component {

  state = {
    data: [
      { item1: {name: 'Akshaya Hotel', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off',url:'https://png.pngitem.com/pimgs/s/119-1192404_spicy-chicken-fried-sandwich-hd-png-download.png'}, 
        item2: { name: 'Barbeque Nation', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off',url:'https://shoffz.com/uploads/admin/offers/44b630bb58b0ef207f9a2b352ab5f1fd.png'}
      },
      { item1: {name: ' Akshay Hotel', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off',url:'https://www.pngkey.com/png/full/23-235677_download-1-2-chicken-with-rice.png' }, 
        item2: { name: 'Ammus Hotel', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off', url:'https://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14093.png'} 
      },
      { item1: { name: ' Appus Hotel', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7LP8UM9-AgFUk37LanPUJRJaMns71qH81iVxR0hbl0BKC5P1fGlOJaV-Rycvrn73uTY&usqp=CAU'},
      item2: { name: 'SS hotel', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off', url:'https://assets.webiconspng.com/uploads/2017/09/Fried-Chicken-PNG-Image-23463.png'}
    },
    { item1: {name: ' MN Hotel', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off', url:'https://www.pngplay.com/wp-content/uploads/4/Fried-Chicken-Transparent-Image.png'}, 
        item2: { name: 'Amma Hotel', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off', url:'https://spicyoven.com/wp-content/uploads/2019/03/CHARCOL-GRILLED-CHICKEN.png'} 
      },
      { item1: {name: ' AA Hotel', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off',url:'https://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14093.png' }, 
        item2: { name: 'XY Hotel', food: 'Alfahm full', rate: 4.4, time: '25 min',off:'20% Off',url:'https://png.pngitem.com/pimgs/s/119-1192404_spicy-chicken-fried-sandwich-hd-png-download.png' } 
      },
    ]
  }

  renderItem = ({item, index}) => {
   
      return (
        <View>
         <View style={{ flex: 1, backgroundColor: 'white', paddingTop:80}}>
            <View style={{ flexDirection:'row',}}>
               
                <View style={{ flex:1}}>
                    <View style={{ height: 115, width: 200, marginStart:10 }}>
                   
                        <Image source={{uri:item.item1.url}}
                            style={{ width: 90, height: 90, resizeMode: 'contain', borderRadius:90/2 }}
                        />
                        <View style={{ marginLeft: '55%', marginTop: '-40%' }}>
                            <Text style={styles.text}>{item.item1.name}</Text>
                            <Text style={styles.text1}>{item.item1.food}</Text>
                           <View style={{flexDirection:'column'}}>
                                <Icon3 name="star" size={10} 
                                    style={styles.iconbutton}>
                        
                                    <Text style={styles.text1}>{item.item1.rate}| </Text>
                                    <Icon1 name="clockcircleo" size={10} ></Icon1>
                                    <Text style={styles.text1}> {item.item1.time}</Text>
                        
                                </Icon3>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttontext}>  {item.item1.off}   </Text>
                                </TouchableOpacity>
                            </View>
 
                        </View>
                    </View>
                    </View>
                    </View>
                    
          
          </View>
          {item.item2 &&<View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection:'row',}}>
               
                <View style={{ flex:1}}>
                    <View style={{ height: 115, width: 200, marginStart:10 }}>
                   
                        <Image source={{uri:item.item2.url}}
                            style={{ width: 90, height: 90, resizeMode: 'contain', borderRadius:90/2 }}
                        />
                        <View style={{ marginLeft: '55%', marginTop: '-40%' }}>
                            <Text style={styles.text}>{item.item2.name}</Text>
                            <Text style={styles.text1}>{item.item2.food}</Text>
                           <View style={{flexDirection:'column'}}>
                                <Icon3 name="star" size={10} 
                                    style={styles.iconbutton}>
                        
                                    <Text style={styles.text1}>{item.item2.rate}| </Text>
                                    <Icon1 name="clockcircleo" size={10} ></Icon1>
                                    <Text style={styles.text1}> {item.item2.time}</Text>
                        
                                </Icon3>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttontext}>  {item.item2.off}   </Text>
                                </TouchableOpacity>
                            </View>
 
                        </View>
                    </View>
                    </View>
                    </View>
                    
          
          </View>}
        </View>
      )
    }


  keyExtractor = (item, index) => `${index}`;

  render() {
    return (
      <View style={styles.container}>
        
        <FlatList 
          horizontal={true}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          showsHorizontalScrollIndicator={false}
        />
      
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  text:{
    fontSize:13,
    fontWeight:'bold',
    marginLeft: '-17%',
},
text1:{
    fontWeight:'normal',
    fontSize:10,
    color:'grey',
    marginLeft: '-17%',
    marginTop: '4%',
},
iconbutton:{
    color:'grey',
    marginStart:-15,
    marginTop:10
},
button:{
    backgroundColor:'#00ff00',
    borderRadius:10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    marginStart:-50,
    marginTop:14,
    width:63

    },
    buttontext:{
        fontSize:13,
        fontWeight:'bold',
        marginBottom:2,
        color:'white',
    },
textview:{
    fontWeight:'500',
    fontSize:10,
    color:'grey',
    marginStart:100,
    
    
},
textview:{
    fontWeight:'500',
    fontSize:15,
    color:'grey',
    marginStart:130,
    
    
},
});