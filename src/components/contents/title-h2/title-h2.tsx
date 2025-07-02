import {useContentActions} from "@/hooks/useContentActions.ts";
import type {BlockType} from "@/types/block.type.ts";
import type {ContentTitleH2} from "@/types/content-title-h2.type.ts";
import type {TemplateType} from "@/types/template.type.ts";
import {type FormEventHandler, type KeyboardEventHandler, type MouseEvent, useEffect, useRef, useState} from "react";

const DEFAULT_TEXT = 'The H2 title';

interface TitleH2Props {
  content: ContentTitleH2
  block: BlockType,
  template: TemplateType
}

export function TitleH2({content, block, template}: Readonly<TitleH2Props>) {
  const { id, text, type} = content;
  const [isEditable, setIsEditable] = useState(false);
  const inputRef = useRef<HTMLHeadingElement>(null);
  const [inputText, setInputText] = useState(text.length ? text : DEFAULT_TEXT);
  const {remove: removeContent, update: updateContent} = useContentActions();

  useEffect(() => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditable]);

  const handleInput: FormEventHandler<HTMLHeadingElement> = (e) => {
    setInputText(e.currentTarget.textContent ?? "");
  };

  const handleKeyDown: KeyboardEventHandler<HTMLHeadingElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      deactivateEditorAndSave();
    }
  };

  const handleDeleteClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeContent(template, block, id);
  };

  const activateEditor = () => {
    setIsEditable(true);
  };

  const deactivateEditorAndSave = () => {
    setIsEditable(false);
    updateContent(template, block, id, {
      text: inputText.trim()
    });
  };

  return (
    <div
      id={id}
      className="element title"
      onClick={activateEditor}
      data-type={type}
    >
      <h2
        contentEditable={isEditable}
        data-placeholder={inputText}
        ref={inputRef}
        onInput={handleInput}
        onBlur={deactivateEditorAndSave}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
        aria-multiline="false"
      >
        {inputText}
      </h2>
      <button
        type="button"
        className="delete-btn"
        onClick={handleDeleteClick}
      >
        <span className="visually-hidden">Delete an item</span>
      </button>
    </div>
  );
}
