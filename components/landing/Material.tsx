
export function Material() {
  return (
    <section className="flex h-22.5 items-center justify-between border-b border-[#29243a] bg-[#0b0917] px-[8vw] text-[#9690a0]">
        <span>IMPRESIONES PRECISAS EN</span>
          {["PLA", "PETG", "ABS", "TPU FLEX", "RESINA"].map((item) => (
            <b key={item}>{item}</b>
          ))}
    </section>
  );
}
