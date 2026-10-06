import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-md px-6 py-16">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Nigeria Tour
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Welcome back
        </h1>

        <p className="mt-3 text-gray-600">
          Sign in to continue your Nigeria Tour experience.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-800 px-5 py-3 font-semibold text-white"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-green-700"
          >
            Create an account
          </Link>
        </p>

        <Link
          href="/"
          className="mt-6 block text-center text-sm font-semibold text-gray-600"
        >
          ← Back to Nigeria Tour
        </Link>
      </div>
    </section>
  );
}
