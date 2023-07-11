const mapping: Record<string, string> = {
  companies: 'company',
  projects: 'project',
  suggestions: 'suggestion',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
