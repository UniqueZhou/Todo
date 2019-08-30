import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	TouchableHighlight,
	TextInput,
	DeviceEventEmitter
} from "react-native";

import { Actions } from "react-native-router-flux";
import PubSub from "pubsub-js";

export default class newPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			day: "",
			month: "",
			name: "",
			week: "",
			data: "",
			content: "",
			todo: ["起床", "洗衣服", "吃饭"],
			title: "默认清单",
			i: 0,
			todos: [
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
			active: true
		};
	}
	componentWillMount() {
		this.getDate();
		this.addI();
		// console.warn("执行");
		this.setState({
			name: this.props.navigation.state.params.name
		});
	}
	addI = () => {
		this.setState({
			i: ++this.state.i
		});
	};
	getDate = () => {
		var dd = new Date();
		var tmp = "";
		switch (dd.getDay()) {
			case 0:
				tmp = "日";
				break;
			case 1:
				tmp = "一";
				break;
			case 2:
				tmp = "二";
				break;
			case 3:
				tmp = "三";
				break;
			case 4:
				tmp = "四";
				break;
			case 5:
				tmp = "五";
				break;
			case 6:
				tmp = "六";
				break;
		}
		this.setState({
			day: dd.getDate(),
			month: dd.getMonth() + 1,
			week: tmp
		});
		// console.warn(tmp);
	};
	returnLastPage = () => {
		PubSub.publish("hello", {
			title: this.state.title + this.state.i,
			newPageList: this.state.todos
		});
		Actions.Todopage({
			add: {
				title: this.state.title + this.state.i,
				newPageList: this.state.todos
			}
		});
		// console.warn("return");
		// DeviceEventEmitter.emit("makeMoney", {
		// 	title: this.state.title,
		// 	content: this.state.todos
		// });
	};
	addData = () => {
		// console.warn(this.state.content);
		// this.setState(state => {
		// 	todo: [...this.state.todo, this.state.content];
		// });
		var obj = {
			// idx: this.state.i,
			fair: this.state.content,
			active: true,
			address: require("../static/image/circle.png")
		};
		// this.setState(state => {
		// 	i: state.i + 1;
		// });
		this.setState({
			todos: this.state.todos.concat(obj),
			content: ""
		});
	};
	equalText = input => {
		this.setState({
			content: input
		});
	};
	changeState = idx => {
		// console.warn(idx);
		// this.state.todos.map(ele => {
		// if (ele.idx == idx) {
		// 	// console.warn(ele);
		// 	let state = { ...this.state };
		// 	// ele.active = !ele.active;
		// 	state.todos[idx].active = !state.todos[idx].active;
		// 	state.todos[idx].address =
		// 		state.todos[idx].address == require("../static/image/circle.png")
		// 			? require("../static/image/circleSle.png")
		// 			: require("../static/image/circle.png");
		// 	this.setState({
		// 		...state
		// 	});
		// }

		// });
		let state = { ...this.state };
		// ele.active = !ele.active;
		state.todos[idx].active = !state.todos[idx].active;
		state.todos[idx].address =
			state.todos[idx].address == require("../static/image/circle.png")
				? require("../static/image/circleSle.png")
				: require("../static/image/circle.png");
		this.setState({
			...state
		});
		// this.setState({
		// 	active: false
		// });
	};
	deleteItem = idx => {
		// console.warn(idx);
		// this.state.todos.map(ele => {
		// 	let state = { ...this.state };
		// 	state.todos.splice(idx, 1);
		// 	this.setState({
		// 		...state
		// 	});
		// });
		let state = { ...this.state };
		state.todos.splice(idx, 1);
		this.setState({
			...state
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					source={require("../static/image/timg.jpg")}
					style={{
						// flex: 1,
						height: 200,
						padding: 10,
						// backgroundColor: "blue",
						overflow: "hidden"
					}}
				>
					<TouchableHighlight onPress={this.returnLastPage}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Image
								source={require("../static/image/return.png")}
								style={{ width: 25, height: 25, marginRight: 5 }}
							/>
							<Text style={{ fontSize: 20, color: "white" }}>清单</Text>
						</View>
					</TouchableHighlight>

					<View style={{ marginTop: 85 }}>
						<TextInput
							style={{
								width: 200,
								height: 50,
								// backgroundColor: "red",
								padding: 10,
								fontSize: 24,
								paddingLeft: 0,
								color: "white"
							}}
							defaultValue={this.state.title}
							placeholder="输入任务名称"
							autoFocus={true}
						/>
						<Text
							style={{
								fontSize: 14,
								color: "white"
							}}
						>
							{this.state.month}月{this.state.day}号 星期{this.state.week}
						</Text>
					</View>
				</ImageBackground>
				{/* 渲染部分 */}
				<View style={styles.out}>
					{this.state.todos.map((ele, idx) => {
						return (
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									width: "100%"
								}}
								key={idx}
							>
								<View style={styles.item}>
									<Image
										source={ele.address}
										// source={require(ele.address)}
										style={{ width: 20, height: 20, marginRight: 10 }}
									/>
									<TouchableHighlight onPress={() => this.changeState(idx)}>
										<Text style={ele.active ? styles.unselect : styles.select}>
											{ele.fair}
										</Text>
									</TouchableHighlight>
								</View>

								<View
									style={{
										width: 50,
										height: 30,
										backgroundColor: "#ff6666",
										textAlign: "center",
										borderRadius: 10,
										marginRight: 10,
										position: "absolute",
										right: 0,
										top: 10,
										zIndex: 100
									}}
								>
									<TouchableHighlight onPress={() => this.deleteItem(idx)}>
										<Text
											style={{
												textAlign: "center",
												lineHeight: 30,
												color: "white"
											}}
										>
											删除
										</Text>
									</TouchableHighlight>
								</View>
							</View>
						);
					})}
				</View>
				{/* 渲染数据 */}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						position: "absolute",
						left: 0,
						bottom: 0,
						// backgroundColor: "red",
						width: "100%"
					}}
				>
					<View style={styles.bottomBar}>
						<Image
							source={require("../static/image/new.png")}
							style={{ width: 15, height: 15, marginRight: 10 }}
						/>

						<TextInput
							style={{
								width: 200,
								height: 50,
								// backgroundColor: "red",
								color: "#ccc",
								fontSize: 18
							}}
							placeholder="添加任务"
							onChangeText={this.equalText}
							defaultValue={this.state.content}
							// onSubmitEditing={this.addData}
						/>
					</View>

					<View
						style={{
							width: 60,
							height: 40,
							backgroundColor: "rgb(18, 131, 87)",
							borderRadius: 12,
							marginRight: 0,
							position: "absolute",
							top: 7,
							right: 10,
							zIndex: 10
						}}
					>
						<TouchableHighlight onPress={this.addData}>
							<Text
								style={{
									fontSize: 18,
									textAlign: "center",
									lineHeight: 40,
									color: "white"
								}}
							>
								确认
							</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	//让父容器View撑满全屏
	container: {
		flex: 1,
		backgroundColor: "rgb(236, 236, 236)"
		// padding: 10
	},
	bottomBar: {
		height: 50,
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		padding: 10,
		borderTopWidth: 2,
		borderTopColor: "white",
		backgroundColor: "white"
	},
	out: {
		flexDirection: "column"
		// backgroundColor: "red"
	},
	item: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		height: 50,
		padding: 10,
		borderBottomColor: "#ccc",
		backgroundColor: "white",
		position: "relative",
		marginBottom: 1
		// zIndex: 11
	},
	unselect: {
		fontSize: 16
	},
	select: {
		color: "#ccc",
		fontStyle: "italic",
		textDecorationLine: "line-through",
		fontSize: 16
	},
	deleteButton: {
		width: 50,
		height: 50,
		backgroundColor: "red"
	}
});
