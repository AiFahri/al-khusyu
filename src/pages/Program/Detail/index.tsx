import { useMemo } from "react";
import { useParams, Link } from "react-router";
import SEO from "@/components/SEO";
import { slugify, truncate } from "@/lib/utils";
import { PROGRAMS } from "@/data/program";

export default function ProgramDetail() {
  const { slug } = useParams();

  const current = useMemo(() => {
    return PROGRAMS.find((p) => slugify(p.title) === slug) || PROGRAMS[0];
  }, [slug]);

  const others = useMemo(() => {
    return PROGRAMS.filter((p) => p !== current).slice(0, 4);
  }, [current]);

  const pageTitle = `${current.title} - Program`;

  return (
    <>
      <SEO
        title={pageTitle}
        description={truncate(current.content?.[0] || "", 160)}
        keywords={`${current.title}, program al-khusyu`}
        image={current.image}
        url={`/program/${slugify(current.title)}`}
      />

      <div className="px-4 md:px-8 flex flex-col gap-6 md:gap-10">
        <section className="bg-white rounded-2xl overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-60 md:h-[360px] object-cover"
            loading="lazy"
          />
          <div className="p-4 md:p-6 lg:p-8">
            <h1 className="ulm-font text-[#63817E] font-extrabold text-2xl md:text-4xl lg:text-5xl leading-tight">
              {current.title}
            </h1>
            <div className="mt-3 rounded-full inline-flex border border-black/10 px-3 py-1 text-xs md:text-sm text-[#757575]">
              {current.category}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 text-[#757575] font-manrope leading-relaxed space-y-4">
          {(current.content || []).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        <section className="flex flex-col gap-4">
          <div className="ulm-font font-extrabold text-[#63817E] text-3xl md:text-5xl leading-tight">
            <span className="block">Program</span>
            <span className="block">Lainnya</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr">
            {others.map((item) => (
              <Link
                to={`/program/${slugify(item.title)}`}
                key={item.title}
                className="rounded-2xl bg-white flex flex-col gap-4 justify-between w-full h-full"
              >
                <div className="flex flex-col gap-4 pt-2 px-4">
                  <div className="font-manrope font-semibold text-black text-lg md:text-xl lg:text-[28px]">
                    {item.title}
                  </div>
                  <div className="font-manrope font-semibold text-[#757575] text-sm md:text-[16px] leading-relaxed">
                    {truncate(item.content?.[0] || "", 150)}
                  </div>
                  <div className="rounded-full flex border border-black/10 items-center px-3 py-1 text-xs md:text-sm text-[#757575] h-[35px] w-fit">
                    {item.category}
                  </div>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 md:h-[230px] object-cover rounded-b-2xl"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </section>

        <div className="flex justify-end">
          <Link to="/program" className="rounded-full bg-[#567471] text-white px-4 py-2 text-sm md:text-base">
            Kembali ke Program
          </Link>
        </div>
      </div>
    </>
  );
}


