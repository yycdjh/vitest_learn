import { config } from "./config";

export function tellAge() {
  if (config.allowTellAge) {
    return 18;
  }

  return "unknown";
}
