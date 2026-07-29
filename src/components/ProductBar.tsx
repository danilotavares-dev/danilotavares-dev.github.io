import { useState } from 'react'

interface LinksModal {
  title: string
  href: string
}

export function ProductBar() {
  const [isOpen, setIsOpen] = useState(false)

  const modalItems: LinksModal[] = [
    { title: 'Currículo', href: './' },
  ]

  return (
    <div className="relative flex flex-col items-center mt-7 mx-5">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer justify-center min-w-20 w-20 h-8 bg-zinc-700/50 rounded-full border border-[#274B8A] opacity-0 animate-[fadeIn_1s_ease-in_forwards] z-10 hover:bg-zinc-500/30 transition-colors"
      >
        <svg
          width="20"
          height="15"
          viewBox="0 0 40 30"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="34" height="2" fill="#FFE4E4" rx="1.5" />
          <rect y="13" width="34" height="2" fill="#FFE4E4" rx="1.5" />
          <rect y="22" width="34" height="2" fill="#FFE4E4" rx="1.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-4 w-80 z-50 bg-zinc-800/85 rounded-2xl border border-[#12233D] shadow-2xl backdrop-blur-sm">
          {modalItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noospener noreferrer"
              className="flex flex-col justify-between items-start p-3 w-full border-b border-[#34568C] last:border-none hover:bg-zinc-700/40 transition"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
