import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withSpring,
} from "react-native-reanimated";

import * as S from "./styles";

import HoleCard from "./components/HoleCard";
import PoofCard from "./components/PoofCard";
import ShredCard from "./components/ShredCard";

export default function Main() {
  const { width } = useWindowDimensions();

  const highlightTranlateX = useSharedValue(0);

  const [count, setCount] = useState(0);
  const [optionSelected, setOptionSelected] = useState(0);

  const cards = Array.from({ length: count }, (_, index) => index);

  function handleCard(type: string) {
    if (type === "add") {
      setCount(count + 1);
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  }

  useEffect(() => {
    const highlightWidth = (width - 35) / 3;

    highlightTranlateX.value = withSpring(
      interpolate(optionSelected, [0, 1, 2], [0, highlightWidth, highlightWidth * 2]),
      { damping: 14 }
    );
  }, [optionSelected]);

  const highlightAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: highlightTranlateX.value }],
  }));

  function renderCards() {
    if (optionSelected === 0) {
      return cards.map((card) => <ShredCard key={card} index={card} />);
    } else if (optionSelected === 1) {
      return cards.map((card) => <HoleCard key={card} index={card} />);
    }

    return cards.map((card) => <PoofCard key={card} index={card} />);
  }

  return (
    <S.Container>
      <S.OptionsContent>
        <S.Highlight style={highlightAnimatedStyle} />
        <S.Option onPress={() => setOptionSelected(0)}>
          <S.OptionText selected={optionSelected === 0}>Shredded</S.OptionText>
        </S.Option>
        <S.Option onPress={() => setOptionSelected(1)}>
          <S.OptionText selected={optionSelected === 1}>Hole</S.OptionText>
        </S.Option>
        <S.Option onPress={() => setOptionSelected(2)}>
          <S.OptionText selected={optionSelected === 2}>Poof</S.OptionText>
        </S.Option>
      </S.OptionsContent>
      <S.RowContent>
        <S.Text>
          View Count <S.Count>({count})</S.Count>
        </S.Text>
        <S.AddButtonsContent>
          <S.Button onPress={() => handleCard("remove")}>
            <AntDesign name="minus" size={25} />
          </S.Button>
          <S.Button onPress={() => handleCard("add")}>
            <AntDesign name="plus" size={25} />
          </S.Button>
        </S.AddButtonsContent>
      </S.RowContent>
      <S.CardContent>{renderCards()}</S.CardContent>
    </S.Container>
  );
}
