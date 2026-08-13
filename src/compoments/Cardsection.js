
import Link from "next/link";
import React from "react";

export default function CardSection() {
  const cards = [
    {
      number: "01",
      title: "Classic Coffee",
      description:
        "สัมผัสรสชาติกาแฟแบบดั้งเดิม ผ่านบรรยากาศอบอุ่นและกลิ่นอายของวันวาน",
      icon: "☕",
    },
    {
      number: "02",
      title: "Old Bakery",
      description:
        "ขนมอบสูตรดั้งเดิมที่คัดสรรวัตถุดิบอย่างพิถีพิถัน ให้ความรู้สึกเหมือนร้านเบเกอรี่ในอดีต",
      icon: "🥐",
    },
    {
      number: "03",
      title: "Vintage Story",
      description:
        "เรื่องราว ความทรงจำ และรายละเอียดเล็ก ๆ ที่ทำให้ทุกช่วงเวลามีความหมาย",
      icon: "📜",
    },
  ];

  return (
    <main className="min-h-screen bg-[#e8d8bd] px-6 py-16 text-[#3b2418]">
      
      {/* Header */}
      <section className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-sm tracking-[0.35em] text-[#806044] uppercase">
          Since 1950
        </p>

        <h1 className="font-serif text-5xl font-bold tracking-wide md:text-6xl">
          The Classic Corner
        </h1>

        <div className="mx-auto mt-5 flex max-w-md items-center gap-4">
          <div className="h-px flex-1 bg-[#806044]" />
          <span className="text-xl">✦</span>
          <div className="h-px flex-1 bg-[#806044]" />
        </div>

        <p className="mx-auto mt-6 max-w-2xl font-serif text-lg leading-8 text-[#684936]">
          A little piece of the past, preserved for today.
          <br />
          เรื่องราวเล็ก ๆ จากวันวาน ที่ยังคงงดงามมาจนถึงวันนี้
        </p>
      </section>

      {/* Cards */}
      <section className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.number}
            className="group relative overflow-hidden border border-[#8a6748] bg-[#f1e5cf] p-8 shadow-[6px_6px_0px_#806044] transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_12px_0px_#634735]"
          >
            {/* Vintage corner */}
            <div className="absolute left-0 top-0 h-12 w-12 border-b border-r border-[#9a7857]" />
            <div className="absolute bottom-0 right-0 h-12 w-12 border-l border-t border-[#9a7857]" />

            {/* Number */}
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm tracking-[0.3em] text-[#927153]">
                {card.number}
              </span>

              <span className="text-3xl grayscale transition-transform duration-300 group-hover:rotate-6">
                {card.icon}
              </span>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-[#b99b77]" />

            {/* Content */}
            <h2 className="font-serif text-2xl font-bold text-[#4a2d1d]">
              {card.title}
            </h2>

            <p className="mt-4 font-serif leading-7 text-[#76563e]">
              {card.description}
            </p>

            {/* Button */}
            <button className="mt-7 border border-[#76543c] px-5 py-2 font-serif text-sm tracking-wider text-[#573622] transition-all duration-300 hover:bg-[#573622] hover:text-[#f1e5cf]">
              READ MORE →
            </button>
          </article>
        ))}
      </section>

      {/* Bottom quote */}
      <section className="mx-auto mt-16 max-w-4xl border-y border-[#8a6748] py-8 text-center">
        <p className="font-serif text-xl italic text-[#634735]">
          “บางสิ่งอาจเก่าไปตามกาลเวลา
          <br />
          แต่ความทรงจำไม่เคยเก่าเลย”
        </p>

        <p className="mt-4 text-xs tracking-[0.3em] text-[#927153]">
          — THE MEMORY OF YESTERDAY —
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-xs tracking-[0.4em] text-[#806044]">
          EST. 1950 • CLASSIC • TRADITION • MEMORY
        </p>
      </footer>
    </main>
  );
}