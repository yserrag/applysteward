# Use ApplySteward with any AI

ApplySteward works best in Claude, where it can scan your inbox automatically every morning. But you don't need Claude to use it. This guide sets it up in ChatGPT, Gemini or Microsoft Copilot in about five minutes.

You'll need two things:

1. **Your rules file**, `fit-rules.md`, from the setup wizard at [applysteward.com](https://applysteward.com).
2. **The instructions** in [`instructions.md`](instructions.md). Open it and copy everything.

What works everywhere: screening job alerts (`scan`), drafting messages (`draft`) and weekly reviews (`review`). What needs Claude: automatic daily scans of your inbox. Everywhere else, you paste your alerts in yourself, which takes a minute.

Menus and plan limits change often, so if a step looks different, look for the closest equivalent.

## ChatGPT

1. In ChatGPT, create a new **project** and call it "Job search".
2. Open the project's settings and paste the instructions into its **instructions** box.
3. Add `fit-rules.md` to the project's **files**.
4. Start a chat inside the project. Type `scan` and paste three or four job alerts.

## Gemini

1. In Gemini, create a new **Gem** and call it "Job search".
2. Paste the instructions into the Gem's **instructions** box.
3. Add `fit-rules.md` as a **knowledge** file and save the Gem.
4. Open the Gem, type `scan` and paste a few job alerts.

## Microsoft Copilot

1. Start a new chat in Copilot.
2. Paste the instructions, then attach or paste the contents of `fit-rules.md`, and send.
3. Type `scan` and paste a few job alerts.

If your version of Copilot offers notebooks or saved instructions, put the instructions and your rules there so you don't need to paste them each time.

## Any other assistant

Paste the instructions and your rules at the start of a conversation, then use `scan`, `draft` or `review` as above.

## Tips

- **Keep one conversation going** for your search, or use a project or Gem, so your AI keeps your rules in mind.
- **Update your rules** whenever your thinking changes. Re-run the wizard, or edit the file and upload it again.
- **Check the verdicts.** Your AI can misread an advert. You always make the final call, and you always press send.

---
© 2026 Yousef Serrag. All rights reserved. ApplySteward™. Personal use only. Copying, adapting, reselling or redistributing is not permitted without written permission.
