'use client';
import { useState } from "react";
import { Header } from "@/components/Header";

export const DarkMode: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  //bodyにclassを追加
  const bodyClassName = isDarkMode ? 'darkMode' : '';
  document.body.className = bodyClassName;

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      {children}
    </>
  );
};
