import { Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function MatchCard({ match }: any) {
  return (
    <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
            {match.format}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            {match.time}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Teams */}
        <div className="space-y-3">
          {/* Team A */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                {match.teamA.name.charAt(0)}
              </div>
              <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {match.teamA.name}
              </span>
            </div>
          </div>

          {/* VS */}
          <div className="text-center text-muted-foreground text-xs font-semibold uppercase tracking-wider">vs</div>

          {/* Team B */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                {match.teamB.name.charAt(0)}
              </div>
              <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {match.teamB.name}
              </span>
            </div>
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm pt-2 border-t border-border">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="truncate">{match.stadium.name}</span>
        </div>
      </CardContent>
    </Card>
  )
}
