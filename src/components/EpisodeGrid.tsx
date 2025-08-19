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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <div 
              key={episode.id}
              className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-solarpunk-green/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Episode number badge */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 bg-${episode.color} rounded-full flex items-center justify-center text-black font-bold text-sm`}>
                {episode.id}
              </div>
              
              {/* Video container */}
              <div className="video-container mb-6 bg-black/60 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                  title={episode.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Episode info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-solarpunk-green transition-colors">
                    {episode.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs bg-${episode.color}/20 text-${episode.color} rounded-full border border-${episode.color}/30`}>
                    {episode.theme}
                  </span>
                </div>
                
                <p className="text-solarpunk-light/80 text-sm leading-relaxed">
                  {episode.description}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-solarpunk-green/5 to-solarpunk-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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