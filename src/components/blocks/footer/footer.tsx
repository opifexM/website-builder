import {useContentActions} from "@/hooks/useContentActions.ts";
import type {BlockType} from "@/types/block.type.ts";
import {CONTENT, type ContentTypeName} from "@/types/content.type.ts";
import type {TemplateType} from "@/types/template.type.ts";
import classNames from "classnames";
import {type ReactNode, useEffect, useRef, useState} from "react";

interface FooterProps {
  block: BlockType;
  template: TemplateType
  hasContent: boolean;
  children?: ReactNode;
}

export function Footer({children, hasContent, block, template}: Readonly<FooterProps>) {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const {add: addContent} = useContentActions();

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

  const activateMenu = () => {
    setIsMenuShow(true);
  };

  const deactivateMenu = () => {
    setIsMenuShow(false);
  };

  const handleAddComponentClick = (typeName: ContentTypeName) => {
    deactivateMenu();
    addContent(template, block, typeName)
  };

  return (
    <footer className={classNames('footer', {'footer--empty': !hasContent})}>
      <p className="placeholder">Footer</p>
      <div className="footer__elements-wrapper">
        {children}
      </div>

      <button
        type="button"
        className="add-btn"
        onClick={activateMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
                fill="#80CCF0"></path>
        </svg>
      </button>

      <div
        className="choose-elem "
        ref={menuRef}
        style={{display: isMenuShow ? 'flex' : 'none'}}
      >
        <button
          type="button"
          className="choose-elem__btn"
          onClick={() => handleAddComponentClick(CONTENT.TITLE_H1)}
        >The H1 title
        </button>
        <button
          type="button"
          className="choose-elem__btn"
          onClick={() => handleAddComponentClick(CONTENT.TITLE_H2)}
        >The H2 title
        </button>
        <button
          type="button"
          className="choose-elem__btn"
          onClick={() => handleAddComponentClick(CONTENT.TITLE_H3)}
        >The H3 title
        </button>
        <button
          type="button"
          className="choose-elem__btn"
          onClick={() => handleAddComponentClick(CONTENT.PARAGRAPH)}
        >The paragraph
        </button>
        <button
          type="button"
          className="choose-elem__btn"
          onClick={() => handleAddComponentClick(CONTENT.IMAGE)}
        >The image
        </button>
      </div>
    </footer>
  );
}
