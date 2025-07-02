import {CONTENT} from "@/types/content.type.ts";

export interface ContentParagraph {
  id: string,
  type: typeof CONTENT.PARAGRAPH,
  text: string,
}
