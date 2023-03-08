'use client'

import React from 'react';
import {ThemeProvider} from "next-theme";
import {Provider} from "react-redux";
import {store} from "@/store";

function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default Providers;