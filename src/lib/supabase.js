import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hoiqsbkmovudsmdgxxje.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvaXFzYmttb3Z1ZHNtZGd4eGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NzI3MzAsImV4cCI6MjA5MDQ0ODczMH0.L_RiYv9rIeMJZEjeCv78NOeRDaMdQwv2vxIHnZ1rFXA"
);

export async function syncStudent(name, filiere) {
  try {
    await supabase.from("students").upsert(
      { name, filiere, last_seen_at: new Date().toISOString() },
      { onConflict: "name" }
    );
  } catch(e) { console.warn("syncStudent:", e); }
}

export async function logQuiz(studentName, filiere, themeId, themeTitle, modeId, score, total) {
  try {
    await supabase.from("quiz_results").insert({
      student_name: studentName,
      filiere,
      theme_id: themeId,
      theme_title: themeTitle,
      mode_id: modeId,
      score,
      total,
      pct: Math.round(score / total * 100),
    });
  } catch(e) { console.warn("logQuiz:", e); }
}

export async function logFiche(studentName, filiere, ficheId, ficheTitle) {
  try {
    await supabase.from("fiche_completions").upsert(
      { student_name: studentName, filiere, fiche_id: ficheId, fiche_title: ficheTitle },
      { onConflict: "student_name,fiche_id" }
    );
  } catch(e) { console.warn("logFiche:", e); }
}
