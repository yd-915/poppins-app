import { Stack } from "expo-router";

export default function CardsLayout() {
  // const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000000",
          // height: 60,
          // paddingHorizontal: 10,
          // paddingTop: 10,
          // paddingBottom: 15,
          // borderTopWidth: 0,
        },
        headerShown: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="(transfer)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
