import { CSSProperties, FC } from "react";
import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
  text: string;
  href: string;
}

const style:CSSProperties = {
    color: "Red",
    textDecoration: "underline"
}

export const ActiveLink: FC<Props> = ({text, href}) => {

    const { asPath } = useRouter();
 

  return (
    <Link href={href} legacyBehavior>
        <a style={ asPath === href ? style : undefined }>{text}</a>
    </Link>
  )
}
