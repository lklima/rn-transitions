import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface Props {
  width: number;
  height?: number;
  index?: number;
  dir?: number;
  shredWidth?: number;
}

export const Container = styled(Animated.View)<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-bottom: 10px;
  position: absolute;
  opacity: 0;
`;

export const Slice = styled(Animated.View)<Props>`
  max-width: ${(props) => props.width}px;
  max-width: ${(props) => props.width}px;
  position: absolute;
  bottom: 0;
  top: 0;
  left: ${(props) => props.width * props.index}px;
  overflow: hidden;
  background: white;
`;

export const SliceImage = styled.Image<Props>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.shredWidth * -props.index}px;
  opacity: ${(props) => (props.dir === 1 ? 1 : 1.0 - 0.2 * 1)};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
