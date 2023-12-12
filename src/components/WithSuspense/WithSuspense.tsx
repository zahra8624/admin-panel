import CircularProgress from "@mui/material/CircularProgress";
import { ComponentProps, Suspense } from "react";

export const WithSuspense =
  (Component: any) => (props?: ComponentProps<typeof Component>) => {
    return (
      <Suspense
        fallback={
          <div className="flex w-full h-full justify-center items-center">
            <CircularProgress />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };
