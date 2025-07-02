import {store} from "@/store/store.ts";
import type {BlockName} from "@/types/block.type.ts";
import type {ContentType} from "@/types/content.type.ts";
import type {TemplateType} from "@/types/template.type.ts";
import {useStore} from "@tanstack/react-store";

export function useContents<T extends TemplateType, B extends BlockName<T>>(
  template: T, block: B
): ContentType[] {
  return useStore(
    store, (state) => state.template[template][block]
  );
}
