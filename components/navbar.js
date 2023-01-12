import Link from 'next/link'

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/" locale="en">
            EN
          </Link>
        </li>
        <li>
          <Link href="/" locale="fr">
            FR
          </Link>
        </li>
        <li>
          <Link href="/" locale="de">
            DE
          </Link>
        </li>
      </ul> 
    </>
  )
}
