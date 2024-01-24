const ProjectOverview = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-16 text-black text-5xl font-bold mb-16">
        <a href="/medellin">
          <div className="flex justify-center items-center text-center bg-medellin bg-no-repeat bg-cover h-[225px] w-[350px] group 2xl:h-[500px] 2xl:w-[725px]">
            <p className="hidden group-hover:block">Branding-Design Medellin</p>
          </div>
        </a>
        <a href="/feria-de-las-flores">
          <div className="flex justify-center items-center text-center bg-feria-de-las-flores bg-no-repeat bg-cover h-[225px] w-[350px] group 2xl:h-[500px] 2xl:w-[725px]">
            <p className="hidden group-hover:block">
              Visuelles System Feria de las Flores
            </p>
          </div>
        </a>
        <a href="/modular-b">
          <div className="flex justify-center items-center text-center bg-modular-b bg-no-repeat bg-cover h-[225px] w-[350px] group 2xl:h-[500px] 2xl:w-[725px]">
            <p className="hidden group-hover:block">Typografie modular B</p>
          </div>
        </a>
        <a href="/sepiensa">
          <div className="flex justify-center items-center text-center bg-sepiensa bg-no-repeat bg-cover h-[225px] w-[350px] group 2xl:h-[500px] 2xl:w-[725px]">
            <p className="hidden group-hover:block">Branding-Design sepiensa</p>
          </div>
        </a>
        <a href="/abholzung">
          <div className="flex justify-center items-center text-center bg-abholzung bg-no-repeat bg-cover h-[225px] w-[350px] group 2xl:h-[500px] 2xl:w-[725px]">
            <p className="hidden group-hover:block">
              Typografische Poster-Experimente
            </p>
          </div>
        </a>
        <a href="/non-nocere">
          <div className="flex justify-center items-center text-center bg-non-nocere bg-no-repeat bg-cover h-[225px] w-[350px] group 2xl:h-[500px] 2xl:w-[725px]">
            <p className="hidden group-hover:block">
              Branding-Design non nocere
            </p>
          </div>
        </a>
        <a href="/my-bowl">
          <div className="flex justify-center items-center text-center bg-my-bowl bg-no-repeat bg-cover h-[225px] w-[350px] group 2xl:h-[500px] 2xl:w-[725px]">
            <p className="hidden group-hover:block">
              Branding- & Verpakungsdesign
            </p>
          </div>
        </a>
        <a href="/nebenan">
          <div className="flex justify-center items-center text-center bg-medellin bg-no-repeat bg-cover h-[225px] w-[350px] group 2xl:h-[500px] 2xl:w-[725px]">
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
