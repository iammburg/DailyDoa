import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faGithubSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

export default function Footer() {
  return (
    <div className="footer w-full">
      <div className="footer__container container mx-auto flex max-w-screen-xxl flex-col items-center justify-center gap-7 rounded-t-[60px] bg-color-shadow px-7 pb-24 pt-16 lg:flex-row">
        <div className="footer__contact flex flex-col items-center justify-between p-2 lg:items-start lg:justify-start">
          <div className="mb-8 flex flex-row items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F6EFE6"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
            <h4 className="font-cardo text-3xl font-bold text-color-cream">
              Ndaru
            </h4>
          </div>

          <div className="mb-7 flex flex-col items-center justify-center gap-1">
            <h4 className="font-cardo text-xl font-bold text-color-cream">
              Hubungi Saya
            </h4>

            <span className="">
              <i className="fa-solid fa-envelope flex flex-row items-center justify-center gap-2 text-color-cream">
                <h5 className="font-amiri text-lg font-normal text-color-cream">
                  <a href="mailto:ilhamprabowo009@gmail.com" target="_blank">
                    ilhamprabowo009@gmail.com
                  </a>
                </h5>
              </i>
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <h4 className="font-cardo text-xl font-bold text-color-cream">
              Media Sosial
            </h4>

            <div className="flex flex-col items-center justify-center gap-1">
              <span className="flex flex-row items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="text-color-cream"
                  size="lg"
                />
                <h5 className="font-amiri text-lg text-color-cream">
                  <a
                    href="https://www.instagram.com/outsidemywall/"
                    target="_blank"
                  >
                    @outsidemywall
                  </a>
                </h5>
              </span>

              <span className="flex flex-row items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className="text-color-cream"
                  size="lg"
                />
                <h5 className="font-amiri text-lg text-color-cream">
                  <a href="https://github.com/iammburg" target="_blank">
                    iammburg
                  </a>
                </h5>
              </span>

              <span className="flex flex-row items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faYoutubeSquare}
                  className="text-color-cream"
                  size="lg"
                />
                <h5 className="font-amiri text-lg text-color-cream">
                  <a
                    href="https://www.youtube.com/@ndarucompiler"
                    target="_blank"
                  >
                    ndarucompiler
                  </a>
                </h5>
              </span>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="footer__form flex flex-col items-center justify-center p-2">
          <div className="mb-8 flex flex-col items-center justify-center gap-2">
            <h4 className="text-center font-cardo text-xl font-bold text-color-cream">
              Tertarik Bekerja Bersama?
            </h4>
            <p className="text-center font-amiri text-lg text-color-cream">
              Isi formulir di bawah ini untuk mengirim pesan secara personal
            </p>
          </div>

          <Card className="w-full max-w-md bg-color-cream p-5" shadow={false}>
            <form className="mb-2 w-full">
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-cardo"
                >
                  Nama
                </Typography>
                <Input label="Masukkan nama Anda" size="lg" />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-cardo"
                >
                  Email
                </Typography>
                <Input label="Masukkan email Anda" size="lg" />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-cardo"
                >
                  Pesan
                </Typography>
                <Textarea label="Masukkan Pesan" />
              </div>
              <Button
                className="mt-6 bg-color-jungle font-cardo font-bold"
                fullWidth
              >
                KIRIM
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
