import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";
import starlightNextjsTheme from "starlight-theme-next";

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/starlight-theme-next/edit/main/docs/",
      },
      plugins: [
        starlightNextjsTheme(),
        starlightPluginsDocsComponents({
          pluginName: "starlight-theme-next",
        }),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: ["getting-started", "customization"],
        },
        {
          label: "Examples",
          autogenerate: { directory: "examples" },
        },
      ],
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/trueberryless.org",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless-org/starlight-theme-next",
        },
      ],
      title: "Starlight Theme Next.js",
    }),
  ],
});
