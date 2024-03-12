import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfilePost from '../screenComponents/ProfilePost';
import ReelsProfile from '../screenComponents/ReelsProfile';
import ProfilePhoto from '../screenComponents/ProfilePhoto';

const Profile = () => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* header */}
      <View style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row', }}>
        <View style={{ marginRight: 20 }}>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 40 }}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black', paddingRight: 10 }}>Nhật Tuấn</Text>
          <Icon name="chevron-down" style={{ color: 'black' }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 35, height: 35, }}>
            <Icon name='pen' style={{ fontSize: 20, color: 'black', }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 35, height: 35, }}>
            <Icon name='search' style={{ fontSize: 20, color: 'black', }} />
          </TouchableOpacity>
        </View>
      </View>
      {/* end */}
      {/* avatar */}

      <View>
        <Image source={require('../../storage/images/image5.jpg')} style={{ height: 220, width: 415, position: 'relative', }} />
        <View style={{ width: 130, height: 130, position: 'absolute', bottom: 0, marginLeft: 10, backgroundColor: '#fff', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../storage/images/ava.jpg')} style={{ borderRadius: 100, width: 125, height: 125 }} />
        </View>
        <View style={{ borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 35, height: 35, left: 105 }}>
          <Icon name='camera' style={{ fontSize: 20, color: 'black', }} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}>Nhật Tuấn</Text>
        <Text><Text style={{ fontWeight: 'bold', color: 'black' }}>1,4k</Text> bạn bè</Text>
      </View>
      {/* end */}
      {/* Them vao tin */}
      <View style={{ backgroundColor: 'blue', width: '95%', height: 40, borderRadius: 7, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>+ Thêm vào tin</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <View style={{ backgroundColor: '#D3D3D3', width: '85%', height: 40, borderRadius: 7, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flexDirection: 'row' }}>
          <Icon name="pen" style={{ color: 'black', fontSize: 20 }} />
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>  Chỉnh sửa trang cá nhân</Text>
        </View>
        <View style={{ backgroundColor: '#D3D3D3', borderRadius: 7, height: 40, width: 50, alignItems: 'center', justifyContent: 'center', }}>
          <Icon name="ellipsis-h" style={{ color: 'black', fontSize: 18 }} />
        </View>
      </View>
      {/* end */}
      <View style={{ borderBottomWidth: 8, marginVertical: 10, borderBottomColor: 'gray', opacity: 0.4 }} />
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: 'bold',
            },
            tabBarActiveTintColor: 'blue', // Màu chữ khi tab được bật
            tabBarInactiveTintColor: 'black', // Màu chữ khi tab không được bật
            tabBarStyle: {
            },
            tabBarIndicatorStyle: {
              display: 'none',
            },
          })}
        >
          <Tab.Screen name="Bài viết" component={ProfilePost} />
          <Tab.Screen name="Ảnh" component={ProfilePhoto} />
          <Tab.Screen name="Reels" component={ReelsProfile} />
        </Tab.Navigator>
      </View>
    </View>
  )
}

export default Profile