import { Text, View } from "react-native";

const HomeHero = () => {
  // const [] = useState([
  //   {

  //   }
  // ]);

  return (
    <View className="grid gap-4 px-4">
      <View className="grid gap-1">
        <Text className="text-left text-xs font-light text-gray-500">
          Total balance
        </Text>
        <Text className="line-clamp-1 text-left text-2xl font-bold text-white">
          ⚡️
          {(0).toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </Text>
      </View>
      <View className="grid gap-1">
        <Text className="text-left text-xs font-light text-gray-500">
          This month
        </Text>
        <View>
          <Text className="line-clamp-1 text-left text-2xl font-bold text-white">
            {"🔺"}⚡️
            {(0).toLocaleString("en-US", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </Text>
          <Text className="line-clamp-1 text-left text-2xl font-bold text-white">
            {"🔻"}⚡️
            {(2304).toLocaleString("en-US", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHero;
