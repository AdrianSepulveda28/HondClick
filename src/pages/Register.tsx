import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const { toast } = useToast();

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the registration logic
    
    // Notify admin of new registration
    toast({
      title: "Registration Pending",
      description: "Your registration is pending admin approval. You will be notified once approved.",
    });
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-honda-click bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col items-center space-y-4 mb-6">
                <Avatar className="w-32 h-32 border-2 border-honda-red">
                  {profilePic ? (
                    <AvatarImage src={URL.createObjectURL(profilePic)} />
                  ) : (
                    <AvatarFallback className="bg-honda-dark text-white">
                      <User className="w-16 h-16" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="w-full">
                  <label className="text-sm font-medium">Profile Picture</label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Username</label>
                <Input placeholder="Choose a username" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input type="password" placeholder="Create a password" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Repeat Password</label>
                <Input type="password" placeholder="Repeat your password" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">ID Number</label>
                <Input placeholder="Enter your ID number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Plate Number</label>
                <Input placeholder="Enter your plate number" />
              </div>
              <Button type="submit" className="w-full bg-honda-red hover:bg-red-600 text-white">
                Register
              </Button>
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-honda-red hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;