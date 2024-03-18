import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import SubmissionDetails from "./submission-details";

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

const Submissions = ({ data }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Language</TableHead>
                    <TableHead>Timestamp</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            <Dialog>
                                <DialogTrigger className="text-blue-300">{item.id}</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Submission {item.id}</DialogTitle>
                                    </DialogHeader>
                                    <SubmissionDetails {...item}></SubmissionDetails>
                                </DialogContent>
                            </Dialog>
                        </TableCell>
                        <TableCell>{item.username}</TableCell>
                        <TableCell>{item.language}</TableCell>
                        <TableCell>{formatTimestamp(item.timestamp)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Submissions;
