import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Roy Safi for Community Leadership',
  description: 'Building a stronger, more united future — Roy Safi stands for integrity, service, and progress.',
  openGraph: {
    title: 'Roy Safi for Community Leadership',
    description: 'Join the movement for positive change.',
    url: 'https://roysafi.vercel.app',
    siteName: 'Roy Safi Campaign',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Roy Safi
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-600">
              Serving with Integrity. Leading with Vision.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Link href="#join">Join the Movement</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">A Leader You Can Trust</h2>
            <div className="mt-3 w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              Roy Safi is a dedicated community advocate, educator, and problem-solver with deep roots in our neighborhoods.
              His commitment to transparency, equity, and actionable solutions has earned him the trust of families, small
              businesses, and youth across the region.
            </p>
            <p>
              From organizing food drives to mentoring students and advocating for safer streets — Roy shows up, listens,
              and delivers.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Stronger Communities',
                desc: 'Invest in local programs that uplift youth, seniors, and small businesses.',
              },
              {
                title: 'Transparent Leadership',
                desc: 'Open forums, real-time updates, and decisions driven by data and dialogue.',
              },
              {
                title: 'Sustainable Progress',
                desc: 'Green spaces, clean energy initiatives, and infrastructure that lasts.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Make a Difference?</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Your voice matters. Sign up to volunteer, receive updates, or host a community meetup.
          </p>
          <form
            className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
            action="https://formspree.io/f/YOUR_FORM_ID" // 🔁 Replace with real endpoint
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              className="bg-white text-blue-700 hover:bg-gray-100 px-6 font-medium"
            >
              Join Us
            </Button>
          </form>
          <p className="mt-3 text-sm text-blue-200">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Roy Safi Campaign. Paid for by Friends of Roy Safi.</p>
          <p className="mt-2 text-sm">
            <Link href="/privacy" className="hover:text-white underline">
              Privacy Policy
            </Link>{' '}
            •{' '}
            <Link href="/contact" className="hover:text-white underline">
              Contact
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}