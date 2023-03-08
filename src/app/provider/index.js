'use client'

import React from 'react';
import {ThemeProvider} from "next-theme";

function Providers({ children }) {
  return (
    <ThemeProvider attribute='class'>
      {children}
    </ThemeProvider>
  );
}

export default Providers;