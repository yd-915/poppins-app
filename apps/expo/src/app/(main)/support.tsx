import { SafeAreaView, Text, View } from "react-native";

// Hold-off on buikding
const Support = () => {
  return (
    <SafeAreaView className={`flex-1`}>
      <View className="flex h-full w-full items-center justify-center bg-slate-950">
        <Text className="text-2xl font-semibold text-white">
          Support Coming soon...
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Support;
