const ProjectOverview = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap text-black text-5xl font-bold mb-8 ">
        <a href="/medellin" className="mt-16">
          <div className="flex justify-center items-center text-center bg-medellin bg-no-repeat bg-cover h-[450px] w-[725px] group">
            <p className="hidden group-hover:block">Branding-Design Medellin</p>
          </div>
        </a>
        <a href="/feria-de-las-flores" className="mt-16">
          <div className="flex justify-center items-center text-center bg-feria-de-las-flores bg-no-repeat bg-cover h-[450px] w-[725px] group">
            <p className="hidden group-hover:block">
              Visuelles System Feria de las Flores
            </p>
          </div>
        </a>
        <a href="/modular-b" className="mt-16">
          <div className="flex justify-center items-center text-center bg-modular-b bg-no-repeat bg-cover h-[450px] w-[725px] group">
            <p className="hidden group-hover:block">Typografie modular B</p>
          </div>
        </a>
        <a href="/sepiensa" className="mt-16">
          <div className="flex justify-center items-center text-center bg-sepiensa bg-no-repeat bg-cover h-[450px] w-[725px] group">
            <p className="hidden group-hover:block">Branding-Design sepiensa</p>
          </div>
        </a>
        <a href="/abholzung" className="mt-16">
          <div className="flex justify-center items-center text-center bg-abholzung bg-no-repeat bg-cover h-[450px] w-[725px] group">
            <p className="hidden group-hover:block">
              Typografische Poster-Experimente
            </p>
          </div>
        </a>
        <a href="/non-nocere" className="mt-16">
          <div className="flex justify-center items-center text-center bg-non-nocere bg-no-repeat bg-cover h-[450px] w-[725px] group">
            <p className="hidden group-hover:block">
              Branding-Design non nocere
            </p>
          </div>
        </a>
        <a href="/my-bowl" className="mt-16">
          <div className="flex justify-center items-center text-center bg-my-bowl bg-no-repeat bg-cover h-[450px] w-[725px] group">
            <p className="hidden group-hover:block">
              Branding- & Verpakungsdesign
            </p>
          </div>
        </a>
        <a href="/nebenan" className="mt-16">
          <div className="flex justify-center items-center text-center bg-medellin bg-no-repeat bg-cover h-[450px] w-[725px] group">
            <p className="hidden group-hover:block">
              Fiktives Kampagne-Konzept
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProjectOverview;
