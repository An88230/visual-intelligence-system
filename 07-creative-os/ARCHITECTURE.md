# RAIZ Creative OS Architecture

## Neural Expressive UI

This document defines the architectural direction of RAIZ Creative OS.

---

## Stage 01 — Browser-Only Agent

```text
User Browser
↓
User API Keys
↓
Gemini API + GPT / OpenAI API
↓
Text / Voice / Visual Response
```

In this stage:

- no backend
- no cloud server owned by the project
- no shared API key
- no database
- no external build system

The user owns the key.

The browser owns the session.

---

## Stage 02 — Local Memory

```text
Browser UI
↓
LocalStorage / IndexedDB
↓
Project memory
↓
Reusable creative context
```

Potential local memory modules:

- active project brief
- brand tone
- visual codes used
- preferred prompt style
- recent outputs
- voice settings
- local production paths

---

## Stage 03 — Local Server Bridge

```text
Browser UI
↓
Local server on user's machine
↓
Local file system
↓
Automation scripts
```

The local server is not a public backend.

It is a private bridge between the browser and the user's production machine.

Possible technologies later:

```text
Node.js
Python FastAPI
Local WebSocket server
Apple Shortcuts bridge
n8n local instance
```

---

## Stage 04 — Automated Production Control

```text
Creative Command
↓
Local Server
↓
Editing / Motion / File Automation
↓
Final Assets
```

Target systems:

- Adobe Premiere Pro
- After Effects
- DaVinci Resolve
- Photoshop actions
- local folders
- FFmpeg
- metadata templates
- project packaging

---

## API Layer

RAIZ Creative OS should support two intelligence engines:

```text
Gemini API
GPT / OpenAI API
```

### Gemini Direction

Best for:

- multimodal reasoning
- voice/audio workflows
- fast creative interpretation
- browser-first experiments

### GPT / OpenAI Direction

Best for:

- structured reasoning
- agent planning
- text systems
- long-form creative architecture
- tool orchestration later

---

## Safety Boundary

Browser-only version:

```text
Allowed:
- user-owned keys
- local browser storage
- direct API calls
- creative generation

Not allowed:
- shared keys
- hidden backend storage
- silent uploading of files
- automatic control of local machine
```

Local server version:

```text
Allowed only after explicit user setup.
```

---

## Core Loop

```text
Listen
↓
Understand
↓
Map to visual code
↓
Select engine: Gemini or GPT
↓
Generate direction
↓
Prepare production command
↓
Execute locally later
```

---

## Final Architecture Sentence

RAIZ Creative OS is a browser cockpit for creative intelligence, designed to evolve into a local-machine production command system.
