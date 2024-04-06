import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { signOut } from 'next-auth/react'

type User = {
  name?: string | null | undefined
  email?: string | null | undefined
  img?: string | null | undefined
}

type Props = {
  user: User | undefined
  pagetype: string
}

export default function UserCard({ user, pagetype }: Props) {
  console.log(user)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Welcome to <span>{user?.name}</span>
        </p>
      </CardContent>
      <CardFooter>
        <p>If you would like to exit from this accaunt please </p>
        <button
          className="bg-red-600 py-2 px-6 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </CardFooter>
    </Card>
  )
}
