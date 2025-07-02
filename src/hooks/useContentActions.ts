import {addContent, removeContent, updateContent} from "@/store/action.ts";
import type {BlockName} from "@/types/block.type.ts";
import type {ContentTypeName} from "@/types/content.type.ts";
import type {TemplateType} from "@/types/template.type.ts";

export function useContentActions() {
  function add(template: TemplateType, block: BlockName<TemplateType>, typeName: ContentTypeName) {
    addContent(template, block, typeName);
  }

  function remove(template: TemplateType, block: BlockName<TemplateType>, id: string) {
    removeContent(template, block, id);
  }

  function update(
    template: TemplateType,
    block: BlockName<TemplateType>,
    id: string,
    patch: Partial<Record<string, any>>
  ) {
    updateContent(template, block, id, patch);
  }

  return {add, update, remove};
}
