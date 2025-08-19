'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const createdDate = new Date().toLocaleDateString();
  
  return (
    <footer className="bg-black/60 backdrop-blur-sm border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              The Solarpunks
            </h3>
            <p className="text-solarpunk-light/70 text-sm leading-relaxed">
              Optimistic stories from a future where technology and nature dance together in perfect harmony.
            </p>
          </div>
          
          {/* Social links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-solarpunk-green/20 rounded-full flex items-center justify-center text-solarpunk-green hover:bg-solarpunk-green hover:text-black transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-solarpunk-blue/20 rounded-full flex items-center justify-center text-solarpunk-blue hover:bg-solarpunk-blue hover:text-black transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-solarpunk-orange/20 rounded-full flex items-center justify-center text-solarpunk-orange hover:bg-solarpunk-orange hover:text-black transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.97 3.708 13.819 3.708 12.522s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.476c-.807-.807-1.958-1.297-3.255-1.297s-2.448.49-3.255 1.297c-.807.807-1.297 1.958-1.297 3.255s.49 2.448 1.297 3.255c.807.807 1.958 1.297 3.255 1.297s2.448-.49 3.255-1.297c.807-.807 1.297-1.958 1.297-3.255s-.49-2.448-1.297-3.255z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Creation info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Created</h4>
            <div className="space-y-2">
              <p className="text-solarpunk-light/70 text-sm">
                <span className="text-solarpunk-green">⚡ Made in a day</span>
              </p>
              <p className="text-solarpunk-light/70 text-sm">
                {createdDate}
              </p>
              <p className="text-solarpunk-light/70 text-sm">
                With love for the future 💚
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-solarpunk-light/60 text-sm">
              © {currentYear} The Solarpunks. Building better tomorrows today.
            </div>
            
            <div className="flex items-center space-x-2 text-solarpunk-light/60 text-sm">
              <span>Powered by</span>
              <span className="text-solarpunk-green">Next.js</span>
              <span>•</span>
              <span className="text-solarpunk-blue">Tailwind CSS</span>
              <span>•</span>
              <span className="text-solarpunk-orange">Optimism</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-solarpunk-green/10 to-solarpunk-blue/10 rounded-full border border-solarpunk-green/30">
              <span className="text-sm text-solarpunk-light/80">
                🌱 The future is bright, and we're growing it together
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}