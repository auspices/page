/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageQuery
// ====================================================

export interface PageQuery_user_page_contents_entity_Text {
  __typename: "Text";
  body: string;
}

export interface PageQuery_user_page_contents_entity_Link {
  __typename: "Link";
  url: string;
}

export interface PageQuery_user_page_contents_entity_Image_thumb_urls {
  __typename: "RetinaImage";
  _1x: string;
  _2x: string;
}

export interface PageQuery_user_page_contents_entity_Image_thumb {
  __typename: "ResizedImage";
  height: number | null;
  width: number | null;
  urls: PageQuery_user_page_contents_entity_Image_thumb_urls;
}

export interface PageQuery_user_page_contents_entity_Image_medium_urls {
  __typename: "RetinaImage";
  _1x: string;
  _2x: string;
}

export interface PageQuery_user_page_contents_entity_Image_medium {
  __typename: "ResizedImage";
  height: number | null;
  width: number | null;
  urls: PageQuery_user_page_contents_entity_Image_medium_urls;
}

export interface PageQuery_user_page_contents_entity_Image_large_urls {
  __typename: "RetinaImage";
  _1x: string;
  _2x: string;
}

export interface PageQuery_user_page_contents_entity_Image_large {
  __typename: "ResizedImage";
  height: number | null;
  width: number | null;
  urls: PageQuery_user_page_contents_entity_Image_large_urls;
}

export interface PageQuery_user_page_contents_entity_Image {
  __typename: "Image";
  thumb: PageQuery_user_page_contents_entity_Image_thumb | null;
  medium: PageQuery_user_page_contents_entity_Image_medium | null;
  large: PageQuery_user_page_contents_entity_Image_large | null;
}

export type PageQuery_user_page_contents_entity = PageQuery_user_page_contents_entity_Text | PageQuery_user_page_contents_entity_Link | PageQuery_user_page_contents_entity_Image;

export interface PageQuery_user_page_contents {
  __typename: "Content";
  id: number;
  size: string | null;
  caption: string | null;
  treatment: string | null;
  entity: PageQuery_user_page_contents_entity;
}

export interface PageQuery_user_page {
  __typename: "Collection";
  _title: string;
  title: string | null;
  contents: PageQuery_user_page_contents[] | null;
}

export interface PageQuery_user {
  __typename: "User";
  page: PageQuery_user_page | null;
}

export interface PageQuery {
  user: PageQuery_user | null;
}

export interface PageQueryVariables {
  userId: string;
  collectionId: string;
}
