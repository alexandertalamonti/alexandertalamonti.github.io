import Head from 'next/head'
import Nav from "./Nav"

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Alexander Talamonti</title>
                <meta name='keywords' content='web development, ai, programming, c, python, datascience' />
            </Head>
            <div className="w-[min(90%,88rem)] text-xl min-h-screen mx-auto">
                <Nav />
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout