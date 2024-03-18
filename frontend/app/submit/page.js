import Form from "@/components/form";
import { Separator } from "@/components/ui/separator";
export const metadata = {
  title: "Submit Code",
  description: "Code Submit Form",
};

export default function HomePage() {
  return (
    <>
      <div className="container h-full flex flex-col">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Submit Code</h2>
        </div>
        <Separator />
        <Form></Form>
      </div>
    </>
  );
}
