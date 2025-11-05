import { BarChart3, MessageSquare, Settings } from 'lucide-react'

const features = [
  {
    title: 'Progress tracking',
    description: 'See approved vs required documents at a glance for each student.',
    icon: BarChart3,
  },
  {
    title: 'Feedback loop',
    description: 'Mentors must add a note when rejecting, keeping reviews transparent.',
    icon: MessageSquare,
  },
  {
    title: 'Category management',
    description: 'Admins create and edit document categories to standardize submissions.',
    icon: Settings,
  },
]

function FeatureHighlights() {
  return (
    <section id="features" className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-gray-900 text-white mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureHighlights
