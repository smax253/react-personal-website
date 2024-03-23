import Link from "next/link";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";


import styles from "./Header.module.scss";

export const Header = () => {
  const { asPath } = useRouter();
  const currentPath = asPath.split("/")[1];
  const isActiveStyle = (matchedPath: string) => {
    console.log(
      currentPath,
      matchedPath,
      currentPath === matchedPath ? styles.active : ""
    );
    return currentPath === matchedPath ? styles.active : "";
  };

  return (
    <header className={styles.header}>
      <div className={`logo flex gap-5 z-30 m-0.5 text-4xl`}>
        <Link href={"/"}>石</Link>
        <Link className={`${isActiveStyle("")} ${styles.linkText}`} href={"/"}>
          Home
        </Link>
        <Link
          className={`${isActiveStyle("about")} ${styles.linkText}`}
          href="/about"
        >
          About
        </Link>
      </div>

      <Alert className={styles.viewportWarning} variant="warning">
        This website might be broken on tablet or smaller viewports. Sorry!
      </Alert>
    </header>
  );
};
