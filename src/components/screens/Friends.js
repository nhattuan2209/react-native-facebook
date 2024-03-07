import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { version } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { storyInfo } from '../screenComponents/Database';
import { useState } from 'react';
const Friends = () => {
  return (
    <View>
      <View style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Bạn bè</Text>
        <View>
          <TouchableOpacity style={{ borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 35, height: 35, marginRight: 10 }}>
            <Icon name='search' style={{ fontSize: 20, color: 'black', }} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{ padding: 10, flexDirection: 'row' }}>
          <TouchableOpacity style={{ borderColor: '#D3D3D3', borderRadius: 30, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 70, height: 40, marginRight: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', }}>Gợi ý</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderColor: '#D3D3D3', borderRadius: 30, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 80, height: 40, }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', }}>Bạn bè</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderBottomWidth: 0.5, marginVertical: 5, borderBottomColor: 'gray', opacity: 0.4, width: '95%', alignSelf: 'center' }} />
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
          <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>
            Lời mời kết bạn
          </Text>
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Text style={{ color: '#1877F2', fontSize: 16 }}>
              Xem tất cả
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ margin: '10', }} >
          {storyInfo.slice(1, 9).map((data, index) => {
            const [follow, setFollow] = useState(data.follow)
            const [close, setClose] = useState(false)
            return (
              <View key={index} >
                {close ? null :
                  (
                    <TouchableOpacity style={{ paddingVertical: 10 }}>
                      <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', }}>
                          <Image source={data.image} style={{ width: 80, height: 80, borderRadius: 100 }} />
                          <View style={{ paddingLeft: 10, gap: 4 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.name}</Text>
                            <Text>{data.friends}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                              <TouchableOpacity onPress={() => setFollow(!follow)}>
                                <View style={{ width: 129, height: 35, borderRadius: 5, backgroundColor: '#3493D9', borderWidth: 1, borderColor: '#DEDEDE', justifyContent: 'center' }}>
                                  <Text style={{ color: '#fff', alignSelf: 'center' }}>{follow ? 'Đã xác nhận' : 'Xác nhận'}</Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => setClose(true)}>
                                <View style={{ width: 129, height: 35, borderRadius: 5, backgroundColor: '#D3D3D3', borderWidth: 1, borderColor: '#D3D3D3', justifyContent: 'center' }}>
                                  <Text style={{ color: 'black', alignSelf: 'center' }}>Xóa</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                        <View>
                          <Text>{data.time}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
              </View>

            );
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Friends