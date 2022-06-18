import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface ContainerProps {
  index: number;
}

export const Container = styled.View<ContainerProps>`
  width: ${width / 2}px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 10px;
  padding-left: ${({ index }) => (index % 2 === 0 ? 10 : 0)}px;
  padding-right: ${({ index }) => (index % 2 === 0 ? 0 : 10)}px;
`;

export const CardView = styled(Animated.View)`
  height: ${width / 2 - 20}px;
  width: ${width / 2 - 20}px;
  background: #007aff;
  border-radius: 20px;
`;

export const Image = styled(Animated.Image)`
  height: 250px;
  width: 250px;
  position: absolute;
  opacity: 0;
`;
