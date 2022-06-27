import React, { useRef } from "react";
import { FlipInEasyX, withSequence, withTiming } from "react-native-reanimated";
import { useWindowDimensions } from "react-native";

import * as S from "./styles";

import Captured from "./components/Captured";

import shredder from "./assets/shredder.png";

interface CardProps {
  index: number;
}

export default function ShredCard({ index }: CardProps) {
  const { width } = useWindowDimensions();
  const capture = useRef(null);

  function cardExiting() {
    "worklet";
    const animations = {
      transform: [
        {
          translateY: withSequence(
            withTiming(2, { duration: 50 }),
            withTiming(-2, { duration: 50 }),
            withTiming(20, { duration: 200 }),
            withTiming(20, { duration: 200 }),
            withTiming(140, { duration: 600 }),
            withTiming(140, { duration: 100 }),
            withTiming(135, { duration: 50 }),
            withTiming(200, { duration: 200 })
          ),
        },
      ],
      height: withTiming(0, { duration: 1200 }),
    };
    const initialValues = {
      transform: [{ translateY: 0 }],
      height: width / 2 - 20,
    };
    return {
      initialValues,
      animations,
    };
  }

  function shredExiting() {
    "worklet";
    const animations = {
      transform: [
        {
          translateY: withSequence(
            withTiming(30, { duration: 1000 }),
            withTiming(33, { duration: 100 }),
            withTiming(30, { duration: 100 })
          ),
        },
      ],
      opacity: withSequence(
        withTiming(1, { duration: 200 }),
        withTiming(1, { duration: 1300 }),
        withTiming(0, { duration: 200 })
      ),
    };
    const initialValues = {
      transform: [{ translateY: 70 }],
      opacity: 0,
    };
    return {
      initialValues,
      animations,
    };
  }

  return (
    <S.Container index={index}>
      <S.Shredder
        index={index}
        resizeMode="contain"
        source={shredder}
        exiting={shredExiting}
      />
      <Captured capture={capture} />
      <S.CardView
        ref={capture}
        index={index}
        entering={FlipInEasyX}
        exiting={cardExiting}
      >
        <S.CardText>Hello{"\n"}World</S.CardText>
      </S.CardView>
    </S.Container>
  );
}
