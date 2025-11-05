import { GraduationCap, Shield } from 'lucide-react'

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow">
            <GraduationCap size={20} />
          </div>
          <span className="font-semibold text-gray-900">MentorLink</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#roles" className="hover:text-gray-900 transition">Roles</a>
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#cta" className="hover:text-gray-900 transition">Get started</a>
        </nav>
        <button className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-black transition">
          <Shield size={16} />
          Sign in
        </button>
      </div>
    </header>
  )
}

export default Header
