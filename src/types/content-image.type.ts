import {CONTENT} from "@/types/content.type.ts";

export interface ContentImage {
  id: string,
  type: typeof CONTENT.IMAGE,
  url: string
  alt: string
}
