import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useState, useRef } from 'react';
import Video from 'react-native-video';

const Videos = () => {
  const background = require('../../storage/videos/video1.mp4');

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/* header */}
        <View style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Video</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 35, height: 35, marginRight: 10 }}>
              <Icon name='user-alt' style={{ fontSize: 20, color: 'black', }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 35, height: 35, marginRight: 10 }}>
              <Icon name='search' style={{ fontSize: 20, color: 'black', }} />
            </TouchableOpacity>
          </View>
        </View>
        {/* end */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ color: 'black', fontSize: 18 }}>Dành cho bạn</Text>
        </View>
        <View style={{ borderBottomWidth: 5, marginVertical: 5, borderBottomColor: 'gray', opacity: 0.4, width: '100%', alignSelf: 'center' }} />
{/* 
        <View style={{ }}>
          <Video source={background}
            style={styles.video}
            controls={true} />
        </View> */}
      </ScrollView>
    </View>
  )
}

export default Videos

const styles = StyleSheet.create({
  video: {
    width: 410,
    height: 200,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});