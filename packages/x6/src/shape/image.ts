import { getImageUrlHook, createShape } from './util'

export const Image = createShape(
  'image',
  {
    attrs: {
      image: {
        refWidth: '100%',
        refHeight: '100%',
      },
    },
    propHooks: getImageUrlHook(),
  },
  {
    selector: 'image',
  },
)
