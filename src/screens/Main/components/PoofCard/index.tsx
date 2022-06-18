import React from "react";
import { FadeIn } from "react-native-reanimated";

import * as S from "./styles";

import Poof1 from "./assets/poof1.png";
import Poof2 from "./assets/poof2.png";
import Poof3 from "./assets/poof3.png";
import Poof4 from "./assets/poof4.png";
import Poof5 from "./assets/poof5.png";

interface CardProps {
  index: number;
}

export default function PoofCard({ index }: CardProps) {
  return (
    <S.Container index={index}>
      <S.CardView entering={FadeIn} />
      <S.Image source={Poof1} exiting={FadeIn.duration(0).delay(50)} />
      <S.Image source={Poof2} exiting={FadeIn.duration(0).delay(200)} />
      <S.Image source={Poof3} exiting={FadeIn.duration(0).delay(300)} />
      <S.Image source={Poof4} exiting={FadeIn.duration(0).delay(400)} />
      <S.Image source={Poof5} exiting={FadeIn.duration(0).delay(500)} />
    </S.Container>
  );
}
