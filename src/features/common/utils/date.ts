export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date)

export const toISODate = (date: Date): string => date.toISOString().split("T")[0]
