import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useState } from 'react';
import { NotificationData } from '../screenComponents/Database';
const Notification = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Thông báo</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 35, height: 35, marginRight: 10 }}>
              <Icon name='cog' style={{ fontSize: 20, color: 'black', }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 35, height: 35, marginRight: 10 }}>
              <Icon name='search' style={{ fontSize: 20, color: 'black', }} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{ padding: 5, fontSize: 18, fontWeight: 'bold' }}>Trước đó</Text>
        </View>
        {NotificationData.slice(0, 8).map((data, index) => {
          return (
            <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between' ,alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5 }}>
              <View>
                <Image source={data.image} style={{ width: 80, height: 80, borderRadius: 100 }} />
              </View>
              <View style={{flexDirection: 'row',}}>
                <View style={{ paddingHorizontal: 10 ,maxHeight: 100, maxWidth: 300 }}>
                  <Text numberOfLines={3} ellipsizeMode='tail' style={{ fontSize: 16,}}><Text style={{ fontWeight: 'bold' }}>{data.name}</Text> {data.title}</Text>
                  <Text style={{paddingVertical: 5}}>{data.time}</Text>
                </View>
                <View style={{alignSelf: 'center',}}>
                  <Icon name="ellipsis-h" style={{fontSize: 20,}}/>
                </View>
              </View>
            </View>
          )
        })}

      </ScrollView>
    </View>
  )
}

export default Notification