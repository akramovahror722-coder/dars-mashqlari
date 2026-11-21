import { useMemo, useState } from 'react'
import {
  Boxes,
  Layers,
  MousePointerClick,
  Plus,
  RotateCcw,
  Sparkles,
  Trash2,
  Wand2,
} from 'lucide-react'
import { useLang } from '../lib/lang'
import { localize } from '../lib/locale'
import { copy } from '../lib/copy'
import type { Localized } from '../lib/types'

type Tab = 'layout' | 'animation' | 'dom'
type Direction = 'row' | 'column'
type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
type Align = 'flex-start' | 'center' | 'flex-end' | 'stretch'
type AnimationName = 'bounce' | 'pulse' | 'spin' | 'slide' | 'shake'

const tabs: { id: Tab; icon: typeof Layers; label: Localized }[] = [
  { id: 'layout', icon: Layers, label: copy.tabLayout },
  { id: 'animation', icon: Sparkles, label: copy.tabAnimation },
  { id: 'dom', icon: MousePointerClick, label: copy.tabDom },
]

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700/40 bg-slate-900">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-[10px] font-bold tracking-wider text-slate-400 uppercase">
          {title}
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-rose-400/70" />
          <span className="size-2 rounded-full bg-amber-400/70" />
          <span className="size-2 rounded-full bg-emerald-400/70" />
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-100">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400">
        {label}
      </span>
      {children}
    </label>
  )
}

const selectClass =
  'w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-medium text-slate-700 outline-none focus:border-orange-400 dark:border-white/10 dark:bg-[#0d1117] dark:text-slate-200'

