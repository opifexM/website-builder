import {Image} from "@/components/contents/image/image.tsx";
import {Paragraph} from "@/components/contents/paragraph/paragraph.tsx";
import {TitleH1} from "@/components/contents/title-h1/title-h1.tsx";
import {TitleH2} from "@/components/contents/title-h2/title-h2.tsx";
import {TitleH3} from "@/components/contents/title-h3/title-h3.tsx";
import type {ContentImage} from "@/types/content-image.type.ts";
import type {ContentParagraph} from "@/types/content-paragraph.type.ts";
import type {ContentTitleH1} from "@/types/content-title-h1.type.ts";
import type {ContentTitleH2} from "@/types/content-title-h2.type.ts";
import type {ContentTitleH3} from "@/types/content-title-h3.type.ts";
import type {ComponentType} from "react";

export const CONTENT = {
  TITLE_H1: 'title-h1',
  TITLE_H2: 'title-h2',
  TITLE_H3: 'title-h3',
  PARAGRAPH: 'paragraph',
  IMAGE: 'image',
} as const;

export type ContentTypeName = typeof CONTENT[keyof typeof CONTENT];
export type ContentType = ContentTitleH1 | ContentTitleH2 | ContentTitleH3 | ContentParagraph | ContentImage;

export const contentRegistry: Record<ContentTypeName, ComponentType<any>> = {
  [CONTENT.TITLE_H1]: TitleH1,
  [CONTENT.TITLE_H2]: TitleH2,
  [CONTENT.TITLE_H3]: TitleH3,
  [CONTENT.PARAGRAPH]: Paragraph,
  [CONTENT.IMAGE]: Image,
} as const;

