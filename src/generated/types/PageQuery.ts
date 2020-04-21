/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageQuery
// ====================================================

export interface PageQuery_page_collection_contents_entity_Collection {
  __typename: "Collection";
}

export interface PageQuery_page_collection_contents_entity_Text {
  __typename: "Text";
  body: string;
}

export interface PageQuery_page_collection_contents_entity_Link {
  __typename: "Link";
  url: string;
}

export interface PageQuery_page_collection_contents_entity_Image_thumb_urls {
  __typename: "RetinaImage";
  _1x: string;
  _2x: string;
}

export interface PageQuery_page_collection_contents_entity_Image_thumb {
  __typename: "ResizedImage";
  height: number;
  width: number;
  urls: PageQuery_page_collection_contents_entity_Image_thumb_urls;
}

export interface PageQuery_page_collection_contents_entity_Image_medium_urls {
  __typename: "RetinaImage";
  _1x: string;
  _2x: string;
}

export interface PageQuery_page_collection_contents_entity_Image_medium {
  __typename: "ResizedImage";
  height: number;
  width: number;
  urls: PageQuery_page_collection_contents_entity_Image_medium_urls;
}

export interface PageQuery_page_collection_contents_entity_Image_large_urls {
  __typename: "RetinaImage";
  _1x: string;
  _2x: string;
}

export interface PageQuery_page_collection_contents_entity_Image_large {
  __typename: "ResizedImage";
  height: number;
  width: number;
  urls: PageQuery_page_collection_contents_entity_Image_large_urls;
}

export interface PageQuery_page_collection_contents_entity_Image {
  __typename: "Image";
  thumb: PageQuery_page_collection_contents_entity_Image_thumb;
  medium: PageQuery_page_collection_contents_entity_Image_medium;
  large: PageQuery_page_collection_contents_entity_Image_large;
}

export type PageQuery_page_collection_contents_entity = PageQuery_page_collection_contents_entity_Collection | PageQuery_page_collection_contents_entity_Text | PageQuery_page_collection_contents_entity_Link | PageQuery_page_collection_contents_entity_Image;

export interface PageQuery_page_collection_contents {
  __typename: "Content";
  id: number;
  size: string | null;
  caption: string | null;
  treatment: string | null;
  entity: PageQuery_page_collection_contents_entity;
}

export interface PageQuery_page_collection {
  __typename: "Collection";
  _title: string;
  title: string | null;
  contents: PageQuery_page_collection_contents[];
}

export interface PageQuery_page {
  __typename: "Collection";
  collection: PageQuery_page_collection;
}

export interface PageQuery {
  page: PageQuery_page;
}

export interface PageQueryVariables {
  collectionId: string;
}
