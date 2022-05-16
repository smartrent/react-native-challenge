import { NavigationContainer } from "@react-navigation/native";
import { StackNavigatorScreens } from "./StackNavigator";
import { registerRootComponent } from "expo";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigatorScreens />
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
