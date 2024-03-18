import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
const SubmissionDetails = ({ username, language, source_code, stdin, output }) => {
    return (
        <div className="container flex flex-col py-6">
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 flex flex-col space-y-2">
                    <Label htmlFor="code">Source Code</Label>
                    <Textarea
                        id="code"
                        placeholder="Input your source code here"
                        className="min-h-[500px] resize-none"
                        value={source_code}
                        disabled
                        readOnly
                    />
                </div>
                <div className="flex-1 flex flex-col space-y-2">

                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        placeholder="Enter a username"
                        value={username}
                        disabled
                        readOnly
                    />

                    <Label htmlFor="language">Language</Label>
                    <div className="flex items-center rounded-md p-1 text-sm font-semibold">
                        <Check className="mr-2 h-4 w-4" />
                        {language}
                    </div>

                    <Label htmlFor="input">Input</Label>
                    <Textarea
                        id="input"
                        placeholder="Standard Input"
                        className="flex-1 resize-none"
                        value={stdin}
                        disabled
                        readOnly
                    />

                    <Label htmlFor="output">Ouput</Label>
                    <Textarea
                        id="output"
                        placeholder="Output"
                        className="flex-1 resize-none"
                        value={output}
                        disabled
                        readOnly
                    />

                </div>
            </div>
        </div>
    );
};

export default SubmissionDetails;
