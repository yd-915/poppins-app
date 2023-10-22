import React, { useEffect, useRef } from "react";
import {
  Animated,
  FlatList,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

interface CarouselData {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
  // Add other card data properties here
}

interface TransferCarouselProps {
  data: CarouselData[];
  onItemChanged: ({ id, data }: CarouselData) => void;
}

const TransferCarousel: React.FC<TransferCarouselProps> = ({
  data,
  onItemChanged,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  useEffect(() => {
    console.log(currentIndex, ":::Current slide index");
  }, [currentIndex]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderItem = ({ item }: any) => {
    return (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <CardItem item={item} />
    );
  };

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const viewableItemChanged = useRef(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ viewableItems }: { viewableItems: any }) => {
      console.log(viewableItems, ":::Viewable items");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setCurrentIndex(viewableItems[0]!.index);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      onItemChanged(data[viewableItems[0]!.index]!);
    },
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        // snapToInterval={200} // Assuming each card is 200 wide
        pagingEnabled
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      {/* <Paginator slides={data} scrollX={scrollX} /> */}
    </View>
  );
};

export default TransferCarousel;

const CardItem: React.FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: Record<string, any>;
}> = ({ item }) => {
  const { width } = useWindowDimensions();
  console.log(item, ":::Transfer Carousel");
  return (
    <View
      style={[
        { flex: 1, justifyContent: "center", alignItems: "center" },
        { width: width * 0.9, paddingHorizontal: 10 },
      ]}
    >
      <View
        style={{ flex: 0.5 }}
        className="w-full items-center rounded-lg bg-[#1C1C1E]"
      >
        <Text className="text-white">
          {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            item?.data?.name
          }
        </Text>
      </View>

      {/* Render other card data here */}
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const Paginator: React.FC<{ slides: any[]; scrollX: Animated.Value }> = ({
//   slides,
//   scrollX,
// }) => {
//   const { width } = useWindowDimensions();
//   return (
//     <View
//       style={[
//         {
//           flexDirection: "row",
//           height: 64,
//         },
//       ]}
//     >
//       {slides.map((_, i) => {
//         const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

//         const dotWidth = scrollX.interpolate({
//           inputRange,
//           outputRange: [10, 20, 10],
//           extrapolate: "clamp",
//         });

//         const opacity = scrollX.interpolate({
//           inputRange,
//           outputRange: [0.3, 1, 0.3],
//           extrapolate: "clamp",
//         });
//         return (
//           <Animated.View
//             style={[
//               {
//                 height: 10,
//                 width: dotWidth,
//                 borderRadius: 5,
//                 backgroundColor: "green",
//                 marginHorizontal: 5,
//                 opacity,
//               },
//             ]}
//             key={i}
//           ></Animated.View>
//         );
//       })}
//     </View>
//   );
// };
