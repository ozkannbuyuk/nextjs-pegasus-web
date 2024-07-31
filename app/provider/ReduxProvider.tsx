"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";

import { store } from "../store";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
};

export default ReduxProvider;
