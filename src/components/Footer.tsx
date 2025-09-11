import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Vagas Dev</h3>
            <p className="text-sm text-muted-foreground">
              Conectando talentos e oportunidades
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              Sobre nós
            </Link>
            <Link href="/contact" className="hover:underline">
              Contacto
            </Link>
            <Link href="/terms" className="hover:underline">
              Termos de Serviços
            </Link>
            <Link href="/privacy" className="hover:underline">
              Política de privacidade
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vagas Dev, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
