import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	TouchableOpacity,
	ImageBackground,
	TextInput
} from "react-native";

import { Actions } from "react-native-router-flux";
// import Toast, { DURATION } from "react-native-easy-toast";

export default class PreLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			psd: "",
			notice: "同步已完成!"
		};
	}
	equalName = input => {
		// console.warn(input);
		this.setState({
			name: input
		});
	};
	equalPsd = input => {
		this.setState({
			psd: input
		});
	};
	submit = () => {
		Actions.Todopage({ user: "未登录", code: 0 });
	};
	enterRegister = () => {
		console.warn("rrr");
	};
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					source={require("../static/image/login.jpg")}
					style={{
						flex: 1,
						position: "relative"
					}}
				>
					<View
						style={{
							position: "absolute",
							top: 80,
							left: 40
						}}
					>
						<Text
							style={{
								fontSize: 40,
								fontWeight: "bold",
								color: "white"
							}}
						>
							欢迎使用
						</Text>
						<Text
							style={{
								fontSize: 40,
								fontWeight: "bold",
								color: "white",
								marginTop: 10
							}}
						>
							To - Do List
						</Text>
					</View>
					<View
						style={{
							width: "100%",
							// backgroundColor: "red",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							position: "absolute",
							bottom: 65,
							left: 0
						}}
					>
						<Text
							style={{
								color: "rgb(59, 179, 234)",
								fontSize: 26,
								marginBottom: 10
							}}
						>
							{this.props.user}
						</Text>
						<Text style={{ letterSpacing: 1 }}>{this.state.notice}</Text>
						<View
							style={{
								width: 300,
								height: 40,
								backgroundColor: "rgb(53, 176, 233)",
								borderRadius: 10,
								marginTop: 30
							}}
						>
							<TouchableHighlight onPress={this.submit}>
								<Text
									style={{
										color: "white",
										textAlign: "center",
										lineHeight: 40,
										fontSize: 20
									}}
								>
									退出登录
								</Text>
							</TouchableHighlight>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	//让父容器View撑满全屏
	container: {
		flex: 1,
		backgroundColor: "rgb(236, 236, 236)"
	}
});
