import * as React from "react";

type TextProps = {
  a?: number;
};

export default function(props: TextProps) {
  const { a } = props;
  return <div>Text {a}</div>;
}
