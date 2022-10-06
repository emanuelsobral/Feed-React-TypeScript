import styles from'./Header.module.css';
import noelLogo from '../assets/noel-logo.svg';

console.log(noelLogo);

export function Header() {
    return(
        <header className={ styles.header }>
            <img src={noelLogo} alt="Logo" />
            <strong>NOEL<span>.</span>FEED</strong>
        </header>
    );
}