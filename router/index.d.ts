import Nixix from '../index'

export type RoutePath = string;
export interface RouteLink {
  children?: Nixix.NixixNode<any>;
  to?: RoutePath
}
export interface RouteConfig {
  element: Nixix.NixixNode<any>, 
  path?: string, 
  /**
   * @experimental do not use!!
   */
  common?: boolean
}
declare const Link: Nixix.ExoticComponent<RouteLink>
declare const Routes: Nixix.ExoticComponent<{children?: JSX.Element[] | JSX.Element}>
declare const Route: Nixix.ExoticComponent<RouteConfig>


export {
  Link,
  Routes,
  Route
}


