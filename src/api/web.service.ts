import http from "./http";

export class WebService {
  get = async (route: string, config: any = {}) => {
    const { data } = await http.get(route, config);
    return data;
  };
  post = async (route: string, payload: any, config: any = {}) => {
    const { data } = await http.post(route, payload, config);
    return data;
  };
  put = async (route: string, payload: any, config: any = {}) => {
    const { data } = await http.put(route, payload, config);
    return data;
  };
  patch = async (route: string, payload: any, config: any = {}) => {
    const { data } = await http.patch(route, payload, config);
    return data;
  };
}
