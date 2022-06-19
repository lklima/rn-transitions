import React from "react";
import { FadeIn, FlipInEasyX, ZoomOut } from "react-native-reanimated";
import { useWindowDimensions } from "react-native";

import * as S from "./styles";

interface CardProps {
  index: number;
}

export default function PoofCard({ index }: CardProps) {
  const { width } = useWindowDimensions();

  const size = width / 2 - 20;
  const particlesAmount = 150;
  const particles = Array.from({ length: particlesAmount }, (_, index) => index);

  function renderParticles() {
    return particles.map((particle) => {
      const ramdomTop = Math.random() * size - 10;
      const ramdomLeft = Math.random() * size - 10;

      return (
        <S.Particle
          key={particle}
          top={ramdomTop}
          left={ramdomLeft}
          exiting={ZoomOut.delay(particle)}
        />
      );
    });
  }

  return (
    <S.Container index={index}>
      <S.CardView entering={FlipInEasyX} />
      <S.ParticleContent exiting={FadeIn.duration(0)}>
        {renderParticles()}
      </S.ParticleContent>
    </S.Container>
  );
}
