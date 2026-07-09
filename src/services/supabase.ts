import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://vjrdtayghenfidfwiifd.supabase.co';
const supabaseKey = 'sb_publishable_YB9dh0V8mOt3t4F9P22scg_0qripQTQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
