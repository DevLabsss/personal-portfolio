export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-8">
        <p className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-zinc-900">
            Achmad Syahril Fauzi
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
