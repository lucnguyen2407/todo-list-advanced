export interface User {
    id: string
    name: string
    email: string
    avatar?: string
}

export interface Project {
    id: string
    name: string
    description?: string
    color: string
    taskCount: number
    completedTasks: number
    members?: User[]
    createdAt: Date
    updatedAt: Date
}