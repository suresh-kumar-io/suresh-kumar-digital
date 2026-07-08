export function Footer() {
  return (
    <footer className="border-t border-black/15 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-sm text-black sm:flex-row sm:items-center">
        <div>© {new Date().getFullYear()} Suresh Kumar. All rights reserved.</div>
        <div className="text-black/70">
          Senior UI/UX Designer &amp; Network Engineer · Chennai, India
        </div>
        <a href="#hero" className="underline underline-offset-4">
          Back to top
        </a>
      </div>
    </footer>
  );
}
