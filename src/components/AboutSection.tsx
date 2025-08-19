'use client'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black/20 to-black/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            What is Solarpunk?
          </h2>
          <p className="text-xl text-solarpunk-light/80 leading-relaxed">
            An optimistic vision of the future that imagines a world where humanity has learned to live in harmony with nature through sustainable technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-solarpunk-green/20">
              <h3 className="text-2xl font-semibold text-solarpunk-green mb-4">
                🌱 The Vision
              </h3>
              <p className="text-solarpunk-light/80 leading-relaxed">
                Solarpunk envisions cities where buildings breathe with living walls, 
                where technology enhances rather than replaces nature, and where communities 
                thrive through cooperation and sustainable innovation.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-solarpunk-blue/20">
              <h3 className="text-2xl font-semibold text-solarpunk-blue mb-4">
                ⚡ The Technology
              </h3>
              <p className="text-solarpunk-light/80 leading-relaxed">
                From solar-powered vertical farms to AI companions that help us understand 
                ecosystems better, solarpunk technology is designed to heal and enhance 
                our relationship with the natural world.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-solarpunk-orange/20">
              <h3 className="text-2xl font-semibold text-solarpunk-orange mb-4">
                🎨 The Art Contest
              </h3>
              <p className="text-solarpunk-light/80 leading-relaxed">
                This series was created as part of an art contest celebrating 
                optimistic futures. Each episode explores different aspects of 
                solarpunk storytelling through unique visual and narrative styles.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                ⚡ Made in a Day
              </h3>
              <p className="text-solarpunk-light/80 leading-relaxed">
                This entire series - from concept to website - was crafted in a single day 
                on <strong className="text-solarpunk-green">{new Date().toLocaleDateString()}</strong>. 
                A testament to rapid creative iteration and the power of focused artistic vision.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-solarpunk-green/10 to-solarpunk-blue/10 rounded-2xl p-8 border border-solarpunk-green/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Solarpunk Matters
            </h3>
            <p className="text-lg text-solarpunk-light/90 leading-relaxed max-w-3xl mx-auto">
              In a world often focused on dystopian futures, solarpunk offers something different: 
              hope. It shows us that another world is possible - one where we work with nature 
              instead of against it, where technology serves life, and where communities flourish 
              through collaboration and care.
            </p>
            <div className="mt-6">
              <span className="inline-block px-4 py-2 bg-solarpunk-green/20 rounded-full text-solarpunk-green text-sm font-medium">
                The future is bright, and we're building it together 🌟
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}