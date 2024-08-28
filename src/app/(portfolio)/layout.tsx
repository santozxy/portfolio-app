import { Header } from "@/components/header";
import { Nav } from "@/components/nav";

export default function PortfolioLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-screen bg-gradient-to-tl from-zinc-800 via-zinc-400/10 to-zinc-900 ">
      <Header />
      <div className="container mx-auto flex flex-col gap-8 ">
        <Nav />
        {children}
      </div>
    </section>
  );
}
