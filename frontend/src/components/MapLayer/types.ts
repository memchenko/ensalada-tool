import { PropsWithChildren } from "react";

export interface MapLayerProps extends PropsWithChildren<{}> {
  zoom: number;
  center: [number, number];
}
