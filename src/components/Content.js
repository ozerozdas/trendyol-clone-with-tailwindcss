import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";

export default function Content(props) {
  var pageContent = null;
    switch (props.name) {
        case "homepage": pageContent = <Homepage />; break;
        case "contact": pageContent = <Contact />; break;
        default: pageContent = <div className="text-center text-5xl my-20">Content not found</div>;
    }
  return (
    <div className="container mx-auto mt-5">
        {pageContent}
    </div>
  );
}