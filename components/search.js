import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	TextInput
} from "react-native";

import { Actions } from "react-native-router-flux";

export default class newPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	returnLast = () => {
		Actions.Todopage();
	};
	componentDidMount() {
		// this.refs.textinput.autoFocus(true);
	}
	render() {
		return (
			<View style={styles.container}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between"
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center"
						}}
					>
						<Image
							source={require("../static/image/search.png")}
							style={{
								width: 20,
								height: 20,
								marginRight: 10
							}}
						/>
						<TextInput
							style={{
								width: 300,
								height: 50,
								// backgroundColor: "red",
								fontSize: 18
							}}
							placeholder="搜索"
							refs="textinput"
							autoFocus={true}
						/>
					</View>
					<TouchableHighlight onPress={this.returnLast}>
						<Text
							style={{
								fontSize: 18,
								color: "rgb(103,183,227)"
							}}
						>
							取消
						</Text>
					</TouchableHighlight>
				</View>
				<View
					style={{
						width: "100%",
						// backgroundColor: "red",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: 100
					}}
				>
					<Image
						source={require("../static/image/fly.png")}
						style={{
							borderColor: "green"
						}}
					/>
					<Text
						style={{
							fontSize: 22,
							color: "#ccc"
						}}
					>
						你想查找什么内容 ? 可在任务中搜索
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	//让父容器View撑满全屏
	container: {
		flex: 1,
		// backgroundColor: "red"
		padding: 10
	}
});
