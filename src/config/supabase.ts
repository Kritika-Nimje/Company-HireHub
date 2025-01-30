// This file initializes and exports the Supabase client. Replace the placeholder values with your Supabase URL and anon key.
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mbyksmxvshnhkwztunia.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ieWtzbXh2c2huaGt3enR1bmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczODMzMTMsImV4cCI6MjA1Mjk1OTMxM30.vbAnpcPiXR0ROLeLJqhL8LSjrT0UQse9kNT7IerQvzA'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


