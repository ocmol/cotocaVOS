import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitComplaint(data: {
  full_name: string;
  email: string;
  phone?: string;
  complaint_type: string;
  title: string;
  description: string;
  location?: string;
  is_anonymous: boolean;
}) {
  try {
    const { data: result, error } = await supabase
      .from('complaints')
      .insert([data])
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting complaint:', error);
    throw error;
  }
}
