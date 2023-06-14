import { Typography } from "@material-tailwind/react";
import InputSearch from "../InputSearch/InputSearch";

export default function IntroTitle() {
  return (
    <div className=" text-center pt-20">
      <Typography color="deep-purple" className="font-semibold">
        Our blog
      </Typography>
      <div className="mt-3">
        <Typography variant="h1">The latest writings from our team</Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mt-3 tracking-wide"
        >
          The latest industry,news,interviews,technologies,and resources.
        </Typography>
      </div>
      <InputSearch />
    </div>
  );
}
