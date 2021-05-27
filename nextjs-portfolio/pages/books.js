import Link from "next/link";

export default books;

function books() {
    return (
        <>
        <h1>BookList</h1> 
        <h2>
            <Link href="/">
                <a>Home</a>
            </Link>
        </h2>
        </>
    )
}
