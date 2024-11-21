"use client";

import React, { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);

  // Assurez-vous que le thème ne change que côté client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Empêche le rendu côté serveur pour éviter les erreurs d'hydratation
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
};
