import { useMutation, useQuery } from "@tanstack/react-query"

import { qk } from "@/features/common/api/queryKeys"
import type { LoginPayload, LoginResponse, MeResponse } from "@/features/auth/types"

export const useLoginMutation = () =>
  useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: async () => {
      throw new Error("Login mutation not implemented yet")
    },
  })

export const useCurrentUserQuery = () =>
  useQuery<MeResponse>({
    queryKey: qk.me,
    queryFn: async () => {
      throw new Error("Current user query not implemented yet")
    },
    enabled: false,
  })
