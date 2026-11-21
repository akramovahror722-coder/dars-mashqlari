import type { Localized } from './types'

export const copy = {
  kicker: { uz: 'O‘quv laboratoriyasi', en: 'Practice lab', ru: 'Учебная лаборатория' },
  title: { uz: 'Dars mashqlari', en: 'Dars mashqlari', ru: 'Учебные упражнения' },
  subtitle: {
    uz: 'HTML, CSS va JavaScript asoslarini interaktiv mashqlar orqali o‘rganing. Layoutni sozlang, animatsiyani sinab ko‘ring va DOM bilan ishlang.',
    en: 'Learn the basics of HTML, CSS and JavaScript through interactive exercises. Tune a layout, try animations and work with the DOM.',
    ru: 'Изучайте основы HTML, CSS и JavaScript через интерактивные упражнения. Настройте вёрстку, попробуйте анимации и поработайте с DOM.',
  },
  labTitle: { uz: 'Mashq maydoni', en: 'Playground', ru: 'Площадка' },
  labText: {
    uz: 'Har bir bo‘lim — kichik, jonli mashq. Sozlamalarni o‘zgartiring va natijani darhol ko‘ring.',
    en: 'Each section is a small, live exercise. Change the settings and see the result instantly.',
    ru: 'Каждый раздел — небольшое живое упражнение. Меняйте настройки и сразу видьте результат.',
  },
  tabLayout: { uz: 'Layout', en: 'Layout', ru: 'Вёрстка' },
  tabAnimation: { uz: 'Animatsiya', en: 'Animation', ru: 'Анимация' },
  tabDom: { uz: 'DOM', en: 'DOM', ru: 'DOM' },
  direction: { uz: 'Yo‘nalish', en: 'Direction', ru: 'Направление' },
  justify: { uz: 'Justify', en: 'Justify', ru: 'Justify' },
  align: { uz: 'Align', en: 'Align', ru: 'Align' },
  gap: { uz: 'Bo‘shliq', en: 'Gap', ru: 'Отступ' },
  wrap: { uz: 'Qatorga o‘rash', en: 'Wrap', ru: 'Перенос' },
  row: { uz: 'Qator', en: 'Row', ru: 'Строка' },
  column: { uz: 'Ustun', en: 'Column', ru: 'Колонка' },
  reset: { uz: 'Tiklash', en: 'Reset', ru: 'Сброс' },
  cssCode: { uz: 'CSS kodi', en: 'CSS code', ru: 'Код CSS' },
  animation: { uz: 'Animatsiya', en: 'Animation', ru: 'Анимация' },
  duration: { uz: 'Davomiylik', en: 'Duration', ru: 'Длительность' },
  repeat: { uz: 'Takrorlash', en: 'Repeat', ru: 'Повтор' },
  replay: { uz: 'Qayta', en: 'Replay', ru: 'Повторить' },
  infinite: { uz: 'Doimiy', en: 'Infinite', ru: 'Бесконечно' },
  once: { uz: 'Bir marta', en: 'Once', ru: 'Один раз' },
  counter: { uz: 'Hisoblagich', en: 'Counter', ru: 'Счётчик' },
  increment: { uz: '+1', en: '+1', ru: '+1' },
  decrement: { uz: '−1', en: '−1', ru: '−1' },
  resetCounter: { uz: 'Nolga qaytarish', en: 'Reset to zero', ru: 'Сбросить' },
  color: { uz: 'Rang', en: 'Colour', ru: 'Цвет' },
  list: { uz: 'Ro‘yxat', en: 'List', ru: 'Список' },
  addItem: { uz: 'Qo‘shish', en: 'Add', ru: 'Добавить' },
  itemPlaceholder: { uz: 'Yangi element…', en: 'New item…', ru: 'Новый элемент…' },
  emptyList: { uz: 'Ro‘yxat bo‘sh. Element qo‘shing.', en: 'The list is empty. Add an item.', ru: 'Список пуст. Добавьте элемент.' },
  jsCode: { uz: 'JavaScript kodi', en: 'JavaScript code', ru: 'Код JavaScript' },
  liveDemo: { uz: 'Jonli natija', en: 'Live result', ru: 'Живой результат' },
  code: { uz: 'Kod', en: 'Code', ru: 'Код' },
  featuresTitle: { uz: 'Nimalar mashq qilingan', en: 'What was practised', ru: 'Что отработано' },
  featureLayoutTitle: { uz: 'CSS layout', en: 'CSS layout', ru: 'Вёрстка на CSS' },
  featureLayoutText: {
    uz: 'Flexbox yo‘nalishi, tekislash va bo‘shliqlarni jonli sozlash.',
    en: 'Live tuning of flex direction, alignment and gaps.',
    ru: 'Живая настройка направления flex, выравнивания и отступов.',
  },
  featureAnimTitle: { uz: 'Animatsiyalar', en: 'Animations', ru: 'Анимации' },
  featureAnimText: {
    uz: 'Keyframe animatsiyalar: bounce, pulse, spin, slide va shake.',
    en: 'Keyframe animations: bounce, pulse, spin, slide and shake.',
    ru: 'Keyframe-анимации: bounce, pulse, spin, slide и shake.',
  },
  featureDomTitle: { uz: 'DOM bilan ishlash', en: 'Working with the DOM', ru: 'Работа с DOM' },
  featureDomText: {
    uz: 'Hisoblagich, rang almashtirish va ro‘yxatga element qo‘shish.',
    en: 'Counter, colour switching and adding items to a list.',
    ru: 'Счётчик, смена цвета и добавление элементов в список.',
  },
  featureLiveTitle: { uz: 'Hammasi brauzerda', en: 'Everything in the browser', ru: 'Всё в браузере' },
  featureLiveText: {
    uz: 'Server yoki kutubxona kerak emas — faqat HTML, CSS va JS.',
    en: 'No server or library needed — just HTML, CSS and JS.',
    ru: 'Без сервера и библиотек — только HTML, CSS и JS.',
  },
} satisfies Record<string, Localized>

export const features = [
  { title: copy.featureLayoutTitle, text: copy.featureLayoutText, tone: 'from-orange-500 to-amber-400' },
  { title: copy.featureAnimTitle, text: copy.featureAnimText, tone: 'from-rose-500 to-orange-400' },
  { title: copy.featureDomTitle, text: copy.featureDomText, tone: 'from-amber-500 to-yellow-400' },
  { title: copy.featureLiveTitle, text: copy.featureLiveText, tone: 'from-orange-600 to-red-400' },
]

export const stats = [
  { value: '3', label: { uz: 'Bo‘lim', en: 'Sections', ru: 'Раздела' } as Localized },
  { value: '2023', label: { uz: 'Boshlangan', en: 'Started', ru: 'Начало' } as Localized },
  { value: '100%', label: { uz: 'Brauzerda', en: 'In browser', ru: 'В браузере' } as Localized },
]

export const chips: Localized[] = [
  { uz: 'Flexbox', en: 'Flexbox', ru: 'Flexbox' },
  { uz: 'Keyframes', en: 'Keyframes', ru: 'Keyframes' },
  { uz: 'DOM', en: 'DOM', ru: 'DOM' },
  { uz: 'Interaktiv', en: 'Interactive', ru: 'Интерактивно' },
]
