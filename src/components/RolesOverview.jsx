import { User, Users, Shield, Upload, CheckCircle, XCircle, FileText } from 'lucide-react'

const roles = [
  {
    key: 'student',
    title: 'Student',
    icon: User,
    color: 'from-sky-500 to-cyan-600',
    items: [
      { icon: Upload, label: 'Upload PDFs, images, docs' },
      { icon: FileText, label: 'Track status & feedback' },
      { icon: CheckCircle, label: 'See approvals in real time' },
    ],
  },
  {
    key: 'mentor',
    title: 'Mentor',
    icon: Users,
    color: 'from-indigo-500 to-violet-600',
    items: [
      { icon: FileText, label: 'Review submissions' },
      { icon: CheckCircle, label: 'Approve in one click' },
      { icon: XCircle, label: 'Reject with required comment' },
    ],
  },
  {
    key: 'admin',
    title: 'Admin',
    icon: Shield,
    color: 'from-emerald-500 to-teal-600',
    items: [
      { icon: Users, label: 'Manage users & roles' },
      { icon: FileText, label: 'Define categories' },
      { icon: CheckCircle, label: 'See system-wide stats' },
    ],
  },
]

function RolesOverview() {
  return (
    <section id="roles" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Built for every role</h2>
        <p className="mt-2 text-gray-600 max-w-prose">Clear, focused workflows for students, mentors, and admins ensure accountability and faster reviews.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon
            return (
              <div key={role.key} className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                <div className={`h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br ${role.color} text-white mb-4`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">{role.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {role.items.map((it, idx) => {
                    const ItemIcon = it.icon
                    return (
                      <li key={idx} className="flex items-center gap-2">
                        <ItemIcon className="text-gray-900/70" size={16} />
                        <span>{it.label}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RolesOverview
