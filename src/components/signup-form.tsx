import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ArrowButton from "@/components/ui/arrow-button";
interface SignupFormProps extends React.ComponentProps<"div"> {
  onSignupClick?: () => void;
}
export function SignupForm({
  className,
  onSignupClick,
  ...props
}: SignupFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#1a1a1a]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white poppins">
            Join The Competition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <p
                  id="error-message"
                  className="text-red-600 text-center poppins"
                ></p>
                <div className="grid gap-3 text-[#D0D3D4] poppins">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3 text-[#D0D3D4] poppins">
                  <Label htmlFor="username" className="poppins">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="username"
                    placeholder="username..."
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center text-[#D0D3D4] poppins">
                    <Label htmlFor="password" className="poppins">
                      Enter Password
                    </Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-[#F76902] poppins"
                    ></a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    className="text-white poppins"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center text-[#D0D3D4] poppins">
                    <Label htmlFor="retype-password">Retype Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-[#F76902] poppins"
                    ></a>
                  </div>
                  <Input
                    id="retype-password"
                    type="password"
                    className="text-white poppins"
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
                Already have an account?{" "}
                <button
                  onClick={onSignupClick}
                  className="underline underline-offset-4 cursor-pointer text-[#F76902] poppins"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
