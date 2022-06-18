export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

const defaultAnchorPoint = { x: 0.5, y: 0.5 };

export function getAnchorPoint(anchorPoint: Point, size: Size) {
  let translateX = 0;
  let translateY = 0;

  if (anchorPoint.x !== defaultAnchorPoint.x && size.width) {
    translateX = size.width * (anchorPoint.x - defaultAnchorPoint.x);
  }

  if (anchorPoint.y !== defaultAnchorPoint.y && size.height) {
    translateY = size.height * (anchorPoint.y - defaultAnchorPoint.y);
  }

  return { translateX, translateY };
}
