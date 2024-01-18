import ProjectOverview from "./ProjectOverview"

const LandingPage = () => {
return (
<>
<div className="flex h-screen justify-center" >
    <div className="w-1/2 flex items-center font-bold">
        <p className="text-9xl ">CREATIVE STRATEGIC FLEXIBLE & INNOVATIVE</p>
        <p className="text-gray-700 -rotate-90 text-3xl w-1">Kommunikations- & Produktdesignerin</p>
    </div>
</div>
<div id="projects">
    <ProjectOverview />
</div>
</>
)
}

export default LandingPage