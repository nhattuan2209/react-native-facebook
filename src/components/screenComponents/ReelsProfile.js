import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ReelsProfile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{flexDirection: 'row', padding: 15,}}>
        <View style={{flexDirection: 'row', paddingRight: 10, backgroundColor: '#D3D3D3', width: 110, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center',marginRight: 10}}>
          <Icon name="bookmark" style={{fontSize: 25, color: 'black', paddingRight: 5}}/>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>Đã lưu</Text>
        </View>
        <View style={{flexDirection: 'row', paddingRight: 10, backgroundColor: '#D3D3D3', width: 110, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="thumbs-up" style={{fontSize: 25, color: 'black', paddingRight: 5}}/>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>Đã thích</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Icon name="image" style={{ fontSize: 80}}/>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'black',padding: 10}}>Chưa có thước phim nào</Text>
        <View style={{width: 150, height: 40, backgroundColor:'blue', borderRadius: 5, justifyContent:'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Tạo thước phim</Text>
        </View>
      </View>
    </View>
  )
}

export default ReelsProfile