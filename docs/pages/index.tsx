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
    const mdsService = new Service({
      services: { banner: { url: "/" }, promo: { url: "/" } },
      config: {}
    });

    const thorService = new Service({
      services: { account: { url: "/" } },
      config: {}
    });

    const api = {
      mdsApi: mdsService.create(),
      thorService: thorService.create()
    };

    console.log(api.mdsApi, api.thorService);

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
