import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { postInfo } from '../screenComponents/Database';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Post = () => {
  return (
    <View>
      {
        postInfo.map((data, index) => {
          const [like, setLike] = useState(data.isLiked)
          return (
            <View key={index} style={{}}>
              <View style={{ borderBottomWidth: 5, marginVertical: 10, borderBottomColor: 'gray', opacity: 0.4 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,paddingHorizontal: 5}}>
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
              <Text style={{ padding: 5, fontSize: 16, }}>{data.description}</Text>
              <Image source={data.postImage} style={{ width: '100%', height: 400 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                  <Image source={require('../../storage/images/like.png')} style={{ width: 18, height: 18 }} />
                  <Image source={require('../../storage/images/heart.png')} style={{ width: 18, height: 18 }} />
                  <Image source={require('../../storage/images/haha.png')} style={{ width: 18, height: 18 }} />
                  <Text style={{ fontSize: 16, paddingLeft: 5 }}>{data.likes}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                  <Text style={{ fontSize: 16, paddingRight: 10 }}>{data.comments}</Text>
                  <Text style={{ fontSize: 16 }}>{data.shares}</Text>
                </View>
              </View>
              <View style={{ borderBottomWidth: 1, marginVertical: 6, width: '95%', alignSelf: 'center', borderBottomColor: 'gray', opacity: 0.4 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setLike(!like)}>
                  <Icon name="thumbs-up" style={{ fontSize: 20, color: like ? 'blue' : null }} />
                  <Text style={{ fontSize: 16, paddingLeft: 5,color: like ? 'blue' : null }}>Thích</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }} >
                  <Icon name="comment" style={{ fontSize: 20, }} />
                  <Text style={{ fontSize: 16, paddingLeft: 5 }}>Bình luận</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="share" style={{ fontSize: 20, }} />
                  <Text style={{ fontSize: 16, paddingLeft: 5 }}>Chia sẻ</Text>
                </View>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default Post