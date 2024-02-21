import { View, Text, Image } from 'react-native'
import React from 'react'
import { postInfo } from '../screenComponents/Database';
import Feather from 'react-native-vector-icons/Feather';

const Post = () => {
  return (
    <View>
      {
        postInfo.map((data, index) => {
          return (
            <View key={index}>
              <View style={{ borderBottomWidth: 5, marginVertical: 10, borderBottomColor: 'gray', opacity: 0.4 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Image source={data.postPersonImage} style={{ width: 45, height: 45, borderRadius: 100 }} />
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{data.poster}</Text>
                    <Text style={{ fontSize: 14 }}>{data.time}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Feather name="more-horizontal" style={{ paddingRight: 10, fontSize: 16 }} />
                  <Feather name="x" style={{ fontSize: 16 }} />
                </View>
              </View>
              <Image source={data.postImage} style={{ width: '100%', height: 400 }} />
              <View>

              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default Post