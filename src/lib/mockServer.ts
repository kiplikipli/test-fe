import type {
  AxiosAdapter,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"

export type MockAdapter = (
  config: InternalAxiosRequestConfig
) => Promise<AxiosResponse>

const notFound = <T>(config: InternalAxiosRequestConfig): AxiosResponse<T> => ({
  data: { message: "Not Found" } as T,
  status: 404,
  statusText: "Not Found",
  headers: {},
  config,
})

const mockAdapter: MockAdapter = async (config) => {
  switch (`${config.method ?? "get"} ${config.url ?? ""}`.trim()) {
    default:
      return notFound(config)
  }
}

export const installMockAdapter = (api: AxiosInstance): void => {
  const adapter: AxiosAdapter = async (config) =>
    mockAdapter(config as InternalAxiosRequestConfig)
  api.defaults.adapter = adapter
}

export const seed = (): void => {
  // Seed demo data here in future prompts
}

export const resetDemo = (): void => {
  // Reset mock data here in future prompts
}
