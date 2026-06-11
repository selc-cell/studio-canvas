import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mira Hale" },
      { name: "description", content: "Get in touch about projects, collaborations, or to say hello." },
      { property: "og:title", content: "Contact — Mira Hale" },
      { property: "og:description", content: "Get in touch about projects, collaborations, or to say hello." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="border-b border-border bg-gradient-light">
        <div className="container-wide py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">Contact</div>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            Have a project in mind?
            <br />
            <span className="text-foreground-muted">Let's talk.</span>
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-8"
            >
              <Field label="Name" htmlFor="name">
                <input id="name" name="name" required className="contact-input" autoComplete="name" />
              </Field>
              <Field label="Email" htmlFor="email">
                <input id="email" name="email" type="email" required className="contact-input" autoComplete="email" />
              </Field>
              <Field label="Subject" htmlFor="subject" optional>
                <input id="subject" name="subject" className="contact-input" />
              </Field>
              <Field label="Message" htmlFor="message">
                <textarea id="message" name="message" required rows={6} className="contact-input resize-none" />
              </Field>

              <button
                type="submit"
                className="inline-flex h-12 items-center bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-foreground/85"
              >
                {sent ? "Sent — thanks!" : "Send Message"}
              </button>

              {sent ? (
                <p className="text-sm text-foreground-muted">
                  Your message has been recorded locally for this demo. I'll add real delivery when the backend is connected.
                </p>
              ) : null}
            </form>
          </div>

          {/* Direct info */}
          <aside className="lg:col-span-5">
            <div className="border border-border bg-surface p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">Email</div>
              <a
                href="mailto:hello@mirahale.studio"
                className="mt-3 block break-all text-2xl font-semibold tracking-tight hover:underline underline-offset-4"
              >
                hello@mirahale.studio
              </a>

              <div className="mt-10 text-xs uppercase tracking-[0.22em] text-foreground-muted">Elsewhere</div>
              <ul className="mt-3 space-y-2 text-base">
                <li><a className="hover:underline underline-offset-4" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram — @mirahale</a></li>
                <li><a className="hover:underline underline-offset-4" href="https://www.behance.net" target="_blank" rel="noreferrer">Behance — /mirahale</a></li>
                <li><a className="hover:underline underline-offset-4" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn — /in/mirahale</a></li>
              </ul>

              <div className="mt-10 text-xs uppercase tracking-[0.22em] text-foreground-muted">Located</div>
              <div className="mt-3 text-base">Lisbon, Portugal — working worldwide</div>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 12px 0;
          font-size: 16px;
          color: var(--foreground);
          outline: none;
          transition: border-color 150ms ease;
        }
        .contact-input:focus {
          border-bottom-color: var(--ink);
        }
      `}</style>
    </Layout>
  );
}

function Field({ label, htmlFor, optional, children }: { label: string; htmlFor: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="flex items-baseline justify-between text-xs uppercase tracking-[0.18em] text-foreground-muted">
        <span>{label}</span>
        {optional ? <span className="text-foreground-muted/70">Optional</span> : null}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
