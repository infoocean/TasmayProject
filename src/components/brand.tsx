import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? " brand--inverse" : ""}`} href="/" aria-label={`${siteConfig.name} home`}>
      <svg className="brand__mark" viewBox="0 0 64 48" fill="none" aria-hidden="true">
        <path d="M32 2 53 8v13c0 11.5-8.7 20.2-21 25C19.7 41.2 11 32.5 11 21V8L32 2Z" fill="#111" stroke="#d79a24" strokeWidth="2.8" />
        <path d="M20 15h10v5H25v4h5v12l-8-5V15Zm14 0h10v5h-5v4h5v12l-8-5V15Z" fill="#f3c65b" />
        <path d="M6 44c10-6 19-7 27-3 8 4 15 3 25-2" stroke="#d79a24" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="brand__wordmark">
        <span className="brand__name">SHREE GATIMAN</span>
        <span className="brand__descriptor">CAR RENTALS</span>
      </span>
    </Link>
  );
}
