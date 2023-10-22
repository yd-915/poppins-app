import { Image, StatusBar, TouchableOpacity } from "react-native";
import { Tabs, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      safeAreaInsets={{ top: StatusBar.currentHeight }}
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          borderRadius: 12,
        },
        tabBarStyle: {
          backgroundColor: "#1C1C1E",
          // borderTopLeftRadius: 10,
          // borderTopRightRadius: 10,
          height: 60,
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 15,
          borderTopWidth: 0,
          // paddingHorizontal: 10,
        },
        tabBarActiveBackgroundColor: "#32D74B",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          headerTitleAllowFontScaling: true,
          tabBarIcon: () => <FontAwesome name="home" size={20} color="white" />,
          title: "Home",
          headerStyle: {
            backgroundColor: "black",
            height: 90,
          },
          headerLeft: () => (
            <TouchableOpacity
              className="ml-4 rounded-lg bg-slate-800/80 p-2"
              onPress={() => router.back()}
            >
              <FontAwesome name="cog" size={20} color={"white"} />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image
              resizeMode="cover"
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              source={require("../../../assets/icon.png")}
            />
          ),
          headerRight: () => (
            <TouchableOpacity className="mr-4 rounded-lg bg-slate-800/80 p-2">
              <FontAwesome name="bell" size={20} color={"white"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="exchange"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="yen-sign" size={20} color={"white"} />
          ),
          title: "Exchange",
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="commenting" size={20} color="white" />
          ),
          title: "Support",
        }}
      />
    </Tabs>
  );
}
