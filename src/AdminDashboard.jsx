import { useState, useEffect, useCallback } from "react";
import { supabase } from "./lib/supabase.js";

const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS || "picpus2025";
const T = {
  bg:"#07060B", card:"#12101A", surface:"#1C1828", border:"rgba(255,255,255,0.07)",
  border2:"rgba(255,255,255,0.12)", text:"#F0EDF8", text2:"#A199B2", text3:"#6B6280",
  accent:"#C57AFF", green:"#4AEAAC", orange:"#FFB259", red:"#FF6370", blue:"#5EB5FF",
  yellow:"#F0E547", r:14,
};

const FILIERES = { bioalc:"BIOALC", abm:"ABM", bm:"BM", ol:"OL", fed:"FED", prodent:"PRODENT" };
const FILIERE_COLOR = { bioalc:T.accent, abm:T.blue, bm:T.green, ol:T.orange, fed:T.red, prodent:T.yellow };

// ─── helpers ───
const fmt = (d) => d ? new Date(d).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"}) : "—";
const fmtDate = (d) => d ? new Date(d).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"2-digit"}) : "—";
const pctColor = (p) => p>=80?T.green:p>=60?T.orange:T.red;
const avg = (arr) => arr.length ? Math.round(arr.reduce((a,b)=>a+b,0)/arr.length) : null;

