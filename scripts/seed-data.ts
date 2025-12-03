import { createClient } from '@supabase/supabase-js';

// Hardcoded credentials as requested
const supabaseUrl = '[https://idvdibxgjxxcrfauikuf.supabase.co]';
const supabaseAnonKey = '[eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkdmRpYnhnanh4Y3JmYXVpa3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MTExMDksImV4cCI6MjA4MDI4NzEwOX0.NvrZ_WstNmJ6AtwMoJKHomQgt6Z1iZgwFe3k3NIdueg]';

if (supabaseUrl.includes('PASTE_YOUR')) {
    console.error('Please replace the placeholders with your actual Supabase URL and Key in scripts/seed-data.ts');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const products = [
    {
        title: "Bio Gala Apples",
        price: 2.50,
        store: "Coop",
        category: "Fruits",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
    },
    {
        title: "Organic Whole Milk",
        price: 1.80,
        store: "Migros",
        category: "Dairy",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Farmy Bio Box",
        price: 35.00,
        store: "Farmy",
        category: "Vegetables",
        image: "https://images.unsplash.com/photo-1595855709915-bd98be376805?auto=format&fit=crop&q=80&w=1000"
    }
];

async function seed() {
    console.log('Seeding data...');

    const { data, error } = await supabase
        .from('products')
        .insert(products)
        .select();

    if (error) {
        console.error('Error inserting data:', error);
    } else {
        console.log('Data inserted successfully!');
    }
}

seed();
