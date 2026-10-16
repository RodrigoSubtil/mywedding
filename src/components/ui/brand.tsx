import Image from "next/image";
import Link from "next/link";

export function Brand({ href }: { href: string }) {
  return (
    <Link className="wordmark" href={href} aria-label="MyWedding">
      <Image
        src="/brand/mywedding.svg"
        width={160}
        height={36}
        alt=""
        aria-hidden="true"
        priority
      />
    </Link>
  );
}
