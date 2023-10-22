import { Stack } from "expo-router";

export default function CardsLayout() {
  // const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1C1C1E",
          // height: 60,
          // paddingHorizontal: 10,
          // paddingTop: 10,
          // paddingBottom: 15,
          // borderTopWidth: 0,
        },

        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(cards)" />
    </Stack>
  );
}
