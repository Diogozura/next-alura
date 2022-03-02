import Link from "../src/componets/Link"



function Title({ children, as }) {
    const Tag = as
    return (
        <>
            <Tag>{children}</Tag>

            <style jsx>{`
            ${Tag}{
                color: red;
                font-family: sans-serif;
            }
            `}

            </style>
        </>

    )
}



export default function HomePages() {
    return (
        <div>
            
            <Title as="h2">Alura Cases - Home pages</Title>
            <Link href="/faq">
                Ir para o FAQ
            </Link>
        </div>
    )
}