import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	TouchableOpacity,
	ImageBackground,
	DeviceEventEmitter
} from "react-native";

import { Actions } from "react-native-router-flux";
import PubSub from "pubsub-js";

export default class Todopage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "未登录",
			state: 0,
			myDay: [
				{
					idx: 0,
					fair: "起床",
					active: true,
					address: require("../static/image/circle.png")
				},
				{
					idx: 1,
					fair: "洗衣服",
					active: true,
					address: require("../static/image/circle.png")
				},
				{
					idx: 2,
					fair: "吃饭",
					active: true,
					address: require("../static/image/circle.png")
				}
			],
			mission: [
				{
					idx: 0,
					fair: "看书",
					active: true,
					address: require("../static/image/circle.png")
				},
				{
					idx: 1,
					fair: "打游戏",
					active: true,
					address: require("../static/image/circle.png")
				},
				{
					idx: 2,
					fair: "睡觉",
					active: true,
					address: require("../static/image/circle.png")
				}
			],
			newList: [
				{
					title: "清单1",
					content: [
						{
							idx: 0,
							fair: "a1",
							active: true,
							address: require("../static/image/circle.png")
						},
						{
							idx: 1,
							fair: "a2",
							active: true,
							address: require("../static/image/circle.png")
						},
						{
							idx: 2,
							fair: "a3",
							active: true,
							address: require("../static/image/circle.png")
						}
					]
				},
				{
					title: "清单2",
					content: [
						{
							idx: 0,
							fair: "b1",
							active: true,
							address: require("../static/image/circle.png")
						},
						{
							idx: 1,
							fair: "b2",
							active: true,
							address: require("../static/image/circle.png")
						},
						{
							idx: 2,
							fair: "b3",
							active: true,
							address: require("../static/image/circle.png")
						}
					]
				}
			]
		};
	}
	componentWillMount() {
		var that = this;
		PubSub.subscribe("hello", function(msg, data) {
			console.warn(data);
			that.setState({
				newList: [...this.state.newList, data]
			});
		});
	}
	componentDidMount() {
		// this.lister = DeviceEventEmitter.addListener("makeMoney", add => {
		// 	// console.warn(add);
		// 	this.setState(
		// 		{
		// 			newList: [...this.state.newList, add]
		// 		},
		// 		() => {
		// 			console.warn(this.state.newList);
		// 			this.render();
		// 		}
		// 	);
		// });

		if (this.props.user) {
			// console.warn(this.props.user);
			this.setState({
				userName: this.props.user,
				state: this.props.code
			});
		}
		// console.warn(this.props.newlist, this.props.cat);
		if (this.props.cat == 0) {
			this.setState({
				myDay: [...this.props.newlist]
			});
		} else if (this.props.cat == 1) {
			this.setState({
				mission: [...this.props.newlist]
			});
		}
	}
	componentWillUnmount() {
		console.warn("卸载!");
	}
	componentWillReceiveProps() {
		console.warn("接受数据");
	}
	shouldComponentUpdate() {
		console.warn("是否更新");
		return true;
	}
	componentWillUpdate() {
		console.warn("将要更新");
	}
	componentDidUpdate() {
		console.warn("完成更新");
	}

	myDay = () => {
		Actions.MissionPage({ name: "我的一天", list: this.state.myDay, cat: 0 });
	};
	mission = () => {
		Actions.MissionPage({ name: "任务", list: this.state.mission, cat: 1 });
	};
	enterNew = () => {
		// console.warn("111");
		Actions.newpage();
	};
	openSearch = () => {
		// console.warn("ooo");
		Actions.search();
	};
	enterLogin = () => {
		if (this.state.state == 1) {
			Actions.logout({ user: this.props.user });
		} else {
			Actions.prelogin();
		}
	};
	enterList = idx => {
		// console.warn(idx);
		Actions.enterList({ list: this.state.newList[idx] });
	};
	componentWillUpdate() {
		console.warn("render");
	}
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					source={require("../static/image/blur.jpg")}
					style={{ flex: 1, position: "relative", padding: 10 }}
				>
					<View
						style={{
							// backgroundColor: "rgb(53, 176, 233)",
							backgroundColor: "white",
							padding: 10,
							borderRadius: 10
						}}
					>
						{/* 顶部栏 */}
						<View style={styles.TopBar}>
							<View style={styles.TopBarLeft}>
								<TouchableHighlight onPress={this.enterLogin}>
									<Image
										source={require("../static/image/avtor.png")}
										style={{ width: 40, height: 40, marginRight: 10 }}
									/>
								</TouchableHighlight>

								<Text
									style={{
										fontSize: 18,
										color: "rgb(53, 176, 233)",
										fontStyle: "bold",
										letterSpacing: 1
									}}
								>
									{this.state.userName}
								</Text>
							</View>
							<TouchableOpacity onPress={this.openSearch}>
								<Image
									source={require("../static/image/search.png")}
									style={{ width: 20, height: 20 }}
								/>
							</TouchableOpacity>
						</View>
						{/* 我的一天 */}
						<TouchableHighlight onPress={this.myDay}>
							<View style={styles.CommonBar}>
								<Image
									source={require("../static/image/sun.png")}
									style={{ width: 30, height: 30, marginRight: 10 }}
								/>
								<Text style={{ color: "rgb(53, 176, 233)" }}>我的一天</Text>
							</View>
						</TouchableHighlight>
						{/* 任务 */}
						<TouchableHighlight onPress={this.mission}>
							<View style={styles.CommonBar}>
								<Image
									source={require("../static/image/mission.png")}
									style={{ width: 30, height: 30, marginRight: 10 }}
								/>
								<Text style={{ color: "rgb(53, 176, 233)" }}>任务</Text>
							</View>
						</TouchableHighlight>
					</View>

					{/* 分隔栏 */}
					<View
						style={{
							height: 2,
							width: "100%",
							backgroundColor: "white",
							marginTop: 20,
							marginBottom: 20,
							borderRadius: 2
						}}
					/>
					{/* 新建清单 */}

					<View
						style={{
							width: "100%",
							backgroundColor: "white",
							borderRadius: 10,
							// padding: 10,
							paddingLeft: 10,
							paddingRight: 10,
							paddingBottom: 0,
							marginTop: 10
						}}
					>
						<TouchableHighlight onPress={this.enterNew}>
							<View style={styles.CommonBar1}>
								<Text style={{ fontSize: 18, color: "rgb(53, 176, 233)" }}>
									+ 新建清单
								</Text>
							</View>
						</TouchableHighlight>
						{this.state.newList.map((ele, idx) => {
							return (
								<TouchableHighlight
									onPress={() => this.enterList(idx)}
									key={idx}
								>
									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginTop: 15,
											marginBottom: 15
											// borderBottomWidth: 1,
											// borderBottomColor: "#CCC",
											// paddingBottom: 10
										}}
									>
										<Text
											style={{
												letterSpacing: 1,
												fontSize: 14,
												fontStyle: "bold",
												color: "black"
											}}
										>
											{ele.title}
										</Text>
										<Image
											source={require("../static/image/deleteList.png")}
											style={{ width: 20, height: 20 }}
										/>
									</View>
								</TouchableHighlight>
							);
						})}
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
		backgroundColor: "#fff"
		// padding: 10
	},
	TopBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10
	},
	TopBarLeft: {
		flexDirection: "row",
		alignItems: "center"
	},
	CommonBar: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		marginTop: 10
	},
	CommonBar1: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: 8,
		width: 100,
		// paddingLeft: 10,
		paddingRight: 10,
		height: 30,
		// marginLeft: 15,
		// marginTop: 7,
		backgroundColor: "white"
	}
});
