import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import { user } from "../data/Profile";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
      />
      <Drawer.Screen name="Category" component={Category} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
