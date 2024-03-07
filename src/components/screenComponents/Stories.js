import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { storyInfo } from '../screenComponents/Database';
import Icon from "react-native-vector-icons/FontAwesome5";

const Stories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 5 }}>
      {
        storyInfo.map((data, index) => {
          return (
            <TouchableOpacity key={index} style={{}}>
              <View style={{ flexDirection: 'column', paddingHorizontal: 8, position: 'absolute', zIndex: 1, }}>
                {
                  data.id == 1 ?
                    (
                      <View style={{ position: 'absolute', width: 118, height: 57, backgroundColor: '#fff', top: 127, left: 1, alignItems: 'center', justifyContent: 'center', borderBottomEndRadius: 10 }}>
                        <View style={{ position: 'absolute', bottom: 35, alignSelf: 'center', backgroundColor: '#fff', width: 50, height: 50, borderRadius: 100, borderWidth: 4, borderColor: '#fff', }}>
                          <View style={{ alignSelf: 'center', backgroundColor: '#1877F2', width: 40, height: 40, borderRadius: 100, borderColor: '#fff', }}>
                            <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', }}>+</Text>
                          </View>
                        </View>
                      </View>

                    ) : null
                }
              </View>
              <View style={{ width: 120, height: 185, position: 'relative', borderWidth: 0.5, borderRadius: 10, marginRight: 10 }}>
                <Image source={data.image} style={{ resizeMode: 'cover', width: '100%', height: '100%', borderRadius: 10, }} />
                <Text style={{ fontSize: 16, position: 'absolute', top: 160, color: '#fff', paddingLeft: 10 }}>{data.name}</Text>
                {
                  data.id !== 1 ?
                    (
                      <View style={{ width: 45, height: 45, borderWidth: 1.8, borderRadius: 100, borderColor: '#1877F2', justifyContent: 'center', alignItems: 'center', zIndex: 1, position: 'relative', bottom: 180, left: 10 }}>
                        <Image source={data.image} style={{ width: 40, height: 40, borderRadius: 100, }} />
                      </View>
                    ) : null
                }
              </View>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  )
}

export default Stories