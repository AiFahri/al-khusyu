import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert a string into a URL-friendly slug used for activity detail routes
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD") // split accented characters
    .replace(/\p{Diacritic}+/gu, "") // remove diacritics
    .replace(/[^a-z0-9\s-]/g, "") // remove invalid chars
    .trim()
    .replace(/\s+/g, "-") // spaces to dashes
    .replace(/-+/g, "-"); // collapse multiple dashes
}

export function truncate(text: string, maxLength: number): string {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  return (
    clean
      .slice(0, maxLength)
      .replace(/\s\S*$/, "")
      .trim() + "..."
  );
}
