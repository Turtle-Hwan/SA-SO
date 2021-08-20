import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {NavigationContainer} from '@react-navigation/native';
import { useState } from 'react';


export default function RandomTodo() {


		let missionList = [
			"자전거 타기",
			"공원 산책하기",
			"반려동물과 놀아주기",
			"매일 3km 달리기",
			"매달 1회 등산하기",
			"매일 아침 5분 스트레칭",
			"하루 한 번 외출하기",
			"설거지하기",
			"방 청소하기",
			"매일 물 1L 마시기",
			"명상하기",
			"책 한 단락 읽기",
			"화분에 물 주기",
			"먼 산 바라보기",
			"식물 관찰하기",
		];

		let activity = [
			"자전거 타기",
			"공원 산책하기",
			"반려동물과 놀아주기",
			"매일 3km 달리기",
			"매달 1회 등산하기",
		];

		let daily = [
			"매일 아침 5분 스트레칭",
			"하루 한 번 외출하기",
			"설거지하기",
			"방 청소하기",
			"매일 물 1L 마시기",
		];

		let calmDown = [
			"명상하기",
			"책 한 단락 읽기",
			"화분에 물 주기",
			"먼 산 바라보기",
			"식물 관찰하기",
		];



		function getRandomNum(n) {
			let randomIndexArray = []
			let randomNum;
			for (let i=0; i<3; i++) {  
				randomNum = Math.floor(Math.random() * n)
				if (randomIndexArray.indexOf(randomNum) === -1) {
					randomIndexArray.push(randomNum);
				} else { 
					i--;
				}
			}
			return randomIndexArray;
		}


		const [isSelected1, setSelection1] = useState(false);
		const [isSelected2, setSelection2] = useState(false);
		const [isSelected3, setSelection3] = useState(false);
	

	function randomMenu(List, n) {
		const randomNumberList = getRandomNum(n);
		return (
    <View style={styles.container}>
      <View style={styles.missionListContainer}>
        <View style ={styles.missionContainer}>
          <CheckBox
            value={isSelected1}
            onValueChange={setSelection1}
            style={styles.checkbox}
            tintColors= {{ true : '#FFBDBD' }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.checkText}>{List[randomNumberList[0]]}</Text>
          </View>
        </View>
        <View style ={styles.missionContainer}>
          <CheckBox
            value={isSelected2}
            onValueChange={setSelection2}
            style={styles.checkbox}
            tintColors= {{ true : '#FFBDBD' }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.checkText}>{List[randomNumberList[1]]}</Text>
          </View>
        </View>

				<View style ={styles.missionContainer}>
          <CheckBox
            value={isSelected3}
            onValueChange={setSelection3}
            style={styles.checkbox}
            tintColors= {{ true : '#FFBDBD' }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.checkText}>{List[randomNumberList[2]]}</Text>
          </View>
        </View>
      </View>
    </View>
		);
		}
	const [menu, setMenu] = useState(0);
	console.log("메뉴: " + menu);

	if (menu == 0) {
    return (
      <View>
				<View style={styles.buttonContainer1}>
					<Text	style={styles.btnCategory}>유형별</Text>
					<Image source={require('../../assets/image/icon/icon_reload.png')} />
				</View>
        <View style={styles.buttonContainer2}>
					<Button
						style={styles.container}
						title="전체"
						color="pink"
						onPress={() => {
							setMenu(0);
					}}
					/>
					<Button
						style={styles.container}
						title="활동적"
						color="pink"
						onPress={() => {
							setMenu(1);
					}}
					/>
					<Button
						style={styles.container}
						title="일상적"
						color="pink"
						onPress={() => {
							setMenu(2);
					}}
					/>
					<Button
						style={styles.container}
						title="열정적"
						color="pink"
						onPress={() => {
							setMenu(3);
					}}
					/>
        </View>
				<View>
					{randomMenu(missionList, 14)}
				</View>

				<View style={styles.saveContainer}>
					<Button 
						style={styles.container}
						title="보내기"
						color=""
						onPress={() => {

						}}
					/>
					<Button 
						style={styles.container}
						title="취소하기"
						color=""
						onPress={() => {

						}}
					/>

				</View>
      </View>
    )
	}
	else if (menu == 1) {
    return (
      <View>
				<View style={styles.buttonContainer1}>
					<Text	style={styles.btnCategory}>유형별</Text>
					<Image source={require('../../assets/image/icon/icon_reload.png')} />
				</View>
        <View style={styles.buttonContainer2}>
					<Button
						style={styles.container}
						title="전체"
						color="pink"
						onPress={() => {
							setMenu(0);
					}}
					/>
					<Button
						style={styles.container}
						title="활동적"
						color="pink"
						onPress={() => {
							setMenu(1);
					}}
					/>
					<Button
						style={styles.container}
						title="일상적"
						color="pink"
						onPress={() => {
							setMenu(2);
					}}
					/>
					<Button
						style={styles.container}
						title="열정적"
						color="pink"
						onPress={() => {
							setMenu(3);
					}}
					/>
        </View>
				<View>
					{randomMenu(activity, 4)}
				</View>

				<View style={styles.saveContainer}>
				<Button 
						style={styles.container}
						title="보내기"
						color=""
						onPress={() => {

						}}
					/>
					<Button 
						style={styles.container}
						title="취소하기"
						color=""
						onPress={() => {

						}}
					/>
				</View>
      </View>
    )
	}
	else if (menu == 2) {
    return (
      <View>
				<View style={styles.buttonContainer1}>
					<Text	style={styles.btnCategory}>유형별</Text>
					<Image source={require('../../assets/image/icon/icon_reload.png')} />
				</View>
        <View style={styles.buttonContainer2}>
					<Button
						style={styles.container}
						title="전체"
						color="pink"
						onPress={() => {
							setMenu(0);
					}}
					/>
					<Button
						style={styles.container}
						title="활동적"
						color="pink"
						onPress={() => {
							setMenu(1);
					}}
					/>
					<Button
						style={styles.container}
						title="일상적"
						color="pink"
						onPress={() => {
							setMenu(2);
					}}
					/>
					<Button
						style={styles.container}
						title="열정적"
						color="pink"
						onPress={() => {
							setMenu(3);
					}}
					/>
        </View>
				<View>
					{randomMenu(daily, 4)}
				</View>

				<View style={styles.saveContainer}>
				<Button 
						style={styles.container}
						title="보내기"
						color=""
						onPress={() => {

						}}
					/>
					<Button 
						style={styles.container}
						title="취소하기"
						color=""
						onPress={() => {

						}}
					/>
				</View>
      </View>
    )
	}
	else {
		return (
      <View>
				<View style={styles.buttonContainer1}>
					<Text	style={styles.btnCategory}>유형별</Text>
					<Image source={require('../../assets/image/icon/icon_reload.png')} />
				</View>
        <View style={styles.buttonContainer2}>
					<Button
						style={styles.container}
						title="전체"
						color="pink"
						onPress={() => {
							setMenu(0);
					}}
					/>
					<Button
						style={styles.container}
						title="활동적"
						color="pink"
						onPress={() => {
							setMenu(1);
					}}
					/>
					<Button
						style={styles.container}
						title="일상적"
						color="pink"
						onPress={() => {
							setMenu(2);
					}}
					/>
					<Button
						style={styles.container}
						title="열정적"
						color="pink"
						onPress={() => {
							setMenu(3);
					}}
					/>
        </View>
				<View>
					{randomMenu(calmDown, 4)}
				</View>

				<View style={styles.saveContainer}>
				<Button 
						style={styles.container}
						title="보내기"
						color=""
						onPress={() => {

						}}
					/>
					<Button 
						style={styles.container}
						title="취소하기"
						color=""
						onPress={() => {

						}}
					/>
				</View>
      </View>
    )
	}
}

