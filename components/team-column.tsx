import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function TeamColumn({ team, side }: any) {
  return (
    <Card className="bg-card border-border overflow-hidden">
      <CardHeader className="bg-primary/50">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center">
            <span className="text-3xl font-bold text-accent">{team.name.charAt(0)}</span>
          </div>
          <div>
            <CardTitle className="text-2xl text-foreground">{team.name}</CardTitle>
            <p className="text-muted-foreground text-sm mt-1">
              {team.stats.wins}W • {team.stats.losses}L • Win Rate: {team.stats.winRate}%
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
          {[
            { label: "Avg Score", value: team.stats.avgScore },
            { label: "Recent Form", value: team.stats.recentForm },
            { label: "Rankings", value: team.stats.ranking },
            { label: "Key Players", value: team.stats.keyPlayersCount },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-2xl font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Players */}
        
        <div>
          <h3 className="font-semibold text-foreground mb-4">Squad</h3>
          <div className="grid grid-cols-3 gap-4">
            {team.players.map((player: any, idx: number) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center mx-auto mb-2 border border-accent/30">
                <Link href="/Eachply">
                  <span className="text-lg font-bold text-accent">
                    {player.name.split(" ")[0].charAt(0)}
                    {player.name.split(" ")[1]?.charAt(0) || ""}
                  </span>
                  </Link>
                </div>
                <p className="text-xs font-medium text-foreground truncate">{player.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{player.role}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
