import { SafeAreaView, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import CardCarousel from "~/components/CardsList";
import PillButton from "~/components/Pillbutton";

const CardsScreen = () => {
  return (
    <SafeAreaView>
      <View className="w-full1 grid h-full bg-black">
        <View className="flex-1 flex-row items-center justify-between">
          {/* <Text className="text-white">Cards settings</Text> */}
          <CardCarousel
            cards={[
              { id: "1", name: "Visa card" },
              { id: "2", name: "Master card" },
            ]}
          />
        </View>
        <View className="my-4 flex flex-row items-center justify-center px-4">
          <PillButton text="Month limit">
            <View className="flex flex-row items-center justify-between">
              <Text className="flex-1 text-sm font-normal text-green-500">
                $
                {(1500).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </Text>
              <Text className="text-sm font-normal text-white">
                $
                {(3500).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </Text>
            </View>
          </PillButton>
          <View className="flex-1">
            <PillButton text="Change PIN">
              <Ionicons name="code-working" size={20} color={"white"} />
            </PillButton>
          </View>
        </View>
        <View className="mb-16 flex flex-row items-center justify-center px-4">
          <PillButton text="Freeze card">
            <Ionicons name="snow" size={20} color={"white"} />
          </PillButton>

          <PillButton text="Customize">
            <Ionicons name="color-palette" size={20} color={"white"} />
          </PillButton>

          <PillButton text="Manage">
            <Ionicons name="options" size={20} color={"white"} />
          </PillButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardsScreen;
