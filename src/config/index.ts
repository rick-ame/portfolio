import codeImg from '@/assets/images/hero/code.svg'
import conceptsImg from '@/assets/images/hero/concepts.svg'
import designsImg from '@/assets/images/hero/designs.svg'
import ideasImg from '@/assets/images/hero/ideas.svg'

export const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
] as const

// #region hero
export const words = [
  { text: 'Ideas', img: ideasImg },
  { text: 'Concepts', img: conceptsImg },
  { text: 'Designs', img: designsImg },
  { text: 'Code', img: codeImg },
] as const
// #endregion
