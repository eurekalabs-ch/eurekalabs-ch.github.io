---
title: "Choosing a Problem That Can Tell Us We Are Wrong"
date: "2026-11-01"
author: "EurekaLabs"
excerpt: "Our first multi-agent systems wrote grant proposals and literature reviews. They worked, and we could not prove it: a document has no fast ground truth. A designed molecule does, which is why the AI Scientist Team now designs molecules."
---

**If you read one thing:** We kept the architecture and changed the object. Our [AI Scientist Team](/posts/multi-agent-ai-scientist-protein-design) was built to do scientific work that a machine can be graded on, and the grade has to come from outside the machine. A document cannot supply one in any useful time. A designed molecule can, in weeks, from an instrument that has no opinion about us.

## What the first systems taught us

In 2025 we built two multi-agent systems for the research workflow: an assistant that takes a research idea to a submission-ready NIH proposal, and one that turns a project description into a literature review with the citations retrieved rather than recalled. Both are real systems, both ran, and the engineering in them is the engineering we still use: agents with separate responsibilities, retrieval instead of recollection, an independent critic that scores the work against a rubric it did not write, and a record of why every decision was made.

What we could not do was tell how good they were.

A grant proposal is graded by a panel, months later, on a scale that mixes the quality of the writing with the reputation of the applicant, the fit to that year's priorities and the size of the pool. A literature review is graded by a reviewer who will not say which of your sentences changed their mind. In both cases the signal arrives late, arrives once, and arrives mixed with everything else about the project. You can run such a system for a year and learn almost nothing about whether its tenth campaign was better than its first.

For a product, that is survivable. For a research organization intended to improve with use, it is fatal. A system that cannot be told it was wrong cannot get better in any direction you can defend.

## What a molecule gives you that a document does not

A designed protein is a claim with a date on it. You write a sequence, you have it made, and within weeks an assay returns a number: it binds or it does not, it kills the organism or it does not, it is selective or it is toxic. Nobody on our side chooses that number. It is not an opinion about our method and it does not care how sophisticated the system that produced the candidate was.

That property is what makes design the right first problem for an AI Scientist Team, and it has three consequences we build on directly.

**It makes every campaign a measurement of the system, not only of the molecule.** We can ask how many experiments the system needed to reach a given quality, and compare that to how many a published human campaign needed for the same target. That is a number about the engine.

**It makes failure informative.** A rejected proposal teaches you very little. A candidate that was predicted to bind and did not is a located error: a generator, a binding hypothesis and a scoring context that can be stored, recognized when it recurs, and stopped from being proposed again.

**It makes the work an asset rather than a saving.** A literature review that takes two days instead of two weeks is a time saving, and a time saving is worth what the time costs. A molecule that works is property.

## What stayed the same

The pivot is narrower than it sounds. The research organization is the same idea it was: a set of specialized roles, a principal investigator allocating a finite experimental budget, generators proposing in parallel, a critic whose job is to attack the team's own conclusions, a gate that candidates pass before anything leaves the system. What changed is the oracle. In the proposal assistant, the critic scored against the NIH's published criteria. In a design campaign, the final critic is an instrument in a laboratory, and the intermediate critics are structural and energetic calculations whose agreement with that instrument we can measure and keep measuring.

Everything else follows from that substitution. Because the grader is external, we can run the same engine against problems that have nothing to do with each other and compare the results: antibiotic peptides, inhibitors for neurodegenerative disease, binders judged in a blind externally scored competition, enzymes that are not therapeutics at all. Each campaign is chosen to prove something the others cannot, and each is graded by somebody who is not us.

## The engine, not the campaign

The useful unit here is not any single result. It is the loop: propose, spend an experiment, learn, propose again, and carry what was learned into the next target. Calibration of how far each model can be trusted in each chemical context, a memory of what has already failed, design rules that are versioned rather than remembered. A campaign that benefits from the nine before it is a different asset from nine campaigns run in parallel by the same tool.

That is the thing we are building, and it is the reason the work moved from text to molecules. We needed a problem that answers back.

### Work with us on the next campaign

We run campaigns with partners who have a target and an assay. If you have one, we would like to hear what it is.
