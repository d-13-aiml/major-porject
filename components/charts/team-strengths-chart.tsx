"use client"

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamStrengthsChart({ match }: any) {
  const data = [
    { category: "Batting", teamA: 85, teamB: 78 },
    { category: "Bowling", teamA: 72, teamB: 88 },
    { category: "Fielding", teamA: 80, teamB: 82 },
    { category: "Consistency", teamA: 75, teamB: 70 },
    { category: "Experience", teamA: 88, teamB: 85 },
    { category: "Form", teamA: 82, teamB: 79 },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader className="bg-primary/50">
        <CardTitle>Team Strengths Comparison</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data}>
            <PolarGrid stroke="#333" />
            <PolarAngleAxis dataKey="category" stroke="#666" />
            <PolarRadiusAxis stroke="#666" />
            <Radar name={match.teamA.name} dataKey="teamA" stroke="#b8ff00" fill="#b8ff00" fillOpacity={0.25} />
            <Radar name={match.teamB.name} dataKey="teamB" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.25} />
            <Legend />
            <Tooltip contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #b8ff00", borderRadius: "8px" }} />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
