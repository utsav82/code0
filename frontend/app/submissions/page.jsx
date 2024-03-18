import { Separator } from "@/components/ui/separator";
import Submissions from "@/components/submissions-table";
import { data } from "./data"

export const metadata = {
  title: "Submissions",
};

const page = () => {
  return (
    <>
      <div className=" container h-full flex flex-col">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Submissions</h2>
        </div>
        <Separator />
        <Submissions data={data} />
      </div>
    </>
  )
}

export default page