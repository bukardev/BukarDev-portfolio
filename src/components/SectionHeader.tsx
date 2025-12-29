export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="title-gradient">{eyebrow}</p>
      </div>

      <h2 className="font-serif text-3xl mt-5 text-center md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
