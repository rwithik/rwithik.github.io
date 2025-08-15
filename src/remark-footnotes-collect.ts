import { visit } from "unist-util-visit";

export default function remarkFootnotesCollect() {
  return (tree) => {
    const notes = [];
    const noteMap = new Map();

    // Collect definitions
    visit(tree, "footnoteDefinition", (node) => {
      noteMap.set(node.identifier, node);
    });

    // Replace markers with numbered refs
    let counter = 1;
    visit(tree, "footnoteReference", (node, index, parent) => {
      const number = counter++;
      notes.push({ number, node: noteMap.get(node.identifier) });

      parent.children[index] = {
        type: "html",
        value: `<sup id="fnref-${number}" class="cursor-pointer"><a class="!no-underline !text-(--foreground)" href="#fn-${number}">[${number}]</a></sup>`,
      };
    });

    // Append footnotes list
    if (notes.length > 0) {
      tree.children.push({
        type: "html",
        value: `<section id="footnotes" class="py-4 border-t border-(--foreground-muted)">
          <ol>
            ${notes
              .map(
                ({ number, node }) =>
                  `<li id="fn-${number}" class="marker:text-(--foreground-muted)">
                    ${node.children.map(renderNode).join("")}
                    <a href="#fnref-${number}" class="ml-2 text-sm !no-underline !text-(--foreground-muted)">↩︎</a>
                  </li>`
              )
              .join("")}
          </ol>
        </section>`,
      });
    }
  };
}

function renderNode(node) {
  if (node.type === "text") return node.value;
  if (node.type === "paragraph") return node.children.map(renderNode).join("");
  return "";
}
