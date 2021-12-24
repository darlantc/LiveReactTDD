import Logo from "../../assets/logo.svg";
import DiscordIcon from "../../assets/discordIcon.svg";

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo Tech People" />
            <img src={DiscordIcon} alt="Discord Tech People" />
        </header>
    );
};

export default Header;
