"use client";

import {
  QueryClient,
  QueryClientProvider as ReactQuerycientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();
const QueryClientprovider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQuerycientProvider client={queryClient}>
      {children}
    </ReactQuerycientProvider>
  );
};

export default QueryClientprovider;
