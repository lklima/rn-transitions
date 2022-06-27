import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { withDelay, withSequence, withTiming } from "react-native-reanimated";
import { captureRef } from "react-native-view-shot";

import { Container, Slice, SliceImage } from "./styles";

interface Props {
  capture: any;
}

export default function Captured({ capture }: Props) {
  const { width } = useWindowDimensions();

  const [img, setImg] = useState(null);

  const size = width / 2 - 20;
  const shredCount = 16;
  const shredWidth = size / shredCount;

  useEffect(() => {
    if (capture.current && width) {
      captureRef(capture, { width: size, height: size }).then(setImg);
    }
  }, [capture, width]);

  function cardExiting() {
    "worklet";
    const animations = {
      transform: [
        {
          translateY: withSequence(
            withTiming(5, { duration: 100 }),
            withTiming(25, { duration: 200 }),
            withTiming(25, { duration: 200 }),
            withTiming(140, { duration: 600 }),
            withTiming(140, { duration: 100 }),
            withTiming(135, { duration: 50 }),
            withTiming(200, { duration: 200 })
          ),
        },
      ],
      opacity: withDelay(100, withTiming(1)),
    };
    const initialValues = {
      transform: [{ translateY: 0 }],
      opacity: 0,
    };
    return {
      initialValues,
      animations,
    };
  }

  if (!img) return <></>;

  return (
    <Container width={size} height={size} exiting={cardExiting}>
      {new Array(shredCount).fill(0).map((_, index) => {
        // Alternate direction
        const fromMiddle = index - shredCount / 2;
        const dir = index % 2 === 0 ? 1 : -1;

        return (
          <Slice
            key={String(index)}
            width={shredWidth}
            index={index}
            exiting={() => {
              "worklet";
              const animations = {
                transform: [
                  { perspective: withTiming(400, { duration: 800 }) },
                  {
                    rotateZ: withTiming(index % 2 === 0 ? "-2deg" : "2deg", {
                      duration: 1200,
                    }),
                  },
                  {
                    rotateZ: withSequence(
                      withTiming(-fromMiddle, {
                        duration: 1200,
                      }),
                      withTiming(index % 2 === 0 ? -fromMiddle * 9 : fromMiddle * 9, {
                        duration: 400,
                      })
                    ),
                  },
                  {
                    rotateX: withTiming(index % 2 === 0 ? "-15deg" : "15deg", {
                      duration: 1200,
                    }),
                  },
                ],
                opacity: withDelay(1300, withTiming(0)),
              };
              const initialValues = {
                transform: [
                  { perspective: 0 },
                  { rotateZ: "0deg" },
                  { rotateZ: "0deg" },
                  { rotateX: "0deg" },
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
              width={size}
              height={size}
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
