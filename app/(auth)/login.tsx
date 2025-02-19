import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import useUserStore from "../store/userStore";
import { useState } from "react";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

const LoginScreen = () => {
  const { setIsAuthenticated }: any = useUserStore();
  const router = useRouter();

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  // Stockage sécurisé
  const saveSecureItem = async (key: string, value: string) => {
    try {
      await SecureStore.setItemAsync(key, value, {
        keychainAccessible: SecureStore.WHEN_UNLOCKED,
      });
    } catch (error) {
      console.error("Erreur de stockage sécurisé:", error);
    }
  };

  const handleSubmit = () => {
    if (fields.email === "test@test.com" && fields.password === "password") {
      setIsAuthenticated(true);
      router.push("/");
      saveSecureItem(
        "user",
        JSON.stringify({
          email: fields.email,
          isAuthenticated: true,
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={fields.email}
        onChangeText={(text) => setFields({ ...fields, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={fields.password}
        onChangeText={(text) => setFields({ ...fields, password: text })}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Se connecter</Text>
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

export default LoginScreen;
