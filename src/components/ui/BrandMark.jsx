import { Sparkles } from "lucide-react";

export default function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="bottle-cap" />
      <span className="bottle-body" />
      <Sparkles size={11} />
    </span>
  );
}
