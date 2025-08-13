import { supabase } from './supabaseClient';

export const testSupabaseConnection = async () => {
  try {
    console.log('Testing Supabase connection...');
    
    // Test basic connection
    const { data, error } = await supabase
      .from('contact_us')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('Supabase connection test failed:', error);
      return { success: false, error: error.message };
    }
    
    console.log('Supabase connection successful!');
    return { success: true, message: 'Connection established' };
  } catch (error) {
    console.error('Supabase test error:', error);
    return { success: false, error: error.message };
  }
};