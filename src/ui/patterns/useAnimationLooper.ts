import { useEffect, useState } from "react";

export const useAnimationLooper = (
  callback: () => void,
  loopTime = 5000,
  autoplay = true
) => {
  const [play, setPlay] = useState<boolean>(autoplay);

  useEffect(() => {
    let animationTimer: number;

    function animationLooper() {
      if (play) {
        animationTimer = window.setTimeout(() => {
          callback();
          animationLooper();
        }, loopTime);
      } else {
        clearTimeout(animationTimer);
        animationTimer = 0;
      }
    }
    animationLooper();

    return () => clearTimeout(animationTimer);
  }, [play]);

  return { play, setPlay };
};
