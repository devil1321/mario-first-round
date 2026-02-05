import React from "react";
import { useWindowDimensions } from "react-native";
import { Group, Circle, Line } from "@shopify/react-native-skia";

const Controls = () => {
  const { height } = useWindowDimensions();

  const padding = 30;
  const radius = 50;
  const translateY = 50;
  const spacing = 120;
  const jumpSpacing = 750
  const gunSpacing = 870
  const crouchSpacing = 750
  const upButtonsTranslateY = 170

  const cx = padding + radius + translateY;
  const cy = height - padding - radius - translateY;
  const cyUpButtons = height - padding - radius - upButtonsTranslateY;

  const lineHalf = 12.5;

  const ArrowLines = ({ cx, cy, angles }: { cx: number; cy: number; angles: number[] }) => (
    <>
      {angles.map((angle, i) => (
        <Group key={i} origin={{ x: cx - 2, y: cy }} transform={[{ rotate: angle }]}>
          <Line
            p1={{ x: cx - 12 - lineHalf, y: cy }}
            p2={{ x: cx - 12 + lineHalf, y: cy }}
            strokeWidth={5}
            color="grey"
          />
        </Group>
      ))}
    </>
  );

  return (
    <Group>
      {/* LEFT ARROW ◀ */}
      <Group>
        <Circle cx={cx} cy={cy} r={radius} color="lightgray" />
        <ArrowLines
          cx={cx - 5}
          cy={cy}
          angles={[ (3 * Math.PI) / 4, -(3 * Math.PI) / 4 ]}
        />
      </Group>

      {/* RIGHT ARROW ▶ */}
      <Group>
        <Circle cx={cx + spacing} cy={cy} r={radius} color="lightgray" />
        <ArrowLines
          cx={cx + spacing + 10}
          cy={cy}
          angles={[ Math.PI / 4, -Math.PI / 4 ]}
        />
      </Group>
      <Circle cx={cx + spacing + jumpSpacing} cy={cy} r={radius} color="red" />
      <Circle cx={cx + spacing + gunSpacing} cy={cy} r={radius} color="skyblue" />
      <Circle cx={cx + spacing + crouchSpacing} cy={cyUpButtons} r={radius} color="yellowgreen" />
      <Circle cx={cx + spacing + gunSpacing} cy={cyUpButtons} r={radius} color="orange" />
    </Group>
  );
};

export default Controls;
