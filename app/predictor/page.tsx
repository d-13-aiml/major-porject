"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import { ArrowRight, Zap, Trophy, TrendingUp } from "lucide-react"

const TEAMS = [
  "Chennai Super Kings",
  "Deccan Chargers",
  "Delhi Capitals",
  "Delhi Daredevils",
  "Gujarat Lions",
  "Kings XI Punjab",
  "Kochi Tuskers Kerala",
  "Kolkata Knight Riders",
  "Mumbai Indians",
  "Pune Warriors",
  "Rajasthan Royals",
  "Rising Pune Supergiant",
  "Rising Pune Supergiants",
  "Royal Challengers Bangalore",
  "Sunrisers Hyderabad",
]

const VENUES = [
  "ACA-VDCA Stadium",
  "Barabati Stadium",
  "Brabourne Stadium",
  "Buffalo Park",
  "De Beers Diamond Oval",
  "Dr DY Patil Sports Academy",
  "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
  "Dubai International Cricket Stadium",
  "Eden Gardens",
  "Feroz Shah Kotla",
  "Feroz Shah Kotla Ground",
  "Green Park",
  "Himachal Pradesh Cricket Association Stadium",
  "Holkar Cricket Stadium",
  "IS Bindra Stadium",
  "JSCA International Stadium Complex",
  "Kingsmead",
  "M Chinnaswamy Stadium",
  "M. A. Chidambaram Stadium",
  "M. Chinnaswamy Stadium",
  "MA Chidambaram Stadium, Chepauk",
  "Maharashtra Cricket Association Stadium",
  "Nehru Stadium",
  "New Wanderers Stadium",
  "Newlands",
  "OUTsurance Oval",
  "Punjab Cricket Association IS Bindra Stadium, Mohali",
  "Punjab Cricket Association Stadium, Mohali",
  "Rajiv Gandhi International Stadium, Uppal",
  "Rajiv Gandhi Intl. Cricket Stadium",
  "Sardar Patel Stadium, Motera",
  "Saurashtra Cricket Association Stadium",
  "Sawai Mansingh Stadium",
  "Shaheed Veer Narayan Singh International Stadium",
  "Sharjah Cricket Stadium",
  "Sheikh Zayed Stadium",
  "St George's Park",
  "Subrata Roy Sahara Stadium",
  "SuperSport Park",
  "Vidarbha Cricket Association Stadium, Jamtha",
  "Wankhede Stadium",
]

const selectClass =
  "w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 cursor-pointer hover:border-accent/50"

export default function PredictorPage() {
  const [formData, setFormData] = useState({
    team1: "",
    team2: "",
    venue: "",
    toss_winner: "",
    toss_decision: "",
  })

  const [prediction, setPrediction] = useState<{
    winner: string
    confidence: number
  } | null>(null)

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePredict = async () => {
    const { team1, team2, venue, toss_winner, toss_decision } = formData

    if (!team1 || !team2 || !venue || !toss_winner || !toss_decision) {
      alert("Please fill in all fields")
      return
    }

    if (team1 === team2) {
      alert("Please select different teams")
      return
    }

    setLoading(true)

    try {
      // Replace this mock with your real API call
      await new Promise((res) => setTimeout(res, 500))

      setPrediction({
        winner: Math.random() > 0.5 ? team1 : team2,
        confidence: Math.round(Math.random() * 25 + 65),
      })
    } catch (error) {
      console.error("Prediction error:", error)
      alert("Failed to get prediction")
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setPrediction(null)
    setFormData({
      team1: "",
      team2: "",
      venue: "",
      toss_winner: "",
      toss_decision: "",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Zap className="w-8 h-8 text-accent animate-glow-pulse" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground glow-accent">AI Match Predictor</h1>
          </div>
          <p className="text-xl text-muted-foreground mt-3 max-w-2xl mx-auto">
            Leverage advanced machine learning to predict cricket match winners with precision scoring and detailed analysis
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent" />
              <span className="text-muted-foreground">68.5% Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-muted-foreground">Real-time Analysis</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Form Section */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl shadow-accent/10 hover:shadow-accent/20 transition-all duration-300 animate-slide-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
              <span className="w-1 h-8 bg-accent rounded" />
              Match Details
            </h2>

            <div className="space-y-6">

              {/* Team 1 */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Team 1</label>
                <select name="team1" value={formData.team1} onChange={handleChange} className={selectClass}>
                  <option value="">Select Team 1</option>
                  {TEAMS.map((team) => (
                    <option key={team} value={team}>{team}</option>
                  ))}
                </select>
              </div>

              {/* Team 2 */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Team 2</label>
                <select name="team2" value={formData.team2} onChange={handleChange} className={selectClass}>
                  <option value="">Select Team 2</option>
                  {TEAMS.map((team) => (
                    <option key={team} value={team}>{team}</option>
                  ))}
                </select>
              </div>

              {/* Venue */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Venue</label>
                <select name="venue" value={formData.venue} onChange={handleChange} className={selectClass}>
                  <option value="">Select Venue</option>
                  {VENUES.map((venue) => (
                    <option key={venue} value={venue}>{venue}</option>
                  ))}
                </select>
              </div>

              {/* Toss Winner */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Toss Winner</label>
                <select name="toss_winner" value={formData.toss_winner} onChange={handleChange} className={selectClass}>
                  <option value="">Select Toss Winner</option>
                  {[formData.team1, formData.team2].filter(Boolean).map((team) => (
                    <option key={team} value={team}>{team}</option>
                  ))}
                </select>
              </div>

              {/* Toss Decision */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Toss Decision</label>
                <select name="toss_decision" value={formData.toss_decision} onChange={handleChange} className={selectClass}>
                  <option value="">Select Decision</option>
                  <option value="bat">Bat</option>
                  <option value="field">Field</option>
                </select>
              </div>

              {/* Predict Button */}
              <button
                onClick={handlePredict}
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-accent/40 mt-8 text-lg"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Predict Winner
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

            </div>
          </div>

          {/* Result Section */}
          <div className="flex flex-col justify-center">
            {prediction ? (
              <div className="bg-gradient-to-br from-accent/15 via-accent/5 to-primary border-2 border-accent rounded-2xl p-10 shadow-2xl shadow-accent/30 animate-slide-in-up">
                <div className="text-center space-y-8">

                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                      Predicted Winner
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-accent glow-accent">{prediction.winner}</h2>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32 rounded-full border-4 border-accent/20 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent/50 opacity-10" />
                      <div className="text-center z-10">
                        <div className="text-4xl font-black text-accent">{prediction.confidence}%</div>
                        <div className="text-xs text-muted-foreground mt-1">Confidence</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/50 border border-accent/30 rounded-xl p-6 space-y-3">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider">Analysis Factors</p>
                    <ul className="text-sm text-foreground space-y-2">
                      {[
                        "Historical performance data",
                        "Team composition analysis",
                        "Venue advantage factors",
                        "Toss impact statistics",
                      ].map((factor) => (
                        <li key={factor} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full bg-primary border-2 border-accent hover:bg-accent/10 text-accent font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                  >
                    Make Another Prediction
                  </button>

                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-accent/10 to-primary border-2 border-accent/30 rounded-2xl p-12 text-center space-y-6 animate-slide-in-up">
                <div className="text-6xl">🎯</div>
                <h3 className="text-2xl font-bold text-foreground">Ready to Predict?</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Select match details and let our AI model analyze the game to deliver accurate predictions with confidence scoring.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}