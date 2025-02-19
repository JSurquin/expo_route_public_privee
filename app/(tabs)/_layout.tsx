// Import des composants nécessaires depuis expo-router et react
import { Redirect, Tabs, useRouter, useRootNavigationState } from "expo-router";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";

// Import des composants personnalisés
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import useUserStore from "../store/userStore";
import * as SecureStore from "expo-secure-store";

// Composant principal pour la mise en page des onglets
export default function TabLayout() {
  // Récupération du thème de couleur
  const colorScheme = useColorScheme();
  // Initialisation du router
  const router = useRouter();

  // Récupération des états et fonctions du store utilisateur
  const { isAuthenticated, user, setIsAuthenticated }: any = useUserStore();
  // État pour gérer si l'app est prête
  const [isReady, setIsReady] = useState(false);

  // Fonction pour récupérer un élément du stockage sécurisé
  const getSecureItem = async (key: string) => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error("Erreur de lecture sécurisée:", error);
      return null;
    }
  };

  // Effect pour vérifier l'authentification au chargement
  useEffect(() => {
    getSecureItem("user").then((user) => {
      if (user) {
        console.log("user", user);
        const userData = JSON.parse(user);
        console.log("userData", userData);
        console.log(
          "userData.isAuthenticated. sAuthenticated",
          userData.isAuthenticated
        );
        if (userData.isAuthenticated) {
          setIsAuthenticated(true);
          router.push("/");
        } else {
          setIsAuthenticated(false);
          setIsReady(true);
        }
      }
    });
  }, []);

  // Récupération de l'état de navigation racine
  const navigationRootState = useRootNavigationState();

  // Vérifie si la navigation est prête à être rendue
  const isReadyToRender = navigationRootState.key !== undefined;

  // Redirection vers login si non authentifié
  if (!isAuthenticated && isReadyToRender && isReady) {
    return setTimeout(() => {
      router.replace("/login");
    }, 0);
  }

  // Rendu des onglets si authentifié
  if (isAuthenticated) {
    return (
      <Tabs
        // Configuration des options des onglets
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Style spécifique pour iOS avec effet de flou
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        {/* Onglet Accueil */}
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        {/* Onglet Explorer */}
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
        {/* Onglet À propos */}
        <Tabs.Screen
          name="about"
          options={{
            title: "A propos",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    );
  }
}
