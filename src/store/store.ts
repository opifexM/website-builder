import type {BlockName} from "@/types/block.type.ts";
import type {ContentType} from "@/types/content.type.ts";
import type {TemplateType} from "@/types/template.type.ts";
import {Store} from "@tanstack/react-store";

interface State {
  UI: { currentTemplate: TemplateType };
  template: {
    [K in TemplateType]: Record<BlockName<K>, ContentType[]>
  }
}

export const store = new Store<State>({
  UI: {
    currentTemplate: "landing"
  },
  template: {
    landing: {
      header: [
        {id: '1', type: "title-h1", text: 'Welcome to FutureTech'},
        {id: '2', type: "title-h2", text: 'Empowering Innovation Worldwide'},
        {
          id: '3',
          type: "paragraph",
          text: 'At FutureTech, we harness cutting-edge technologies to solve real-world problems and drive sustainable growth.'
        },
        {id: '4', type: "image", url: 'img/default.jpg', alt: 'Team collaborating around a table'},
        {id: '5', type: "title-h3", text: 'Why Choose Us?'},
        {
          id: '6',
          type: "paragraph",
          text: 'Because we combine expertise, creativity, and reliability to deliver exceptional results on every project.'
        },
      ],
      content1: [
        {id: '21', type: "title-h2", text: 'Our Services'},
        {
          id: '22',
          type: "paragraph",
          text: '• Custom software development\n• Cloud architecture and DevOps\n• Data analytics and AI solutions'
        },
        {id: '23', type: "image", url: 'img/default.jpg', alt: 'Diagram of services offered'},
        {id: '24', type: "title-h3", text: 'Sustainable by Design'},
        {
          id: '25',
          type: "paragraph",
          text: 'We embed energy-efficient practices and eco-friendly materials in every solution we build.'
        },
        {
          id: '26',
          type: "paragraph",
          text: 'Our commitment to sustainability helps clients reduce costs and minimize environmental impact.'
        },
      ],
      footer: [
        {id: '31', type: "title-h3", text: 'Get in Touch'},
        {id: '32', type: "paragraph", text: 'Email: contact@futuretech.com\nPhone: +1 (555) 123-4567'},
        {id: '33', type: "image", url: 'img/default.jpg', alt: 'Map showing our headquarters'},
        {id: '34', type: "paragraph", text: '123 Innovation Drive, Tech City, TX, USA'},
        {id: '35', type: "title-h2", text: 'Follow Us'},
        {id: '36', type: "paragraph", text: 'LinkedIn • Twitter • Facebook • Instagram'},
      ],
    }
    ,
    blog: {
      header: [],
      content1: [],
      content2: [],
      footer: []
    },
    shop: {
      header: [],
      content1: [],
      content2: [],
      content3: [],
      footer: []
    }
  }
});
