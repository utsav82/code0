"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import SubmissionDetails from "./submission-details";
import React, { useState, useEffect } from 'react';

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

const Submissions = () => {

    const [codeSnippets, setCodeSnippets] = useState([]);

    useEffect(() => {
        fetch("/api/code-snippets")
            .then((response) => response.json())
            .then((data) => setCodeSnippets(data))
            .catch((error) => console.error(error));
    }, []);

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
                {codeSnippets.map((item) => (
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