const styles = StyleSheet.create({
	buttonContainer1:{
		paddingTop:60,
		padding:30,
		paddingBottom:0,
		flexDirection : 'row',
		justifyContent:'space-between',
	},
	btnCategory:{
		
	},
	btnSearch:{
		
	},

	buttonContainer2:{
		padding:30,
		flexDirection : 'row',
		justifyContent:'space-between',
	},
	saveContainer:{
		paddingTop:100,
		padding:30,
		flexDirection : 'row',
		justifyContent:'space-between',
	},
	container:{
    backgroundColor: '#F3F3F3',
    alignItems : 'center'
  },
  missionListContainer:{
    marginVertical : 20,
  },
  missionContainer:{
    flexDirection: 'row',
    alignItems : 'center',
    paddingVertical : 10,
    paddingHorizontal : 10,
    justifyContent: 'center'
  },
  checkbox:{
    
  },
  textContainer:{
    width : '80%',
    marginLeft : '3%',
    borderBottomWidth : 1,
    borderColor : '#B4B4B4',
    marginTop: 3,
    paddingBottom: 5,
  },
  checkText:{
    paddingLeft: 18,
    fontFamily: 'NotoSansKR-Regular',
    fontSize : 18,
    lineHeight : 28,
    color : '#555555',
  },
  missionButtonContainer:{
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent: 'center',
    paddingVertical : 10,
    paddingHorizontal : 10,
    marginTop : 10,
    
  },
  addButtonContainer:{
    width: 300,
    borderRadius: 30,
    backgroundColor: '#FFBDBD',
    alignItems : 'center',
    justifyContent : 'center',
    paddingVertical : 3,
  },
  buttonText:{
    color : '#555555',
    fontFamily: 'NotoSansKR-Regular',
    fontSize : 14,
  }

})