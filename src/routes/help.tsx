import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [{ title: "Help centre — Connectly" }],
  }),
  component: HelpPage,
});

const topics = [
  {
    question: "How do I post a job?",
    answer:
      "Sign in, open Post a New Job, and describe the work, the area, and when you need it. Workers in Belhar will see your post and can apply.",
  },
  {
    question: "How do I choose a worker?",
    answer:
      "Open your job and look at the applicants. Check their skills, rating, and past jobs, then message them to confirm the details before you hire.",
  },
  {
    question: "How do I find work?",
    answer:
      "Create a worker account, add your skills, and browse Find Jobs. You can apply to any open job near you.",
  },
  {
    question: "How do payments and reviews work?",
    answer:
      "Agree on the price with the worker before the job starts. After the job, both of you can leave a rating to help the community.",
  },
];

function HelpPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Help centre</h1>
        <p className="mt-2 text-muted-foreground">
          Answers to common questions about using Connectly in Belhar.
        </p>
      </div>

      <div className="space-y-4">
        {topics.map((t) => (
          <div key={t.question} className="rounded-xl border bg-card p-4">
            <h2 className="font-semibold">{t.question}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t.answer}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Still stuck? Use <Link to="/notifications" className="font-semibold text-primary">Report a problem</Link> to tell us what happened.
      </p>
    </div>
  );
}