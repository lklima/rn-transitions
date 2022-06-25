import React, { useRef } from "react";
import { FlipInEasyX, withSequence, withTiming } from "react-native-reanimated";
import { Pressable } from "react-native";

import * as S from "./styles";
import Captured from "./components/Captured";

import shredder from "./assets/shredder.png";

interface CardProps {
  index: number;
}

export default function ShredCard({ index }: CardProps) {
  const capture = useRef(null);

  function cardExiting() {
    "worklet";
    const animations = {
      transform: [
        {
          translateY: withSequence(
            withTiming(5, { duration: 50 }),
            withTiming(-5, { duration: 50 }),
            withTiming(20, { duration: 300 }),
            withTiming(200, { duration: 600 })
          ),
        },
      ],
    };
    const initialValues = {
      transform: [{ translateY: 0 }],
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
          translateY: withTiming(0, { duration: 700 }),
        },
      ],
      opacity: withSequence(
        withTiming(1, { duration: 200 }),
        withTiming(1, { duration: 600 }),
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

  function handlePress() {
    capture.current.capture();
  }

  return (
    <Pressable onPress={handlePress}>
      <S.Container index={index}>
        <S.Shredder
          index={index}
          resizeMode="contain"
          source={shredder}
          exiting={shredExiting}
        />
        <Captured ref={capture}>
          <S.CardView index={index} entering={FlipInEasyX} exiting={cardExiting}>
            <S.CardText>Hello{"\n"}World</S.CardText>
          </S.CardView>
        </Captured>
      </S.Container>
    </Pressable>
  );
}
