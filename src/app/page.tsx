import { Button } from "@/ui/shadcn/components/button";
import { ThemeToogleButton } from "@/ui/shadcn/components/theme-toogle-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/shadcn/components/card";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center py-20 px-4 md:px-8">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        <ThemeToogleButton />
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl w-full text-center space-y-8 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Bienvenido a <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Unju Agenda
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-serif">
          Gestiona tus horarios, materias y tareas académicas de forma sencilla y eficiente.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button size="lg" className="rounded-full text-md px-8 h-12 shadow-lg hover:shadow-xl transition-all">
            Empezar ahora
          </Button>
          <Button size="lg" variant="secondary" className="text-md px-8 h-12 border-2 transition-all">
            Conoce más
          </Button>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-muted">
          <CardHeader>
            <CardTitle className="text-2xl">Organización Total</CardTitle>
            <CardDescription className="text-md">Mantén tus clases al día</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Visualiza tu calendario de cursadas, horarios de exámenes y fechas de entregas importantes en un solo lugar.
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full justify-start text-primary font-semibold hover:text-blue-600">
              Ver Calendario →
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-muted">
          <CardHeader>
            <CardTitle className="text-2xl">Gestión de Materias</CardTitle>
            <CardDescription className="text-md">Seguimiento académico</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Registra tus notas, apuntes y progreso en cada una de tus materias para tener el control total de tu carrera.
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full justify-start text-primary font-semibold hover:text-blue-600">
              Mis Materias →
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-muted">
          <CardHeader>
            <CardTitle className="text-2xl">Notificaciones</CardTitle>
            <CardDescription className="text-md">No te pierdas de nada</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Recibe recordatorios automáticos sobre próximos exámenes, cierres de actas y feriados académicos.
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full justify-start text-primary font-semibold hover:text-blue-600">
              Configurar Alertas →
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
