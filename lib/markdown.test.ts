// Run: node lib/markdown.test.ts
import assert from "node:assert/strict";
import { renderMarkdown } from "./markdown.ts";

assert.equal(renderMarkdown("## Titolo"), "<h2>Titolo</h2>");

assert.equal(
  renderMarkdown("Riga uno\nRiga due"),
  "<p>Riga uno Riga due</p>",
  "consecutive lines join into one paragraph",
);

assert.equal(
  renderMarkdown("- **Open** — free\n- *Space* — €10"),
  "<ul><li><strong>Open</strong> — free</li><li><em>Space</em> — €10</li></ul>",
);

assert.equal(
  renderMarkdown("Vedi [ArtLab](https://art-lab.space/)."),
  '<p>Vedi <a href="https://art-lab.space/" target="_blank" rel="noopener noreferrer">ArtLab</a>.</p>',
);

assert.equal(
  renderMarkdown('<script>alert("x")</script>'),
  "<p>&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;</p>",
  "raw html is escaped",
);

assert.equal(
  renderMarkdown("## A\nTesto\n\n- x\n\nCoda"),
  "<h2>A</h2>\n<p>Testo</p>\n<ul><li>x</li></ul>\n<p>Coda</p>",
);

console.log("markdown ok");
