"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlayerPerformanceChart({ match }: any) {
  const data = [
    { name: "Player A", avgScore: 45, strikes: 85 },
    { name: "Player B", avgScore: 38, strikes: 78 },
    { name: "Player C", avgScore: 52, strikes: 92 },
    { name: "Player D", avgScore: 35, strikes: 72 },
    { name: "Player E", avgScore: 48, strikes: 88 },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader className="bg-primary/50">
        <CardTitle>Top Players Performance</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #b8ff00", borderRadius: "8px" }} />
            <Legend />
            <Bar dataKey="avgScore" fill="#b8ff00" name="Avg Score" />
            <Bar dataKey="strikes" fill="#7c3aed" name="Strike Rate" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
