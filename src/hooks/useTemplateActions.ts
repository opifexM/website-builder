import {changeTemplate, clearTemplate} from "@/store/action.ts";
import type {TemplateType} from "@/types/template.type.ts";

export function useTemplateActions() {
  function change(template: TemplateType) {
    changeTemplate(template);
  }

  function clear(template: TemplateType) {
    clearTemplate(template);
  }

  return {change, clear};
}
