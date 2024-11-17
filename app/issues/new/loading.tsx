import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="2rem" />
    </Box>
  );
};

export default LoadingIssuePage;
