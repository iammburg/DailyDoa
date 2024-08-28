import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function DoaCard({ id, judul }) {
  return (
    <Card className="w-[390px] rounded-md border border-color-jungle shadow-2xl">
      <CardBody className="flex flex-row items-center justify-between p-5">
        <Typography variant="h5" color="black" className="font-cardo">
          {id}. {judul}
        </Typography>
        <IconButton variant="text">
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
  );
}
