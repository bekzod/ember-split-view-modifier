import Modifier from "ember-modifier";
import Split from "split.js";

export const createSplit = (el, args) => {
  const children = el.children;

  if (children.length <= 1) {
    return null;
  }

  const isVertical = args.direction === "vertical";

  el.style.display = "flex";
  el.style.flexDirection = isVertical ? "column" : "row";

  const elementStyle = (_dimension, size, gutterSize) => {
    const amount = `calc(${size}% - ${gutterSize}px)`;
    const props = {
      "flex-basis": amount,
      [isVertical ? "max-height" : "max-width"]: amount,
    };

    return props;
  };

  const gutterStyle = (_dimension, gutterSize) => {
    return {
      "flex-basis": `${gutterSize}px`,
    };
  };

  const defaultArgs = {
    gutterSize: 7,
    elementStyle,
    gutterStyle,
  };

  return Split(children, Object.assign({}, defaultArgs, args));
};

export default class SplitViewModifier extends Modifier {
  splitInstance = null;

  destroyInstance() {
    if (this.splitInstance) {
      this.splitInstance.destroy();
      this.splitInstance = null;
    }
  }

  didReceiveArguments() {
    this.splitInstance = createSplit(this.element, this.args.named);
  }

  didUpdateArguments() {
    this.destroyInstance();
    this.splitInstance = createSplit(this.element, this.args.named);
  }

  willDestroy() {
    this.destroyInstance();
  }
}
