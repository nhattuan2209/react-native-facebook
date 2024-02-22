import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';
import Avatar from '../../storage/images/image5.jpg';

const Home = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
          <View>
            <Text style={{ fontSize: 30, fontWeight: '600', color: '#1877F2' }}>facebook</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems:'center' }}>
            <TouchableOpacity style={{  borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1,backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems:'center', width: 40, height: 40, marginRight: 10}}>
              <Icon name='plus' style={{ fontSize: 20, color: 'black',}} />
            </TouchableOpacity> 
            <TouchableOpacity style={{  borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1,backgroundColor: '#D3D3D3' , justifyContent: 'center', alignItems:'center', width: 40, height: 40, marginRight: 10}}>
              <Icon name='search' style={{ fontSize: 20, color: 'black', }} />
            </TouchableOpacity>
            <TouchableOpacity style={{  borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems:'center', width: 40, height: 40, marginRight: 5 }}>
              <Icon name='facebook-messenger' style={{ fontSize: 20, color: 'black',}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={Avatar} style={{ width: 40, height: 40, borderRadius: 100}}/>
            <TextInput placeholder='What are you thinking?' style={{ width: '70%'}}/>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon name='images' style={{ fontSize: 24, color: 'green' }}/>
          </View>
        </View>
      </View>
      <View style={{borderBottomWidth: 5,marginVertical: 10,borderBottomColor: 'gray', opacity: 0.4}}/>
      <Stories/>
      <Post />
    </ScrollView>
  )
}

export default Home