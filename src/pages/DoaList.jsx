import { DoaTab } from "../components/DoaTab";

export default function DoaList() {
  return (
    <div className="doa-list mb-10 mt-20 w-full">
      <div className="container mx-auto flex max-w-screen-xxl flex-col items-center justify-center !px-6 lg:!px-16 lg:pt-8">
        <hr className="mb-12 w-full border-2 border-color-abyss" />
        <DoaTab />
        <hr className="mb-12 mt-12 w-full border-2 border-color-abyss" />
      </div>
    </div>
  );
}
