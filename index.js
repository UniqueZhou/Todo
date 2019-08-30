/**
 * @format
 */

import {
  AppRegistry
} from "react-native";
import App from "./App";
import Todo from "./components/Todopage";
import MissionPage from "./components/MissionPage";
import main from "./main";
import {
  name as appName
} from "./app.json";

AppRegistry.registerComponent(appName, () => main);
// AppRegistry.registerComponent(appName, () => MissionPage);