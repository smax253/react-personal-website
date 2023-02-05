import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
export const Header = () => {
  const { asPath } = useRouter();
  const currentPath = asPath.split("/")[1];
  const isActiveStyle = (matchedPath: string) =>
    currentPath === matchedPath ? styles.active : "";
  console.log(currentPath, isActiveStyle(""));

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>石</Link>
      </div>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <a className={isActiveStyle("")}>Home</a>
        </Link>
        <Link href={"/journey"}>
          <a className={isActiveStyle("journey")}>Journey</a>
        </Link>
        <Link href={"/skills"}>
          <a className={isActiveStyle("skills")}>Skills</a>
        </Link>
        <Link href={"/about"}>
          <a className={isActiveStyle("about")}>About</a>
        </Link>
      </nav>
    </header>
  );
};
