import bg_image from "../assets/images/bg.png";
import hero_image from "../assets/images/hero-image.webp";
import { Typography, Button } from "@material-tailwind/react";

export default function Hero() {
  return (
    <div className="hero w-full">
      <div
        className="hero__container max-w-screen-xxl mx-auto flex h-[526px] items-center justify-center gap-14 px-7 py-7"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
      >
        <div className="hero-image__container w-[430] rounded-[32px] bg-white p-4">
          <img
            src={hero_image}
            alt="Doa"
            width={430}
            className="rounded-[24px]"
          />
        </div>
        <div className="hero-text__container">
          <Typography
            variant="h1"
            className="font-cardo leading-none text-color-abyss"
          >
            Temukan <br />
            Doa Harian Anda
          </Typography>
          <Typography
            variant="paragraph"
            className="font-amiri mt-3 text-2xl leading-none text-color-abyss"
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
