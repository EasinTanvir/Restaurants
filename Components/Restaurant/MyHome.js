import Link from 'next/link'


export default function MyHome() {
  return (
    <div>
      <button><Link href='/restaurant'>
        Go to All Restaurant
      </Link></button>
    </div>
  )
}
