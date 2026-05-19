export default function WeddingInvitation() { const weddingDate = new Date('2026-06-11T00:00:00').getTime(); const now = new Date().getTime(); const distance = weddingDate - now;

const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0); const hours = Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 0); const minutes = Math.max(Math.floor((distance / 1000 / 60) % 60), 0); const seconds = Math.max(Math.floor((distance / 1000) % 60), 0);

return ( <div className="min-h-screen bg-[#f8f3eb] text-[#5c4b3b] font-serif overflow-x-hidden scroll-smooth"> {/* Hero */} <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b from-[#fffaf5] to-[#efe4d5]"> <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-white/40 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>

    <div className="relative z-10 max-w-4xl animate-fadeIn">
      <p className="uppercase tracking-[8px] text-sm mb-6">
        WE are honored to welcome you to 
        <br/> <br/>The Wedding cermony Of
      </p>

      <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
        Abrarul Haq
      </h1>

      <div className="text-3xl italic mb-4">&</div>

      <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
        Hafsa Jabeen
      </h1>

      <p className="text-xl tracking-wide mb-2">On 11 June 2026</p>

      <p className="max-w-xl mx-auto opacity-80 text-lg leading-8">
        Request the Honour of Your Presence.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button
          onClick={() => {
            const audio = document.getElementById('bgmusic');
            audio.play();
          }}
          className="px-8 py-3 rounded-full border border-[#5c4b3b] hover:bg-[#5c4b3b] hover:text-white transition-all duration-300"
        >
          Scroll Down
        </button>

        
      </div>
    </div>
  </section>

  {/* Invitation */}
  <section className="py-24 px-6 bg-[#fffaf5] text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

    <div className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-5xl mb-8">Together With Their Families</h2>

      <p className="text-xl leading-10 opacity-80">
        Request the honour of your gracious presence at the wedding celebration of
        <span className="font-semibold"> Abrarul Haq </span>
        and
        <span className="font-semibold"> Hafsa Jabeen</span>,
        as they begin a beautiful journey of love, companionship, and togetherness.
      </p>
    </div>
  </section>

  {/* Countdown */}
  <section className="py-24 px-6 bg-[#efe4d5] text-center">
    <h2 className="text-5xl mb-14">Save The Date</h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {[
        ['Days', days],
        ['Hours', hours],
        ['Minutes', minutes],
        ['Seconds', seconds],
      ].map(([label, value]) => (
        <div
          key={label}
          className="bg-white p-8 rounded-[30px] shadow-xl"
        >
          <div className="text-6xl font-bold mb-3">{value}</div>
          <div className="uppercase tracking-[4px] opacity-70 text-sm">
            {label}
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Details */}
  <section className="py-24 px-6 bg-[#fffaf5] text-center">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl mb-6">Wedding Details</h2>

      <p className="text-lg opacity-70 mb-16 max-w-2xl mx-auto leading-8">
        We would be delighted to celebrate this special occasion with your blessings and presence.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-[#f6ede0] rounded-[30px] p-10 shadow-lg hover:-translate-y-2 transition duration-300">
          <h3 className="text-3xl mb-4">Nikah Ceremony</h3>

          <p className="leading-9 text-lg opacity-80">
            Thursday, 11 June 2026
            <br />
            Yousufiya Shadi Mahal
            <br />
            Near K.E.B Office
            
            Rangampet, <br/>Tq.   Shorapur
            
            Dt. Yadgir
          </p>
        </div>

        <div className="bg-[#f6ede0] rounded-[30px] p-10 shadow-lg hover:-translate-y-2 transition duration-300">
          <h3 className="text-3xl mb-4">Reception</h3>

          <p className="leading-9 text-lg opacity-80">
            Wedding Celebration
            <br />
            With Family & Friends
            <br />
            Following The Ceremony
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Gallery */}
  <section className="py-24 px-6 bg-[#efe4d5] text-center">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl mb-14">Elegant Moments</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
        ].map((img, i) => (
          <div key={i} className="overflow-hidden rounded-[30px] shadow-xl">
            <img
              src={img}
              alt="gallery"
              className="h-[420px] w-full object-cover hover:scale-110 transition duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Venue */}
  <section className="py-24 px-6 bg-[#fffaf5] text-center">
    <h2 className="text-5xl mb-8">Venue</h2>

    <p className="text-lg opacity-80 mb-10 leading-8"> YOUSUFIYA SHADI MAHAL
      <br />
      Near K.E.B Office Rangampet tq. Shorapur dt. Yadgir
    </p>

    <a
      href="https://maps.app.goo.gl/B44fUr99VvnXmyqk7"
      rel="noreferrer"
      className="inline-block px-10 py-4 rounded-full bg-[#5c4b3b] text-white hover:opacity-90 transition-all duration-300"
    >
      Open Google Maps
    </a>
  </section>

  {/* QR */}


  {/* Footer */}
  <footer className="py-20 px-6 text-center bg-[#e7d7c3] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

    <div className="relative z-10">
      <h2 className="text-5xl mb-4">Abrarul Haq & Hafsa Jabeen</h2>

      <p className="text-lg opacity-70 mb-8">
        Thank you for being part of our special day.
      </p>

      <div className="inline-block border border-[#5c4b3b] rounded-full px-8 py-3 uppercase tracking-[5px] text-sm">
        June 11 • 2026 • Wedding Celebration
      </div>
    </div>
  </footer>

  <audio
    id="bgmusic"
    loop
    src="https://soundcloud.com/levipatel/as-she-passes?in=jerome-figuiere/sets/ambiant-piano&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  />
</div>

); }