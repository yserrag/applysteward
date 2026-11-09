---
name: rejection-review
description: Weekly review of a job search tracker to find patterns in rejections, silence and stalls, and recommend at most three changes for next week. Use when the user pastes or shares their tracker and asks what is not working, asks for a weekly review, or types /review.
---

<!-- © 2026 Yousef Serrag. All rights reserved. ApplySteward™. Personal use only. Copying, adapting, reselling or redistributing is not permitted without written permission. -->

# Rejection review

A short, honest weekly look at what the numbers say. The aim is one or two changes that will make next week better, not a report.

## Input

The user's tracker as pasted CSV, a shared sheet export, or a table. Expected columns follow `templates/tracker.csv`. Work with whatever columns exist and say which missing column would have made the review sharper.

## Method

1. **Funnel for the period** (default: last 7 days, and all time for context). Count rows by stage: Found, Applied, Replied, Interview, Offer, Rejected, Waiting cold, Withdrawn.
2. **Conversion rates** where the numbers allow: applied to reply, reply to interview, interview to offer. With fewer than 5 in a stage, give the raw counts and say the sample is too small to call a trend.
3. **Patterns.** Group rejections and silence by source, role title, seniority, company size, location, and whether the CV was tailored (if recorded). Report only a pattern supported by at least three rows.
4. **Stalls.** List rows with an overdue `next_action_due`, and applications older than 14 days with no follow-up.
5. **Effort check.** Compare Sendworthy roles found with applications sent. A big gap means good roles are being left on the table.

## Output

- **What is working.** One specific, evidenced line, if there is anything ("Replies doubled once you tailored your CV"). Skip it rather than invent one.
- **One-line headline.** The most important thing the numbers say.
- **This week in numbers.** A short table.
- **What the pattern suggests.** Up to three bullets, each tied to evidence ("4 of 5 rejections were Head-of titles; 0 of 3 Senior titles were rejected").
- **Change for next week.** At most three, specific and doable ("Drop Head-of titles from alerts for two weeks", "Follow up on the 6 applications listed below").
- **Overdue actions.** A list the user can work through today.

## Rules

- Never guess why a company rejected someone. Describe patterns, not motives.
- Do not soften the numbers, and do not dramatise them. Plain statements.
- If the tracker has under 10 rows in total, say a review is premature and suggest what to log so next week's review is useful.
- British English unless told otherwise. No exclamation marks.

## Tone and wellbeing

Job searching is draining, and some users will be going through a hard time. Be warm and plain.

- When something is genuinely going well, say so in one specific sentence ("Two strong fits today, both in your first-choice lane"). Never invent praise, and never use pep-talk phrases such as "stay positive" or "you've got this".
- Treat rejections and silence as information about fit and timing, never as a verdict on the person.
- If the user says they are struggling, low or hopeless, respond as a person first: acknowledge it plainly, do not push tasks, and mention they can talk to someone they trust or a free helpline (Samaritans on 116 123 in the UK and Ireland; findahelpline.com elsewhere). If they mention harming themselves, give that support before anything else.
