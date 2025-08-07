import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ArrowButton from "@/components/ui/arrow-button";
interface LoginFormProps extends React.ComponentProps<"div"> {
  onSignupClick: () => void;
  onResetPasswordClick: () => void;
}

export function LoginForm({
  className,
  onSignupClick,
  onResetPasswordClick,
  ...props
}: LoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#1a1a1a]">
        <CardHeader className="text-center">
          <CardTitle className="poppins text-xl text-white">
            Welcome Back, Racers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <p id="error-message" className="text-red-600 text-center"></p>
                <div className="grid gap-3 text-[#D0D3D4]">
                  <Label htmlFor="username" className="poppins">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="username"
                    className="border-[#D0D3D4] poppins"
                    placeholder="username..."
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between text-[#D0D3D4]">
                    <Label htmlFor="password">Password</Label>
                    <button
                      onClick={onResetPasswordClick}
                      className="text-xs text-[#F76902] hover:underline cursor-pointer"
                    >
                      Forgot your password?
                    </button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    className="text-white"
                    required
                  />
                </div>
                <ArrowButton
                  type="submit"
                  className=" w-[85%] mx-auto"
                  caption="Start Racing"
                />
              </div>
              <div className="text-center text-sm text-[#D0D3D4] poppins">
                Don&apos;t have an account?{" "}
                <button
                  onClick={onSignupClick}
                  className="hover:underline underline-offset-4 cursor-pointer text-[#F76902]"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
