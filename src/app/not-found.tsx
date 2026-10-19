import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="eyebrow">404 · ROAD NOT FOUND</p>
        <h1>This page took<br /><span>a different turn.</span></h1>
        <p>The address may have changed or may not exist. Head back to the homepage or explore the listed vehicle categories.</p>
        <div className="hero-actions"><Link className="button button--primary" href="/">Back home <ArrowLeft size={16} /></Link><Link className="button button--text" href="/cars">Explore vehicles <ArrowUpRight size={16} /></Link></div>
      </div>
    </section>
  );
}
