"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HeadToHeadChart({ match }: any) {
  const data = [
    { year: "2021", teamA: 2, teamB: 1 },
    { year: "2022", teamA: 1, teamB: 2 },
    { year: "2023", teamA: 3, teamB: 1 },
    { year: "2024", teamA: 2, teamB: 2 },
    { year: "2025", teamA: 1, teamB: 0 },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader className="bg-primary/50">
        <CardTitle>Head-to-Head Trend</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="year" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #b8ff00", borderRadius: "8px" }} />
            <Legend />
            <Line
              type="monotone"
              dataKey="teamA"
              stroke="#b8ff00"
              name={match.teamA.name}
              strokeWidth={2}
              dot={{ fill: "#b8ff00", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="teamB"
              stroke="#7c3aed"
              name={match.teamB.name}
              strokeWidth={2}
              dot={{ fill: "#7c3aed", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
