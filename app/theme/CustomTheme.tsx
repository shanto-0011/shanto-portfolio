"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function CustomThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex justify-end  top-0 right-0 ">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="btn border-none p-1.5 h-7 w-7 min-h-0 rounded-[25px] flex items-center justify-center bg-[#973bee]"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <FaSun className=" text-[#fce409]" />
        ) : (
          <FaMoon className=" text-[#fce409]" />
        )}
      </button>
    </div>
  );
}
