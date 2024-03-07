import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather';


const Menu = () => {
  const [showMoreTab, setShowMoreTab] = useState(false);
  const [showMoreHelp, setShowMoreHelp] = useState(false);
  const [showMoreSetting, setShowMoreSetting] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F2F5' }}>
      <ScrollView>
        <View style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Menu</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 35, height: 35, marginRight: 10 }}>
              <Icon name='cog' style={{ fontSize: 20, color: 'black', }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderColor: '#D3D3D3', borderRadius: 100, borderWidth: 1, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', width: 35, height: 35, marginRight: 10 }}>
              <Icon name='search' style={{ fontSize: 20, color: 'black', }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, marginVertical: 20, marginBottom: 35, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Image source={require('../../storage/images/ava.jpg')} style={{ width: 50, height: 50, borderRadius: 100 }} />
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', paddingLeft: 10, alignSelf: 'center' }}>Nhật Tuấn</Text>
          </View>
          <View style={{ backgroundColor: '#D3D3D3', borderRadius: 100, width: 35, height: 35, alignItems: 'center', justifyContent: 'center' }}>
            <Feather name="chevron-down" style={{ color: 'black', fontSize: 24, }} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
            <Icon name="history" style={{ fontSize: 22, color: 'blue', paddingVertical: 5 }} />
            <Text style={{ fontSize: 18, color: 'black' }}>Kỷ niệm</Text>
          </View>
          <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
            <Icon name="bookmark" style={{ fontSize: 22, color: 'purple', paddingVertical: 5 }} />
            <Text style={{ fontSize: 18, color: 'black' }}>Đã lưu</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
            <Icon name="users" style={{ fontSize: 22, color: 'blue', paddingVertical: 5 }} />
            <Text style={{ fontSize: 18, color: 'black' }}>Nhóm</Text>
          </View>
          <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
            <Icon name="tv" style={{ fontSize: 22, color: 'blue', paddingVertical: 5 }} />
            <Text style={{ fontSize: 18, color: 'black' }}>Video</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
            <Icon name="store" style={{ fontSize: 22, color: 'blue', paddingVertical: 5 }} />
            <Text style={{ fontSize: 18, color: 'black' }}>Marketplace</Text>
          </View>
          <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
            <Icon name="user-friends" style={{ fontSize: 22, color: 'blue', paddingVertical: 5 }} />
            <Text style={{ fontSize: 18, color: 'black' }}>Bạn bè</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
            <Icon name="calendar-plus" style={{ fontSize: 22, color: 'blue', paddingVertical: 5 }} />
            <Text style={{ fontSize: 18, color: 'black' }}>Bảng feed</Text>
          </View>
          <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
            <Icon name="calendar-alt" style={{ fontSize: 22, color: 'red', paddingVertical: 5 }} />
            <Text style={{ fontSize: 18, color: 'black' }}>Sự kiện</Text>
          </View>
        </View>
        {showMoreTab ? (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
              <Icon name="user-astronaut" style={{ fontSize: 22, color: 'blue', paddingVertical: 5 }} />
              <Text style={{ fontSize: 18, color: 'black' }}>Avatar</Text>
            </View>
            <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
              <Icon name="gamepad" style={{ fontSize: 22, color: 'blue', paddingVertical: 5 }} />
              <Text style={{ fontSize: 18, color: 'black' }}>Chơi game</Text>
            </View>
          </View>
        ) : null}
        {showMoreTab ? (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
              <Icon name="heart" style={{ fontSize: 22, color: 'red', paddingVertical: 5, }} />
              <Text style={{ fontSize: 18, color: 'black' }}>Hẹn hò</Text>
            </View>
            <View style={{ borderRadius: 15, backgroundColor: '#fff', paddingHorizontal: 10, marginHorizontal: 10, height: 70, width: "45%", marginVertical: 5, justifyContent: 'center', }}>
              <Icon name="flag" style={{ fontSize: 22, color: 'orange', paddingVertical: 5 }} />
              <Text style={{ fontSize: 18, color: 'black' }}>Trang</Text>
            </View>
          </View>
        ) : null}
        <TouchableOpacity onPress={() => setShowMoreTab(!showMoreTab)} style={{}}>
          <View style={{ width: '95%', height: 30, backgroundColor: '#D3D3D3', justifyContent: 'center', alignSelf: 'center', marginVertical: 20 }}>
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 16, fontWeight: '500' }}>{showMoreTab ? 'Ẩn bớt' : 'Xem thêm'}</Text>
          </View>
        </TouchableOpacity>

        <View style={{ borderBottomWidth: 0.5, marginVertical: 5, borderBottomColor: 'gray', opacity: 0.4, width: '100%', alignSelf: 'center' }} />
        {/* Trợ giúp hỗ trợ */}
        <TouchableOpacity onPress={() => setShowMoreHelp(!showMoreHelp)} style={{}}>
          <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="question-circle" style={{ fontSize: 30, color: 'gray' }} />
              <Text style={{ color: 'black', fontSize: 17, fontWeight: '500', paddingLeft: 10, }}>
                Trợ giúp & hỗ trợ
              </Text>
            </View>
            <Icon name={showMoreHelp ? 'chevron-up' : 'chevron-down'} />
          </View>
        </TouchableOpacity>
        {showMoreHelp ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
            <Icon name="life-ring" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Trung tâm trợ giúp</Text>
          </View>
        ) : null}
        {showMoreHelp ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 7 }}>
            <Icon name="inbox" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Hộp thư hỗ trợ</Text>
          </View>
        ) : null}
        {showMoreHelp ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 7 }}>
            <Icon name="exclamation-triangle" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Báo cáo sự cố</Text>
          </View>
        ) : null}
        {showMoreHelp ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 7 }}>
            <Icon name="user-shield" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>An toàn</Text>
          </View>
        ) : null}
        {showMoreHelp ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 7 }}>
            <Icon name="book" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Điều khoản & chính sách</Text>
          </View>
        ) : null}
        {/* end */}
        <View style={{ borderBottomWidth: 0.5, marginVertical: 5, borderBottomColor: 'gray', opacity: 0.4, width: '100%', alignSelf: 'center' }} />
        {/* SettingTab */}
        <TouchableOpacity onPress={() => setShowMoreSetting(!showMoreSetting)} style={{}}>
          <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="cog" style={{ fontSize: 30, color: 'gray' }} />
              <Text style={{ color: 'black', fontSize: 17, fontWeight: '500', paddingLeft: 10, }}>
                Cài đặt & quyền riêng tư
              </Text>
            </View>
            <Icon name={showMoreSetting ? 'chevron-up' : 'chevron-down'} />
          </View>
        </TouchableOpacity>
        {showMoreSetting ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
            <Icon name="users-cog" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Cài đặt</Text>
          </View>
        ) : null}
        {showMoreSetting ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 7 }}>
            <Icon name="mobile-alt" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Yêu cầu từ thiết bị</Text>
          </View>
        ) : null}
        {showMoreSetting ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 7 }}>
            <Icon name="portrait" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Hoạt động gần đây với quảng cáo</Text>
          </View>
        ) : null}
        {showMoreSetting ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 7 }}>
            <Icon name="credit-card" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Đơn đặt hàng và thanh toán</Text>
          </View>
        ) : null}
        {/* end */}
        <View style={{ borderBottomWidth: 0.5, marginVertical: 5, borderBottomColor: 'gray', opacity: 0.4, width: '100%', alignSelf: 'center' }} />

        {/* from meta tab */}
        <TouchableOpacity onPress={() => setShowMore(!showMore)} style={{}}>
          <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="buromobelexperte" style={{ fontSize: 30, color: 'gray' }} />
              <Text style={{ color: 'black', fontSize: 17, fontWeight: '500', paddingLeft: 10, }}>
                Cũng từ Meta
              </Text>
            </View>
            <Icon name={showMore ? 'chevron-up' : 'chevron-down'} />
          </View>
        </TouchableOpacity>
        {showMore ? (
          <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff', height: 45, width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 7 }}>
            <Icon name="whatsapp" style={{ fontSize: 28, paddingRight: 10, fontWeight: '500', color: 'green' }} />
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Whatsapp</Text>
          </View>
        ) : null}
        {/* end */}
        <View style={{ width: '95%', height: 30, backgroundColor: '#D3D3D3', justifyContent: 'center', alignSelf: 'center', marginVertical: 20 }}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: 16, fontWeight: '500' }}>Đăng xuất</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Menu