import pray from "../assets/images/Pray.jpg";
import quran from "../assets/images/Quran.jpg";
import "../styles/feature.css";
import {
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
} from "@material-tailwind/react";

export default function Feature() {
  return (
    <div className="feature mb-10 mt-20 w-full" id="feature">
      <div className="feature__container container mx-auto flex max-w-screen-xxl flex-col items-center justify-center !px-6 lg:pt-8">
        <div className="feature__text flex flex-col items-center justify-center lg:px-16">
          <Typography
            variant="h2"
            className="text-center font-cardo text-2xl leading-none text-color-abyss lg:text-start xl:text-3xl"
          >
            Fitur DailyDoa
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-3 text-center font-amiri text-lg leading-none text-color-abyss xl:text-xl"
          >
            Jelajahi berbagai doa harian yang telah kami kumpulkan. Gunakan
            berbagai fitur yang tersedia untuk mengaskses doa dengan mudah.
            Setiap doa dilengkapi dengan arti dan cara pengucapannya.
          </Typography>
        </div>

        <div className="feature-list__wrapper !px-6 md:!px-20">
          <div className="feature-list__container mt-14 flex max-w-screen-xxl flex-col flex-wrap items-center justify-center overflow-hidden rounded-3xl bg-color-shadow shadow-2xl lg:flex-row">
            <div className="feature__image w-full">
              <a
                a
                href="https://www.freepik.com/free-photo/man-praying-alone-divinity-home_11303966.htm#fromView=search&page=2&position=3&uuid=063897be-a758-4bfa-8774-4d4447b4e2d5"
                target="_blank"
              >
                <img
                  src={pray}
                  alt="Pray, Image by freepik"
                  className="w-full object-cover"
                />
              </a>
            </div>
            <div className="feature__text p-8">
              <Typography
                variant="h3"
                className="mt-3 text-center font-cardo text-base leading-none text-color-cream xl:text-xl"
              >
                23 Kumpulan Doa Sehari-hari
              </Typography>
              <Typography
                variant="paragraph"
                className="mt-3 text-center font-amiri font-thin leading-none text-color-cream xl:text-xl"
              >
                Tersedia berbagai pilihan doa untuk diamalkan pada aktivitas
                sehari-hari Anda. Mulai dari Doa Bangun Tidur, Doa Keluar Rumah,
                hingga Doa Sebelum Tidur.
              </Typography>
            </div>
            <div className="feature__text flex items-center justify-center">
              <Card className="m-8 w-auto">
                <List>
                  <ListItem ripple={true} className="py-1 pl-4 pr-1 font-amiri">
                    Fitur Pencarian
                    <ListItemSuffix>
                      <IconButton variant="text" color="blue-gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                      </IconButton>
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem ripple={true} className="py-1 pl-4 pr-1 font-amiri">
                    Fitur Unduhan
                    <ListItemSuffix>
                      <IconButton variant="text" color="blue-gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                      </IconButton>
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem ripple={true} className="py-1 pl-4 pr-1 font-amiri">
                    Fitur Bookmark
                    <ListItemSuffix>
                      <IconButton variant="text" color="blue-gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                          />
                        </svg>
                      </IconButton>
                    </ListItemSuffix>
                  </ListItem>
                </List>
              </Card>
            </div>
            <div className="feature__image w-full">
              <a href="https://www.freepik.com/free-photo/top-view-islamic-new-year-with-quran-book_9259562.htm#fromView=search&page=1&position=10&uuid=3bdb22e6-1f5a-4d8e-b3fb-b5fe5aa3a39d">
                <img
                  src={quran}
                  alt="Al-Quran, Image by freepik"
                  className="w-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
