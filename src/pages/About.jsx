import { Typography } from "@material-tailwind/react";
import { AboutCard } from "../components/AboutCard";
import pattern from "../assets/images/pattern.svg";

export default function About() {
  return (
    <div className="about mb-10 mt-10 w-full">
      <div className="about__container container mx-auto flex max-w-screen-xxl flex-col items-center justify-center !px-6 lg:pt-8">
        <div className="about__text flex flex-col items-center justify-center lg:px-16">
          <Typography
            variant="h2"
            className="text-center font-cardo text-2xl leading-none text-color-abyss lg:text-start xl:text-3xl"
          >
            Hadist Tentang Doa
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-3 text-center font-amiri text-lg leading-none text-color-abyss xl:text-xl"
          >
            Pelajari hadist-hadist yang mendasari doa-doa harian kita. Dapatkan
            pemahaman lebih dalam tentang pentingnya doa dalam kehidupan
            sehari-hari dan bagaimana doa dapat memberikan kekuatan serta
            kedamaian batin.
          </Typography>
        </div>
        <div className="about__card mt-10 flex flex-col items-center justify-center gap-6 !px-6 md:flex-row md:flex-wrap md:items-start md:gap-9 lg:gap-16">
          <AboutCard
            cardHeader={`Dari An-Nu'man bin Basyir-raḍiyallāhu'anhu:`}
            cardContent={`Nabi (ﷺ) bersabda, 'Doa (permohonan) adalah ibadah.'`}
            buttonName={`Referensi`}
          />
          <AboutCard
            cardHeader={`Aisyah-raḍiyallāhu'anhā meriwayatkan:`}
            cardContent={`Rasulullah (ﷺ) menyukai doa yang komprehensif atau (Al-Jawami', yaitu, doa dengan kata-kata yang sangat sedikit tetapi memiliki makna yang luas), dan membuang yang lainnya.'`}
            buttonName={`Referensi`}
          />
          <AboutCard
            cardHeader={`Anas radhiyallahu'anhu meriwayatkan:`}
            cardContent={`Doa yang paling sering diucapkan oleh Nabi (ﷺ) adalah: 'Allahumma atina fid-dunya hasanatan, wa fil-akhirati hasanatan, wa qina 'adhab-annar (Wahai Rubb kami, berilah kami di dunia ini apa yang baik, dan di akhirat nanti apa yang baik, dan selamatkanlah kami dari azab api neraka).'`}
            buttonName={`Referensi`}
          />
        </div>
      </div>
      <div className="about__pattern mx-auto mt-28 max-w-screen-xxl p-0">
        <img src={pattern} alt="pattern" />
      </div>
    </div>
  );
}
