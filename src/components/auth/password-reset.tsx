import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PasswordResetPage = ({ onLoginClick }: { onLoginClick: () => void }) => {
  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-[#1a1a1a]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white">
            Forgot Your Car Keys?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-body text-center text-gray-200 mb-5">
            This feature isn't implemented yet! For now, send us an email{" "}
            <a
              href="mailto:gizmogokartz@nickynicegames.com"
              target="_blank"
              className="text-orange-300 hover:underline"
            >
              here
            </a>{" "}
            to have your password changed!
          </p>
          <Button
            className="w-full border border-1 text-white bg-[#F76902] hover:underline"
            onClick={onLoginClick}
          >
            Return to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordResetPage;
