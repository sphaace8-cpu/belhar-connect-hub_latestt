import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/community-guidelines")({
  head: () => ({
    meta: [{ title: "Community guidelines — Connectly" }],
  }),
  component: CommunityGuidelinesPage,
});

const guidelines = [
  "Be respectful. Treat every member and worker the way you would want to be treated.",
  "Describe jobs honestly, including the work, the location, the time, and the price.",
  "Agree on the price and details before work starts, and keep to what you agreed.",
  "Only post and apply for work you can actually do or pay for.",
  "Never share personal banking details or ask for payment outside agreed terms.",
  "Report anything unsafe, abusive, or suspicious so the community stays trusted.",
];

function CommunityGuidelinesPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Community guidelines</h1>
        <p className="mt-2 text-muted-foreground">
          Connectly is built on trust between neighbours in Belhar. Please follow these guidelines.
        </p>
      </div>

      <ol className="list-decimal space-y-3 pl-5">
        {guidelines.map((g) => (
          <li key={g} className="text-sm">
            {g}
          </li>
        ))}
      </ol>
    </div>
  );
}