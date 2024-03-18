"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from '@/lib/utils';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast"
const languages = [
    {
        label: "Java",
        value: "java",
    },
    {
        label: "C++",
        value: "c++",
    },
    {
        label: "JavaScript",
        value: "javascript",
    },
    {
        label: "Python",
        value: "python",
    },
];

const Form = () => {
    const router = useRouter();
    const { toast } = useToast()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [username, setUsername] = useState('');
    const [source_code, setSourceCode] = useState('');
    const [stdin, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        if (!username || !value || !source_code || !stdin) {
            toast({
                title: "Please fill in all fields",
                description: "All fields are required.",
            });
            return;
        }

        console.log("Form submitted:", {
            username,
            language: value,
            source_code,
            stdin
        });

        fetch('/api/code-snippets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                language: value,
                source_code,
                stdin,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Code snippet submitted:', data);
                toast({
                    title: "Code snippet submitted"
                });
                router.push("/");
            })
            .catch((error) => {
                console.error('Error submitting code snippet:', error);
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                })
            });
    };

    return (
        <div className="container flex flex-col py-6">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col space-y-2">
                        <Label htmlFor="code">Source Code</Label>
                        <Textarea
                            id="code"
                            placeholder="Input your source code here"
                            className="min-h-[500px] resize-none"
                            value={source_code}
                            onChange={(e) => setSourceCode(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 flex flex-col space-y-2">

                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            placeholder="Enter a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <Label htmlFor="language">Language</Label>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-[200px] justify-between "
                                >
                                    {value
                                        ? languages.find((language) => language.value === value)?.label
                                        : "Select Language..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <div className="flex flex-col space-y-2 p-2">
                                    {languages.map((language) => (
                                        <button
                                            key={language.value}
                                            onClick={() => {
                                                setValue(language.value);
                                                setOpen(false);
                                            }}
                                            className="flex items-center rounded-md p-1 text-sm font-semibold"
                                        >
                                            <Check
                                                className={cn("mr-2 h-4 w-4", {
                                                    "opacity-100": value === language.value,
                                                    "opacity-0": value !== language.value,
                                                })}
                                            />
                                            {language.label}
                                        </button>
                                    ))}
                                </div>

                            </PopoverContent>
                        </Popover>

                        <Label htmlFor="input">Input</Label>
                        <Textarea
                            id="input"
                            placeholder="Standard Input"
                            className="flex-1 resize-none"
                            value={stdin}
                            onChange={(e) => setInput(e.target.value)}
                        />

                    </div>
                </div>
                <div className="flex items-center space-x-2 mt-5">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default Form;
