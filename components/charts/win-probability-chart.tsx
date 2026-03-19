"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WinProbabilityChart({ match }: any) {
  const data = [
    { name: match.teamA.name, value: 55 },
    { name: match.teamB.name, value: 45 },
  ]

  const COLORS = ["#b8ff00", "#7c3aed"]

  return (
    <Card className="bg-card border-border">
      <CardHeader className="bg-primary/50">
        <CardTitle>Win Probability</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #b8ff00", borderRadius: "8px" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
