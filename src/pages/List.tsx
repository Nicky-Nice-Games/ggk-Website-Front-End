import TitleBanner from "@/components/ui/title-banner";

const YoutubeEmbed = () => (
    <iframe
      width="853"
      height="480"
      src="https://www.youtube.com/embed/nrsnN23tmUA?si=BcEPnxTN14a_Necf"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
);



const ListPage = () => {
  return (
    <>  
      <main className="mt-0 px-4 md:px-12 relative bg-[url(images/items-background.png)] bg-[#BBB] bg-fixed bg-repeat bg-blend-difference bg-size-[90%] md:bg-size-[80%] text-white min-h-[80vh]">
        <TitleBanner
          color="pink"
          text="The List"
          className="mb-5 "
        />
                <div className="justify-items-center">
                        <YoutubeEmbed/>

          </div>     
        </main>
    </>
  );
};

export { ListPage };
