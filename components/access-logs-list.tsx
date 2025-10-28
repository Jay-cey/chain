"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, User, Lock, FileText, Download, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AccessLog {
  id: string
  timestamp: string
  user: string
  action: string
  resource: string
  resourceType: "case" | "evidence" | "report" | "settings"
  status: "success" | "failed" | "unauthorized"
  ipAddress: string
  details: string
}

// Mock access logs data
const mockAccessLogs: AccessLog[] = [
  {
    id: "1",
    timestamp: "2024-10-18 14:32:15",
    user: "Officer Smith",
    action: "Viewed",
    resource: "CASE-2024-001",
    resourceType: "case",
    status: "success",
    ipAddress: "192.168.1.100",
    details: "Accessed case details and evidence inventory",
  },
  {
    id: "2",
    timestamp: "2024-10-18 14:28:42",
    user: "Evidence Custodian",
    action: "Downloaded",
    resource: "ITEM-001",
    resourceType: "evidence",
    status: "success",
    ipAddress: "192.168.1.105",
    details: "Downloaded evidence documentation",
  },
  {
    id: "3",
    timestamp: "2024-10-18 14:15:30",
    user: "Lab Technician",
    action: "Modified",
    resource: "CASE-2024-002",
    resourceType: "case",
    status: "success",
    ipAddress: "192.168.1.110",
    details: "Updated analysis results",
  },
  {
    id: "4",
    timestamp: "2024-10-18 13:45:22",
    user: "Unknown User",
    action: "Attempted Access",
    resource: "CASE-2024-003",
    resourceType: "case",
    status: "unauthorized",
    ipAddress: "203.0.113.45",
    details: "Unauthorized access attempt blocked",
  },
  {
    id: "5",
    timestamp: "2024-10-18 13:32:10",
    user: "Officer Johnson",
    action: "Generated",
    resource: "Report-001",
    resourceType: "report",
    status: "success",
    ipAddress: "192.168.1.102",
    details: "Generated court-ready case report",
  },
  {
    id: "6",
    timestamp: "2024-10-18 13:15:45",
    user: "Admin",
    action: "Modified",
    resource: "User Settings",
    resourceType: "settings",
    status: "success",
    ipAddress: "192.168.1.50",
    details: "Updated system permissions",
  },
]

const statusColors = {
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  failed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  unauthorized: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
}

const resourceIcons = {
  case: FileText,
  evidence: Lock,
  report: FileText,
  settings: FileText,
}

export function AccessLogsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "success" | "failed" | "unauthorized">("all")

  const filteredLogs = mockAccessLogs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = filterStatus === "all" || log.status === filterStatus

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by user, resource, or action..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-input border-border"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
          className="px-3 py-2 bg-input border border-border rounded-md text-foreground text-sm"
        >
          <option value="all">All Status</option>
          <option value="success">Success</option>
          <option value="failed">Failed</option>
          <option value="unauthorized">Unauthorized</option>
        </select>
      </div>

      {/* Export Button */}
      <div className="flex justify-end">
        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="w-4 h-4" />
          Export Logs
        </Button>
      </div>

      {/* Access Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Access Log History</CardTitle>
          <CardDescription>Complete audit trail of system access and modifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => {
                const ResourceIcon = resourceIcons[log.resourceType]
                const StatusIcon = log.status === "success" ? CheckCircle : AlertCircle

                return (
                  <div key={log.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="mt-1">
                          <StatusIcon
                            className={`w-5 h-5 ${
                              log.status === "success"
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-foreground">{log.action}</p>
                            <ResourceIcon className="w-4 h-4 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">{log.resource}</p>
                            <Badge className={statusColors[log.status]}>{log.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{log.details}</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{log.user}</span>
                      </div>
                      <div>
                        <span>{log.timestamp}</span>
                      </div>
                      <div>
                        <span className="font-mono">{log.ipAddress}</span>
                      </div>
                      <div className="text-right">
                        <span className="capitalize">{log.resourceType}</span>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No access logs found matching your filters.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Access Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{mockAccessLogs.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Last 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Successful Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {mockAccessLogs.filter((l) => l.status === "success").length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Authorized access</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Security Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {mockAccessLogs.filter((l) => l.status !== "success").length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Unauthorized attempts</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
