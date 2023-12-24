import Image from 'next/image'
import Preview from './ui/preview'

export default function Home() {
  return (
    <main>
      <div className="flex justify-center p-5 bg-amber-100 text-purple-900">
        <h2 className="text-5xl">blog</h2>
      </div>
      <div className="flex justify-center my-10">
        <div className="space-y-5">
          {['how i met your mother', 'my favorite blog',
            'this is the best feeling ever'].map(title =>
              <li key={title} className="list-none">
                <Preview title={title} brief="who knows" date={new Date()} />
                </li>)}
        </div>
      </div>
    </main>
  )
}
