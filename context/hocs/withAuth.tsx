// token based authentication
import * as React from "react";
import get from "lodash.get";
import { NextContext, NextComponentClass } from "next";
import apiService from "@mono/libs/api-service";

type Options = {
  authURL: string;
};

const withAuth = (options: Options) => (Page: NextComponentClass) => {
  const WithAuth = (props: any) => <Page {...props} />;

  WithAuth.getInitialProps = async (context: NextContext) => {
    const { req } = context;
    const cookies = req.headers.cookie;
    const token = get(cookies, "token");

    return { ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}) };
  };

  WithAuth.displayName = `WithAuthPage`;

  return WithAuth;
};

export default withAuth;
