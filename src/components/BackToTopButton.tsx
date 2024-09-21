"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpIcon } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 right-4 bg-[#b8d0c1] text-[#636c68] hover:bg-[#a1b8a8] hover:text-[#343d37] rounded-full w-10 h-10 shadow-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        onClick={scrollToTop}
      >
        <ArrowUpIcon className="w-5 h-5" />
      </Button>
    )
  );
}
