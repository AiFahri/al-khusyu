export function Mission() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 bg-white rounded-2xl mx-4 md:mx-8 px-4 md:px-8 py-6 md:py-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0">
        <h2 className="text-[#63817E] font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-left lg:text-left ulm-font leading-tight">
          Arah dan
          <br />
          Tujuan Kami
        </h2>
        <div className="flex flex-col gap-2 items-start lg:items-end">
          <img
            className="w-20 h-9 md:w-32 md:h-14 lg:w-[165px] lg:h-[71px] lg:mr-10"
            src="/image/button-quran-2.png"
            alt="logo"
          />
          <p className="text-[#757575] w-full lg:w-[528px] font-manrope text-left lg:text-right text-sm md:text-lg lg:text-xl xl:text-[28px] leading-relaxed">
            Yayasan AL-KHUSYU berkomitmen menciptakan lingkungan pendidikan
            Islami yang terpadu.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-start gap-6 md:gap-8 lg:gap-16">
        <div className="flex flex-col gap-4 bg-[#63817E] rounded-3xl font-manrope w-full lg:w-[440px] min-h-[400px] lg:h-auto lg:min-h-[450px] px-4 md:px-6 py-4 lg:my-auto">
          <div className="text-[#FBFED0] font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-[60px]">
            VISI
          </div>
          <div className="text-white font-light text-sm md:text-base lg:text-lg xl:text-[25px] leading-relaxed">
            Menjadi lembaga dakwah yang mampu memberikan manfaat bagi masyarakat
            luas dengan menjadikan nilai-nilai sholat sebagai sumber gerak
            organisasi
          </div>
        </div>
        <div className="flex justify-center lg:flex-initial">
          <img
            src="/image/mission.png"
            alt="logo"
            className="w-full max-w-[400px] md:max-w-[500px] lg:w-[641px] h-auto lg:h-[617px] rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 bg-[#63817E] rounded-3xl font-manrope w-full lg:w-[440px] min-h-[400px] lg:h-auto lg:min-h-[450px] px-4 md:px-6 py-4 lg:my-auto">
          <div className="text-[#FBFED0] font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-[60px]">
            MISI
          </div>
          <div className="text-white font-light text-sm md:text-base lg:text-lg xl:text-[28px] leading-relaxed">
            <p className="mb-2">
              1. Melaksanakan dakwah di bidang pendidikan yang mampu menyuburkan
              nilai-nilai dalam masyarakat
            </p>
            <p className="mb-2">
              2. Melaksanakan dakwah di bidang sosial dalam rangka menebarkan
              rahmatan lil 'alamin
            </p>
            <p className="mb-0">
              3. Memelihara dan menyambung persaudaraan dalam rangka memperkuat
              upaya dakwah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
