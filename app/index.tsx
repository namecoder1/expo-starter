import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text className="text-center text-2xl px-6 text-muted-foreground">Try using some Tailwind Classes in the markup like <Text className="font-semibold text-foreground">'bg-red-500 flex items-center'</Text>.</Text>
    </View>
  );
}
