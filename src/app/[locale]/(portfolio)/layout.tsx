import { Header } from "@/components/header";
import { Nav } from "@/components/nav";

export default function PortfolioLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden w-screen min-h-screen  bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 pb-3">
      <Header />
      <div className="container mt-20 justify-center flex flex-col gap-8">
        <Nav />
        {children}
      </div>
    </section>
  );
}
