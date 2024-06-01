export const SWIPE_THRESHOLD = 10000;

export function swipePower(offset: number, velocity: number) {
  return Math.abs(offset) * velocity;
}
