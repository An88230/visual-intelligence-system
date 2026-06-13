# Security Notes

## Browser-Only API Keys

RAIZ Creative OS starts as a browser-only tool.

The user enters their own API keys.

The keys are stored locally in the user's browser if the user chooses to save them.

Recommended wording:

```text
Your key is stored locally in this browser only.
```

Avoid absolute claims such as:

```text
Stored securely.
```

Local browser storage is useful, but it is not the same as encrypted vault storage.

---

## Current API Direction

```text
Gemini API Key
GPT / OpenAI API Key
```

Each key belongs to the user.

No key is provided by this repository.

No shared project key should be placed inside the HTML file.

---

## Do Not Commit Secrets

Never commit:

```text
API keys
access tokens
passwords
private endpoints
personal credentials
```

Use empty input fields in the HTML.

Let the user paste their own keys locally.

---

## Browser-Only Boundary

The first version may call external AI APIs directly from the browser.

This means the API key is visible to the user's own browser session.

This is acceptable for a local personal tool when the user understands the boundary.

It is not ideal for a public SaaS product.

---

## Future Local Server Boundary

When RAIZ Creative OS moves to a local server, keys should move out of the browser and into a local `.env` file.

Future model:

```text
Browser UI
↓
Local server
↓
.env keys
↓
Gemini / GPT APIs
```

This is stronger because the browser becomes the interface, not the key holder.

---

## Final Rule

Browser version is for personal/local use.

Production version should use a private local server bridge.
