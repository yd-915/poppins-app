import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeHero from "~/components/HomeHero";
import PillButton from "~/components/Pillbutton";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="grid h-full w-full bg-slate-950">
        <View className="flex-1 flex-row items-center justify-between">
          <HomeHero />
          <TouchableOpacity onPress={() => router.push("(cards)" as never)}>
            <Image
              resizeMode="cover"
              style={{
                width: 110,
                height: 214,
                aspectRatio: 9 / 16,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              source={require("../../../assets/home-hero-card.png")}
            />
          </TouchableOpacity>
        </View>
        <View className="my-4 flex flex-row items-center justify-center px-4">
          <PillButton text="Transfer">
            <FontAwesome name="exchange" size={20} color={"white"} />
          </PillButton>

          <PillButton text="Expense">
            <FontAwesome name="bar-chart" size={20} color={"white"} />
          </PillButton>

          <PillButton text="Payments">
            <Ionicons name="wallet" size={20} color={"white"} />
          </PillButton>
        </View>
        <View className="mb-5 flex flex-row items-center justify-center px-4">
          <PillButton text="Satsback">
            <FontAwesome name="gift" size={20} color={"white"} />
          </PillButton>

          <PillButton text="Security">
            <FontAwesome name="shield" size={20} color={"white"} />
          </PillButton>

          <PillButton text="More">
            <Ionicons name="apps" size={20} color={"white"} />
          </PillButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
