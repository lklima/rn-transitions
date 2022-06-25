import React, {
  forwardRef,
  useState,
  useCallback,
  useRef,
  useImperativeHandle,
} from "react";
import { Image, View } from "react-native";
import { captureRef } from "react-native-view-shot";

interface Props {
  children: React.ReactNode;
}

const Captured = forwardRef(({ children }: Props, _ref) => {
  const ref = useRef(null);

  const [dims, setDims] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [img, setImg] = useState(null);

  const capture = useCallback(() => {
    if (ref.current && dims.width) {
      captureRef(ref, { width: dims.width, height: dims.height }).then((img) => {
        console.log(img);
        setImg(img);
      });
    }
  }, [ref, dims]);

  useImperativeHandle(_ref, () => ({ capture }), [capture]);

  if (img) {
    // Change percentage to move animation along
    const percentage = 1;
    const shredCount = 16;

    const shredWidth = dims.width / shredCount;
    return (
      <View
        style={{
          width: dims.width,
          height: dims.height,
        }}
      >
        {new Array(shredCount).fill(0).map((value, index) => {
          // Rotate out from center
          // <---o--->
          const fromMiddle = index - shredCount / 2;

          // Alternate direction
          const dir = index % 2 === 0 ? 1 : -1;
          const rotation = 15 * percentage * dir;
          return (
            <View
              key={String(index)}
              style={[
                {
                  position: "absolute",
                  bottom: 0,
                  top: 0,

                  left: shredWidth * index,
                  maxWidth: shredWidth,
                  minWidth: shredWidth,
                  backgroundColor: "white",
                  overflow: "hidden",
                },
                {
                  transform: [
                    // Make paper look like this from top-down perspective: \/\/\/\/\/\/
                    {
                      rotateY: rotation + "deg",
                    },

                    // Move up so we translate around the origin at the top center.
                    {
                      translateY: -shredWidth,
                    },
                    {
                      // Back + Forward from top
                      rotateX: dir * (Math.random() * 10 + 2) * percentage + "deg",
                    },
                    // Move back down so the original position matches.
                    {
                      translateY: shredWidth,
                    },
                  ],
                },
              ]}
            >
              <Image
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: shredWidth * -index,
                  // Drop the opacity to create the shadow effect of some parts rotating more to the right/left.
                  opacity: dir === 1 ? 1 : 1.0 - 0.2 * percentage,
                  width: dims.width,
                  height: dims.height,
                }}
                source={{ uri: img }}
              />
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <View
      onLayout={(event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        setDims({ x, y, width, height });
      }}
      ref={ref}
    >
      {children}
    </View>
  );
});

export default Captured;
