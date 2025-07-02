import {BlockRender} from "@/components/blocks/block-render.tsx";
import {TemplateMenu} from "@/components/templates/template-menu.tsx";
import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    <div className="container">
      <h1 className="visually-hidden">Website Builder</h1>
      <TemplateMenu/>
      <BlockRender/>
    </div>
  )
}
