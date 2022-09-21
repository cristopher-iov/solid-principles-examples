import Button from "@/components/button/Button";
import ButtonRed from "@/components/button/red/ButtonRed";

export default function LiskovSubstitutionPrinciple() {
  return (
    <div>
      <h2>LSP</h2>

      <Button size="xl" color="blue">
        My button is works
      </Button>
      <ButtonRed size="sm">My button is works</ButtonRed>
    </div>
  );
}
