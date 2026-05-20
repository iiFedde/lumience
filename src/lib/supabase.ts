import { createClient } from "@supabase/supabase-js";

const url = "https://zplxvqyszesfabpsblox.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwbHh2cXlzemVzZmFicHNibG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NTQ2OTUsImV4cCI6MjA5MTEzMDY5NX0.yy3bECXm09xOfmD3HBjPersEIHxh4sElKLIFnyjU1Jc";

export const supabase = createClient(url, key);
