import { Separator } from "@/components/ui/separator";
import Submissions from "@/components/submissions-table";

export const metadata = {
  title: "Submissions",
};

const page = () => {
  return (
    <>
      <div className="container h-full flex flex-col mb-5">
        <div className="flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Submissions</h2>
          <p className="text-sm font-thin">
             Click each entry ID to view its submission 
          </p>
        </div>
        <Separator />
        <Submissions />
      </div>
    </>
  )
}

export default page