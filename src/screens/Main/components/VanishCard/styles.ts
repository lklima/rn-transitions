import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface ContainerProps {
  index: number;
}

interface ParticleProps {
  top: number;
  left: number;
}

export const Container = styled.View<ContainerProps>`
  width: ${width / 2}px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding-left: ${({ index }) => (index % 2 === 0 ? 10 : 0)}px;
  padding-right: ${({ index }) => (index % 2 === 0 ? 0 : 10)}px;
`;

export const CardView = styled(Animated.View)`
  height: ${width / 2 - 20}px;
  width: ${width / 2 - 20}px;
  background: #007aff;
  border-radius: 20px;
  z-index: 999;
`;

export const ParticleContent = styled(Animated.View)`
  height: ${width / 2 - 20}px;
  width: ${width / 2 - 20}px;
  position: absolute;
  flex-direction: row;
  flex-wrap: wrap;
  opacity: 0;
`;

export const Particle = styled(Animated.View)<ParticleProps>`
  height: 30px;
  width: 30px;
  background: #007aff;
  border-radius: 30px;
  opacity: 0.3;
  position: absolute;
`;
