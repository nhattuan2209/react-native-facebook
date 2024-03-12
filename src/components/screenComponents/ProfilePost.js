import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfilePost = () => {

  const [showMore, setShowMore] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => setShowMore(!showMore)} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Chi tiết</Text>
            <Icon name={showMore ? 'chevron-up' : 'chevron-down'} style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }} />
          </TouchableOpacity>
        </View>
        <View>
          {showMore ? (
            <View>
              <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
                <Icon name="graduation-cap" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
                <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Đã học tại Trường Đại Học Ngoại Ngữ Huế</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, }}>
                <Icon name="graduation-cap" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
                <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Đã học tại Hue Cit</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, }}>
                <Icon name="home" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
                <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Sống tại Huế</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, }}>
                <Icon name="instagram" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
                <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>nhattuan2209</Text>
              </View>
            </View>
          ) : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, }}>
            <Icon name="ellipsis-h" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Xem thông tin giới thiệu của bạn</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfilePost