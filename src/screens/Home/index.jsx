import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile", { user })}
      >
        <Title title="Go to Profile" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category")}
      >
        <Title title="Go to Category" />
      </TouchableOpacity>
    </View>
  );
}
