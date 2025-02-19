import { View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { HelloWave } from "@/components/HelloWave";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import { Colors } from "@/constants/Colors";

const AboutScreen = () => {
  return (
    <ParallaxScrollView
      headerImage={
        <View className="flex-1 items-center justify-center">
          <HelloWave />
          <ThemedText type="title" className="mt-4">
            À propos
          </ThemedText>
        </View>
      }
      headerBackgroundColor={{
        light: Colors.light.background,
        dark: Colors.dark.background,
      }}
    >
      <View className="gap-6">
        {/* Introduction */}
        <View>
          <ThemedText type="subtitle" className="mb-2">
            Bienvenue !
          </ThemedText>
          <ThemedText>
            Notre application est conçue pour vous offrir la meilleure
            expérience possible. Nous mettons l'accent sur la simplicité et
            l'efficacité.
          </ThemedText>
        </View>

        {/* Mission */}
        <Collapsible title="Notre Mission">
          <ThemedText>
            Nous nous efforçons de créer des solutions innovantes qui
            simplifient votre quotidien. Notre équipe travaille sans relâche
            pour vous offrir une expérience utilisateur exceptionnelle.
          </ThemedText>
        </Collapsible>

        {/* Features */}
        <Collapsible title="Fonctionnalités">
          <View className="gap-2">
            <ThemedText>• Interface intuitive et moderne</ThemedText>
            <ThemedText>• Support du mode sombre</ThemedText>
            <ThemedText>• Performance optimisée</ThemedText>
            <ThemedText>• Mises à jour régulières</ThemedText>
          </View>
        </Collapsible>

        {/* Contact */}
        <View className="mt-4">
          <ThemedText type="subtitle" className="mb-2">
            Contactez-nous
          </ThemedText>
          <View className="gap-2">
            <ExternalLink href="https://twitter.com/votrecompte">
              <ThemedText type="link">Twitter</ThemedText>
            </ExternalLink>
            <ExternalLink href="https://github.com/votrecompte">
              <ThemedText type="link">GitHub</ThemedText>
            </ExternalLink>
            <ExternalLink href="mailto:contact@votreapp.com">
              <ThemedText type="link">Email</ThemedText>
            </ExternalLink>
          </View>
        </View>

        {/* Version */}
        <View className="mt-6 items-center">
          <ThemedText className="text-muted-foreground">
            Version 1.0.0
          </ThemedText>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

export default AboutScreen;
