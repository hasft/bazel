import * as React from "react";

export type LogoProps = {
  image: string;
};

export default function(props: LogoProps) {
  const { image } = props;
  return (
    <div>
      <img src={image} />
    </div>
  );
}
