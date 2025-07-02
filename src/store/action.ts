import {store} from "@/store/store.ts";
import type {BlockName} from "@/types/block.type.ts";
import {CONTENT, type ContentType, type ContentTypeName} from "@/types/content.type.ts";
import type {TemplateType} from "@/types/template.type.ts";
import {nanoid} from "nanoid";

function createContent(type: ContentTypeName): ContentType {
  const id = nanoid();
  switch (type) {
    case CONTENT.TITLE_H1:
    case CONTENT.TITLE_H2:
    case CONTENT.TITLE_H3:
    case CONTENT.PARAGRAPH:
      return {id, type, text: ""};
    case CONTENT.IMAGE:
      return {id, type, url: "", alt: ""};
  }
}

export function addContent(template: TemplateType, block: BlockName<TemplateType>, type: ContentTypeName) {
  const contentCreated = createContent(type);

  store.setState(prevState => ({
    ...prevState,
    template: {
      ...prevState.template,
      [template]: {
        ...prevState.template[template],
        [block]: [...prevState.template[template][block], contentCreated],
      }
    }
  }));
}

export function removeContent(template: TemplateType, block: BlockName<TemplateType>, id: string) {
  store.setState(prevState => ({
    ...prevState,
    template: {
      ...prevState.template,
      [template]: {
        ...prevState.template[template],
        [block]: prevState.template[template][block].filter(item => item.id !== id),
      }
    }
  }));
}

export function updateContent(
  template: TemplateType,
  block: BlockName<TemplateType>,
  id: string,
  patch: Partial<ContentType>
) {
  store.setState(prevState => ({
    ...prevState,
    template: {
      ...prevState.template,
      [template]: {
        ...prevState.template[template],
        [block]: prevState.template[template][block].map(item =>
          item.id === id ? {...item, ...patch} : item
        ),
      }
    }
  }));
}

export function changeTemplate(template: TemplateType) {
  store.setState((prevState) => ({
      ...prevState,
      UI: {
        ...prevState.UI,
        currentTemplate: template
      }
    })
  );
}

export function clearTemplate(template: TemplateType) {
  store.setState(prevState => {
    const emptyBlocks = Object.keys(prevState.template[template])
      .reduce((acc, blockName) => {
        acc[blockName] = [];
        return acc;
      }, {} as Record<string, []>);
    return {
      ...prevState,
      template: {
        ...prevState.template,
        [template]: emptyBlocks
      }
    };
  });
}
