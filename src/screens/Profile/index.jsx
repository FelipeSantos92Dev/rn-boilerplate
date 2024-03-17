import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Title title="Go to Home" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category")}
      >
        <Title title="Go to Category" />
      </TouchableOpacity>

      <View style={styles.user}>
        <Title title="User" />
        <Text style={styles.text}>{user.name}</Text>
        <Text style={styles.text}>{user.email}</Text>
        <Text style={styles.text}>{user.phone}</Text>
        <Text style={styles.text}>{user.address.city}</Text>
        <Text style={styles.text}>{user.address.state}</Text>
      </View>
    </View>
  );
}
