import Head from "next/head"
import Link from "../src/componets/Link"

// SSG- Static Site Generation
// SSR- Server Side Rendering
// ISG- Incremental Static Generation


// export async function getServerSideProps() {
//     console.log("em modo DEV, Sempre roda! A cada acesso")
//     console.log("Rodando a cada acesso que você recebe")
export async function getStaticProps() {
    //     console.log("em modo DEV, Sempre roda! A cada acesso")
    //     console.log("roda SOMENTE em build time")

    const Faq_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
    const faq = await fetch(Faq_API_URL)
        .then((repostaDoServidor) => {
            return repostaDoServidor.json()

        })
        .then((resposta) => {
            return resposta
        })
    return {
        props: {
            faq,
        }, // will be passed to the page component as props
    }
}

export default function FAQPages({ faq }) {

    // console.log(faq)
    // const [faq, setFaq] = useState([])

    // useEffect(() => {

    // }, [])

    return (
        <div>
            <Head>
                <title>FAQ</title>
            </Head>

            <h1>FAQ </h1>
            <Link href="/">
                Home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>

                    </li>
                ))}
            </ul>

        </div>
    )
}
