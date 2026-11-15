const TopicsSection = () => {
  const topics: { title: string; description?: string }[] = [
    {
      title: "Design under an experimental budget",
      description:
        "The scarce resource in discovery is not compute, it is the experiment. Our systems are built to decide which candidates deserve a laboratory slot, and to spread that budget across genuinely different hypotheses rather than across near-duplicates of one. We measure ourselves on how few experiments a campaign needs, against published campaigns that pursued the same targets.",
    },
    {
      title: "Specialized evaluation, not one general model",
      description:
        "General-purpose models are powerful starting points, but their reliability varies across molecular configurations and interaction types. We train focus modules that learn when to trust, discount or combine the underlying predictions for a particular chemical context, drawing on molecular embeddings, structural features and dynamics.",
    },
    {
      title: "Learning across campaigns",
      description:
        "A system that starts from scratch on every target throws away what it paid for. Three things persist: calibration of how often predictions of a given kind have survived contact with an assay, a memory of candidates that failed and why, and design rules that are versioned and revised as evidence arrives rather than reconstructed by hand.",
    },
    {
      title: "Safety and provenance by construction",
      description:
        "Sequence screening and dual-use review are explicit gates with recorded outcomes, not a final manual check or an agent's judgment. The same provenance record that lets the system learn makes every design traceable and every decision auditable, which is what any partner taking a candidate into the laboratory needs.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="topics">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">What we work on</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four problems stand between a promising molecule and a measured one. The engine is
            our answer to all four at once.
          </p>
        </div>


        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border">
              <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
              {topic.description && (
                <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
