import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import { user } from "../data/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
      />
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
