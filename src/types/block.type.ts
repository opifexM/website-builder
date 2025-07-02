import {Footer} from "@/components/blocks/footer/footer.tsx";
import {Header} from "@/components/blocks/header/header.tsx";
import {Main} from "@/components/blocks/main/main.tsx";
import {templateRegistry, type TemplateType} from "@/types/template.type.ts";
import type {ComponentType} from "react";

export type BlockName<T extends TemplateType> = typeof templateRegistry[T][number];
export type BlockType = BlockName<keyof typeof templateRegistry>;

export const blockRegistry: Record<BlockType, ComponentType<any>> = {
  header: Header,
  content1: Main,
  content2: Main,
  content3: Main,
  footer: Footer,
};
