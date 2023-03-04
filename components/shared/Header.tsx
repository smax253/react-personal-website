import Link from "next/link";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";
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
      <Alert className={styles.viewportWarning} variant="warning">
        This website might be broken on tablet or smaller viewports. Sorry!
      </Alert>
    </header>
  );
};
