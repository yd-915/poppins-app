import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PillButton = (props: { children: ReactNode; text: string }) => {
  return (
    <View className="mx-2 grid max-w-fit flex-grow items-center justify-center justify-items-center gap-1">
      <TouchableOpacity className="w-full items-center justify-center rounded-lg bg-slate-900/80 px-4 py-2">
        {props.children}
      </TouchableOpacity>
      <Text className="text-sm font-light text-slate-300/60">{props.text}</Text>
    </View>
  );
};

export default PillButton;
