import {useContents} from "@/hooks/useContents.ts";
import {type BlockType} from "@/types/block.type.ts";
import {contentRegistry} from "@/types/content.type.ts";
import type {TemplateType} from "@/types/template.type.ts";

interface ContentRenderProps {
  block: BlockType,
  template: TemplateType
}

export function ContentRender({block, template}: Readonly<ContentRenderProps>) {
  const contents = useContents(template, block)

  return (
    <>
      {contents.map((content) => {
        const ContentComponent = contentRegistry[content.type];

        return (
          <ContentComponent
            key={content.id}
            content={content}
            block={block}
            template={template}
          />
        );
      })}
    </>
  );
}
