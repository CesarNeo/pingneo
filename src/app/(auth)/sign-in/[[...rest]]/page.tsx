import { SignIn } from '@clerk/nextjs'

function SignInPage() {
  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <SignIn />
    </div>
  )
}

export default SignInPage
