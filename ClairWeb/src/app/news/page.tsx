import { NewsEntries } from '@/constants/news-entries';

export default function NewsPage() {
  return (
    <div className="flex flex-col text-white">
      <main className="flex-grow">
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 pt-20">
          <h1 className="relative z-10 text-5xl font-extrabold text-white text-center">
            Latest News
          </h1>
        </div>
        <div className="bg-gray-900">
          {NewsEntries.map((entry, index) => (
            <div
              key={index}
              className={`py-6 px-4 ${
                index % 2 === 0 ? 'bg-slate-700' : 'bg-white text-gray-800'
              }`}
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">{entry.title}</h2>
                <p className="text-sm mb-4 opacity-75">{entry.date}</p>
                <p className="leading-relaxed">{entry.body}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
