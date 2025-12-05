
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

interface Props {
  input: {
    password: string
    confirmPassword: string
  }
  isPending: boolean
  onSubmit: (e: any) => void
  onChange: (e: any) => void
}

export const ResetPasswordForm = ({
  input,
  onChange,
  isPending,
  onSubmit
}:any) => {
  return (
    <form onSubmit={onSubmit}>
      <Label className="font-medium text-xs text-gray-700">New password</Label>
      <Input
        type="password"
        className="h-10 mt-3"
        required
        name="password"
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$"
        title="Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
        value={input.password}
        placeholder="New password"
        onChange={onChange}
      />

      <Label className="font-medium text-xs text-gray-700 mt-4 block">
        Confirm password
      </Label>
      <Input
        type="password"
        className="h-10 mt-3"
        required
        name="confirmPassword"
        value={input.confirmPassword}
        placeholder="Confirm password"
        onChange={onChange}
      />

      <Button
        className="bg-red-500 w-full mt-4 rounded-sm text-sm"
        disabled={isPending}
        type="submit"
        variant="destructive"
      >
        Reset password
      </Button>
    </form>
  )
}
