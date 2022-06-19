import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

interface TextPops {
  selected: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const OptionsContent = styled.View`
  width: ${width - 35}px;
  height: 80px;
  border-radius: 8px;
  background: #eeedee;
  overflow: hidden;
  flex-direction: row;
  margin-top: 20px;
`;

export const Highlight = styled(Animated.View)`
  height: ${(width - 35) / 3}px;
  width: ${(width - 35) / 3}px;
  background: #007aff;
  position: absolute;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const OptionText = styled.Text<TextPops>`
  font-size: 20px;
  color: ${({ selected }) => (selected ? "white" : "#007aff")};
`;

export const RowContent = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Text = styled.Text`
  font-size: 20px;
`;

export const Count = styled.Text`
  font-size: 20px;
  color: gray;
`;

export const AddButtonsContent = styled.View`
  flex-direction: row;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #eeedee;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const CardContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;
