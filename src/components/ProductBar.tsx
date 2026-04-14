export function ProductBar() {
  return (
    <div className="flex items-center justify-center mt-7 mx-5">
      <div className="flex items-center justify-center max-w-20 min-w-20 w-20 max-h-8 h-8 bg-zinc-800 rounded-full border border-[#7c3000] opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
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
      </div>
    </div>
  )
}
