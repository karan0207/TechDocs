import Link from "@docusaurus/Link";

function HomepageHeader() {
  return (
    <>
      <div className="h-screen flex flex-col sm:flex-row overflow-hidden relative">
    
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 md:w-2/5 sm:bg-opacity-100 sm:items-center sm:text-center sm:px-20 sm:py-10">
          <div className="max-w-md px-6 py-10 sm:px-0 sm:py-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 opac">Nice Guy</h1>
            <p className="text-3xl sm:text-4xl md:text-5xl mb-4 opac">
              Tech is Cool
            </p>
            <div className="link-none px-8 py-4 rounded-md  text-lg sm:text-2xl hover:text-blue-300 md:text-3xl button-theme border border-purple-800 active">
              <Link to="/" style={{ textDecoration: 'none',fontWeight:'400'}} className="dark light-link ">
                Tech Tutorial
              </Link>
            </div>
          </div>
        </div>

      
        <div className="absolute sm:relative inset-0 flex justify-center w-full items-center h-full md:w-3/5 bg-sukuna bg-cover bg-center bg-no-repeat z-0"></div>
      </div>
    </>
  );
}

export default HomepageHeader;


