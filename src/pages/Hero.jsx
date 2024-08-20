import hero_image from "../assets/images/hero-image.webp";
import { Typography, Button } from "@material-tailwind/react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <div className="hero w-full">
      <div className="hero__container mx-auto flex h-[526px] max-w-screen-xxl flex-wrap items-center justify-center gap-7 px-7 py-7 md:gap-16">
        <div className="hero-image__container w-[430] rounded-[32px] bg-white p-4 shadow-2xl">
          <img
            src={hero_image}
            alt="Doa"
            width={430}
            className="hero-image rounded-[24px]"
          />
        </div>
        <div className="hero-text__container">
          <Typography
            variant="h1"
            className="text-center font-cardo text-4xl leading-none text-color-abyss lg:text-start xl:text-5xl"
          >
            Temukan <br />
            Doa Harian Anda
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-3 text-center font-amiri text-xl leading-none text-color-abyss lg:text-start xl:text-2xl"
          >
            Kumpulan doa harian lengkap dengan hadist <br /> serta fitur unduh
            dan pencarian yang memudahkan.
          </Typography>
          <div className="button__group mt-5 flex gap-3">
            <Button size="md" className="bg-color-jungle px-10">
              <span>Mulai</span>
            </Button>
            <Button size="md" variant="outlined">
              <span className="text-color-abyss">Selengkapnya</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
