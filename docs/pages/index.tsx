import * as React from "react";
import Service from "@mono/libs/api-service";
import { Text, Header, Logo } from "@mono/components";

type HomeProps = {
  b: number;
};

export type AuthConfig = {
  authURL: "";
};

class Home extends React.Component<HomeProps> {
  static async getInitialProps() {
    const service = new Service({ services: { account: { url: "/" } } });
    service.createMdsService();
    return { b: 8 };
  }

  render() {
    return (
      <div>
        <Header />
        <Logo image="something" />
        <Text a={2} />
        <p>sdasda {this.props.b}</p>
      </div>
    );
  }
}

export default Home;
