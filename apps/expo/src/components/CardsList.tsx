import React, { useEffect, useRef } from "react";
import {
  Animated,
  FlatList,
  Image,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

interface CardData {
  id: string;
  name: string;
  // Add other card data properties here
}

interface CardCarouselProps {
  cards: CardData[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
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
    },
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={cards}
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
        // onScrollEndDrag={(event) => {
        //   let newIndex = Math.round(
        //     event.nativeEvent.contentOffset.x / 200
        //   );
        //   setSelectedId(cards[newIndex].id);
        // }}
      />
      <Paginator slides={cards} scrollX={scrollX} />
    </View>
  );
};

export default CardCarousel;

const CardItem: React.FC<{ item: Record<string, string> }> = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        { flex: 1, justifyContent: "center", alignItems: "center" },
        { width },
      ]}
    >
      <Image
        style={[
          { flex: 0.7, justifyContent: "center" },
          {
            width,
            height: 214,
            aspectRatio: 9 / 16,
            resizeMode: "contain",
            alignSelf: "center",
          },
        ]}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        source={require("../../assets/icon-main-white.png")}
      />
      <View style={{ flex: 0.3 }}>
        <Text className="text-white">
          {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            item?.name
          }
        </Text>
      </View>

      {/* Render other card data here */}
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Paginator: React.FC<{ slides: any[]; scrollX: Animated.Value }> = ({
  slides,
  scrollX,
}) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        {
          flexDirection: "row",
          height: 64,
        },
      ]}
    >
      {slides.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[
              {
                height: 10,
                width: dotWidth,
                borderRadius: 5,
                backgroundColor: "green",
                marginHorizontal: 5,
                opacity,
              },
            ]}
            key={i}
          ></Animated.View>
        );
      })}
    </View>
  );
};
