interface CodeProps {
    children: string | undefined;
    language: "turtle" | "typescript";
}


export default function Code({children, language}: CodeProps) {
    return (
        <pre className={`language-${language}`}>
            <code className={`language-${language}`}>
                {children}
            </code>
        </pre>
    )
}