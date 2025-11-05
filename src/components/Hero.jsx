import { Rocket, CheckCircle2 } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 mb-4">
              <Rocket size={14} />
              Streamline mentor-student workflows
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              A single place for students to submit and mentors to approve
            </h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              MentorLink centralizes document submissions, feedback, and progress tracking with role-based access for students, mentors, and admins.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={16} /> Secure sign-in with roles</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={16} /> Easy uploads and status tracking</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={16} /> Mentor reviews with required feedback</li>
            </ul>
            <div id="cta" className="mt-8 flex flex-wrap items-center gap-3">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-md">
                Get started
              </button>
              <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 font-medium px-5 py-2.5 rounded-md">
                Live demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-gray-200 bg-white shadow-sm p-4">
              <div className="h-full w-full rounded-md bg-gradient-to-tr from-indigo-100 to-violet-100 grid place-items-center text-center">
                <div>
                  <p className="text-sm text-gray-700 font-medium">Mentor Dashboard Preview</p>
                  <p className="mt-1 text-xs text-gray-500">Review pending items, approve or request changes</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-4 -left-4 w-40 h-40 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10" />
            <div className="hidden md:block absolute -top-6 -right-6 w-28 h-28 rounded-full bg-indigo-500/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
