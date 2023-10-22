import { SafeAreaView, Text, View } from "react-native";

import CardCarousel from "~/components/CardsList";
import TransferCarousel from "~/components/TranferCarousel";

const TransferScreen = () => {
  return (
    <SafeAreaView>
      <View className="w-full1 grid h-full bg-slate-950">
        <View className="">
          <Text className="text-white">from the card</Text>
        </View>
        <View className="flex-[.8] flex-row items-center justify-between">
          <TransferCarousel
            data={[
              {
                id: "1",
                data: { name: "Visa weekend card", number: "123456787654" },
              },
              {
                id: "2",
                data: {
                  name: "Mastercard weekend card",
                  number: "123456787654",
                },
              },
            ]}
            onItemChanged={({ id, data }) => {
              console.log(id, data, ":::transferCarousel");
            }}
          />
        </View>
        <View className="flex-1 flex-row items-center justify-between">
          <CardCarousel
            cards={[
              { id: "1", name: "Visa card" },
              { id: "2", name: "Master card" },
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransferScreen;
