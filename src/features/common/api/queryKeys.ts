export const qk = {
  me: ["auth", "me"] as const,
  profile: ["profile"] as const,
  attendanceSummary: (from: string, to: string) =>
    ["attendance", "summary", from, to] as const,
  today: ["attendance", "today"] as const,
} as const
