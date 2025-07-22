import { Calendar, Clock, Mail, User, Brain, CheckCircle2, AlertCircle, Clock3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  // Mock data
  const todayTasks = [
    { id: 1, title: "Review project proposal", priority: "high", time: "09:00", status: "pending" },
    { id: 2, title: "Team standup meeting", priority: "medium", time: "10:30", status: "pending" },
    { id: 3, title: "Client call - Q4 planning", priority: "high", time: "14:00", status: "pending" },
    { id: 4, title: "Code review session", priority: "low", time: "16:00", status: "completed" }
  ];

  const inboxItems = [
    { id: 1, type: "email", from: "Sarah Chen", subject: "Budget approval needed", priority: "high", tag: "finance" },
    { id: 2, type: "meeting", from: "Design Team", subject: "UI/UX Review Session", priority: "medium", tag: "design" },
    { id: 3, type: "email", from: "John Smith", subject: "Project update request", priority: "low", tag: "updates" },
    { id: 4, type: "notification", from: "System", subject: "Server maintenance scheduled", priority: "medium", tag: "tech" }
  ];

  const mirrorData = {
    tasksCompleted: 12,
    totalTasks: 16,
    energyLevel: 75,
    focusTime: "4h 20m",
    burnoutRisk: "low"
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-accent text-accent-foreground";
      case "low": return "bg-muted text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "email": return <Mail className="h-4 w-4" />;
      case "meeting": return <Calendar className="h-4 w-4" />;
      case "notification": return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-primary shadow-glow">
              <Brain className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AINBOX MANAGER
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Tvoj osobný pracovný priestor pre kľud v hlave a poriadok v prioritách
          </p>
        </header>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* TODAY Section */}
          <Card className="shadow-soft animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Clock className="h-5 w-5 text-primary" />
                Today
              </CardTitle>
              <p className="text-sm text-muted-foreground">Všetko čo máš urobiť, bez balastu</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayTasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    {task.status === "completed" ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <Clock3 className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${task.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                        {task.title}
                      </span>
                      <Badge variant="outline" className={`text-xs ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {task.time}
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                Pridať úlohu
              </Button>
            </CardContent>
          </Card>

          {/* INBOX Section */}
          <Card className="shadow-soft animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Mail className="h-5 w-5 text-primary" />
                Inbox
              </CardTitle>
              <p className="text-sm text-muted-foreground">Čo prišlo, čo AI pretriedila</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {inboxItems.map((item) => (
                <div key={item.id} className="p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 text-primary">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.from}</span>
                        <Badge variant="outline" className={`text-xs ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground">{item.subject}</p>
                      <Badge variant="secondary" className="text-xs">
                        {item.tag}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                Zobraziť všetko
              </Button>
            </CardContent>
          </Card>

          {/* MIRROR Section */}
          <Card className="shadow-soft animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <User className="h-5 w-5 text-primary" />
                Mirror
              </CardTitle>
              <p className="text-sm text-muted-foreground">Pohľad na teba: kapacity, tempo, energia</p>
            </CardHeader>
            <CardContent className="space-y-4">
              
              {/* Progress Overview */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Dokončené úlohy</span>
                  <span className="font-medium">{mirrorData.tasksCompleted}/{mirrorData.totalTasks}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(mirrorData.tasksCompleted / mirrorData.totalTasks) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Energy Level */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Úroveň energie</span>
                  <span className="font-medium">{mirrorData.energyLevel}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${mirrorData.energyLevel}%` }}
                  ></div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <div className="text-lg font-bold text-primary">{mirrorData.focusTime}</div>
                  <div className="text-xs text-muted-foreground">Focus time</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <div className="text-lg font-bold text-green-500 capitalize">{mirrorData.burnoutRisk}</div>
                  <div className="text-xs text-muted-foreground">Burnout risk</div>
                </div>
              </div>

              <Button className="w-full mt-4 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Detailný prehľad
              </Button>

            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;