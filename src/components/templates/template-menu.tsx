import {useTemplateActions} from "@/hooks/useTemplateActions.ts";
import {store} from "@/store/store.ts";
import {TEMPLATE, type TemplateType} from "@/types/template.type.ts";
import {useStore} from "@tanstack/react-store";

export function TemplateMenu() {
  const template = useStore(store, state => state.UI.currentTemplate);
  const {change: changeTemplate, clear: clearTemplate} = useTemplateActions();

  const handleTemplateClick = (updatedTemplate: TemplateType) => {
    changeTemplate(updatedTemplate);
  };

  const handleClearClick = () => {
    clearTemplate(template);
  };

  return (
    <form className="grid-select">
      <div>
        <h2 className="grid-select__header">Select the site grid</h2>
        <button
          type="button"
          className="grid-select__clear-btn"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>

      <input
        className="grid-select__radio visually-hidden"
        type="radio"
        name="grid"
        id="grid-landing"
        checked={template === TEMPLATE.LANDING}
        onChange={() => handleTemplateClick(TEMPLATE.LANDING)}
      />
      <label htmlFor="grid-landing" className="grid-select__btn">
        <span className="grid-select__text">Landing</span>
        <svg className="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
          <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
          <rect x="0.3" y="26.3" width="239.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
        </svg>
      </label>

      <input
        className="grid-select__radio visually-hidden"
        type="radio"
        name="grid"
        id="grid-blog"
        checked={template === TEMPLATE.BLOG}
        onChange={() => handleTemplateClick(TEMPLATE.BLOG)}
      />
      <label htmlFor="grid-blog" className="grid-select__btn">
        <span className="grid-select__text">Blog</span>
        <svg className="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
          <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
          <rect x="0.3" y="26.394" width="89.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
          <rect x="100.3" y="26.3" width="139.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
        </svg>
      </label>

      <input
        className="grid-select__radio visually-hidden"
        type="radio"
        name="grid"
        id="grid-shop"
        checked={template === TEMPLATE.SHOP}
        onChange={() => handleTemplateClick(TEMPLATE.SHOP)}
      />
      <label htmlFor="grid-shop" className="grid-select__btn">
        <span className="grid-select__text">Shop</span>
        <svg className="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
          <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
          <rect x="0.3" y="26.3" width="73.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
          <rect x="83.3" y="26.3" width="73.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
          <rect x="166.3" y="26.3" width="73.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"></rect>
        </svg>
      </label>
    </form>
  );
}
