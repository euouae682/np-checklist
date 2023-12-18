import TopNav from "./TopNav"

export default function PageLayout({children,}: {children: React.ReactNode}) {
    return (
        <section>
            <TopNav />
            <div className="mt-16">
                { children }
            </div>
        </section>
    )
}
