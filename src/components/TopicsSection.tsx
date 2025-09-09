const TopicsSection = () => {
  const topics: { title: string; description?: string }[] = [
    {
      title: "AI-based Research Ideation",
      description:
        "We develop AI systems that generate novel, high-quality research ideas that extend LLM out-of-the-box capabilities. Our methods combine cutting-edge methods with our own research and fine-tuned domain-specific LLMs to identifying promising research gaps, propose feasible approaches, and assess potential impact. By combining creativity, reasoning, and domain expertise, we accelerate the early stages of the scientific discovery pipeline.",
    },
    {
      title: "Making AI-generated Scientific Ideas Human Intelligible",
      description:
        "Advanced AGI and ASI models might produce hypotheses and methods that are difficult for humans to interpret directly. We create explanation frameworks, interactive reasoning tools, and collaborative AI–human workflows that ensure groundbreaking discoveries remain transparent, verifiable, and actionable for the scientific community.",
    },
    { title: "Mechanistic Interpretability for Scientific Discovery Systems", 
      description: "We investigate the inner workings of AI models used in scientific discovery to understand how they produce their results. Our research utilizes mechanistic interpretability methods to uncover the representations, computations, and causal pathways within these systems. By making AI reasoning transparent, we enhance trust, safety, and the potential for human–AI collaboration."  
    },
    { title: "AI Safety of AI-driven Research",
        description: "As AI takes on a greater role in shaping scientific progress, we must ensure it operates safely and responsibly. We study potential risks—such as misuse, unintended consequences, and over-reliance—and design safeguards to prevent harm. Our goal is to align AI-driven research with human values, long-term societal benefit, and global safety standards."
     },
  ];

  return (
    <section className="py-24 bg-gray-50" id="topics">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Topics we work on</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At EurekaLabs, we focus on building AI systems that accelerate scientific discovery while ensuring their outputs are safe, transparent, and beneficial to society.
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


