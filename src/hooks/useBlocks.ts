import {store} from "@/store/store.ts";
import type {BlockName} from "@/types/block.type.ts";
import type {TemplateType} from "@/types/template.type.ts";
import {useStore} from "@tanstack/react-store";

export function useBlocks<T extends TemplateType>(template: T): BlockName<T>[] {
  return useStore(store, (state) =>
    Object.keys(state.template[template]) as BlockName<T>[]
  );
}
