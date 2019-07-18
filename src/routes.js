import { createAppContainer, createStackNavigator } from "react-navigation";

//Pages
import { Main, Podcast } from "./pages";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Podcast
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default Routes;
