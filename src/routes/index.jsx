import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
