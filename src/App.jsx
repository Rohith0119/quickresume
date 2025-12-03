import React from 'react'

export default function App() {
  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(180deg,#f8fafc,#fff)', color:'#0f172a', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"}}>
      <div style={{maxWidth:1100, margin:'0 auto', padding:32}}>
        <header style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div style={{fontWeight:700,fontSize:20}}>quickresume</div>
          <nav>
            <a href="#features" style={{marginRight:12,color:'#64748b',textDecoration:'none'}}>Features</a>
            <a href="#pricing" style={{color:'#64748b',textDecoration:'none'}}>Pricing</a>
          </nav>
        </header>

        <main style={{display:'flex', gap:32, alignItems:'center', marginTop:40}}>
          <div style={{flex:1}}>
            <h1 style={{fontSize:40,lineHeight:1.05,margin:0}}>Create professional resumes in minutes</h1>
            <p style={{color:'#64748b',marginTop:12}}>Quickly build tailored resumes with clean layouts, AI-assisted suggestions, and downloadable PDFs.</p>
            <div style={{marginTop:20}}>
              <a href="#" style={{display:'inline-block', padding:'10px 18px', borderRadius:8, background:'#4f46e5', color:'#fff', textDecoration:'none'}}>Get started</a>
              <a href="#" style={{display:'inline-block', padding:'10px 18px', borderRadius:8, marginLeft:10, border:'1px solid #e6eef8', color:'#0f172a', textDecoration:'none'}}>See demo</a>
            </div>
            <div style={{display:'flex', gap:12, marginTop:18}}>
              <div style={{background:'#fff', padding:10, borderRadius:8, boxShadow:'0 6px 18px rgba(2,6,23,0.06)'}}>Fast templates</div>
              <div style={{background:'#fff', padding:10, borderRadius:8, boxShadow:'0 6px 18px rgba(2,6,23,0.06)'}}>AI suggestions</div>
              <div style={{background:'#fff', padding:10, borderRadius:8, boxShadow:'0 6px 18px rgba(2,6,23,0.06)'}}>Export PDF</div>
            </div>
          </div>

          <div style={{width:420, background:'#fff', padding:20, borderRadius:12, boxShadow:'0 8px 24px rgba(2,6,23,0.08)'}}>
            <form>
              <label>Full name</label>
              <input placeholder="Jane Doe" style={{width:'100%', padding:10, border:'1px solid #e6eef8', borderRadius:8, marginTop:8}} />
              <label style={{marginTop:8, display:'block'}}>Job title</label>
              <input placeholder="Product Designer" style={{width:'100%', padding:10, border:'1px solid #e6eef8', borderRadius:8, marginTop:8}} />
              <label style={{marginTop:8, display:'block'}}>Email</label>
              <input placeholder="jane@example.com" style={{width:'100%', padding:10, border:'1px solid #e6eef8', borderRadius:8, marginTop:8}} />
              <div style={{display:'flex', gap:8, marginTop:12}}>
                <button type="button" style={{flex:1, background:'#4f46e5', color:'#fff', border:'none', padding:10, borderRadius:8}}>Create resume</button>
                <button type="button" style={{flex:1, border:'1px solid #e6eef8', padding:10, borderRadius:8, background:'#fff'}}>Import</button>
              </div>
            </form>
          </div>
        </main>

        <footer style={{marginTop:48, color:'#64748b', fontSize:14}}>© {new Date().getFullYear()} quickresume</footer>
      </div>
    </div>
  )
}
