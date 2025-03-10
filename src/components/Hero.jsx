import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-25`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#9B59B6]'>Seher</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Software Engineering student <br className='sm:block hidden' />
            working on Full-Stack and Mobile Application Development.
          </p>
        </div>
      </div>

      {/* GIF'i ortalamak için div ile sarıldı ve 2 cm aşağı kaydırıldı */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translate(-50%, -50%) translateY(4cm)' }}>
        <img
          src="/page-gif.gif" // Public klasöründe olduğundan sadece dosya adını kullanıyoruz
          alt="Developer GIF"
          className="w-auto h-auto max-w-full max-h-full"
        />
      </div>

      <div className='absolute xs:bottom-0 bottom-4 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
