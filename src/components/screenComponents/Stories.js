import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { storyInfo } from '../screenComponents/Database';
import Icon from "react-native-vector-icons/FontAwesome5";

const Stories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
      {
        storyInfo.map((data, index) => {
          return (
            <TouchableOpacity key={index} style={{}}>
              <View style={{ flexDirection: 'column', paddingHorizontal: 8, position: 'absolute', zIndex: 1, }}>
                {
                  data.id == 1 ?
                    (
                      <View style={{ position: 'absolute', width: 120, height: 80, backgroundColor: 'red', }}>
                        <View style={{}} />
                        <Icon name="plus" style={{ color: 'blue', alignSelf: 'center', }} />
                        <Text style={{ fontSize: 16, position: 'absolute', top: 160, color: 'black', alignSelf: 'center' }}>Tạo tin</Text>
                      </View>

                    ) : null
                }
              </View>
              <View style={{ width: 130, height: 200, position: 'relative' }}>
                <Image source={data.image} style={{ resizeMode: 'cover', width: '92%', height: '92%', borderRadius: 10 }} />
                <Text style={{ fontSize: 16, position: 'absolute', top: 160, color: '#fff', paddingLeft: 10 }}>{data.name}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  )
}

export default Stories