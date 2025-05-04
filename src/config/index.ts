import codeImg from '@/assets/images/code.svg'
import conceptsImg from '@/assets/images/concepts.svg'
import designsImg from '@/assets/images/designs.svg'
import ideasImg from '@/assets/images/ideas.svg'

export const navLinks = [
  {
    name: 'About',
    link: '#about',
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
    name: 'Projects',
    link: '#projects',
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
