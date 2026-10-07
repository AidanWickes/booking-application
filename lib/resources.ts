export type Resource = {
  id: string
  name: string
  type: 'room' | 'equipment' | 'sport'
  capacity: number
}

export const resources: Resource[] = [
  { id: 'g12', name: 'Study Room G12', type: 'room', capacity: 6 },
  { id: 'lab2', name: 'Mac Lab 2', type: 'room', capacity: 24 },
  { id: 'cam1', name: 'Camera Kit', type: 'equipment', capacity: 1 },
  { id: 'court', name: 'Sports Hall', type: 'sport', capacity: 30 },
]

export function getResource(id: string) {
  return resources.find((r) => r.id === id)
}
