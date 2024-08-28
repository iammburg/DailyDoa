import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SimpleCard({ cardHeader, cardContent, buttonName }) {
  return (
    <Card className="mt-6 flex h-96 w-[300px] items-center justify-center border border-color-jungle shadow-2xl">
      <CardBody>
        <Typography
          variant="h5"
          color="black"
          className="mb-2 text-center font-cardo"
        >
          {cardHeader}
        </Typography>
        <Typography className="text-center font-amiri" variant="paragraph">
          {cardContent}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-center pt-0">
        <Button>{buttonName}</Button>
      </CardFooter>
    </Card>
  );
}
