import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import HomeScreen from './src/HomeScreen';
import AllVehicles from "./src/AllVehicles";
import AddVehicle from "./src/AddVehicle";
import SearchVehicle from "./src/SearchVehicle";
import CalendarAllVehicles from "./src/CalendarAllVehicles";
import ViewDetail from "./src/ViewDetail";

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    CalendarAllVehicles : CalendarAllVehicles,
    //AllVehicles :AllVehicles,
    AddVehicle :AddVehicle,
    SearchVehicle : SearchVehicle,
    ViewDetail : ViewDetail
  },
  {
      initialRouteName:"Home",
      defaultNavigationOptions: {
        title: "Viis App",
      },
    
  },
);

export default createAppContainer(navigator);
