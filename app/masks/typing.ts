import { ModelConfig } from "../store";
import { type Mask } from "../store/mask";

export type BuiltinMask = Omit<Mask, "id" | "modelConfig" | "api_key" | "api_url"> & {
  builtin: Boolean;
  modelConfig: Partial<ModelConfig>;
};
