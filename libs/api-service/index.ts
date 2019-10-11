import get from "lodash.get";
import { create } from "apisauce";
import { AxiosInstance } from "axios";

type ServiceURL = {
  [name: string]: any;
};

type Config = {};
type Options = {};

type Arg = {
  services: ServiceURL;
  config: Config;
  options?: Options;
};

class Service {
  options: Options;
  config: Config;
  services: ServiceURL;

  constructor(arg: Arg) {
    this.services = arg.services;
    this.config = arg.config;
    this.options = arg.options;
  }

  create = () => {
    return this.services;
  };
}

export default Service;
