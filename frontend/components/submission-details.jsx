"use client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
const SubmissionDetails = ({ id }) => {

    const [code, setCode] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/code-snippets/${id}`);
                const data = await response.json();
                console.log(data)
                setCode(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container flex flex-col py-6">
            {isLoading ? (
                <div className="flex-1 flex items-center justify-center">
                    <ClipLoader />
                </div>
            ) : (
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col space-y-2">
                        <Label htmlFor="code">Source Code</Label>
                        <Textarea
                            id="code"
                            placeholder="Input your source code here"
                            className="min-h-[500px] resize-none"
                            value={code.source_code}
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="flex-1 flex flex-col space-y-2">

                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            placeholder="Enter a username"
                            value={code.username}
                            disabled
                            readOnly
                        />

                        <Label htmlFor="language">Language</Label>
                        <div className="flex items-center rounded-md p-1 text-sm font-semibold">
                            <Check className="mr-2 h-4 w-4" />
                            {code.language}
                        </div>

                        <Label htmlFor="input">Input</Label>
                        <Textarea
                            id="input"
                            placeholder="Standard Input"
                            className="flex-1 resize-none"
                            value={code.stdin}
                            disabled
                            readOnly
                        />


                        <Label htmlFor="output">Ouput</Label>

                        <Textarea
                            id="output"
                            placeholder="Output"
                            className="flex-1 resize-none"
                            value={code.output}
                            disabled
                            readOnly
                        />

                    </div>
                </div>
            )}
        </div>
    );
};

export default SubmissionDetails;
