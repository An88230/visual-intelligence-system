# Tool Spec

## Visual Code Generator

A local single-file HTML tool for translating one visual code into a structured creative output.

---

## Inputs

```text
Output Type: Campaign / Prompt / VO
Code Number
Code Name
Subject
Product / Object
Audience
Emotion / Human State
Platform
Aspect Ratio
Avoid
```

---

## Outputs

The tool produces one of three structured outputs:

```text
Campaign Structure
AI Image Prompt
Voice Over Draft
```

---

## Campaign Output Structure

```text
Campaign Name
One-Line Idea
Human State
Inner Tension
Product Role
Visual Direction
Copy Direction
Shot Logic
6 Law Filter
Final Impact
```

---

## Prompt Output Structure

```text
Prompt
Negative Prompt
Aspect Ratio
Signature Integration
```

---

## VO Output Structure

```text
Title
Tone
VO Text
Performance Notes
Sound Design
Silence Points
Final Impact
```

---

## Logic

The tool does not generate final truth.

It generates a structured first pass.

The creator must return to the original code before final execution.

---

## Design Principles

```text
No dependency on external scripts.
No account login.
No API key.
No build step.
No server.
```

---

## Future Expansion

```text
Code presets for all 49 codes
Markdown export
Copy buttons per section
Local draft saving
React version
GitHub Pages version
```
