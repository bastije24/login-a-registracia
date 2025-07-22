import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginFormProps {
  onToggleMode: () => void;
  onLogin: (email: string, password: string) => void;
}

const LoginForm = ({ onToggleMode, onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      onLogin(email, password);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-primary shadow-glow">
              <Brain className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AINBOX
            </h1>
          </div>
          <p className="text-muted-foreground">
            Prihlás sa do svojho pracovného priestoru
          </p>
        </div>

        {/* Login Card */}
        <Card className="shadow-soft border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Prihlásenie</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tvoj.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Heslo</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Zabudnuté heslo?
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Prihlasovanie..." : "Prihlásiť sa"}
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">alebo</span>
                </div>
              </div>

              {/* Register Link */}
              <div className="text-center">
                <span className="text-sm text-muted-foreground">
                  Nemáš účet?{" "}
                  <button
                    type="button"
                    onClick={onToggleMode}
                    className="text-primary hover:underline font-medium"
                  >
                    Registruj sa
                  </button>
                </span>
              </div>

            </form>
          </CardContent>
        </Card>

        {/* Demo Note */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Demo verzia - použite akýkoľvek email a heslo
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;