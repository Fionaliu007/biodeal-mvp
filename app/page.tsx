import { supabase } from '@/lib/supabase';
import { BadgePercent, ShoppingCart } from 'lucide-react';

export const revalidate = 0; // Fetch fresh data on every refresh

export default async function Home() {
  // Fetch data and check for errors
  const { data: deals, error } = await supabase.from('deals').select('*');

  if (error) {
    console.error("Supabase Error:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-[#2F855A] text-white py-16 px-4 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Biodeal.ch</h1>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          The best organic food deals from Migros, Coop, and Aldi.
        </p>
      </section>

      {/* The Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">🔥 Fresh Discounts</h2>
          <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
            {deals?.length || 0} deals found
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {deals?.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 relative overflow-hidden">
                 <ShoppingCart size={48} className="text-gray-300 group-hover:scale-110 transition-transform duration-300"/>
                 <div className="absolute top-3 right-3 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-sm">
                    <BadgePercent size={14} className="mr-1"/> -{deal.discount_percent}%
                 </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2F855A] bg-green-50 px-2 py-1 rounded">
                    {deal.store}
                  </span>
                  <span className="text-xs text-gray-400">{deal.category}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 leading-tight mb-4 min-h-[3rem]">
                  {deal.title}
                </h3>
                
                <div className="flex items-end gap-3 border-t pt-4 border-gray-50">
                  <span className="text-2xl font-extrabold text-gray-900">
                    {deal.price_now}.-
                  </span>
                  {deal.price_old && (
                     <span className="text-sm text-gray-400 line-through mb-1 font-medium">
                       {deal.price_old}.-
                     </span>
                  )}
                </div>
              </div>
            </div>
          )) || <p className="text-center text-gray-500 col-span-3">No deals found (Database Empty?)</p>}
        </div>
      </div>
    </main>
  );
}