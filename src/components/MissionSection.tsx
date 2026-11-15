const MissionSection = () => {
  return (
    <section className="py-24 bg-white" id="our-mission">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Scientific progress is limited less by a shortage of ideas than by the cost of
            testing them. Every round of design, synthesis and measurement is slow and
            expensive, and most of what a project learns is lost when the project ends.
            We are building a research organization that treats the experiment as the scarce
            resource: AI Scientists that decide which candidates deserve a laboratory slot,
            are judged by what the instruments return, and carry what each result teaches
            into the next campaign.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
