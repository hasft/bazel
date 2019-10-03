import * as React from "react";
import Service from "@mono/libs/api-service";
import { Text } from "@mono/components";
import { NextContext } from "next";
import Header from "../src/components/common/header/index.tsx";

type HomeProps = {};

export type AuthConfig = {
  authURL: "";
};

class Home extends React.Component<HomeProps> {
  static async getInitialProps(ctx: NextContext) {
    const service = new Service({ services: { account: { url: "/" } } });
    service.createMdsService();
    return { b: 3 };
  }

  render() {
    return (
      <div>
        <Header />
        <Text a={3} />
      </div>
    );
  }
}

export default Home;
