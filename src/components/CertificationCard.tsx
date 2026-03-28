import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    pdfUrl?: string;
    skills?: readonly string[];
    image?: string;
    className?: string;
}

export function CertificationCard({
    title,
    issuer,
    date,
    credentialId,
    credentialUrl,
    pdfUrl,
    skills,
    image,
    className,
}: Props) {
    return (
        <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">

            {/* Image */}
            {image && (
                <Link href={credentialUrl || "#"} target="_blank">
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={300}
                        className="h-40 w-full object-cover object-contain bg-white"
                    />
                </Link>
            )}

            {/* Header */}
            <CardHeader className="px-2">
                <div className="space-y-1">
                    <CardTitle className="mt-1 text-base">{title}</CardTitle>

                    <p className="text-xs text-muted-foreground">
                        {issuer} • {date}
                    </p>

                    {credentialId && (
                        <p className="text-[10px] text-muted-foreground">
                            ID: {credentialId}
                        </p>
                    )}
                </div>
            </CardHeader>

            {/* Skills */}
            <CardContent className="mt-auto flex flex-col px-2">
                {skills && skills.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {skills.map((skill) => (
                            <Badge
                                key={skill}
                                className="px-1 py-0 text-[10px]"
                                variant="secondary"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>

            {/* Footer */}
            <CardFooter className="px-2 pb-2">
                <div className="flex gap-2">

                    {credentialUrl && (
                        <Link href={credentialUrl} target="_blank">
                            <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                                🔗 View Credential
                            </Badge>
                        </Link>
                    )}

                    {pdfUrl && (
                        <Link href={pdfUrl} target="_blank">
                            <Badge
                                variant="outline"
                                className="flex gap-2 px-2 py-1 text-[10px]"
                            >
                                📄 Certificate
                            </Badge>
                        </Link>
                    )}

                </div>
            </CardFooter>
        </Card>
    );
}