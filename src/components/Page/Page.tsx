import React, { useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import styled from "styled-components/macro";

import { PageQuery, PageQueryVariables } from "../../generated/types/PageQuery";
import { Loading } from "../Loading";

import { Text } from "../../entities/Text";
import { Image } from "../../entities/Image";
import { Link } from "../../entities/Link";

const PAGE_QUERY = gql`
  query PageQuery($userId: ID!, $collectionId: ID!) {
    user(id: $userId) {
      page: collection(id: $collectionId) {
        title: value(key: "title")
        contents(per: 99) {
          id
          size: value(key: "size")
          caption: value(key: "caption")
          entity {
            __typename
            ... on Text {
              body
            }
            ... on Link {
              url
            }
            ... on Image {
              thumb: resized(width: 400, height: 400) {
                ...Image
              }
              medium: resized(width: 900, height: 900) {
                ...Image
              }
              large: resized(width: 1400, height: 1400) {
                ...Image
              }
            }
          }
        }
      }
    }
  }

  fragment Image on ResizedImage {
    height
    width
    urls {
      _1x
      _2x
    }
  }
`;

const Container = styled.div`
  padding: 2rem 0;
  text-align: center;
`;

const Entity = styled.div<{ size?: string | null }>`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) =>
    size === "thumb" &&
    `
    display: inline-flex;
    margin: 1rem 1rem 2rem 1rem;
  `}
`;

export const Page: React.FC = () => {
  const { data, loading, error } = useQuery<PageQuery, PageQueryVariables>(
    PAGE_QUERY,
    {
      variables: {
        userId: `${process.env.REACT_APP_USER_ID}`,
        collectionId: `${process.env.REACT_APP_COLLECTION_ID}`
      }
    }
  );

  useEffect(() => {
    if (loading || error) return;
    document.title = data!.user!.page!.title || "";
  }, [data, error, loading]);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const page = data!.user!.page!;

  return (
    <Container>
      {page.contents &&
        page.contents.map(content => {
          const { entity } = content;
          switch (entity.__typename) {
            case "Image":
              return (
                <Entity key={content.id} size={content.size}>
                  <Image
                    key={content.id}
                    content={content}
                    size={content.size}
                  />
                </Entity>
              );
            case "Link":
              return (
                <Entity key={content.id}>
                  <Link url={entity.url} />
                </Entity>
              );
            case "Text":
              return (
                <Entity key={content.id}>
                  <Text size={content.size} body={entity.body} />
                </Entity>
              );
            default:
              return null;
          }
        })}
    </Container>
  );
};
