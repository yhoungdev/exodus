import {createClient} from '@supabase/supabase-js'
const api= process.env.REACT_APP_API_URL;
const apiKey= process.env.REACT_APP_URL_KEY;
const supabase=createClient(api, apiKey);
export default supabase;

