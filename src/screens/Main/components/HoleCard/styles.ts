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
  overflow: hidden;
  margin-top: -20px;
  margin-bottom: -40px;
  padding-left: ${({ index }) => (index % 2 === 0 ? 10 : 0)}px;
  padding-right: ${({ index }) => (index % 2 === 0 ? 0 : 10)}px;
`;

export const CardHidder = styled.View`
  align-items: center;
  padding: 0 60px;
  padding-bottom: 60px;
  padding-top: 20px;
  margin-bottom: -32px;
  border-bottom-left-radius: 110px;
  border-bottom-right-radius: 110px;
  overflow: hidden;
  z-index: 999;
`;

export const CardView = styled(Animated.View)`
  height: ${width / 2 - 20}px;
  width: ${width / 2 - 20}px;
  align-items: center;
  justify-content: center;
  background: #007aff;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 30px;
  text-align: center;
`;

export const HoleContainer = styled(Animated.View)`
  transform: scale(0);
`;

export const HoleBorder = styled.View`
  width: 33px;
  height: 33px;
  background: gray;
  border-radius: 50px;
  transform: scaleX(6);
  overflow: hidden;
`;

export const Hole = styled.View`
  width: 33px;
  height: 33px;
  background: black;
  border-radius: 50px;
  margin-top: 7px;
`;
