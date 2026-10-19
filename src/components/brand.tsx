import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? " brand--inverse" : ""}`} href="/" aria-label="Tasmay Car Rentals home">
      <svg className="brand__mark" viewBox="0 0 64 48" fill="none" aria-hidden="true">
        <path d="M9 31.5 15.2 22c1.2-1.8 3.1-2.8 5.3-2.8h20.2c2.1 0 4 1 5.2 2.7l5.8 8.3" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M6.5 30.5h45.8c2.4 0 4.2 2 4.2 4.3v2.1H4v-2.1c0-2.4 1-4.3 2.5-4.3Z" fill="currentColor" />
        <circle cx="14.5" cy="38" r="4.5" fill="#F59E0B" stroke="currentColor" strokeWidth="2" />
        <circle cx="46.5" cy="38" r="4.5" fill="#F59E0B" stroke="currentColor" strokeWidth="2" />
        <path d="M4.5 13.5c8.8-9.3 22.8-12.7 35.3-7.9 5.2 2 9.4 5.2 12.6 9.3" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M23 19.5 28.5 12h8l6.4 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="brand__wordmark">
        <span className="brand__name">TASMAY</span>
        <span className="brand__descriptor">CAR RENTALS</span>
      </span>
    </Link>
  );
}
