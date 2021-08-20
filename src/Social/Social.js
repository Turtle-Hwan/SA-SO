import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

import Detail from './detail/Detail';

export default function Todo() {
  return (
    <View>
      <View>
        <Text>계획 게시판</Text>
        <Text>8월 21일</Text>
      </View>
      <ScrollView>
        <Detail/>
        <Detail/>
        <Detail/>
        <Detail/>
        <Detail/>
        <Detail/>
      </ScrollView>
    </View>
  )
}