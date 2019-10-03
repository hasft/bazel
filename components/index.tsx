import * as React from "react";

type TextProps = {
  a?: number;
};

const Text = (props: TextProps) => {
  const { a } = props;
  return <div>Text {a}</div>;
};

export { Text };
