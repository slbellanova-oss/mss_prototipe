import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/images/mcc-logo.svg"
        alt="MCC — Монтаж Строй Сервис"
        className="h-auto w-28 md:w-36"
      />
    </div>
  );
}
