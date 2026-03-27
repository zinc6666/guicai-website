'use client';

export default function GuicaiAnimatedLogo() {
  const letters = ['g', 'u', 'i', 'c', 'a', 'i'];

  return (
    <div className="logo-root" aria-label="guicai">
      <div className="loader-wrapper">
        {letters.map((ch, i) => (
          <span key={`${ch}-${i}`} className="loader-letter">
            {ch}
          </span>
        ))}
        <div className="loader"></div>
      </div>

      <style jsx>{`
        .logo-root {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .loader-wrapper {
          position: relative;
          display: flex;
          align-items: center;        /* 关键：垂直居中 */
          justify-content: center;
          height: 48px;               /* 加大高度让文字更居中 */
          padding: 0 4px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -0.03em;
          user-select: none;
          color: rgba(20, 14, 8, 0.92);
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .loader-wrapper {
            height: 56px;
            font-size: 32px;
          }
        }

        .loader {
          position: absolute;
          inset: -4px;
          z-index: 1;
          background-color: transparent;
          -webkit-mask: repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 6px,
            #000 6px,
            #000 9px
          );
          mask: repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 6px,
            #000 6px,
            #000 9px
          );
        }

        .loader::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 50% 50%, #ff0 0%, transparent 50%),
            radial-gradient(circle at 45% 45%, #f00 0%, transparent 45%),
            radial-gradient(circle at 55% 55%, #0ff 0%, transparent 45%),
            radial-gradient(circle at 45% 55%, #0f0 0%, transparent 45%),
            radial-gradient(circle at 55% 45%, #00f 0%, transparent 45%);
          -webkit-mask: radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, #000 25%);
          mask: radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, #000 25%);
          animation: transform-animation 2s infinite alternate, opacity-animation 4s infinite;
          animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
        }

        @keyframes transform-animation {
          0% { transform: translateX(-55%); }
          100% { transform: translateX(55%); }
        }

        @keyframes opacity-animation {
          0%, 100% { opacity: 0; }
          15% { opacity: 0.95; }
          65% { opacity: 0; }
        }

        .loader-letter {
          display: inline-block;
          opacity: 0;
          animation: loader-letter-anim 4s infinite linear;
          z-index: 2;
        }

        .loader-letter:nth-child(1) { animation-delay: 0.1s; }
        .loader-letter:nth-child(2) { animation-delay: 0.205s; }
        .loader-letter:nth-child(3) { animation-delay: 0.31s; }
        .loader-letter:nth-child(4) { animation-delay: 0.415s; }
        .loader-letter:nth-child(5) { animation-delay: 0.521s; }
        .loader-letter:nth-child(6) { animation-delay: 0.626s; }

        @keyframes loader-letter-anim {
          0% { filter: blur(0px); opacity: 0; }
          5% { opacity: 1; text-shadow: 0 0 10px rgba(141, 131, 121, 0.45); filter: blur(0px); transform: scale(1.08) translateY(-1px); }
          20% { opacity: 0.25; filter: blur(0px); }
          100% { filter: blur(5px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}