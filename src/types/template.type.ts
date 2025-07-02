export const TEMPLATE = {
  LANDING: 'landing',
  BLOG:    'blog',
  SHOP:    'shop',
} as const;

export type TemplateType = typeof TEMPLATE[keyof typeof TEMPLATE];

export const templateRegistry: Record<TemplateType, readonly string[]> = {
  [TEMPLATE.LANDING]: ['header', 'content1', 'footer'] as const,
  [TEMPLATE.BLOG]:    ['header', 'content1', 'content2', 'footer'] as const,
  [TEMPLATE.SHOP]:    ['header', 'content1', 'content2', 'content3', 'footer'] as const,
};
