"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SubmissionDetails from "./submission-details";
import { Button } from './ui/button';

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

const Submissions = () => {
    const [snippets, setSnippets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchSnippets = async () => {
        try {
            const response = await axios.get(`/api/code-snippets?page=${currentPage}`);
            const { snippets: newSnippets, totalPages, currentPage: newCurrentPage } = response.data;
            setSnippets([...snippets, ...newSnippets]);
            setTotalPages(totalPages);
            setCurrentPage(newCurrentPage + 1);
        } catch (error) {
            console.error('Error fetching code snippets:', error);
        }
    };

    useEffect(() => {
        fetchSnippets();
    }, []);

    const fetchNextPage = () => {
        if (currentPage <= totalPages) {
            fetchSnippets();
        }
    };

    return (
        <>
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
                    {snippets.map((item) => (
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
            {currentPage <= totalPages && (
                <div className="text-center my-4">
                    <Button variant="outline" onClick={fetchNextPage}>
                        More {" "}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M7.5 2a.5.5 0 0 1 .5.5v8.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7 11.293V2.5a.5.5 0 0 1 .5-.5" clipRule="evenodd"></path></svg>
                    </Button>
                </div>
            )}
        </>
    );
};

export default Submissions;
