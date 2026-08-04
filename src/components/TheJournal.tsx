import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/content';
import { JournalArticle } from '../types';
import { ArrowUpRight, X, Clock, Calendar, User } from 'lucide-react';

export const TheJournal: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section className="bg-[#f5f2eb] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#e6e0d3]">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans-clean text-[10px] tracking-[0.25em] text-[#8c8276] uppercase font-semibold mb-2">
              FIELD NOTES
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl tracking-[0.06em] text-[#2b2621] uppercase font-light">
              THE JOURNAL
            </h2>
          </div>

          <button
            onClick={() => setSelectedArticle(JOURNAL_ARTICLES[0])}
            className="font-sans-clean text-xs tracking-[0.2em] text-[#2b2621] uppercase border-b border-[#2b2621] pb-1 hover:text-[#8b3d2b] hover:border-[#8b3d2b] transition-colors"
          >
            VIEW ALL
          </button>
        </div>

        {/* 3 Journal Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-[#e8e2d5] mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#f5f2eb]/90 backdrop-blur-xs px-2.5 py-1 border border-[#e6e0d3]">
                    <span className="font-sans-clean text-[9px] tracking-[0.2em] uppercase text-[#3d332a] font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2b2621] group-hover:text-[#8b3d2b] transition-colors font-medium leading-snug">
                    {article.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-[#2b2621] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1"
                  />
                </div>

                <p className="font-sans-clean text-xs text-[#524b42] font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#f5f2eb] border border-[#e6e0d3] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xs p-6 sm:p-10 shadow-2xl relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 text-[#3d332a] hover:text-[#000000] p-1 focus:outline-none"
              aria-label="Close article"
            >
              <X size={24} />
            </button>

            <span className="inline-block font-sans-clean text-[10px] tracking-[0.25em] uppercase text-[#8b3d2b] font-semibold mb-3">
              {selectedArticle.category}
            </span>

            <h1 className="font-serif-display text-2xl sm:text-4xl text-[#2b2621] mb-4 uppercase tracking-wider font-normal">
              {selectedArticle.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 font-sans-clean text-xs text-[#70665a] pb-6 border-b border-[#e6e0d3] mb-6">
              <span className="flex items-center gap-1">
                <User size={13} /> {selectedArticle.author}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar size={13} /> {selectedArticle.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={13} /> {selectedArticle.readTime}
              </span>
            </div>

            <div className="aspect-[16/9] overflow-hidden rounded-xs mb-8 bg-[#e8e2d5]">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 font-sans-clean text-sm text-[#423c34] leading-relaxed font-light">
              {selectedArticle.content?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#e6e0d3] flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.2em] uppercase py-3 px-6 transition-colors"
              >
                CLOSE ARTICLE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
