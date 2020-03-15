/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Image
// ====================================================

export interface Image_urls {
  __typename: "RetinaImage";
  _1x: string;
  _2x: string;
}

export interface Image {
  __typename: "ResizedImage";
  height: number;
  width: number;
  urls: Image_urls;
}
