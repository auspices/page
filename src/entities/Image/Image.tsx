import React from "react";

import { Image as Img } from "../../components/Image";
import { Thumb } from "../../components/Thumb";

import {
  PageQuery_user_page_contents as Content,
  PageQuery_user_page_contents_entity_Image as Entity
} from "../../generated/types/PageQuery";

interface Props {
  content: Content;
  size: string | null;
}

export const Image: React.FC<Props> = ({ content, size }) => {
  const entity = content.entity as Entity;
  const sizes = {
    large: entity.large,
    medium: entity.medium,
    thumb: entity.thumb
  };

  const image = sizes[(size || "medium") as keyof typeof sizes]!;
  const isLinked =
    content.size === "thumb" || content.size === "medium" || !content.size;

  return (
    <>
      {isLinked ? (
        <Thumb
          width={image.width as number}
          height={image.height as number}
          urls={image.urls}
          alt={content.caption!}
          caption={content.caption!}
        >
          <Img
            width={sizes.large!.width as number}
            height={sizes.large!.height as number}
            urls={sizes.large!.urls}
            fallbackUrl={sizes.thumb!.urls._1x}
          />
        </Thumb>
      ) : (
        <>
          <Img
            width={image.width as number}
            height={image.height as number}
            urls={image.urls}
            fallbackUrl={sizes.thumb!.urls._1x}
            alt={content.caption!}
            caption={content.caption!}
          />
        </>
      )}
    </>
  );
};
