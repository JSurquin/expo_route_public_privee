import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
