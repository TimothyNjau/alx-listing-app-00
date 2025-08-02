import Link from "next/link";


const Footer: React.FC = () => {

    return (
        <>
            <footer>
                <section>
                    <h3>Support</h3>
                    <ul>
                        <li>
                            <Link href={"#"}>Help Center</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Cover</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Disability Support</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Cancellation options</Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>Hosting</h3>
                     <ul>
                        <li>
                            <Link href={"#"}>List your Home</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Cover for Hosts</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Community Forum</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Find a co-host</Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>
                        Information
                    </h3>
                     <ul>
                        <li>
                            <Link href={"#"}>Newsroom</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Investors</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Gift Cards</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Cancellation options</Link>
                        </li>
                    </ul>
                </section>
            </footer>
        </>
    )
};

export default Footer;