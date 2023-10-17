import Intro from "./1-intro.mdx";
import Solid from "./2-solid.mdx";
import Reviews from "./3.0-reviews.mdx";
import SolidWarning from "../solid-warning";
import DemoList from "../demo-list";
import {LOCAL_DEMOS, SOLID_DEMOS} from "../../constants.ts";
import Demo from "./4-demo.mdx";
import About from "./5-about.mdx";

export default function Frontpage() {
    return (
        <>
            <Intro/>
            <DemoList list={LOCAL_DEMOS} />
            <Solid/>
            <SolidWarning/>
            <DemoList list={SOLID_DEMOS} />
            <Reviews/>
            <Demo />
            <About />
        </>
    );
}