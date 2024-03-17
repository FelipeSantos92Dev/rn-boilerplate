import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

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
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.phone}</Text>
        <Text style={styles.text}>{data.address.city}</Text>
        <Text style={styles.text}>{data.address.state}</Text>
      </View>
    </View>
  );
}
