import Navbar from "@/components/navbar/Navbar";
import NavbarWithButton from "@/components/navbar/with-button/NavbarWithButton";
import NavbarWithLink from "@/components/navbar/with-link/NavbarWithLink";

export default function OpenClosedPrinciple() {
  const onClick = () => console.log("Clicked!");

  return (
    <div>
      <NavbarWithButton title="OCP" text="Log In" onClick={onClick} />
      <NavbarWithLink title="OCP" text="Log In" href="/login" />
      <Navbar title="OCP">
        <div>
          <button onClick={onClick}>
            <span>➡️ </span>Register
          </button>
          <button onClick={onClick}>
            <span>➡️ </span>Log in
          </button>
        </div>
      </Navbar>

      <h2>OCP</h2>
    </div>
  );
}
