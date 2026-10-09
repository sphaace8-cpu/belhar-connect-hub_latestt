import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/support/report")({
  head: () => ({
    meta: [{ title: "Report a problem — Connectly" }],
  }),
  component: ReportProblemPage,
});

function ReportProblemPage() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Report a problem</h1>
        <p className="mt-2 text-muted-foreground">
          Tell us what went wrong. Include the page you were on and what you expected to happen.
        </p>
      </div>

      {sent ? (
        <p className="rounded-xl border bg-card p-4 text-sm">
          Thank you. We have received your report and will look into it.
        </p>
      ) : (
        <div className="space-y-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            placeholder="Describe the problem"
            className="w-full rounded-xl border p-3 text-sm"
          />
          <button
            onClick={() => setSent(true)}
            disabled={message.trim().length === 0}
            className="btn-primary disabled:opacity-50"
          >
            Send report
          </button>
        </div>
      )}
    </div>
  );
}