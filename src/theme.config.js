import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

import { Pre } from "../components/Pre";

const hackedCss = `
body {
  overscroll-behavior: auto none;
}

.-ml-1 {
  margin-left: -0.25rem;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.items-baseline {
  align-items: baseline;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.font-bold {
  font-weight: 700;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}


.hover\:cursor-pointer:hover {
  cursor: pointer;
}

.ml-1 {
  margin-left: 0.25rem;
}

.font-semibold {
  font-weight: 600;
}
`;

const Head = () => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    "https://my-app.com" +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  return (
    <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || "authapi docs"} />
      <style>{hackedCss}</style>
      <meta
        property="og:description"
        content={frontMatter.description || "Docs for my AUTHAPI project"}
      />
      <meta name="twitter:image" content="https://docs.authapi.com/og.jpg" />
    </>
  );
};

export const Logo = () => {
  return (
    <h1 className="flex flex-row items-baseline text-2xl font-bold">
      <span className="tracking-tight hover:cursor-pointer dark:text-white">
        {`AUTH`}
        <span className="text-red-600">{`API`}</span>
      </span>
    </h1>
  );
};

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const config = {
  chat: {},
  darkMode: true,

  feedback: {
    content: () => null,
  },
  footer: { component: () => null },
  components: {
    pre: Pre,
  },
  head: Head,
  logo: Logo,
  navigation: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  primaryHue: 150,
  project: {
    link: "https://github.com/axolem/authapi-docs",
  },
  docsRepositoryBase: "https://github.com/Axolem/authapi-docs/tree/main/",
  useNextSeoProps() {
    return {
      additionalLinkTags: [
        {
          href: "/apple-icon-180x180.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        {
          href: "/android-icon-192x192.png",
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
        },
        {
          href: "/favicon-32x32.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/favicon-16x16.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        { content: "Nextra", name: "apple-mobile-web-app-title" },
      ],
      description: "Docs for my AUTHAPI project",
      openGraph: {
        images: [{ url: "https://authapi-docs.vercel.app/AUTHAPI.png" }],
      },
      titleTemplate: "%s – authapi docs",
      twitter: {
        cardType: "summary_large_image",
        site: "https://authapi-docs.vercel.app",
      },
    };
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
};

export default config;
