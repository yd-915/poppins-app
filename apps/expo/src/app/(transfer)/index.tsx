import { SafeAreaView, Text, View } from "react-native";

import TransferCarousel from "~/components/TranferCarousel";

const TransferScreen = () => {
  return (
    <SafeAreaView>
      <View className="w-full1 grid h-full bg-black">
        <View className="grid w-full flex-1 items-start justify-end">
          <View className="px-4 text-base">
            <Text className="text-white">From the card</Text>
          </View>
          <View className="flex-1 flex-row items-center justify-between">
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
        </View>
        <View className="grid w-full flex-1 items-start justify-end">
          <View className="px-4 text-base">
            <Text className="text-white">To the card</Text>
          </View>
          <View className="flex-1 flex-row items-center justify-between">
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
        </View>
        <View className="grid w-full flex-[1]"></View>
      </View>
    </SafeAreaView>
  );
};

export default TransferScreen;
