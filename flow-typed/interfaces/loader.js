//@flow
import RequestBuilder from 'playkit-js-providers-core/src/util/request-builder'

declare interface ILoader {
  static name: string;
  requests: Array<RequestBuilder>;
  response: any;
  isValid(): boolean;
}
