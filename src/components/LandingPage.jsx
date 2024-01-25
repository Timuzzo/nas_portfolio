import ProjectOverview from "./ProjectOverview"

const LandingPage = () => {
return (
<>
<div className="flex flex-col h-[75vh] gap-4 sm:flex-row sm:h-screen items-center justify-center font-bold" >
    <p className="text-5xl w-mobile sm:text-9xl sm:w-tablet">CREATIVE STRATEGIC FLEXIBLE & INNOVATIVE</p>
    <p className="text-gray-700 w-mobile sm:-rotate-90 sm:text-4xl sm:w-0 sm:mt-52">Kommunikations- & Produktdesignerin</p>
</div>
<div id="projects">
    <ProjectOverview />
</div>
</>
)
}

export default LandingPage