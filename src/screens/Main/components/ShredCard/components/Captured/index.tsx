import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { withSequence, withTiming } from "react-native-reanimated";
import { captureRef } from "react-native-view-shot";

import { Container, Slice, SliceImage } from "./styles";

interface Props {
  capture: any;
}

export default function Captured({ capture }: Props) {
  const { width } = useWindowDimensions();

  const [img, setImg] = useState(null);

  const cardWidth = width / 2 - 20;
  const cardHeight = width / 2 - 20;
  const percentage = 1;
  const shredCount = 16;
  const shredWidth = cardWidth / shredCount;

  useEffect(() => {
    if (capture.current && width) {
      setTimeout(() => {
        captureRef(capture, { width: cardWidth, height: cardHeight }).then(setImg);
      }, 300);
    }
  }, [capture, width]);

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
      opacity: 1,
    };
    return {
      initialValues,
      animations,
    };
  }

  if (!img) return <></>;

  return (
    <Container width={cardWidth} height={cardHeight} exiting={cardExiting}>
      {new Array(shredCount).fill(0).map((_, index) => {
        // Alternate direction
        const dir = index % 2 === 0 ? 1 : -1;
        const translateY = index % 2 === 0 ? 0.5 : 0;
        const rotation = 15 * percentage * dir;

        return (
          <Slice
            key={String(index)}
            width={shredWidth}
            index={index}
            exiting={() => {
              "worklet";
              const animations = {
                transform: [
                  { rotateY: rotation + "deg" },
                  { perspective: 700 },
                  { translateY: -shredWidth },
                  { rotateX: dir * (Math.random() * 10 + 2) * percentage + "deg" },
                  { translateY: shredWidth },
                  { translateY: translateY },
                ],
              };
              const initialValues = {
                transform: [
                  { rotateY: "0deg" },
                  { perspective: 0 },
                  { translateY: 0 },
                  { rotateX: "0deg" },
                  { translateY: 0 },
                  { translateY: 0 },
                ],
                opacity: 1,
              };
              return {
                initialValues,
                animations,
              };
            }}
          >
            <SliceImage
              width={cardWidth}
              height={cardHeight}
              shredWidth={shredWidth}
              index={index}
              source={{ uri: img }}
              dir={dir}
            />
          </Slice>
        );
      })}
    </Container>
  );
}
