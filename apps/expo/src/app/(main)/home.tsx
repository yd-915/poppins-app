import { SafeAreaView, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

import PillButton from "~/components/Pillbutton";

const Home = () => {
  return (
    <SafeAreaView>
      <View className="grid h-full w-full bg-slate-950 px-4">
        <View className="flex-1 items-center justify-center">
          <Text className="text-center text-lg text-white">
            Balance component here
          </Text>
        </View>
        <View className="my-4 flex flex-row items-center justify-center">
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
        <View className="mb-5 flex flex-row items-center justify-center">
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

export default Home;
