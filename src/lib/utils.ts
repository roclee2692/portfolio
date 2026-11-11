import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string, lang: "zh" | "en" = "en"): string {
  const format = (date: Date) => lang === "zh"
    ? `${date.getUTCFullYear()}.${String(date.getUTCMonth() + 1).padStart(2, "0")}`
    : new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" }).format(date);
  const end = typeof endDate === "string"
    ? (endDate === "Now" ? (lang === "zh" ? "至今" : "Present") : endDate)
    : endDate ? format(endDate) : "";
  return end ? `${format(startDate)} — ${end}` : format(startDate);
}
