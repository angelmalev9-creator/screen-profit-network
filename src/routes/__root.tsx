import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Страницата не е намерена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Страницата, която търсите, не съществува или е преместена.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
            Към начало
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Възникна грешка</h1>
        <p className="mt-2 text-sm text-muted-foreground">Опитайте отново или се върнете към началото.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Опитай отново</button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold">Към начало</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Медия Груп — Дигитални рекламни екрани и медийна мрежа" },
      { name: "description", content: "Изграждаме и управляваме мрежа от дигитални рекламни екрани в магазини, заведения, офиси и локации с висок трафик." },
      { property: "og:title", content: "Медия Груп — Дигитални рекламни екрани и медийна мрежа" },
      { property: "og:description", content: "Изграждаме и управляваме мрежа от дигитални рекламни екрани в магазини, заведения, офиси и локации с висок трафик." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Медия Груп — Дигитални рекламни екрани и медийна мрежа" },
      { name: "twitter:description", content: "Изграждаме и управляваме мрежа от дигитални рекламни екрани в магазини, заведения, офиси и локации с висок трафик." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/FPQqTaXDpFZOoQ0RnFdu2FVYlFl2/social-images/social-1778956869122-Screenshot_7.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/FPQqTaXDpFZOoQ0RnFdu2FVYlFl2/social-images/social-1778956869122-Screenshot_7.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