function LayoutLab() {
  const { lang } = useLang()
  const [direction, setDirection] = useState<Direction>('row')
  const [justify, setJustify] = useState<Justify>('flex-start')
  const [align, setAlign] = useState<Align>('stretch')
  const [gap, setGap] = useState(12)
  const [wrap, setWrap] = useState(false)

  const css = `.stage {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap}px;
  flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
}`

  const reset = () => {
    setDirection('row')
    setJustify('flex-start')
    setAlign('stretch')
    setGap(12)
    setWrap(false)
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        <div
          className="grid gap-2 overflow-hidden rounded-xl border border-dashed border-orange-300/70 bg-orange-500/5 p-3 dark:border-orange-400/25"
          style={{
            display: 'flex',
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            gap,
            flexWrap: wrap ? 'wrap' : 'nowrap',
            minHeight: 240,
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={`grid shrink-0 place-items-center rounded-lg bg-gradient-to-br font-mono text-sm font-bold text-white shadow-md ${
                item % 2 === 0 ? 'from-orange-500 to-red-400' : 'from-amber-500 to-orange-400'
              }`}
              style={{ minWidth: 64, minHeight: 56, padding: '0.75rem' }}
            >
              {item}
            </div>
          ))}
        </div>

        <CodeBlock title={localize(copy.cssCode, lang)} code={css} />
      </div>

      <div className="space-y-4 rounded-xl border border-slate-200/70 p-4 dark:border-white/10">
        <Field label={localize(copy.direction, lang)}>
          <div className="grid grid-cols-2 gap-1.5">
            {(['row', 'column'] as Direction[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setDirection(item)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                  direction === item
                    ? 'bg-orange-500 text-white'
                    : 'border border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-300'
                }`}
              >
                {localize(item === 'row' ? copy.row : copy.column, lang)}
              </button>
            ))}
          </div>
        </Field>

        <Field label={localize(copy.justify, lang)}>
          <select
            value={justify}
            onChange={(event) => setJustify(event.target.value as Justify)}
            className={selectClass}
          >
            {['flex-start', 'center', 'flex-end', 'space-between', 'space-around'].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>

        <Field label={localize(copy.align, lang)}>
          <select
            value={align}
            onChange={(event) => setAlign(event.target.value as Align)}
            className={selectClass}
          >
            {['stretch', 'flex-start', 'center', 'flex-end'].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>

        <Field label={`${localize(copy.gap, lang)} · ${gap}px`}>
          <input
            type="range"
            min={0}
            max={40}
            value={gap}
            onChange={(event) => setGap(Number(event.target.value))}
            className="w-full accent-orange-500"
          />
        </Field>

        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 px-3 py-2 dark:border-white/10">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
            {localize(copy.wrap, lang)}
          </span>
          <input
            type="checkbox"
            checked={wrap}
            onChange={(event) => setWrap(event.target.checked)}
            className="size-4 accent-orange-500"
          />
        </label>

        <button
          type="button"
          onClick={reset}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-xs font-semibold text-slate-500 transition-colors hover:border-orange-400 hover:text-orange-600 dark:border-white/10 dark:text-slate-300"
        >
          <RotateCcw className="size-3.5" />
          {localize(copy.reset, lang)}
        </button>
      </div>
    </div>
  )
}

const animations: AnimationName[] = ['bounce', 'pulse', 'spin', 'slide', 'shake']

function AnimationLab() {
  const { lang } = useLang()
  const [name, setName] = useState<AnimationName>('bounce')
  const [duration, setDuration] = useState(1.2)
  const [repeat, setRepeat] = useState<'infinite' | 'once'>('infinite')
  const [replayKey, setReplayKey] = useState(0)

  const css = `.box {
  animation: ${name} ${duration}s ease-in-out ${
    repeat === 'infinite' ? 'infinite' : '1'
  };
}

@keyframes ${name} { /* … */ }`

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        <div className="grid min-h-[240px] place-items-center overflow-hidden rounded-xl border border-dashed border-rose-300/70 bg-rose-500/5 p-6 dark:border-rose-400/25">
          <div
            key={replayKey}
            className="grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 text-white shadow-lg"
            style={{
              animationName: `dars-${name}`,
              animationDuration: `${duration}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: repeat === 'infinite' ? 'infinite' : '1',
              animationFillMode: 'both',
            }}
          >
            <Wand2 className="size-7" />
          </div>
        </div>

        <CodeBlock title={localize(copy.cssCode, lang)} code={css} />
      </div>

      <div className="space-y-4 rounded-xl border border-slate-200/70 p-4 dark:border-white/10">
        <Field label={localize(copy.animation, lang)}>
          <select
            value={name}
            onChange={(event) => setName(event.target.value as AnimationName)}
            className={selectClass}
          >
            {animations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>

        <Field label={`${localize(copy.duration, lang)} · ${duration.toFixed(1)}s`}>
          <input
            type="range"
            min={0.3}
            max={3}
            step={0.1}
            value={duration}
            onChange={(event) => setDuration(Number(event.target.value))}
            className="w-full accent-rose-500"
          />
        </Field>

        <Field label={localize(copy.repeat, lang)}>
          <div className="grid grid-cols-2 gap-1.5">
            {(['infinite', 'once'] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRepeat(item)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                  repeat === item
                    ? 'bg-rose-500 text-white'
                    : 'border border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-300'
                }`}
              >
                {localize(item === 'infinite' ? copy.infinite : copy.once, lang)}
              </button>
            ))}
          </div>
        </Field>

        <button
          type="button"
          onClick={() => setReplayKey((value) => value + 1)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-rose-500 to-orange-400 py-2 text-xs font-bold text-white shadow-md transition-transform hover:scale-[1.02]"
        >
          <RotateCcw className="size-3.5" />
          {localize(copy.replay, lang)}
        </button>
      </div>

      <style>{`
        @keyframes dars-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-28px); }
        }
        @keyframes dars-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }
        @keyframes dars-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dars-slide {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(42px); }
        }
        @keyframes dars-shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-10px) rotate(-4deg); }
          75% { transform: translateX(10px) rotate(4deg); }
        }
      `}</style>
    </div>
  )
}

const palette = ['#f97316', '#ef4444', '#eab308', '#22c55e', '#3b82f6', '#a855f7']

interface ListItem {
  id: string
  text: string
}

function DomLab() {
  const { lang } = useLang()
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(palette[0])
  const [items, setItems] = useState<ListItem[]>([
    { id: 'seed-1', text: 'HTML' },
    { id: 'seed-2', text: 'CSS' },
  ])
  const [draft, setDraft] = useState('')

  const addItem = () => {
    const text = draft.trim()
    if (!text) return
    setItems((current) => [...current, { id: `${Date.now()}-${Math.random()}`, text }])
    setDraft('')
  }

  const snippet = useMemo(
    () => `let count = ${count}
output.textContent = count

document.body.style.background = '${color}'

