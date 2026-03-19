import { Trophy, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function PredictionBox({ match }: any) {
  const prediction = match.prediction

  return (
    <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/50 overflow-hidden animate-glow-pulse">
      <CardContent className="pt-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4 bg-accent/20 px-4 py-2 rounded-full">
            <Trophy className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">AI PREDICTION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-2 glow-accent">{prediction.winner}</h2>

          <p className="text-xl text-foreground mb-2">Expected Winner</p>
          <p className="text-muted-foreground">Based on advanced statistical analysis</p>
        </div>

        {/* Prediction Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-t border-accent/30">
          {[
            {
              label: "Win Probability",
              value: prediction.winProbability,
              icon: <TrendingUp className="w-5 h-5" />,
            },
            {
              label: "Confidence Level",
              value: prediction.confidence,
              icon: <Trophy className="w-5 h-5" />,
            },
            {
              label: "Score Prediction",
              value: prediction.scoreRange,
              icon: <TrendingUp className="w-5 h-5" />,
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-2 text-accent">{item.icon}</div>
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="text-2xl font-bold text-accent">{item.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