function Pill({c,children}){
  return <span style={{padding:"2px 8px",borderRadius:6,background:`${c}18`,color:c,fontSize:11,fontWeight:700}}>{children}</span>;
}
function Btn({onClick,color=T.accent,children,sm,danger,outline}){
  const bg = danger ? T.red : outline ? "transparent" : color;
  return(
    <button onClick={onClick} style={{padding:sm?"5px 10px":"8px 16px",borderRadius:9,border:`1.5px solid ${danger?T.red:color}40`,background:outline||danger?`${bg}15`:bg,color:outline||danger?bg:"#fff",fontSize:sm?11:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"}}>
      {children}
    </button>
  );
}

// ─── ADD GRADE MODAL ───
function AddGradeModal({student,onSave,onClose}){
  const [label,setLabel]=useState("");
  const [filiere,setFiliere]=useState(student?.filiere||"bioalc");
  const [grade,setGrade]=useState("");
  const [max,setMax]=useState("20");
  const [comment,setComment]=useState("");
  const [saving,setSaving]=useState(false);

  const save=async()=>{
    if(!label.trim()||grade==="") return;
    setSaving(true);
    const {error}=await supabase.from("grades").insert({
      student_name:student.name, label:label.trim(), filiere,
      grade:parseFloat(grade), max_grade:parseFloat(max)||20, comment:comment.trim()||null,
    });
    setSaving(false);
    if(!error) onSave();
  };

  return(
    <div style={{position:"fixed",inset:0,background:"#07060BCC",backdropFilter:"blur(8px)",zIndex:3000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:T.card,border:`1px solid ${T.border2}`,borderRadius:18,padding:28,width:"100%",maxWidth:420,animation:"fu .2s"}}>
        <h3 style={{marginBottom:18,fontWeight:800}}>Ajouter une note — {student.name}</h3>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div>
            <label style={{fontSize:11,color:T.text2,fontWeight:600,display:"block",marginBottom:5}}>Intitulé de l'évaluation *</label>
            <input value={label} onChange={e=>setLabel(e.target.value)} placeholder="ex : DS1 – Physique Chimie" style={{width:"100%",padding:"10px 12px",borderRadius:9,border:`1px solid ${T.border2}`,background:T.surface,color:T.text,fontSize:13,outline:"none",fontFamily:"inherit",boxSizing:"border-box"}}/>
          </div>
          <div style={{display:"flex",gap:10}}>
            <div style={{flex:1}}>
              <label style={{fontSize:11,color:T.text2,fontWeight:600,display:"block",marginBottom:5}}>Note *</label>
              <input type="number" value={grade} onChange={e=>setGrade(e.target.value)} placeholder="0" min="0" max="20" step="0.5" style={{width:"100%",padding:"10px 12px",borderRadius:9,border:`1px solid ${T.border2}`,background:T.surface,color:T.text,fontSize:13,outline:"none",fontFamily:"inherit",boxSizing:"border-box"}}/>
            </div>
            <div style={{flex:1}}>
              <label style={{fontSize:11,color:T.text2,fontWeight:600,display:"block",marginBottom:5}}>Sur</label>
              <input type="number" value={max} onChange={e=>setMax(e.target.value)} placeholder="20" style={{width:"100%",padding:"10px 12px",borderRadius:9,border:`1px solid ${T.border2}`,background:T.surface,color:T.text,fontSize:13,outline:"none",fontFamily:"inherit",boxSizing:"border-box"}}/>
            </div>
          </div>
          <div>
            <label style={{fontSize:11,color:T.text2,fontWeight:600,display:"block",marginBottom:5}}>Filière</label>
            <select value={filiere} onChange={e=>setFiliere(e.target.value)} style={{width:"100%",padding:"10px 12px",borderRadius:9,border:`1px solid ${T.border2}`,background:T.surface,color:T.text,fontSize:13,outline:"none",fontFamily:"inherit"}}>
              {Object.entries(FILIERES).map(([k,v])=><option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div>
            <label style={{fontSize:11,color:T.text2,fontWeight:600,display:"block",marginBottom:5}}>Commentaire</label>
            <textarea value={comment} onChange={e=>setComment(e.target.value)} placeholder="Appréciation (optionnel)" rows={2} style={{width:"100%",padding:"10px 12px",borderRadius:9,border:`1px solid ${T.border2}`,background:T.surface,color:T.text,fontSize:13,outline:"none",fontFamily:"inherit",resize:"vertical",boxSizing:"border-box"}}/>
          </div>
        </div>
        <div style={{display:"flex",gap:8,marginTop:20,justifyContent:"flex-end"}}>
          <Btn onClick={onClose} outline>Annuler</Btn>
          <Btn onClick={save} color={T.green} disabled={saving}>{saving?"Enregistrement…":"Enregistrer la note"}</Btn>
        </div>
      </div>
    </div>
  );
}

// ─── STUDENT DETAIL PANEL ───
function StudentDetail({student,quizResults,fichesDone,grades,onClose,onAddGrade,onDeleteGrade}){
  const qr = quizResults.filter(r=>r.student_name===student.name).sort((a,b)=>new Date(b.played_at)-new Date(a.played_at));
  const fc = fichesDone.filter(f=>f.student_name===student.name);
  const sg = grades.filter(g=>g.student_name===student.name).sort((a,b)=>new Date(b.graded_at)-new Date(a.graded_at));

  // Best score per theme
  const byTheme = {};
  qr.forEach(r=>{
    if(!byTheme[r.theme_id]||r.pct>byTheme[r.theme_id].pct) byTheme[r.theme_id]=r;
  });
  const themes = Object.values(byTheme).sort((a,b)=>b.pct-a.pct);

  const avgPct = avg(qr.map(r=>r.pct));
  const filiereColor = FILIERE_COLOR[student.filiere]||T.accent;

  return(
    <div style={{position:"fixed",inset:0,background:"#07060BCC",backdropFilter:"blur(10px)",zIndex:2500,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"20px",overflowY:"auto"}}>
      <div style={{background:T.card,border:`1px solid ${T.border2}`,borderRadius:20,padding:28,width:"100%",maxWidth:760,marginTop:20,animation:"fu .25s"}}>
        {/* Header */}
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:22}}>
          <div style={{width:48,height:48,borderRadius:14,background:`linear-gradient(135deg,${filiereColor},${filiereColor}80)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:800,color:"#fff",flexShrink:0}}>
            {student.name.slice(0,2).toUpperCase()}
          </div>
          <div style={{flex:1}}>
            <div style={{fontWeight:800,fontSize:19}}>{student.name}</div>
            <div style={{color:T.text2,fontSize:12}}>{FILIERES[student.filiere]||student.filiere} · Dernière connexion : {fmt(student.last_seen_at)}</div>
          </div>
          <div style={{display:"flex",gap:8}}>
            <Btn onClick={onAddGrade} color={T.green} sm>+ Note</Btn>
            <Btn onClick={onClose} outline sm>✕ Fermer</Btn>
          </div>
        </div>

        {/* Stats */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:22}}>
          {[
            {label:"Quiz passés",val:qr.length,c:T.accent},
            {label:"Score moyen",val:avgPct!=null?`${avgPct}%`:"—",c:avgPct!=null?pctColor(avgPct):T.text3},
            {label:"Fiches lues",val:fc.length,c:T.blue},
          ].map(s=>(
            <div key={s.label} style={{background:T.surface,borderRadius:12,padding:"14px 16px",border:`1px solid ${T.border}`}}>
              <div style={{fontSize:22,fontWeight:800,color:s.c}}>{s.val}</div>
              <div style={{fontSize:11,color:T.text2,marginTop:2}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scores par thème */}
        {themes.length>0&&<>
          <h4 style={{fontSize:13,fontWeight:700,color:T.text2,marginBottom:10,letterSpacing:.5,textTransform:"uppercase"}}>Meilleurs scores par thème</h4>
          <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:22}}>
            {themes.map(r=>(
              <div key={r.theme_id} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:T.surface,borderRadius:10,border:`1px solid ${T.border}`}}>
                <div style={{flex:1,fontSize:13,fontWeight:600}}>{r.theme_title||r.theme_id}</div>
                <Pill c={FILIERES[r.filiere]?FILIERE_COLOR[r.filiere]:T.accent}>{(FILIERES[r.filiere]||r.filiere).toUpperCase()}</Pill>
                <div style={{width:120,height:6,background:T.border2,borderRadius:4,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${r.pct}%`,background:pctColor(r.pct),borderRadius:4,transition:"width .4s"}}/>
                </div>
                <div style={{fontSize:13,fontWeight:800,color:pctColor(r.pct),width:38,textAlign:"right"}}>{r.pct}%</div>
                <div style={{fontSize:11,color:T.text3,width:70,textAlign:"right"}}>{fmtDate(r.played_at)}</div>
              </div>
            ))}
          </div>
        </>}

        {/* Historique quiz complet */}
        {qr.length>0&&<>
          <h4 style={{fontSize:13,fontWeight:700,color:T.text2,marginBottom:10,letterSpacing:.5,textTransform:"uppercase"}}>Historique complet ({qr.length} tentatives)</h4>
          <div style={{maxHeight:180,overflowY:"auto",marginBottom:22,borderRadius:10,border:`1px solid ${T.border}`}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
              <thead><tr style={{background:T.surface}}>
                {["Thème","Mode","Score","Date"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",color:T.text2,fontWeight:600,borderBottom:`1px solid ${T.border}`}}>{h}</th>)}
              </tr></thead>
              <tbody>
                {qr.map(r=>(
                  <tr key={r.id} style={{borderBottom:`1px solid ${T.border}`}}>
                    <td style={{padding:"7px 12px",color:T.text}}>{r.theme_title||r.theme_id}</td>
                    <td style={{padding:"7px 12px",color:T.text2}}>{r.mode_id}</td>
                    <td style={{padding:"7px 12px"}}>
                      <span style={{fontWeight:700,color:pctColor(r.pct)}}>{r.score}/{r.total}</span>
                      <span style={{color:T.text3,marginLeft:6}}>{r.pct}%</span>
                    </td>
                    <td style={{padding:"7px 12px",color:T.text3}}>{fmt(r.played_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>}

        {/* Notes */}
        {sg.length>0&&<>
          <h4 style={{fontSize:13,fontWeight:700,color:T.text2,marginBottom:10,letterSpacing:.5,textTransform:"uppercase"}}>Notes attribuées</h4>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {sg.map(g=>{
              const pct=g.max_grade?Math.round(g.grade/g.max_grade*100):null;
              return(
                <div key={g.id} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:T.surface,borderRadius:10,border:`1px solid ${T.border}`}}>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:13}}>{g.label}</div>
                    {g.comment&&<div style={{fontSize:11,color:T.text2,marginTop:2}}>{g.comment}</div>}
                  </div>
                  <div style={{fontSize:18,fontWeight:800,color:pct!=null?pctColor(pct):T.text}}>
                    {g.grade}/{g.max_grade}
                  </div>
                  <div style={{fontSize:11,color:T.text3}}>{fmtDate(g.graded_at)}</div>
                  <button onClick={()=>onDeleteGrade(g.id)} style={{background:"transparent",border:"none",color:T.text3,cursor:"pointer",fontSize:14,padding:"2px 6px"}} title="Supprimer">🗑</button>
                </div>
              );
            })}
          </div>
        </>}

        {qr.length===0&&fc.length===0&&<div style={{textAlign:"center",color:T.text3,padding:"30px 0",fontSize:13}}>Aucune activité enregistrée pour le moment.</div>}
      </div>
    </div>
  );
}

// ─── MAIN ADMIN DASHBOARD ───
export default function AdminDashboard({onClose}){
  const [authed,setAuthed]=useState(false);
  const [pw,setPw]=useState("");
  const [pwError,setPwError]=useState(false);
  const [students,setStudents]=useState([]);
  const [quizResults,setQuizResults]=useState([]);
  const [fichesDone,setFichesDone]=useState([]);
  const [grades,setGrades]=useState([]);
  const [loading,setLoading]=useState(false);
  const [selectedStudent,setSelectedStudent]=useState(null);
  const [addGradeFor,setAddGradeFor]=useState(null);
  const [filterFiliere,setFilterFiliere]=useState("all");
  const [sortBy,setSortBy]=useState("last_seen"); // last_seen | name | avg | quizzes
  const [refreshKey,setRefreshKey]=useState(0);

  const login=()=>{
    if(pw===ADMIN_PASS){setAuthed(true);setPwError(false);}
    else{setPwError(true);setPw("");}
  };

  const [dbError,setDbError]=useState(null);

  const loadData=useCallback(async()=>{
    setLoading(true);
    setDbError(null);
    const [s,q,f,g]=await Promise.all([
      supabase.from("students").select("*").order("last_seen_at",{ascending:false}),
      supabase.from("quiz_results").select("*").order("played_at",{ascending:false}),
      supabase.from("fiche_completions").select("*"),
      supabase.from("grades").select("*").order("graded_at",{ascending:false}),
    ]);
    // Detect table-not-found errors
    const errors=[s,q,f,g].filter(r=>r.error).map(r=>r.error.message);
    if(errors.length>0){
      const isTableMissing=errors.some(e=>e.includes("does not exist")||e.includes("relation")||e.includes("42P01"));
      setDbError(isTableMissing
        ? "⚠️ Tables Supabase introuvables — avez-vous exécuté le fichier supabase_setup.sql dans l'éditeur SQL de Supabase ?"
        : "Erreur Supabase : "+errors[0]);
    }
    setStudents(s.data||[]);
    setQuizResults(q.data||[]);
    setFichesDone(f.data||[]);
    setGrades(g.data||[]);
    setLoading(false);
  },[]);

  useEffect(()=>{ if(authed) loadData(); },[authed,loadData,refreshKey]);

  const refresh=()=>setRefreshKey(k=>k+1);

  const deleteGrade=async(id)=>{
    await supabase.from("grades").delete().eq("id",id);
    refresh();
  };

  // Aggregate stats per student
  const statsMap={};
  students.forEach(s=>{
    const qr=quizResults.filter(r=>r.student_name===s.name);
    const fc=fichesDone.filter(f=>f.student_name===s.name);
    const sg=grades.filter(g=>g.student_name===s.name);
    const avgPct=avg(qr.map(r=>r.pct));
    statsMap[s.name]={...s,quizCount:qr.length,ficheCount:fc.length,avgPct,gradeCount:sg.length};
  });

  let rows=Object.values(statsMap);
  if(filterFiliere!=="all") rows=rows.filter(r=>r.filiere===filterFiliere);
  rows.sort((a,b)=>{
    if(sortBy==="name") return a.name.localeCompare(b.name);
    if(sortBy==="avg") return (b.avgPct||0)-(a.avgPct||0);
    if(sortBy==="quizzes") return b.quizCount-a.quizCount;
    return new Date(b.last_seen_at)-new Date(a.last_seen_at);
  });

  // Global stats
  const totalAttempts=quizResults.length;
  const globalAvg=avg(quizResults.map(r=>r.pct));
  const totalFiches=fichesDone.length;

  // Export CSV
  const exportCSV=()=>{
    const header=["Étudiant","Filière","Quiz passés","Score moyen %","Fiches lues","Dernière connexion"];
    const csvRows=rows.map(r=>[r.name,FILIERES[r.filiere]||r.filiere,r.quizCount,r.avgPct??"",(r.ficheCount),fmtDate(r.last_seen_at)]);
    const csv=[header,...csvRows].map(r=>r.join(";")).join("\n");
    const blob=new Blob([csv],{type:"text/csv;charset=utf-8;"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;a.download="picpus_progression.csv";a.click();
    URL.revokeObjectURL(url);
  };

  // ── LOGIN SCREEN ──
  if(!authed) return(
    <div style={{position:"fixed",inset:0,background:"#07060BEE",backdropFilter:"blur(16px)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:T.card,border:`1px solid ${T.border2}`,borderRadius:20,padding:"36px 32px",maxWidth:380,width:"100%",animation:"fu .3s"}}>
        <div style={{fontSize:32,textAlign:"center",marginBottom:12}}>🔐</div>
        <h2 style={{textAlign:"center",fontWeight:800,marginBottom:6}}>Espace Administration</h2>
        <p style={{color:T.text2,fontSize:13,textAlign:"center",marginBottom:24}}>Accès réservé aux formateurs</p>
        <input
          type="password" autoFocus value={pw}
          onChange={e=>setPw(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&login()}
          placeholder="Mot de passe admin"
          style={{width:"100%",padding:"12px 14px",borderRadius:10,border:`1.5px solid ${pwError?T.red:T.border2}`,background:T.surface,color:T.text,fontSize:14,outline:"none",fontFamily:"inherit",marginBottom:8,boxSizing:"border-box"}}
        />
        {pwError&&<div style={{color:T.red,fontSize:12,marginBottom:8}}>Mot de passe incorrect</div>}
        <button onClick={login} style={{width:"100%",padding:"12px",borderRadius:10,background:"linear-gradient(135deg,#C57AFF,#902EDB)",color:"#fff",fontSize:14,fontWeight:700,border:"none",cursor:"pointer",marginBottom:12,fontFamily:"inherit"}}>
          Accéder au tableau de bord
        </button>
        <button onClick={onClose} style={{width:"100%",padding:"10px",borderRadius:10,background:"transparent",color:T.text2,fontSize:13,fontWeight:600,border:`1px solid ${T.border2}`,cursor:"pointer",fontFamily:"inherit"}}>
          Retour
        </button>
      </div>
    </div>
  );

  // ── DASHBOARD ──
  return(
    <div style={{position:"fixed",inset:0,background:T.bg,zIndex:2000,overflowY:"auto",fontFamily:"'Sora',system-ui,sans-serif"}}>
      <style>{`@keyframes fu{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`}</style>

      {/* Top bar */}
      <div style={{position:"sticky",top:0,zIndex:10,background:`${T.bg}F0`,backdropFilter:"blur(20px)",borderBottom:`1px solid ${T.border}`,padding:"14px 24px",display:"flex",alignItems:"center",gap:12}}>
        <div style={{width:34,height:34,borderRadius:10,background:"linear-gradient(135deg,#C57AFF,#902EDB)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:900,color:"#fff",flexShrink:0}}>A</div>
        <div style={{flex:1}}>
          <div style={{fontWeight:800,fontSize:15}}>Administration — Picpus House</div>
          <div style={{fontSize:10,color:T.text3,fontWeight:600,letterSpacing:1.5,textTransform:"uppercase"}}>Suivi de progression · Formateurs</div>
        </div>
        <Btn onClick={refresh} outline sm>{loading?"…":"↺ Actualiser"}</Btn>
        <Btn onClick={exportCSV} color={T.green} sm>⬇ CSV</Btn>
        <Btn onClick={onClose} danger sm>✕ Fermer</Btn>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"24px 20px 60px"}}>

        {/* Global stats */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:28}}>
          {[
            {label:"Étudiants inscrits",val:students.length,icon:"👤",c:T.accent},
            {label:"Tentatives de quiz",val:totalAttempts,icon:"🎯",c:T.blue},
            {label:"Score moyen global",val:globalAvg!=null?`${globalAvg}%`:"—",icon:"📊",c:globalAvg!=null?pctColor(globalAvg):T.text3},
            {label:"Fiches consultées",val:totalFiches,icon:"📝",c:T.green},
          ].map(s=>(
            <div key={s.label} style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:14,padding:"18px 20px"}}>
              <div style={{fontSize:22,marginBottom:6}}>{s.icon}</div>
              <div style={{fontSize:26,fontWeight:800,color:s.c}}>{s.val}</div>
              <div style={{fontSize:11,color:T.text2,marginTop:3}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          <span style={{fontSize:12,color:T.text2,fontWeight:600}}>Filière :</span>
          {[["all","Toutes"],["bioalc","BIOALC"],["abm","ABM"],["bm","BM"],["ol","OL"],["fed","FED"],["prodent","PRODENT"]].map(([k,l])=>(
            <button key={k} onClick={()=>setFilterFiliere(k)} style={{padding:"5px 12px",borderRadius:8,border:`1.5px solid ${filterFiliere===k?(FILIERE_COLOR[k]||T.accent)+"50":T.border}`,background:filterFiliere===k?`${FILIERE_COLOR[k]||T.accent}12`:"transparent",color:filterFiliere===k?(FILIERE_COLOR[k]||T.accent):T.text2,fontSize:11.5,fontWeight:600,cursor:"pointer"}}>
              {l}
            </button>
          ))}
          <span style={{fontSize:12,color:T.text2,fontWeight:600,marginLeft:8}}>Trier par :</span>
          {[["last_seen","Dernière connexion"],["name","Nom"],["avg","Score moyen"],["quizzes","Nb quiz"]].map(([k,l])=>(
            <button key={k} onClick={()=>setSortBy(k)} style={{padding:"5px 12px",borderRadius:8,border:`1.5px solid ${sortBy===k?T.accent+"50":T.border}`,background:sortBy===k?`${T.accent}12`:"transparent",color:sortBy===k?T.accent:T.text2,fontSize:11.5,fontWeight:600,cursor:"pointer"}}>
              {l}
            </button>
          ))}
        </div>

        {/* DB Error banner */}
        {dbError&&<div style={{margin:"0 0 20px 0",padding:"16px 20px",borderRadius:12,background:`${T.red}18`,border:`1px solid ${T.red}40`,color:T.red,fontSize:13,lineHeight:1.6}}>
          <strong>🔴 Erreur de connexion Supabase</strong><br/>
          {dbError}<br/>
          <span style={{color:T.text2,fontSize:12,marginTop:6,display:"block"}}>
            → Allez dans votre projet Supabase › SQL Editor › New query, collez et exécutez le contenu du fichier <code style={{background:`${T.red}20`,padding:"2px 6px",borderRadius:4}}>supabase_setup.sql</code> présent à la racine du projet.
          </span>
        </div>}

        {/* Students table */}
        {loading?<div style={{textAlign:"center",padding:"60px 0",color:T.text2}}>Chargement…</div>:(
          rows.length===0
            ?<div style={{textAlign:"center",padding:"60px 0",color:T.text3,fontSize:14}}>{dbError?"Impossible de charger les données (voir l'erreur ci-dessus).":"Aucun étudiant enregistré pour l'instant."}</div>
            :<div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:16,overflow:"hidden"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
                <thead>
                  <tr style={{background:T.surface}}>
                    {["Étudiant","Filière","Quiz passés","Score moyen","Fiches lues","Notes","Dernière connexion","Actions"].map(h=>(
                      <th key={h} style={{padding:"12px 14px",textAlign:"left",color:T.text2,fontWeight:600,fontSize:11.5,letterSpacing:.3,borderBottom:`1px solid ${T.border}`}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r,i)=>{
                    const fc=FILIERE_COLOR[r.filiere]||T.accent;
                    return(
                      <tr key={r.name} style={{borderBottom:i<rows.length-1?`1px solid ${T.border}`:"none",transition:"background .15s"}}
                        onMouseEnter={e=>e.currentTarget.style.background=T.surface}
                        onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                        <td style={{padding:"12px 14px"}}>
                          <div style={{display:"flex",alignItems:"center",gap:8}}>
                            <div style={{width:30,height:30,borderRadius:8,background:`${fc}20`,border:`1px solid ${fc}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:fc,flexShrink:0}}>
                              {r.name.slice(0,2).toUpperCase()}
                            </div>
                            <span style={{fontWeight:700}}>{r.name}</span>
                          </div>
                        </td>
                        <td style={{padding:"12px 14px"}}><Pill c={fc}>{FILIERES[r.filiere]||r.filiere||"—"}</Pill></td>
                        <td style={{padding:"12px 14px",fontWeight:700,color:r.quizCount>0?T.text:T.text3}}>{r.quizCount}</td>
                        <td style={{padding:"12px 14px"}}>
                          {r.avgPct!=null
                            ?<div style={{display:"flex",alignItems:"center",gap:8}}>
                                <div style={{width:60,height:5,background:T.border2,borderRadius:3,overflow:"hidden"}}>
                                  <div style={{height:"100%",width:`${r.avgPct}%`,background:pctColor(r.avgPct),borderRadius:3}}/>
                                </div>
                                <span style={{fontWeight:700,color:pctColor(r.avgPct)}}>{r.avgPct}%</span>
                              </div>
                            :<span style={{color:T.text3}}>—</span>}
                        </td>
                        <td style={{padding:"12px 14px",fontWeight:r.ficheCount>0?700:400,color:r.ficheCount>0?T.text:T.text3}}>{r.ficheCount}</td>
                        <td style={{padding:"12px 14px",color:r.gradeCount>0?T.yellow:T.text3}}>{r.gradeCount>0?`${r.gradeCount} note${r.gradeCount>1?"s":""}`:"-"}</td>
                        <td style={{padding:"12px 14px",color:T.text3,fontSize:11.5}}>{fmt(r.last_seen_at)}</td>
                        <td style={{padding:"12px 14px"}}>
                          <div style={{display:"flex",gap:6}}>
                            <Btn onClick={()=>setSelectedStudent(r)} sm outline>Détail</Btn>
                            <Btn onClick={()=>setAddGradeFor(r)} color={T.yellow} sm>+ Note</Btn>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
        )}

        {/* Notes section */}
        {grades.length>0&&<>
          <h3 style={{fontSize:15,fontWeight:800,marginTop:32,marginBottom:14}}>📋 Toutes les notes attribuées</h3>
          <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:16,overflow:"hidden"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12.5}}>
              <thead><tr style={{background:T.surface}}>
                {["Étudiant","Filière","Évaluation","Note","Commentaire","Date",""].map(h=><th key={h} style={{padding:"10px 14px",textAlign:"left",color:T.text2,fontWeight:600,borderBottom:`1px solid ${T.border}`}}>{h}</th>)}
              </tr></thead>
              <tbody>
                {grades.map((g,i)=>{
                  const pct=g.max_grade?Math.round(g.grade/g.max_grade*100):null;
                  return(
                    <tr key={g.id} style={{borderBottom:i<grades.length-1?`1px solid ${T.border}`:"none"}}>
                      <td style={{padding:"10px 14px",fontWeight:700}}>{g.student_name}</td>
                      <td style={{padding:"10px 14px"}}><Pill c={FILIERE_COLOR[g.filiere]||T.accent}>{FILIERES[g.filiere]||g.filiere}</Pill></td>
                      <td style={{padding:"10px 14px"}}>{g.label}</td>
                      <td style={{padding:"10px 14px",fontWeight:800,color:pct!=null?pctColor(pct):T.text}}>{g.grade}/{g.max_grade}</td>
                      <td style={{padding:"10px 14px",color:T.text2}}>{g.comment||"—"}</td>
                      <td style={{padding:"10px 14px",color:T.text3}}>{fmtDate(g.graded_at)}</td>
                      <td style={{padding:"10px 14px"}}>
                        <button onClick={()=>deleteGrade(g.id)} style={{background:"transparent",border:"none",color:T.text3,cursor:"pointer",fontSize:14}} title="Supprimer">🗑</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>}
      </div>

      {/* Modals */}
      {selectedStudent&&(
        <StudentDetail
          student={selectedStudent}
          quizResults={quizResults}
          fichesDone={fichesDone}
          grades={grades}
          onClose={()=>setSelectedStudent(null)}
          onAddGrade={()=>{setAddGradeFor(selectedStudent);setSelectedStudent(null);}}
          onDeleteGrade={async(id)=>{await deleteGrade(id);refresh();}}
        />
      )}
      {addGradeFor&&(
        <AddGradeModal
          student={addGradeFor}
          onClose={()=>setAddGradeFor(null)}
          onSave={()=>{setAddGradeFor(null);refresh();}}
        />
      )}
    </div>
  );
}
