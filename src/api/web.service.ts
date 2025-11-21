import http from "./http";

export class WebService {
  get = async (route: string, config: any = {}) => {
    try {
      const { data } = await http.get(route, config);
      return data;
    } catch (err) {
      return err;
    }
  };
  post = async (route: string, payload?: any, config: any = {}) => {
    try {
      const { data } = await http.post(route, payload, config);
      return data;
    } catch (err) {
      return err;
    }
  };
  put = async (route: string, payload?: any, config: any = {}) => {
    try {
      const { data } = await http.put(route, payload, config);
      return data;
    } catch (err) {
      return err;
    }
  };
  patch = async (route: string, payload?: any, config: any = {}) => {
    try {
      const { data } = await http.patch(route, payload, config);
      return data;
    } catch (err) {
      return err;
    }
  };
}
