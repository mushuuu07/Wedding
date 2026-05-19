import { useEffect, useState } from "react";

export default function WeddingInvitation() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (

    <div className="min-h-screen w-full bg-[#f8f3eb] text-[#5c4b3b] overflow-x-hidden scroll-smooth font-serif relative">

      {/* PREMIUM GLOW */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        <div className="absolute top-10 left-10 w-52 h-52 bg-yellow-100/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      </div>

      {/* ISLAMIC PATTERN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden bg-gradient-to-b from-[#fffaf5] to-[#efe4d5]">

        {/* BG IMAGE */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

        {/* ISLAMIC MOON */}
        <div className="absolute top-10 right-8 text-6xl md:text-8xl opacity-20">
          ☪
        </div>

        {/* SPARKLES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {[...Array(40)].map((_, i) => (
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

        {/* MAIN INVITATION CARD */}
        <div className="relative z-10 max-w-5xl bg-white/20 backdrop-blur-xl rounded-[50px] shadow-[0_20px_80px_rgba(0,0,0,0.15)] border border-white/20 p-6 md:p-14">

          {/* TOP LINE */}
          <p className="uppercase tracking-[5px] md:tracking-[10px] text-xs md:text-sm mb-6 leading-8 text-[#7c5f45]">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </p>

          {/* INVITATION TEXT */}
          <p className="uppercase tracking-[4px] md:tracking-[8px] text-xs md:text-sm mb-8 leading-8 opacity-80">
            WE ARE HONORED TO INVITE YOU TO
            <br />
            THE WEDDING CEREMONY OF
          </p>

          {/* GROOM */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-[#8a6a3d] via-[#d4af37] to-[#8a6a3d] bg-clip-text text-transparent animate-pulse px-2">
            Abrarul Haq
          </h1>

          {/* AMPERSAND */}
          <div className="text-3xl md:text-5xl my-4 italic text-[#8a6a3d]">
            &
          </div>

          {/* BRIDE */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-[#8a6a3d] via-[#d4af37] to-[#8a6a3d] bg-clip-text text-transparent animate-pulse px-2">
            Hafsa Jabeen
          </h1>

          {/* DATE */}
          <p className="mt-10 text-base md:text-2xl tracking-[3px] uppercase">
            On 11 June 2026
          </p>

          {/* INVITE TEXT */}
          <p className="max-w-2xl mx-auto opacity-80 text-sm md:text-lg leading-8 mt-6 px-2">
            Request the honour of your gracious presence and blessings as we begin a beautiful journey of love, faith and togetherness.
          </p>

          {/* BUTTON */}
          <div className="flex justify-center mt-12">

            <button
              onClick={() => {

                const audio = document.getElementById("bgmusic");

                if (audio) {
                  audio.volume = 1;
                  audio.play();
                }

                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });

              }}
              className="px-8 md:px-10 py-3 md:py-4 rounded-full border border-[#8a6a3d] bg-[#8a6a3d]/10 hover:bg-[#8a6a3d] hover:text-white transition-all duration-500 text-sm md:text-base tracking-[2px]"
            >
              OPEN INVITATION
            </button>

          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="py-16 md:py-28 px-4 md:px-6 bg-[#efe4d5] text-center relative">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-6xl mb-14 text-[#7a5c3c]">
            Save The Date
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">

            {[
              ["Days", timeLeft.days],
              ["Hours", timeLeft.hours],
              ["Minutes", timeLeft.minutes],
              ["Seconds", timeLeft.seconds],
            ].map(([label, value]) => (

              <div
                key={label}
                className="bg-white/70 backdrop-blur-lg rounded-[35px] p-6 md:p-10 shadow-2xl border border-white/30"
              >

                <div className="text-4xl md:text-7xl font-bold text-[#8a6a3d] mb-3">
                  {value}
                </div>

                <div className="uppercase tracking-[4px] text-xs md:text-sm opacity-70">
                  {label}
                </div>

              </div>

            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16 md:py-28 px-4 md:px-6 bg-[#fffaf5] text-center relative">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-6xl mb-8 text-[#7a5c3c]">
            Wedding Details
          </h2>

          <p className="text-base md:text-lg opacity-70 max-w-3xl mx-auto leading-8 mb-16">
            We would be delighted to celebrate this memorable occasion with your gracious presence and blessings.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">

            {/* NIKAH */}
            <div className="bg-[#f6ede0] rounded-[40px] p-8 md:p-12 shadow-2xl border border-[#eadcc9] hover:-translate-y-2 transition-all duration-500">

              <div className="text-5xl mb-6 text-[#b08d57]">
                ☪
              </div>

              <h3 className="text-3xl md:text-4xl mb-6">
                Nikah Ceremony
              </h3>

              <p className="leading-9 text-base md:text-lg opacity-80">

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
            <div className="bg-[#f6ede0] rounded-[40px] p-8 md:p-12 shadow-2xl border border-[#eadcc9] hover:-translate-y-2 transition-all duration-500">

              <div className="text-5xl mb-6 text-[#b08d57]">
                ✨
              </div>

              <h3 className="text-3xl md:text-4xl mb-6">
                Reception
              </h3>

              <p className="leading-9 text-base md:text-lg opacity-80">

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

      {/* VENUE */}
      <section className="py-16 md:py-28 px-4 md:px-6 bg-[#efe4d5] text-center">

        <h2 className="text-4xl md:text-6xl mb-8 text-[#7a5c3c]">
          Venue
        </h2>

        <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-lg rounded-[40px] p-8 md:p-12 shadow-2xl border border-white/30">

          <p className="text-base md:text-xl opacity-80 leading-9">

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
            className="inline-block mt-10 px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#8a6a3d] text-white hover:scale-105 transition-all duration-500 tracking-[2px]"
          >
            OPEN GOOGLE MAPS
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 md:py-24 px-4 md:px-6 text-center bg-[#e7d7c3] relative overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10">

          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-[#8a6a3d] via-[#d4af37] to-[#8a6a3d] bg-clip-text text-transparent">
            Abrarul Haq
          </h2>

          <div className="text-2xl md:text-3xl mb-4 text-[#8a6a3d]">
            &
          </div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-[#8a6a3d] via-[#d4af37] to-[#8a6a3d] bg-clip-text text-transparent">
            Hafsa Jabeen
          </h2>

          <p className="text-sm md:text-lg opacity-70 mb-8">
            Thank you for being part of our special day
          </p>

          <div className="inline-block border border-[#8a6a3d] rounded-full px-6 md:px-10 py-3 uppercase tracking-[4px] text-xs md:text-sm">
            June 11 • 2026 • Wedding Celebration
          </div>

        </div>
      </footer>

      {/* MUSIC */}
      <audio id="bgmusic" loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

    </div>
  );
}
