import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-ellora-rose/50" id="depoimentos">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-ellora-terracotta text-xs tracking-luxury uppercase font-semibold">
            Depoimentos Humanizados
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-ellora-deep font-normal">
            A confiança de quem vivenciou o cuidado Ellora
          </h2>
          <div className="flex items-center justify-center gap-1 text-amber-500 pt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
            ))}
            <span className="text-xs text-ellora-deep/70 ml-2 font-medium">
              Classificação 5.0 no Google &amp; Instagram
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-[#FFECE5]/60 border border-ellora-rose/60 flex flex-col justify-between shadow-sm hover:shadow-luxury transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-ellora-gold/40" />
                </div>

                <p className="text-xs sm:text-sm text-ellora-deep/85 italic leading-relaxed">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-5 border-t border-ellora-rose/50 mt-6">
                <span className="text-[10px] uppercase font-bold tracking-wider text-ellora-terracotta px-2 py-0.5 bg-white/70 rounded-full inline-block mb-1.5">
                  {item.procedureTag}
                </span>
                <h3 className="font-serif-luxury text-sm font-bold text-ellora-deep">
                  {item.name}
                </h3>
                <p className="text-[11px] text-ellora-deep/60 font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
