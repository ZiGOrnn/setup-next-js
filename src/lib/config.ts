import nextConfig from "next/config";
import { Config, PublicRuntimeConfig } from "../@types/config";

const { publicRuntimeConfig } = nextConfig() as Config;

export const config = (): PublicRuntimeConfig => {
  return publicRuntimeConfig;
};
