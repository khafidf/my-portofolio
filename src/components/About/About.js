const About = () => {
  return (
    <div
      className="my-4 grid grid-cols-2 gap-4 px-8 md:px-16 lg:my-8 lg:px-20 xl:my-16 xl:px-32 xxl:px-40"
      id="about"
    >
      <div className="col-span-2 text-center">
        <h1 className="text-2xl font-medium lg:text-4xl xl:text-5xl">
          About Me
        </h1>
        <hr className="mx-auto mt-4 h-1 w-48 rounded border-0 bg-black" />
      </div>
      <div className="col-span-2 col-start-1 text-center">
        <p className="lg:text-lg xl:text-xl xxl:text-2xl">
          My name is Eko Khafid firmansyah. I have been studying Front-End
          Development since December 2021 I prefer to HTML and CSS. I like
          studying a something new. Right now I'm still learning JavaScript,
          ReactJs, and NodeJs.
        </p>
      </div>
    </div>
  );
};

export default About;
