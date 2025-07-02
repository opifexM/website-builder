import {useContentActions} from "@/hooks/useContentActions.ts";
import type {BlockType} from "@/types/block.type.ts";
import type {ContentImage} from "@/types/content-image.type.ts";
import type {TemplateType} from "@/types/template.type.ts";
import classNames from "classnames";
import * as React from "react";
import {
  type ChangeEventHandler,
  type FormEventHandler,
  type KeyboardEventHandler,
  useEffect,
  useRef,
  useState
} from "react";

const DEFAULT_TEXT = 'Custom image';

interface ImageProps {
  content: ContentImage
  block: BlockType,
  template: TemplateType
}

export function Image({content, block, template}: Readonly<ImageProps>) {
  const {id, type, url, alt} = content;
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [inputUrl, setInputUrl] = useState(url);
  const menuRef = useRef<HTMLDivElement>(null);
  const {remove: removeContent, update: updateContent} = useContentActions();

  useEffect(() => {
    if (!isMenuShow) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        deactivateMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuShow]);

  const activateImageMenu = () => {
    setIsMenuShow(true);
  };

  const deactivateMenu = () => {
    setIsMenuShow(false);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeContent(template, block, id);
  };

  const handleInput: FormEventHandler<HTMLInputElement> = e => {
    setInputUrl(e.currentTarget.value);
  };

  const deactivateEditorAndSave = () => {
    deactivateMenu();
    updateContent(template, block, id, {
      url: inputUrl.trim()
    });
  };

  const handleKeyDown: KeyboardEventHandler<HTMLHeadingElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      deactivateEditorAndSave();
    }
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const blobUrl = URL.createObjectURL(file);
    setInputUrl(blobUrl);
  };

  return (
    <div
      id={id}
      className={classNames('element', 'element--image', 'image', {
        'element--uploading': isMenuShow,
        'element--uploaded': url.length
      })
      }
      onClick={activateImageMenu}
      data-type={type}
      ref={menuRef}
    >
      <button type="button" className="add-img-btn">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M6 2V8H0V12H6V18H10V12H16V8H10V2H6ZM12 14V20H6V40C6 42.2 7.8 44 10 44H42C44.2 44 46 42.2 46 40V16C46 13.8 44.2 12 42 12H35.66L32 8H18V14H12ZM26 38C31.52 38 36 33.52 36 28C36 22.48 31.52 18 26 18C20.48 18 16 22.48 16 28C16 33.52 20.48 38 26 38ZM26 34C22.68 34 20 31.32 20 28C20 24.68 22.68 22 26 22C29.32 22 32 24.68 32 28C32 31.32 29.32 34 26 34Z"></path>
        </svg>
      </button>
      <div className="img-upload">
        <p>Upload an image</p>
        <input
          type="url"
          placeholder="Insert the link to the image"
          value={inputUrl}
          onInput={handleInput}
          onBlur={deactivateEditorAndSave}
          onKeyDown={handleKeyDown}
        />
        <label className="img-upload__label"
        >Upload
          <input
            className="visually-hidden"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
          />
        </label>
      </div>
      {url && (
        <img src={url} alt={alt.length ? alt : DEFAULT_TEXT}/>
      )}

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
