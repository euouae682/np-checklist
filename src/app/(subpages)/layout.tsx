import TopNav from "./TopNav"

export default function PageLayout({children,}: {children: React.ReactNode}) {
    return (
        <section>
            <TopNav />
            { children }
        </section>
    )
}
