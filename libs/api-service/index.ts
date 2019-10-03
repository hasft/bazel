import get from "lodash.get";
import { create } from "apisauce";
import { AxiosInstance } from "axios";

type ServiceURL = {
  [name: string]: {
    url: string;
  };
};

type Options = {};

type Arg = {
  services: ServiceURL;
  options?: Options;
};

class Service {
  options: Options;
  services: ServiceURL;
  mdsApi: any;
  thorApi: any;

  constructor(options: Arg) {
    this.options = options;
    this.services = options.services;
    this.mdsApi = {};
    this.thorApi = {};
  }

  createMdsService = () => {
    console.log(this.services);
  };

  createThorService = () => {
    console.log(this.services);
  };

  getMdsService = name => {
    return this.mdsApi[name];
  };

  getThorService = name => {
    return this.thorApi[name];
  };

  getAllService = () => {
    return {
      thorApi: this.thorApi,
      mdsApi: this.mdsApi
    };
  };
}

export default Service;
