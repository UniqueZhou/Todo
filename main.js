import React, { Component } from "react";

import { Router, Stack, Scene } from "react-native-router-flux";

// 导入App组件
import Todopage from "./components/Todopage";
import MissionPage from "./components/MissionPage";
import newpage from "./components/newPage";
import search from "./components/search";
import Login from "./components/Login";
import prelogin from "./components/PreLogin";
import Register from "./components/Register";
import logout from "./components/Logout";
import enterList from "./components/enterList";

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Router>
				<Stack key="root">
					<Scene key="Todopage" component={Todopage} hideNavBar={true} />
					<Scene key="MissionPage" component={MissionPage} hideNavBar={true} />
					<Scene key="newpage" component={newpage} hideNavBar={true} />
					<Scene key="search" component={search} hideNavBar={true} />
					<Scene key="login" component={Login} hideNavBar={true} />
					<Scene key="prelogin" component={prelogin} hideNavBar={true} />
					<Scene key="Register" component={Register} hideNavBar={true} />
					<Scene key="logout" component={logout} hideNavBar={true} />
					<Scene key="enterList" component={enterList} hideNavBar={true} />
				</Stack>
			</Router>
		);
	}
}
