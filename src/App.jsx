import { useEffect, useRef, useState } from "react";

export default function WeddingInvitation() {

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [opened, setOpened] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // LIVE COUNTDOWN
  useEffect(() => {

    const interval = setInterval(() => {

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

    return () => clearInterval(interval);

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

  // OPEN INVITATION
  const openInvitation = () => {

    setOpened(true);

    if (audioRef.current) {

      audioRef.current.volume = 1;

      audioRef.current.play();

      setIsPlaying(true);

    }

    setTimeout(() => {

      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });

    }, 500);
  };

  return (

    <div className="bg-[#f8f4ee] text-[#5f4630] overflow-x-hidden font-serif relative">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-yellow-100/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-100/20 rounded-full blur-3xl animate-pulse"></div>

      </div>

      {/* ISLAMIC PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

      {/* LIQUID GLASS MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="
        fixed top-5 right-5 z-50
        w-14 h-14 md:w-16 md:h-16
        rounded-full
        border border-white/30
        bg-white/10
        backdrop-blur-2xl
        shadow-[0_8px_32px_rgba(255,255,255,0.18)]
        flex items-center justify-center
        transition-all duration-500
        hover:scale-110
        hover:bg-white/20
        overflow-hidden
        "
      >

        {/* LIQUID LIGHT */}
        <div className="
          absolute inset-0
          rounded-full
          bg-gradient-to-br
          from-white/40
          via-white/10
          to-transparent
          opacity-80
        "></div>

        {/* SHINE */}
        <div className="
          absolute top-1 left-1
          w-[70%] h-[35%]
          rounded-full
          bg-white/30
          blur-md
        "></div>

        {/* ICON */}
        <span className="relative z-10 text-xl md:text-2xl text-white drop-shadow-lg">

          {isPlaying ? "🔊" : "🔈"}

        </span>

      </button>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf9]/70 to-[#efe3d2]/70"></div>

        {/* FLOATING PARTICLES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-100/40 animate-pulse"
              style={{
                width: `${2 + Math.random() * 5}px`,
                height: `${2 + Math.random() * 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 6}s`,
              }}
            />
          ))}

        </div>

        {/* MAIN CARD */}
        <div className={`
          relative z-10
          w-full max-w-5xl
          bg-white/15
          backdrop-blur-2xl
          border border-white/20
          rounded-[35px] md:rounded-[60px]
          shadow-[0_10px_60px_rgba(0,0,0,0.15)]
          px-5 py-10 sm:px-8 md:px-16 md:py-16
          text-center
          transition-all duration-1000
          ${opened ? "scale-100 opacity-100" : "scale-95 opacity-95"}
        `}>

          {/* MOON */}
          <div className="absolute top-5 left-5 md:top-8 md:left-8 text-5xl md:text-7xl opacity-10">
            ☪
          </div>

          {/* BISMILLAH */}
          <p className="text-[#b08d57] text-xl md:text-4xl mb-6 tracking-widest">
            ﷽
          </p>

          {/* TOP TEXT */}
          <p className="uppercase tracking-[3px] md:tracking-[8px] text-[10px] sm:text-xs md:text-sm opacity-70 leading-6 md:leading-8">

            WE REQUEST THE HONOUR OF YOUR PRESENCE

            <br />

            AT THE WEDDING CEREMONY OF

          </p>

          {/* ISLAMIC ARCH */}
          <div className="mx-auto mt-8 mb-8 md:mt-12 md:mb-12 w-[150px] md:w-[320px] h-[90px] md:h-[180px] border-[5px] border-[#c8a96b] rounded-t-full rounded-b-[30px] opacity-40 relative">

            <div className="absolute inset-3 border border-[#c8a96b] rounded-t-full rounded-b-[25px]"></div>

          </div>

          {/* GROOM */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-[#8a6a3d] via-[#e4c46a] to-[#8a6a3d] bg-clip-text text-transparent">

            Abrarul Haq

          </h1>

          {/* & */}
          <div className="text-2xl md:text-5xl my-3 md:my-5 text-[#8a6a3d]">
            &
          </div>

          {/* BRIDE */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-[#8a6a3d] via-[#e4c46a] to-[#8a6a3d] bg-clip-text text-transparent">

            Hafsa Jabeen

          </h1>

          {/* DATE */}
          <p className="mt-8 md:mt-10 uppercase tracking-[3px] md:tracking-[5px] text-xs md:text-xl opacity-80">

            Thursday • 11 June 2026

          </p>

          {/* SUBTEXT */}
          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-lg leading-7 md:leading-9 opacity-80">

            With the blessings of Allah سبحانه وتعالى and our beloved families,
            we invite you to celebrate the sacred union of our hearts,
            and to share in the joy of our Nikah ceremony.

          </p>

          {/* BUTTON */}
          <div className="mt-10 md:mt-14">

            <button
              onClick={openInvitation}
              className="
              px-7 py-3 md:px-12 md:py-5
              rounded-full
              bg-gradient-to-r from-[#8a6a3d] to-[#c8a96b]
              text-white
              tracking-[3px]
              text-xs md:text-sm
              shadow-2xl
              hover:scale-105
              transition-all duration-500
              "
            >
              OPEN INVITATION
            </button>

          </div>

        </div>

      </section>

      {/* DIVIDER */}
      <div className="flex justify-center py-8 md:py-12">
        <div className="w-28 md:w-52 h-[2px] bg-gradient-to-r from-transparent via-[#b08d57] to-transparent"></div>
      </div>

      {/* COUNTDOWN */}
      <section className="py-10 md:py-24 px-4 text-center relative z-10">

        <h2 className="text-3xl md:text-6xl mb-10 md:mb-16 text-[#7a5c3c]">
          Save The Date
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">

          {[
            ["Days", timeLeft.days],
            ["Hours", timeLeft.hours],
            ["Minutes", timeLeft.minutes],
            ["Seconds", timeLeft.seconds],
          ].map(([label, value]) => (

            <div
              key={label}
              className="
              bg-white/50
              backdrop-blur-xl
              border border-white/20
              rounded-[25px]
              md:rounded-[40px]
              p-5 md:p-10
              shadow-xl
              "
            >

              <div className="text-3xl md:text-7xl font-bold text-[#8a6a3d]">

                {value}

              </div>

              <div className="mt-2 uppercase tracking-[3px] text-[10px] md:text-sm opacity-70">

                {label}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* DETAILS */}
      <section className="py-10 md:py-24 px-4 text-center relative z-10">

        <h2 className="text-3xl md:text-6xl mb-10 md:mb-16 text-[#7a5c3c]">
          Wedding Details
        </h2>

        <div className="grid md:grid-cols-2 gap-5 md:gap-10 max-w-6xl mx-auto">

          {/* NIKAH */}
          <div className="
            bg-white/50
            backdrop-blur-xl
            rounded-[30px]
            md:rounded-[50px]
            p-6 md:p-12
            border border-white/20
            shadow-2xl
          ">

            <div className="text-5xl md:text-7xl mb-6 text-[#b08d57]">
              ☪
            </div>

            <h3 className="text-2xl md:text-4xl mb-6">
              Nikah Ceremony
            </h3>

            <p className="leading-8 md:leading-10 text-sm md:text-lg opacity-80">

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
          <div className="
            bg-white/50
            backdrop-blur-xl
            rounded-[30px]
            md:rounded-[50px]
            p-6 md:p-12
            border border-white/20
            shadow-2xl
          ">

            <div className="text-5xl md:text-7xl mb-6 text-[#b08d57]">
              ✨
            </div>

            <h3 className="text-2xl md:text-4xl mb-6">
              Reception
            </h3>

            <p className="leading-8 md:leading-10 text-sm md:text-lg opacity-80">

              Wedding Celebration

              <br />

              With Family & Friends

              <br />

              Following The Ceremony

            </p>

          </div>

        </div>

      </section>

      {/* VENUE */}
      <section className="py-10 md:py-24 px-4 text-center relative z-10">

        <h2 className="text-3xl md:text-6xl mb-10 text-[#7a5c3c]">
          Venue
        </h2>

        <div className="
          max-w-3xl mx-auto
          bg-white/50
          backdrop-blur-xl
          border border-white/20
          rounded-[35px]
          md:rounded-[50px]
          p-6 md:p-14
          shadow-2xl
        ">

          <p className="text-sm md:text-xl leading-8 md:leading-10 opacity-80">

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
            className="
            inline-block
            mt-8
            px-8 py-3 md:px-12 md:py-5
            rounded-full
            bg-gradient-to-r from-[#8a6a3d] to-[#c8a96b]
            text-white
            tracking-[3px]
            text-xs md:text-sm
            hover:scale-105
            transition-all duration-500
            shadow-xl
            "
          >
            OPEN GOOGLE MAPS
          </a>

        </div>

      </section>

      {/* QUOTE */}
      <section className="py-12 md:py-24 px-4 bg-[#efe2cf] text-center relative z-10">

        <p className="text-xl md:text-5xl italic leading-loose max-w-4xl mx-auto opacity-80">
          “And We created you in pairs.”
        </p>

        <p className="mt-5 tracking-[5px] uppercase text-[10px] md:text-sm opacity-60">
          — Quran 78:8
        </p>

      </section>

      {/* FOOTER */}
      <footer className="py-14 md:py-28 px-4 text-center bg-[#e5d4bf] relative overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10">

          <h2 className="text-3xl md:text-6xl bg-gradient-to-r from-[#8a6a3d] via-[#e4c46a] to-[#8a6a3d] bg-clip-text text-transparent">
            Abrarul Haq
          </h2>

          <div className="text-2xl md:text-4xl my-3 text-[#8a6a3d]">
            &
          </div>

          <h2 className="text-3xl md:text-6xl bg-gradient-to-r from-[#8a6a3d] via-[#e4c46a] to-[#8a6a3d] bg-clip-text text-transparent">
            Hafsa Jabeen
          </h2>

          <p className="mt-6 text-xs md:text-lg opacity-70">
            Thank you for being part of our special day
          </p>

          <div className="inline-block mt-8 border border-[#8a6a3d] rounded-full px-5 py-2 md:px-10 md:py-4 uppercase tracking-[3px] text-[10px] md:text-sm">

            June 11 • 2026 • Wedding Celebration

          </div>

        </div>

      </footer>

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

    </div>
  );
}
