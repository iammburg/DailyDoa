import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import React from "react";

export function DoaCard({ id, judul, latin, arab, terjemah }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Card className="w-[390px] rounded-md border border-color-jungle shadow-2xl">
        <CardBody className="flex flex-row items-center justify-between p-5">
          <Typography variant="h5" color="black" className="font-cardo">
            {id}. {judul}
          </Typography>
          <IconButton variant="text" onClick={handleOpen}>
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
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </IconButton>
        </CardBody>
      </Card>

      {/* Modal Dialog */}
      <Dialog open={open} handler={handleOpen} className="p-5">
        <DialogHeader className="font-cardo">
          {id}. {judul}
        </DialogHeader>
        <DialogBody>
          <Typography
            variant="lead"
            className="text-right font-amiri text-black"
          >
            {arab}
          </Typography>
          <br />
          <Typography
            variant="paragraph"
            className="mb-2 font-cardo italic text-black"
          >
            {latin}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-cardo font-semibold text-black"
          >
            "{terjemah}"
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="outlined"
            color="red"
            onClick={handleOpen}
            className="mx-1 my-1 font-cardo"
            size="sm"
          >
            <span>Tutup</span>
          </Button>
          <Button
            onClick={handleOpen}
            className="mx-1 my-1 bg-color-rust font-cardo"
            size="sm"
          >
            <span>Unduh</span>
          </Button>
          <Button
            onClick={handleOpen}
            className="mx-1 my-1 bg-color-jungle font-cardo"
            size="sm"
          >
            <span>Bookmark</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
