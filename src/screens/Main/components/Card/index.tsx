import React from "react";
import { withSequence, withTiming } from "react-native-reanimated";

import * as S from "./styles";

interface CardProps {
  index: number;
}

export default function Card({ index }: CardProps) {
  function entering() {
    "worklet";
    const animations = {
      transform: [{ perspective: 700 }, { rotateX: withTiming("0deg") }],
      opacity: withTiming(1),
    };
    const initialValues = {
      transform: [{ perspective: 700 }, { rotateX: "90deg" }],
      opacity: 0,
    };
    return {
      initialValues,
      animations,
    };
  }

  function cardExiting() {
    "worklet";
    const animations = {
      transform: [
        { translateY: withSequence(withTiming(-10), withTiming(250, { duration: 600 })) },
        {
          rotateZ: withSequence(
            withTiming("5deg"),
            withTiming("0deg", { duration: 600 })
          ),
        },
      ],
    };
    const initialValues = {
      transform: [{ translateY: 0 }, { rotateZ: "0deg" }],
    };
    return {
      initialValues,
      animations,
    };
  }

  function holeExiting() {
    "worklet";
    const animations = {
      transform: [
        {
          scale: withSequence(
            withTiming(1, { duration: 400 }),
            withTiming(1, { duration: 600 }),
            withTiming(0, { duration: 400 })
          ),
        },
      ],
    };
    const initialValues = {
      transform: [{ scale: 0 }],
    };
    return {
      initialValues,
      animations,
    };
  }

  return (
    <S.Container index={index}>
      <S.CardHidder>
        <S.CardView entering={entering} exiting={cardExiting}>
          <S.Text>Hello{"\n"}World!</S.Text>
        </S.CardView>
      </S.CardHidder>
      <S.HoleContainer exiting={holeExiting}>
        <S.HoleBorder>
          <S.Hole />
        </S.HoleBorder>
      </S.HoleContainer>
    </S.Container>
  );
}
