import React from "react";
import { TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { TRPCProvider } from "~/utils/api";

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  const router = useRouter();

  return (
    <TRPCProvider>
      {/*
        The Stack component displays the current page.
        It also allows you to configure your screens 
      */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f472b6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="(main)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(cards)"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerLeft: () => (
              <TouchableOpacity className="p-2" onPress={() => router.back()}>
                <FontAwesome
                  name="arrow-left"
                  size={20}
                  color={"white"}
                  className="font-light"
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: "left",
            headerTitleStyle: {
              color: "white",
            },
            headerTitle: "My cards",
            headerRight: () => (
              <TouchableOpacity className="rounded-lg bg-gray-800/70 p-2">
                <FontAwesome name="plus-circle" size={20} color={"white"} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(transfer)"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerLeft: () => (
              <TouchableOpacity className="p-2" onPress={() => router.back()}>
                <FontAwesome
                  name="arrow-left"
                  size={20}
                  color={"white"}
                  className="font-light"
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: "left",
            headerTitleStyle: {
              color: "white",
              fontWeight: "400",
            },
            headerTitle: "Transfer to card",
            // headerRight: () => (
            //   <TouchableOpacity className="rounded-lg bg-gray-800/70 p-2">
            //     <FontAwesome name="plus-circle" size={20} color={"white"} />
            //   </TouchableOpacity>
            // ),
          }}
        />
      </Stack>
      <StatusBar style="auto" backgroundColor="#FFFFFF" hidden={false} />
    </TRPCProvider>
  );
};

export default RootLayout;
