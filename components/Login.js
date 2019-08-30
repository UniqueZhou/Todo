import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	TouchableOpacity
} from "react-native";

import { Actions } from "react-native-router-flux";

export default class login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text>设置</Text>
					<Text
						style={{
							position: "absolute",
							top: 7,
							right: 10,
							fontSize: 12,
							color: "rgb(18, 131, 87)"
						}}
					>
						完成
					</Text>
				</View>
				{/* 账号信息 */}
				<View />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	//让父容器View撑满全屏
	container: {
		flex: 1,
		backgroundColor: "rgb(236, 236, 236)"
	},
	header: {
		height: 30,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		position: "relative"
	}
});