const item = document.createElement('li')
item.textContent = '${items[items.length - 1]?.text ?? '…'}'
list.append(item)`,
    [count, color, items],
  )

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        <div className="grid gap-3 rounded-xl border border-dashed border-amber-300/70 bg-amber-500/5 p-4 dark:border-amber-400/25 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200/70 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <p className="text-[11px] font-bold tracking-wide text-slate-400 uppercase">
              {localize(copy.counter, lang)}
            </p>
            <p className="mt-2 font-mono text-4xl font-extrabold text-slate-800 tabular-nums dark:text-white">
              {count}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCount((value) => value + 1)}
                className="rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-white"
              >
                {localize(copy.increment, lang)}
              </button>
              <button
                type="button"
                onClick={() => setCount((value) => value - 1)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-500 dark:border-white/10 dark:text-slate-300"
              >
                {localize(copy.decrement, lang)}
              </button>
              <button
                type="button"
                onClick={() => setCount(0)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-300"
              >
                {localize(copy.resetCounter, lang)}
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/70 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <p className="text-[11px] font-bold tracking-wide text-slate-400 uppercase">
              {localize(copy.color, lang)}
            </p>
            <div
              className="mt-2 grid h-16 place-items-center rounded-lg text-xs font-bold text-white transition-colors"
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
            <div className="mt-3 flex gap-2">
              {palette.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setColor(item)}
                  aria-label={item}
                  className={`size-6 rounded-full ring-2 ring-offset-2 transition-transform hover:scale-110 dark:ring-offset-[#0d1117] ${
                    color === item ? 'ring-slate-900 dark:ring-white' : 'ring-transparent'
                  }`}
                  style={{ backgroundColor: item }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/70 bg-white p-4 sm:col-span-2 dark:border-white/10 dark:bg-white/5">
            <p className="text-[11px] font-bold tracking-wide text-slate-400 uppercase">
              {localize(copy.list, lang)}
            </p>
            <div className="mt-2 flex gap-2">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') addItem()
                }}
                placeholder={localize(copy.itemPlaceholder, lang)}
                className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-amber-400 dark:border-white/10 dark:bg-[#0d1117] dark:text-slate-100"
              />
              <button
                type="button"
                onClick={addItem}
                className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-amber-500 px-3 py-2 text-xs font-bold text-white"
              >
                <Plus className="size-3.5" />
                {localize(copy.addItem, lang)}
              </button>
            </div>
            {items.length === 0 ? (
              <p className="mt-3 text-xs text-slate-400">{localize(copy.emptyList, lang)}</p>
            ) : (
              <ul className="mt-3 space-y-1.5">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between rounded-lg bg-slate-500/8 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200"
                  >
                    {item.text}
                    <button
                      type="button"
                      onClick={() =>
                        setItems((current) => current.filter((entry) => entry.id !== item.id))
                      }
                      className="text-slate-400 transition-colors hover:text-rose-500"
                      aria-label="remove"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <CodeBlock title={localize(copy.jsCode, lang)} code={snippet} />
      </div>

      <div className="rounded-xl border border-slate-200/70 p-4 dark:border-white/10">
        <p className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200">
          <Boxes className="size-4 text-amber-500" />
          {localize(copy.liveDemo, lang)}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {localize(copy.featureDomText, lang)}
        </p>
        <ul className="mt-4 space-y-2 text-xs text-slate-500 dark:text-slate-400">
          <li className="flex gap-2">
            <span className="text-amber-500">•</span>
            {localize(copy.counter, lang)} — <code className="font-mono">useState</code>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500">•</span>
            {localize(copy.color, lang)} — <code className="font-mono">style</code>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-500">•</span>
            {localize(copy.list, lang)} — <code className="font-mono">map / filter</code>
          </li>
        </ul>
      </div>
    </div>
  )
}

export function PracticeLab() {
  const { lang } = useLang()
  const [tab, setTab] = useState<Tab>('layout')

  return (
    <div className="card-surface overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-slate-200/70 px-4 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
        <div className="flex flex-wrap gap-1.5 rounded-xl bg-slate-500/8 p-1">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                tab === item.id
                  ? 'bg-white text-orange-600 shadow-sm dark:bg-white/10 dark:text-orange-300'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <item.icon className="size-3.5" />
              {localize(item.label, lang)}
            </button>
          ))}
        </div>
        <p className="text-[11px] font-semibold text-slate-400">
          {localize(copy.labTitle, lang)}
        </p>
      </div>

      <div className="p-4 sm:p-6">
        {tab === 'layout' && <LayoutLab />}
        {tab === 'animation' && <AnimationLab />}
        {tab === 'dom' && <DomLab />}
      </div>
    </div>
  )
}
