import { useEffect, useRef, useState } from "react";

export default function WeddingInvitation() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // LIVE COUNTDOWN
  useEffect(() => {

    const timer = setInterval(() => {

      const weddingDate = new Date("2026-06-11T00:00:00").getTime();

      const now = new Date().getTime();

      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),

        hours: Math.max(
          Math.floor((distance / (1000 * 60 * 60)) % 24),
          0
        ),

        minutes: Math.max(
          Math.floor((distance / 1000 / 60) % 60),
          0
        ),

        seconds: Math.max(
          Math.floor((distance / 1000) % 60),
          0
        ),
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // MUSIC CONTROL
  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (isPlaying) {

      audioRef.current.pause();

      setIsPlaying(false);

    } else {

      audioRef.current.volume = 1;

      audioRef.current.play();

      setIsPlaying(true);

    }
  };

  return (

    <div className="min-h-screen w-full bg-[#f8f3eb] text-[#5c4b3b] overflow-x-hidden font-serif relative">

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed top-5 right-5 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-500"
      >

        <span className="text-2xl md:text-3xl">

          {isPlaying ? "🔊" : "🔈"}

        </span>

      </button>

      {/* PREMIUM GLOW */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-yellow-100/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-56 md:w-[500px] h-56 md:h-[500px] bg-orange-100/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-56 md:w-[400px] h-56 md:h-[400px] bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      </div>

      {/* ISLAMIC PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">

        {/* BG IMAGE */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/[0.03]"></div>

        {/* MOON */}
        <div className="absolute top-5 left-5 md:top-10 md:left-10 text-5xl md:text-8xl opacity-20">
          ☪
        </div>

        {/* PARTICLES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-yellow-100/40 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* MAIN CARD */}
        <div className="relative z-10 w-full max-w-5xl bg-white/20 backdrop-blur-xl rounded-[30px] md:rounded-[60px] border border-white/20 shadow-[0_10px_50px_rgba(0,0,0,0.12)] p-5 sm:p-7 md:p-14 text-center">

          {/* BISMILLAH */}
          <p className="text-lg md:text-3xl text-[#9c7b46] mb-5 md:mb-8 tracking-widest">
            ﷽
          </p>

          {/* TOP TEXT */}
          <p className="uppercase tracking-[3px] md:tracking-[8px] text-[10px] sm:text-xs md:text-sm leading-6 md:leading-8 opacity-80 mb-6 md:mb-10">
            WE ARE HONORED TO INVITE YOU TO
            <br />
            THE WEDDING CEREMONY OF
          </p>

          {/* ISLAMIC ARCH */}
          <div className="mx-auto mb-6 md:mb-10 w-[140px] sm:w-[180px] md:w-[300px] h-[90px] sm:h-[110px] md:h-[170px] border-[4px] md:border-[6px] border-[#c8a96b] rounded-t-full rounded-b-[25px] md:rounded-b-[40px] opacity-40 relative">

            <div className="absolute inset-2 md:inset-4 border border-[#c8a96b] rounded-t-full rounded-b-[20px] md:rounded-b-[30px]"></div>

          </div>

          {/* GROOM */}
          <h1 className="text-3xl sm:text-4xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-[#8a6a3d] via-[#d4af37] to-[#8a6a3d] bg-clip-text text-transparent px-2">
            Abrarul Haq
          </h1>

          {/* & */}
          <div className="text-xl sm:text-2xl md:text-5xl my-3 md:my-5 text-[#8a6a3d]">
            &
          </div>

          {/* BRIDE */}
          <h1 className="text-3xl sm:text-4xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-[#8a6a3d] via-[#d4af37] to-[#8a6a3d] bg-clip-text text-transparent px-2">
            Hafsa Jabeen
          </h1>

          {/* DATE */}
          <p className="mt-6 md:mt-10 text-xs sm:text-sm md:text-2xl uppercase tracking-[2px] md:tracking-[5px]">
            On 11 June 2026
          </p>

          {/* TEXT */}
          <p className="max-w-2xl mx-auto opacity-80 text-xs sm:text-sm md:text-lg leading-7 md:leading-9 mt-5 md:mt-8 px-2">
            Request the honour of your gracious presence and blessings as we begin a beautiful journey of love, faith and togetherness.
          </p>

          {/* OPEN BUTTON */}
          <div className="flex justify-center mt-8 md:mt-12">

            <button
              onClick={() => {

                if (audioRef.current) {

                  audioRef.current.volume = 1;

                  audioRef.current.play();

                  setIsPlaying(true);

                }

                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });

              }}
              className="px-5 sm:px-6 md:px-10 py-2 md:py-4 rounded-full border border-[#8a6a3d] bg-[#8a6a3d]/10 hover:bg-[#8a6a3d] hover:text-white transition-all duration-500 text-xs sm:text-sm md:text-base tracking-[2px]"
            >
              OPEN INVITATION
            </button>

          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex justify-center py-6 md:py-10">
        <div className="w-24 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-[#b08d57] to-transparent"></div>
      </div>

      {/* COUNTDOWN */}
      <section className="py-10 md:py-24 px-4 md:px-6 text-center relative">

        <h2 className="text-2xl md:text-6xl mb-8 md:mb-14 text-[#7a5c3c]">
          Save The Date
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 max-w-6xl mx-auto">

          {[
            ["Days", timeLeft.days],
            ["Hours", timeLeft.hours],
            ["Minutes", timeLeft.minutes],
            ["Seconds", timeLeft.seconds],
          ].map(([label, value]) => (

            <div
              key={label}
              className="bg-white/60 backdrop-blur-lg rounded-[20px] md:rounded-[35px] p-4 md:p-10 shadow-xl border border-white/30"
            >

              <div className="text-2xl sm:text-3xl md:text-7xl font-bold text-[#8a6a3d] mb-2 md:mb-3">
                {value}
              </div>

              <div className="uppercase tracking-[2px] md:tracking-[4px] text-[10px] md:text-sm opacity-70">
                {label}
              </div>

            </div>

          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex justify-center py-6 md:py-10">
        <div className="w-24 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-[#b08d57] to-transparent"></div>
      </div>

      {/* DETAILS */}
      <section className="py-10 md:py-24 px-4 md:px-6 text-center">

        <h2 className="text-2xl md:text-6xl mb-6 md:mb-10 text-[#7a5c3c]">
          Wedding Details
        </h2>

        <div className="grid md:grid-cols-2 gap-5 md:gap-10 max-w-6xl mx-auto">

          {/* NIKAH */}
          <div className="bg-white/50 backdrop-blur-lg rounded-[25px] md:rounded-[45px] p-5 sm:p-6 md:p-12 shadow-2xl border border-white/30">

            <div className="text-4xl md:text-6xl mb-4 md:mb-6 text-[#b08d57]">
              ☪
            </div>

            <h3 className="text-xl md:text-4xl mb-4 md:mb-6">
              Nikah Ceremony
            </h3>

            <p className="leading-7 md:leading-10 text-sm md:text-lg opacity-80">

              Thursday, 11 June 2026

              <br /><br />

              YOUSUFIYA SHADI MAHAL

              <br />

              Near K.E.B Office

              <br />

              Rangampet, Tq. Shorapur

              <br />

              Dt. Yadgir

            </p>

          </div>

          {/* RECEPTION */}
          <div className="bg-white/50 backdrop-blur-lg rounded-[25px] md:rounded-[45px] p-5 sm:p-6 md:p-12 shadow-2xl border border-white/30">

            <div className="text-4xl md:text-6xl mb-4 md:mb-6 text-[#b08d57]">
              ✨
            </div>

            <h3 className="text-xl md:text-4xl mb-4 md:mb-6">
              Reception
            </h3>

            <p className="leading-7 md:leading-10 text-sm md:text-lg opacity-80">

              Wedding Celebration

              <br />

              With Family & Friends

              <br />

              Following The Ceremony

            </p>

          </div>

        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex justify-center py-6 md:py-10">
        <div className="w-24 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-[#b08d57] to-transparent"></div>
      </div>

      {/* VENUE */}
      <section className="py-10 md:py-24 px-4 md:px-6 text-center">

        <h2 className="text-2xl md:text-6xl mb-6 md:mb-10 text-[#7a5c3c]">
          Venue
        </h2>

        <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-lg rounded-[25px] md:rounded-[45px] p-5 sm:p-7 md:p-12 shadow-2xl border border-white/30">

          <p className="text-sm md:text-xl opacity-80 leading-7 md:leading-10">

            YOUSUFIYA SHADI MAHAL

            <br />

            Near K.E.B Office

            <br />

            Rangampet tq. Shorapur

            <br />

            Dt. Yadgir

          </p>

          <a
            href="https://maps.app.goo.gl/B44fUr99VvnXmyqk7"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 md:mt-10 px-5 sm:px-6 md:px-10 py-2 md:py-4 rounded-full bg-[#8a6a3d] text-white hover:scale-105 transition-all duration-500 tracking-[2px] text-xs sm:text-sm md:text-base"
          >
            OPEN GOOGLE MAPS
          </a>

        </div>
      </section>

      {/* QUOTE */}
      <section className="py-10 md:py-20 text-center px-4 md:px-6 bg-[#f3e7d3]">

        <p className="text-lg md:text-4xl italic leading-loose max-w-4xl mx-auto opacity-80">
          “And We created you in pairs.”
        </p>

        <p className="mt-4 tracking-[4px] md:tracking-[6px] uppercase text-[10px] md:text-sm opacity-60">
          — Quran 78:8
        </p>

      </section>

      {/* FOOTER */}
      <footer className="py-10 md:py-24 px-4 md:px-6 text-center bg-[#e7d7c3] relative overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10">

          <h2 className="text-2xl md:text-6xl mb-3 md:mb-4 bg-gradient-to-r from-[#8a6a3d] via-[#d4af37] to-[#8a6a3d] bg-clip-text text-transparent">
            Abrarul Haq
          </h2>

          <div className="text-lg md:text-3xl mb-3 md:mb-4 text-[#8a6a3d]">
            &
          </div>

          <h2 className="text-2xl md:text-6xl mb-4 md:mb-6 bg-gradient-to-r from-[#8a6a3d] via-[#d4af37] to-[#8a6a3d] bg-clip-text text-transparent">
            Hafsa Jabeen
          </h2>

          <p className="text-xs md:text-lg opacity-70 mb-6 md:mb-8">
            Thank you for being part of our special day
          </p>

          <div className="inline-block border border-[#8a6a3d] rounded-full px-4 md:px-10 py-2 md:py-3 uppercase tracking-[2px] md:tracking-[4px] text-[10px] md:text-sm">
            June 11 • 2026 • Wedding Celebration
          </div>

        </div>
      </footer>

      {/* MUSIC */}
      <audio
        ref={audioRef}
        id="bgmusic"
        loop
        preload="auto"
      >
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

    </div>
  );
}
