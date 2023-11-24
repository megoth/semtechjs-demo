declare module '*.mdx' {
    import type React from 'react'
    const ReactComponent: React.VFC
    export default ReactComponent
}

declare module "rdf-sparql-builder" {
    export const deleteQuery: function;
    export const select: function;
}

declare module 'solid-namespace' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export default (factory: unknown) => Record<string, (label: string) => string>;
}

declare module '@tpluscode/sparql-builder' {
    export const DELETE: function;
    export const SELECT: function;
}

declare module '@zazuko/rdf-vocabularies' {
    export const prefixes: Record<string, string>
}

declare module 'grapoi' {
    import {Literal, NamedNode} from "@rdfjs/types";

    class Grapoi {
        addOut(term: NamedNode, value: Literal): Grapoi
        deleteOut(term: NamedNode, values: Array<Literal>): Grapoi
        out(term: NamedNode): Grapoi
        value: string
    }
    export default function (...args: Array<unknown>): Grapoi;
}

declare module 'rdf-ext' {
    import {Literal, NamedNode, Quad} from "@rdfjs/types";

    export function dataset(...args: Array<unknown>): Iterable<Quad>;

    export module io {
        export module dataset {
            export function fromText(...args: Array<unknown>): Promise<unknown>
            export function toText(format: string, dataset: unknown): Promise<string>
        }
    }

    export function grapoi(...args: Array<unknown>): import('grapoi');
    export function literal(value: string): Literal;
    export function namedNode(uri: string): NamedNode;
    export function namespace(namespaceUri: string): Record<string, NamedNode>;
}