import TopNav from "./TopNav"

export default function PageLayout({children,}: {children: React.ReactNode}) {
    return (
        <section>
            <TopNav />
            <div className="mt-20">
                { children }
            </div>
        </section>
    )
}
