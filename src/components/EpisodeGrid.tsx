'use client'

interface Episode {
  id: string;
  title: string;
  description: string;
  youtubeId: string; // Placeholder - replace with actual YouTube IDs
  theme: string;
  color: string;
}

const episodes: Episode[] = [
  {
    id: "1",
    title: "Game Trailer Manifesto",
    description: "An epic solarpunk introduction that reads like David Attenborough narrating a game trailer. Witness the beauty of a world where technology blooms alongside nature.",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    theme: "Epic Introduction",
    color: "solarpunk-green"
  },
  {
    id: "2", 
    title: "Beetlemoses Comic",
    description: "Hilarious aliens review and upgrade Earth in this Rick & Morty style comedy. Watch as extraterrestrial visitors hilariously critique and improve our planet's systems.",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    theme: "Cosmic Comedy",
    color: "solarpunk-blue"
  },
  {
    id: "3",
    title: "ASMR Tinkerer", 
    description: "Follow a female engineer as she lovingly works on her robot companion. A slice-of-life story set to gentle rain sounds, celebrating the intimate relationship between creator and creation.",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID  
    theme: "Slice of Life",
    color: "solarpunk-orange"
  }
];

export default function EpisodeGrid() {
  return (
    <section id="episodes" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Episodes
          </h2>
          <p className="text-xl text-solarpunk-light/70 max-w-2xl mx-auto">
            Three unique perspectives on our solarpunk future, each telling a different story of hope and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {episodes.map((episode, index) => (
            <div 
              key={episode.id}
              className="group relative bg-black/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border-2 border-white/20 hover:border-solarpunk-green/60 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl hover:shadow-solarpunk-green/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Title row with badge and title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-${episode.color} rounded-full flex items-center justify-center text-black font-black text-lg lg:text-xl shadow-lg flex-shrink-0`}>
                  {episode.id}
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white group-hover:text-solarpunk-green transition-colors leading-tight">
                  {episode.title}
                </h3>
              </div>
              
              {/* Theme badge */}
              <div className="mb-6">
                <span className={`px-4 py-2 text-sm lg:text-base bg-${episode.color}/20 text-${episode.color} rounded-full border-2 border-${episode.color}/40 font-bold`}>
                  {episode.theme}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-solarpunk-light/90 text-base lg:text-lg leading-relaxed font-medium mb-8">
                {episode.description}
              </p>
              
              {/* Video container - At the bottom */}
              <div className="video-container bg-black/80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl group-hover:border-solarpunk-green/40 transition-all duration-500">
                <iframe
                  src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                  title={episode.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 lg:h-80 xl:h-96"
                ></iframe>
              </div>
              
              {/* Enhanced hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-solarpunk-green/10 via-transparent to-solarpunk-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-solarpunk-light/60 mb-4">
            Ready to explore the solarpunk future?
          </p>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border border-solarpunk-green/50 text-solarpunk-green rounded-full hover:bg-solarpunk-green/10 transition-all duration-300"
          >
            Learn About Solarpunk
          </button>
        </div>
      </div>
    </section>
  )
}