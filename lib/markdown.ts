// Minimal markdown → HTML for the subset used by app/contents/partners/*.md:
// ATX headings, paragraphs, unordered lists, bold, italic, links.
// ponytail: no full markdown parser — swap in react-markdown if the content ever
// needs tables, code blocks or nested lists.

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const inline = (s: string) =>
  escapeHtml(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
    );

export function renderMarkdown(md: string): string {
  const out: string[] = [];
  let para: string[] = [];
  let items: string[] = [];

  const flush = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(" "))}</p>`);
      para = [];
    }
    if (items.length) {
      out.push(`<ul>${items.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`);
      items = [];
    }
  };

  for (const raw of md.split("\n")) {
    const line = raw.trim();

    if (!line) {
      flush();
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flush();
      const level = heading[1].length;
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }

    const item = line.match(/^[-*]\s+(.*)$/);
    if (item) {
      if (para.length) flush();
      items.push(item[1]);
      continue;
    }

    if (items.length) flush();
    para.push(line);
  }

  flush();
  return out.join("\n");
}
