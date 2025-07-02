import {ContentRender} from "@/components/contents/content-render.tsx";
import {useBlocks} from "@/hooks/useBlocks.ts";
import {store} from "@/store/store.ts";
import {blockRegistry} from "@/types/block.type.ts";
import {useStore} from "@tanstack/react-store";

export function BlockRender() {
  const template = useStore(store, state => state.UI.currentTemplate);
  const blocks = useBlocks(template);
  const contentsByBlock = useStore(store, s => s.template[template]);

  return (
    <div className={`layout layout--${template}`}>
      {blocks.map((block) => {
        const BlockComponent = blockRegistry[block];
        const contents = contentsByBlock[block] ?? [];

        return (
          <BlockComponent
            key={block}
            block={block}
            hasContent={contents.length > 0}
            template={template}
          >
            <ContentRender
              block={block}
              template={template}
            />
          </BlockComponent>
        );
      })}
    </div>
  );
}
