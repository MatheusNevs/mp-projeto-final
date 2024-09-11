import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";
import { SignOutButton } from "./sign-out-button";

export async function Navbar() {
  const session = await getServerAuthSession();

  return (
    <nav className="fixed top-0 z-20 flex w-screen items-center justify-between bg-white bg-opacity-80 px-8 py-2 backdrop-blur">
      <Link href={"/"}>
        <Image
          src="/logo-natalina.webp"
          width={1200}
          height={1200}
          alt="logo"
          className="size-12 rounded-full"
        />
      </Link>
      {!session?.user && (
        <Link
          href={"/login"}
          className={buttonVariants({
            className: "hover:bg-opacity-80",
            variant: "ghost",
          })}
        >
          Entrar
        </Link>
      )}
      {!!session?.user && (
        <div className="flex gap-2">
          <Link
            href={"/minhas-doacoes"}
            className={buttonVariants({
              className: "hover:bg-opacity-80",
              variant: "ghost",
            })}
          >
            Minhas Doações
          </Link>
          <Link
            href={"/doar"}
            className={buttonVariants({
              className: "hover:bg-opacity-80",
              variant: "ghost",
            })}
          >
            Fazer Doação
          </Link>
          <SignOutButton />
        </div>
      )}
    </nav>
  );
}
