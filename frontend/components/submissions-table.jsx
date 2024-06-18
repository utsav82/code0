"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from './ui/input';
import { MagnifyingGlass } from "@radix-ui/react-icons"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SubmissionDetails from "./submission-details";
import { Button } from './ui/button';
import { data } from './data';
import ClipLoader from "react-spinners/ClipLoader";
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

const Submissions = () => {
    const [snippets, setSnippets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchSnippets = async (page = 1, resetSnippets = false, loading = true) => {
        try {
            setIsLoading(loading);
            const response = await axios.get(`/api/code-snippets?page=${page}&username=${username}`);
            const { snippets: newSnippets, totalPages, currentPage: newCurrentPage } = response.data;
            console.log(response);

            if (resetSnippets) {
                setSnippets(newSnippets);
            } else {
                setSnippets([...snippets, ...newSnippets]);
            }

            setTotalPages(totalPages);
            setCurrentPage(newCurrentPage + 1);
        } catch (error) {
            console.error('Error fetching code snippets:', error);
        }
        finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSnippets(1, true);
    }


    useEffect(() => {
        fetchSnippets();
    }, []);



    const fetchNextPage = () => {
        if (currentPage <= totalPages) {
            fetchSnippets(currentPage, false, false);
        }
    };

    return (
        <div className='flex  flex-col g1'>
            <form onSubmit={handleSubmit} className='flex justify-center items-center gap-2'>
                <Input placeholder="Enter a username to search" className="my-2 sm:w-1/4 ml-auto" onChange={(e) => setUsername(e.target.value)}></Input>
                <button type="button" onClick={handleSubmit}> <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></button>
            </form>
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <ClipLoader color="#000" loading={true} size={35} />
                </div>
            ) : (
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
                                                <SubmissionDetails id={item.id}></SubmissionDetails>
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
            )}
        </div>
    );
};

export default Submissions;
