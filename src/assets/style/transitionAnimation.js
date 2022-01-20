const variants = {
  exit: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
};

export const transitionAnimation = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants,
  transition: { duration: 0.3 },
};
