import { GridSeperator } from "../ui/grid-utils";
import { TypeHead } from "../ui/typehead";

export default function Project() {
  return (
    <div id="projects" className="py-16">
      <TypeHead index="002" content="PROJECTS" mainClassName="mx-spacer" />
      <GridSeperator />
    </div>
  );
}
