import React from "react";
import { useAccessStore } from "./access";

interface UpdateAccessStoreProps {
  api_key: string;
  api_url: any; // You can also define the type for api_url if you know it
}

export function UpdateAccessStore({ api_key, api_url }: UpdateAccessStoreProps) {
  const accessStore = useAccessStore();
  accessStore.updateToken(api_key);
  accessStore.updateOpenAiUrl(api_url);
  return null;
}