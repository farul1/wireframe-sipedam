const roles = {
  super_admin: {
    label: 'Super Admin', user: 'Syafarul Priwantoro', subtitle: 'Akses penuh seluruh modul Nama Website',
    menus: [
      { label: 'Dashboard', page: 'dashboard' },
      { label: 'Proses Pengajuan', page: 'process' },
      { label: 'ORMAWA/UKM', children: [
        { label: 'Proposal', page: 'proposal_ormawa' }, { label: 'LPJ', page: 'lpj_ormawa' }, { label: 'Monitoring Organisasi', page: 'monitoring' }, { label: 'Jadwal Presentasi', page: 'jadwal_ormawa' }, { label: 'Manajemen Triwulan', page: 'triwulan' }
      ]},
      { label: 'Kompetisi Mandiri', children: [
        { label: 'Pengajuan', page: 'kompetisi' }, { label: 'LPJ', page: 'lpj_kompetisi' }, { label: 'Jadwal Presentasi', page: 'jadwal_kompetisi' }
      ]},
      { label: 'Kalender', page: 'calendar' },
      { label: 'Manajemen User', children: [{ label: 'User ORMAWA/UKM', page: 'users_ormawa' }, { label: 'User Mahasiswa Kompetisi', page: 'users_kompetisi' }]},
      { label: 'Portal Kemahasiswaan', children: [{ label: 'Dashboard Portal', page: 'portal' }, { label: 'Hero', page: 'portal_hero' }, { label: 'Section', page: 'portal_section' }, { label: 'Link', page: 'portal_link' }, { label: 'Announcement', page: 'portal_announcement' }, { label: 'Statistik', page: 'portal_stats' }, { label: 'Preview', page: 'portal_preview' }]},
      { label: 'Master Data', page: 'master' }, { label: 'Website Settings', page: 'settings' }, { label: 'Template Dokumen', page: 'templates' }, { label: 'Activity Logs', page: 'logs' }, { label: 'Notifikasi', page: 'notifications' }, { label: 'Profil', page: 'profile' }
    ]
  },
  admin_ormawa: {
    label: 'Admin Ormawa UKM', user: 'Admin Kemahasiswaan', subtitle: 'Review proposal, LPJ, dan monitoring organisasi',
    menus: [
      { label: 'Dashboard', page: 'dashboard' },
      { label: 'Proses Pengajuan', page: 'process' },
      { label: 'ORMAWA/UKM', children: [{ label: 'Proposal', page: 'proposal_ormawa' }, { label: 'LPJ', page: 'lpj_ormawa' }, { label: 'Monitoring Organisasi', page: 'monitoring' }, { label: 'Jadwal Presentasi', page: 'jadwal_ormawa' }, { label: 'Manajemen Triwulan', page: 'triwulan' }]},
      { label: 'Kalender', page: 'calendar' }, { label: 'Manajemen User Ormawa/UKM', page: 'users_ormawa' }, { label: 'Portal Kemahasiswaan', page: 'portal' }, { label: 'Master Data', page: 'master' }, { label: 'Website Settings', page: 'settings' }, { label: 'Template Dokumen', page: 'templates' }, { label: 'Activity Logs', page: 'logs' }, { label: 'Notifikasi', page: 'notifications' }, { label: 'Profil', page: 'profile' }
    ]
  },
  admin_kompetisi: {
    label: 'Admin Kompetisi Mandiri', user: 'Admin Kompetisi', subtitle: 'Review kompetisi mandiri dan LPJ mahasiswa',
    menus: [
      { label: 'Dashboard', page: 'dashboard' },
      { label: 'Proses Pengajuan', page: 'process' },
      { label: 'Kompetisi Mandiri', children: [{ label: 'Pengajuan', page: 'kompetisi' }, { label: 'LPJ', page: 'lpj_kompetisi' }, { label: 'Jadwal Presentasi', page: 'jadwal_kompetisi' }]},
      { label: 'Kalender', page: 'calendar' }, { label: 'Manajemen User Kompetisi', page: 'users_kompetisi' }, { label: 'Portal Kemahasiswaan', page: 'portal' }, { label: 'Master Data', page: 'master' }, { label: 'Website Settings', page: 'settings' }, { label: 'Template Dokumen', page: 'templates' }, { label: 'Activity Logs', page: 'logs' }, { label: 'Notifikasi', page: 'notifications' }, { label: 'Profil', page: 'profile' }
    ]
  },
  organization: {
    label: 'Organisasi / Ormawa UKM', user: 'Organisasi A', subtitle: 'Pengajuan proposal kegiatan dan LPJ ORMAWA/UKM',
    menus: [
      { label: 'Dashboard', page: 'dashboard' },
      { label: 'Proses Pengajuan', page: 'process' },
      { label: 'ORMAWA/UKM', children: [{ label: 'Proposal', page: 'proposal_ormawa' }, { label: 'LPJ', page: 'lpj_ormawa' }, { label: 'Jadwal Presentasi', page: 'jadwal_ormawa' }]},
      { label: 'Kalender', page: 'calendar' }, { label: 'Notifikasi', page: 'notifications' }, { label: 'Profil', page: 'profile' }
    ]
  },
  mahasiswa_kompetisi: {
    label: 'Mahasiswa Kompetisi Mandiri', user: 'Nadia Putri', subtitle: 'Pengajuan dana kompetisi mandiri dan LPJ pribadi',
    menus: [
      { label: 'Dashboard', page: 'dashboard' },
      { label: 'Proses Pengajuan', page: 'process' },
      { label: 'Kompetisi Mandiri', children: [{ label: 'Pengajuan', page: 'kompetisi' }, { label: 'LPJ', page: 'lpj_kompetisi' }, { label: 'Jadwal Presentasi', page: 'jadwal_kompetisi' }]},
      { label: 'Kalender', page: 'calendar' }, { label: 'Notifikasi', page: 'notifications' }, { label: 'Profil', page: 'profile' }
    ]
  }
};

const pageTitles = {
  dashboard: 'Dashboard', proposal_ormawa: 'Proposal ORMAWA/UKM', lpj_ormawa: 'LPJ ORMAWA/UKM', monitoring: 'Monitoring Organisasi', jadwal_ormawa: 'Jadwal Presentasi ORMAWA/UKM', triwulan: 'Manajemen Triwulan', kompetisi: 'Pengajuan Kompetisi Mandiri', lpj_kompetisi: 'LPJ Kompetisi Mandiri', jadwal_kompetisi: 'Jadwal Presentasi Kompetisi', calendar: 'Kalender', users_ormawa: 'Manajemen User ORMAWA/UKM', users_kompetisi: 'Manajemen User Mahasiswa Kompetisi', portal: 'Portal Kemahasiswaan', portal_hero: 'Hero Portal', portal_section: 'Section Portal', portal_link: 'Link Portal', portal_announcement: 'Announcement Portal', portal_stats: 'Statistik Portal', portal_preview: 'Preview Portal', master: 'Master Data', settings: 'Website Settings', templates: 'Template Dokumen', logs: 'Activity Logs', notifications: 'Notifikasi', profile: 'Profil', process: 'Proses Pengajuan', tracking: 'Tracking Realtime', detail_pengajuan: 'Detail Pengajuan'
};

const rows = [
  ['ORMAWA/UKM', 'BEM Telkom University Surabaya', 'Festival Inovasi Mahasiswa 2026', '12 Jul 2026', 'Menunggu Review', 'review'],
  ['Kompetisi Mandiri', 'Nadia Putri - 1204200188', 'National Business Plan Competition', '11 Jul 2026', 'Revisi Diminta', 'revision'],
  ['ORMAWA/UKM', 'HIMA Sistem Informasi', 'Workshop UI/UX untuk Mahasiswa', '10 Jul 2026', 'Disetujui', 'approved'],
  ['Kompetisi Mandiri', 'Raka Aditya - 1204210091', 'AI Innovation Challenge', '09 Jul 2026', 'Presentasi Dijadwalkan', 'pending'],
  ['ORMAWA/UKM', 'UKM Robotika', 'Robotic Exhibition', '08 Jul 2026', 'Ditolak', 'rejected']
];

const notifications = [
  ['Proposal baru masuk', 'Organisasi A mengirim proposal Festival Inovasi Mahasiswa.'],
  ['LPJ menunggu review', 'UKM Musik mengirim laporan pertanggungjawaban.'],
  ['User pending approval', '3 akun organisasi menunggu persetujuan.'],
  ['Jadwal presentasi', 'Presentasi Kompetisi Mandiri besok pukul 10.00.'],
  ['Template diperbarui', 'Template LPJ versi baru sudah aktif.']
];

let currentRole = 'super_admin';
let currentPage = 'dashboard';

const qs = (id) => document.getElementById(id);

function init() {
  fillRoleSelect(qs('loginRole'));
  fillRoleSelect(qs('roleSwitcher'));
  qs('loginBtn').addEventListener('click', login);
  qs('logoutBtn').addEventListener('click', logout);
  qs('roleSwitcher').addEventListener('change', (e) => switchRole(e.target.value));
  qs('themeBtn').addEventListener('click', () => document.body.classList.toggle('dark'));
  qs('menuBtn').addEventListener('click', () => qs('sidebar').classList.toggle('open'));
  qs('notifBtn').addEventListener('click', () => qs('notificationDrawer').classList.toggle('open'));
  qs('closeNotif').addEventListener('click', () => qs('notificationDrawer').classList.remove('open'));
  ['modalClose','modalCancel','modalOk'].forEach(id => qs(id).addEventListener('click', closeModal));
  renderNotifications();
}

function fillRoleSelect(select) {
  select.innerHTML = Object.entries(roles).map(([key, role]) => `<option value="${key}">${role.label}</option>`).join('');
}

function login() {
  currentRole = qs('loginRole').value;
  qs('authScreen').classList.add('is-hidden');
  qs('appShell').classList.remove('is-hidden');
  switchRole(currentRole);
}

function logout() {
  qs('appShell').classList.add('is-hidden');
  qs('authScreen').classList.remove('is-hidden');
  qs('sidebar').classList.remove('open');
}

function switchRole(roleKey) {
  currentRole = roleKey;
  currentPage = 'dashboard';
  qs('roleSwitcher').value = roleKey;
  const role = roles[roleKey];
  qs('userName').textContent = role.user;
  qs('userRole').textContent = role.label;
  qs('rolePill').innerHTML = `${role.label}<br><span>${role.subtitle}</span>`;
  renderSidebar();
  renderPage('dashboard');
}

function renderSidebar() {
  const menu = roles[currentRole].menus;
  qs('sidebarNav').innerHTML = menu.map(item => {
    if (item.children) {
      const active = item.children.some(child => child.page === currentPage) ? 'active' : '';
      return `<div class="nav-section"><button class="nav-title ${active}" type="button">${item.label}<span>+</span></button><div class="nav-children">${item.children.map(child => navLink(child)).join('')}</div></div>`;
    }
    return navLink(item);
  }).join('');
  document.querySelectorAll('[data-page]').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); renderPage(el.dataset.page); qs('sidebar').classList.remove('open'); }));
}

function navLink(item) {
  const active = item.page === currentPage ? 'active' : '';
  const badge = ['proposal_ormawa','kompetisi','users_ormawa','users_kompetisi','notifications'].includes(item.page) ? '<span class="badge-count">3</span>' : '';
  return `<a href="${exportUrl(currentRole, item.page)}" class="nav-link ${active}" data-page="${item.page}"><span>${item.label}</span>${badge}</a>`;
}

function exportUrl(role = currentRole, page = 'dashboard', screen = '') {
  const params = new URLSearchParams();
  if (screen) params.set('screen', screen);
  params.set('role', role);
  params.set('page', page);
  return `index.html?${params.toString()}`;
}

renderPage = function(page) {
  currentPage = page;
  qs('pageTitle').textContent = pageTitles[page] || 'Dashboard';
  qs('pageKicker').textContent = roles[currentRole].label;
  renderSidebar();
  if (page === 'dashboard') qs('content').innerHTML = dashboard();
  else if (page === 'detail_pengajuan') qs('content').innerHTML = detailPage();
  else if (page === 'process') qs('content').innerHTML = processPage();
  else if (page === 'tracking') qs('content').innerHTML = trackingPage();
  else if (page === 'profile') qs('content').innerHTML = profilePage();
  else if (page === 'settings') qs('content').innerHTML = settingsPage();
  else if (page === 'logs') qs('content').innerHTML = logsPage();
  else if (page === 'notifications') qs('content').innerHTML = notificationsPage();
  else qs('content').innerHTML = genericPage(page);
  bindActions();
}

function dashboard() {
  const role = roles[currentRole];
  return `
    <div class="hero">
      <div><span class="eyebrow">${role.label}</span><h1>Selamat datang, ${role.user}</h1><p>${role.subtitle}. Pantau status pengajuan, LPJ, jadwal presentasi, notifikasi, dan aktivitas terbaru dari satu dashboard.</p></div>
      <div class="hero-actions"><button class="primary-btn" data-action="Export dashboard">Export Ringkasan</button><button class="ghost-btn" data-page="notifications">Lihat Notifikasi</button></div>
    </div>
    <div class="stat-grid">${statCards().map(card).join('')}</div>
    <div class="dashboard-grid">
      <section class="panel"><div class="panel-head"><div><h3>Tren Pengajuan</h3><p>Ringkasan pengajuan per bulan</p></div><button class="mini-btn">2026</button></div>${barChart()}</section>
      <section class="panel"><div class="panel-head"><div><h3>Activity Logs</h3><p>Aktivitas terbaru sistem</p></div></div>${timeline()}</section>
    </div>
    <section class="panel" style="margin-top:18px"><div class="panel-head"><div><h3>Pengajuan Terbaru</h3><p>Proposal, kompetisi, dan LPJ terbaru</p></div><button class="primary-btn" data-action="Export data">Export</button></div>${table(rows)}</section>
  `;
}

function statCards() {
  if (currentRole === 'organization') return [['Total Proposal',12,'Pengajuan organisasi'],['Revisi Aktif',2,'Perlu tindak lanjut'],['Disetujui',7,'Proposal lolos review'],['LPJ',5,'Laporan kegiatan']];
  if (currentRole === 'mahasiswa_kompetisi') return [['Pengajuan Kompetisi',4,'Proposal pribadi'],['Revisi',1,'Menunggu perbaikan'],['Jadwal Presentasi',2,'Agenda terdekat'],['LPJ',2,'Laporan kompetisi']];
  if (currentRole === 'admin_ormawa') return [['Proposal ORMAWA',42,'Masuk tahun ini'],['Menunggu Review',8,'Perlu verifikasi'],['LPJ Pending',5,'Menunggu review'],['User Pending',3,'Akun organisasi']];
  if (currentRole === 'admin_kompetisi') return [['Pengajuan Kompetisi',31,'Masuk tahun ini'],['Review Pending',6,'Perlu tindak lanjut'],['LPJ Kompetisi',9,'Menunggu review'],['Presentasi',4,'Terjadwal']];
  return [['Proposal ORMAWA',42,'Semua organisasi'],['Kompetisi Mandiri',31,'Pengajuan mahasiswa'],['Total LPJ',18,'ORMAWA dan kompetisi'],['Pending User',7,'Menunggu approval'],['Menunggu Review',14,'Proposal aktif'],['Revisi',6,'Perlu perbaikan'],['Disetujui',29,'Sudah final'],['Ditolak',4,'Tidak memenuhi syarat']];
}

function card([label, value, desc]) { return `<article class="card"><small>${label}</small><strong>${value}</strong><span>${desc}</span></article>`; }
function barChart() { return `<div class="chart-bars">${[['Jan',30],['Feb',54],['Mar',42],['Apr',70],['Mei',62],['Jun',88],['Jul',76]].map(([m,h]) => `<div class="bar" style="height:${h}%"><span>${m}</span></div>`).join('')}</div>`; }
function timeline() { return `<div class="timeline">${notifications.map(n => `<div class="timeline-item"><strong>${n[0]}</strong><span>${n[1]}</span></div>`).join('')}</div>`; }

function table(data) {
  return `<div class="table-wrap"><table><thead><tr><th>Jenis</th><th>Pengaju</th><th>Judul</th><th>Tanggal</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${data.map(r => `<tr><td>${r[0]}</td><td><strong>${r[1]}</strong></td><td>${r[2]}</td><td>${r[3]}</td><td><span class="status ${r[5]}">${r[4]}</span></td><td><div class="action-row"><button class="mini-btn primary" data-page="detail_pengajuan">Detail</button><button class="mini-btn" data-modal="Approve">Approve</button><button class="mini-btn" data-modal="Revisi">Revisi</button></div></td></tr>`).join('')}</tbody></table></div>`;
}

genericPage = function(page) {
  const title = pageTitles[page] || 'Halaman';
  const isUser = page.includes('users');
  const isPortal = page.includes('portal');
  const isSchedule = page.includes('jadwal') || page === 'calendar';
  const filtered = page.includes('kompetisi') ? rows.filter(r => r[0].includes('Kompetisi')) : page.includes('ormawa') || page.includes('monitoring') ? rows.filter(r => r[0].includes('ORMAWA')) : rows;
  return `
    <div class="hero"><div><span class="eyebrow">${roles[currentRole].label}</span><h1>${title}</h1><p>${pageIntro(page)}</p></div><div class="hero-actions"><button class="primary-btn" data-action="Tambah data">Tambah Data</button><button class="ghost-btn" data-action="Export PDF/Excel">Export</button></div></div>
    <section class="panel" style="margin-top:18px">
      <div class="panel-head"><div><h3>${isPortal ? 'Konten Portal' : isSchedule ? 'Agenda dan Jadwal' : isUser ? 'Daftar User' : 'Daftar Data'}</h3><p>Search, filter status, filter tanggal, aksi detail, dan modal konfirmasi.</p></div></div>
      <div class="toolbar"><input class="filter-input" placeholder="Cari nama, judul, NIM, atau organisasi"><select class="filter-input"><option>Semua status</option><option>Menunggu Review</option><option>Revisi Diminta</option><option>Disetujui</option></select><input class="filter-input" type="date"><button class="primary-btn" data-action="Filter data">Filter</button></div>
      ${isPortal ? portalGrid() : isSchedule ? scheduleGrid() : table(isUser ? userRows() : filtered)}
    </section>
  `;
}

function pageIntro(page) {
  if (page.includes('proposal')) return 'Kelola proposal kegiatan ORMAWA/UKM lengkap dengan review, revisi, hardcopy, presentasi, dan export.';
  if (page.includes('kompetisi')) return 'Kelola pengajuan kompetisi mandiri mulai dari proposal, review admin, presentasi, sampai LPJ.';
  if (page.includes('lpj')) return 'Pantau dan verifikasi laporan pertanggungjawaban, dokumen final, catatan revisi, dan approval.';
  if (page.includes('users')) return 'Kelola pendaftaran, approval, edit data, aktivasi, dan role user.';
  if (page.includes('portal')) return 'Kelola konten portal kemahasiswaan seperti hero, section, link, announcement, statistik, dan preview.';
  return 'Halaman prototype mengikuti struktur role dan menu Nama Website.';
}

function userRows() {
  return [
    ['User', 'BEM Telkom University Surabaya', 'bem@student.telkomuniversity.ac.id', '12 Jul 2026', 'Pending Approval', 'pending'],
    ['User', 'Nadia Putri - 1204200188', 'nadia@student.telkomuniversity.ac.id', '11 Jul 2026', 'Aktif', 'approved'],
    ['User', 'UKM Musik', 'ukmmusik@student.telkomuniversity.ac.id', '10 Jul 2026', 'Pending Approval', 'pending'],
    ['User', 'Admin Kompetisi', 'adminkompetisi@telkomuniversity.ac.id', '09 Jul 2026', 'Aktif', 'approved']
  ];
}

function portalGrid() {
  return `<div class="stat-grid"><article class="card"><small>Hero Aktif</small><strong>1</strong><span>Landing portal utama</span></article><article class="card"><small>Section</small><strong>8</strong><span>Layanan dan informasi</span></article><article class="card"><small>Link</small><strong>24</strong><span>Link kemahasiswaan</span></article><article class="card"><small>Kunjungan</small><strong>1.284</strong><span>Bulan berjalan</span></article></div><div class="empty-state">Preview portal, pengaturan hero, section manager, link manager, announcement, dan statistik klik.</div>`;
}

function scheduleGrid() {
  return `<div class="stat-grid"><article class="card"><small>Hari Ini</small><strong>3</strong><span>Presentasi terjadwal</span></article><article class="card"><small>Minggu Ini</small><strong>11</strong><span>Agenda kemahasiswaan</span></article><article class="card"><small>Selesai</small><strong>19</strong><span>Presentasi selesai</span></article><article class="card"><small>Dibatalkan</small><strong>2</strong><span>Perlu reschedule</span></article></div>${table(rows.slice(0,3))}`;
}

detailPage = function() {
  const isCompetition = currentRole === 'mahasiswa_kompetisi' || currentRole === 'admin_kompetisi';
  const title = isCompetition ? 'National Business Plan Competition' : 'Festival Inovasi Mahasiswa 2026';
  const owner = isCompetition ? 'Nadia Putri - 1204200188' : 'BEM Telkom University Surabaya';
  const subtitle = isCompetition ? 'Detail Pengajuan Kompetisi Mandiri' : 'Detail Pengajuan Proposal ORMAWA/UKM';
  return `
    <div class="detail-page-stack">
      <div class="detail-header-row">
        <div>
          <span class="block-kicker">${subtitle}</span>
          <h1>${title}</h1>
        </div>
        <button class="ghost-btn" data-page="${isCompetition ? 'kompetisi' : 'proposal_ormawa'}">Kembali</button>
      </div>
      ${realtimeStepper(isCompetition)}
      <section class="tu-card detail-summary-card">
        <div class="detail-card-head">
          <div><h3>${isCompetition ? 'Ringkasan Kompetisi' : 'Ringkasan Proposal'}</h3><p>Rangkuman informasi dasar, berkas dokumen, status workflow, dan data pengaju.</p></div>
          <span class="status revision">Revisi Diminta</span>
        </div>
        <div class="detail-section">
          <h4>I. ${isCompetition ? 'Informasi Kompetisi' : 'Informasi Kegiatan'}</h4>
          <div class="native-info-grid">
            <div><p>Nama Pengaju</p><strong>${owner}</strong></div>
            <div><p>${isCompetition ? 'Nama Kompetisi' : 'Nama Kegiatan'}</p><strong>${title}</strong></div>
            <div><p>${isCompetition ? 'Penyelenggara' : 'Penanggung Jawab'}</p><strong>${isCompetition ? 'Indonesian Young Entrepreneur Forum' : 'Ketua Organisasi A'}</strong></div>
            <div><p>Tanggal Pengajuan</p><strong>12 Jul 2026 04:25</strong></div>
            <div><p>Dana Diajukan</p><strong class="money">Rp ${isCompetition ? '7.500.000' : '18.500.000'}</strong></div>
            <div><p>Status Saat Ini</p><strong>Revisi Diminta</strong></div>
          </div>
        </div>
        <div class="detail-section">
          <h4>II. Berkas Dokumen Pendukung</h4>
          <div class="file-grid">
            <div class="file-row"><strong>Proposal_Awal.pdf</strong><span>Preview / Download</span></div>
            <div class="file-row"><strong>RAB_Kegiatan.xlsx</strong><span>Preview / Download</span></div>
            <div class="file-row"><strong>Surat_Pengantar.pdf</strong><span>Preview / Download</span></div>
          </div>
        </div>
      </section>
      <div class="detail-two-col">
        <section class="flow-panel flow-panel-amber">
          <div class="flow-panel-head"><p>Catatan Review KKA</p><h3>Revisi Proposal Diperlukan</h3><span>Admin memberi catatan agar pengaju memperbaiki bagian RAB dan tujuan kegiatan sebelum proses dilanjutkan.</span></div>
          <div class="flow-panel-body">
            <div class="note-box amber">Mohon lengkapi rincian RAB, unggah proposal final revisi, dan konfirmasi kembali melalui tombol upload revisi.</div>
            <div class="action-row"><button class="primary-btn" data-modal="Upload Revisi">Upload Revisi</button><button class="ghost-btn" data-action="Hubungi admin via WhatsApp">Hubungi Admin</button></div>
          </div>
        </section>
        <section class="flow-panel flow-panel-rose">
          <div class="flow-panel-head"><p>Penyerahan Hardcopy Final</p><h3>Belum Masuk Tahap Hardcopy</h3><span>Setelah revisi diterima, sistem akan membuka instruksi hardcopy dan tracking akan bergerak otomatis.</span></div>
          <div class="flow-panel-body">
            <div class="native-steps"><div><b>1</b><span>Upload proposal final</span></div><div><b>2</b><span>Cetak hardcopy</span></div><div><b>3</b><span>Serahkan ke Lokasi Serah Berkas</span></div></div>
          </div>
        </section>
      </div>
      <section class="flow-panel flow-panel-emerald">
        <div class="flow-panel-head"><p>LPJ</p><h3>Tahap LPJ Akan Aktif Setelah Pengajuan Disetujui</h3><span>Ketika dana sudah diproses dan kegiatan selesai, tombol submit LPJ akan muncul pada halaman detail ini.</span></div>
        <div class="flow-panel-body"><button class="ghost-btn" disabled>Belum Bisa Submit LPJ</button></div>
      </section>
    </div>
  `;
}

realtimeStepper = function(isCompetition = false) {
  const items = isCompetition
    ? [
      ['Pengajuan Kompetisi', 'done', '12 Jul 2026 04:25'], ['Review KKA', 'done', '12 Jul 2026 08:10'], ['Revisi Proposal', 'active', '13 Jul 2026 04:31'], ['Presentasi', 'pending', ''], ['Upload Hardcopy Final', 'pending', ''], ['Verifikasi Hardcopy', 'pending', ''], ['Disetujui', 'pending', ''], ['LPJ', 'pending', ''], ['Selesai', 'pending', '']
    ]
    : [
      ['Pengajuan Proposal', 'done', '12 Jul 2026 04:25'], ['Review KKA', 'done', '12 Jul 2026 08:10'], ['Hasil Review KKA', 'active', '13 Jul 2026 04:31'], ['Upload & Penyerahan Hardcopy Final', 'pending', ''], ['Verifikasi Hardcopy', 'pending', ''], ['Disetujui', 'pending', ''], ['Kegiatan Berjalan', 'pending', ''], ['Menunggu LPJ', 'pending', ''], ['Review LPJ', 'pending', ''], ['Selesai', 'pending', '']
    ];
  const hidden = Math.max(items.length - 5, 0);
  return `<div class="tu-card realtime-card">
    <div class="realtime-head"><div><h3>Tracking Realtime Pengajuan</h3><p>Posisi pengajuan diperbarui berdasarkan status log terbaru.</p></div><span class="live-dot">Live</span></div>
    <div class="native-stepper-root"><div class="native-stepper-row">${items.map((item, index) => nativeStep(item, index, index < 6, items.length)).join('')}</div></div>
    <div class="realtime-bottom"><button class="ghost-btn" data-action="Tampilkan semua tahap">Tampilkan semua ${hidden} tahap lanjutan</button><span>Update terakhir: 13 Jul 2026 04:31 WIB</span></div>
  </div>`;
}

function nativeStep(item, index, visible, total) {
  const [label, state, time] = item;
  return `<div class="native-step ${state} ${visible ? '' : 'compact-hide'}">
    <div class="native-step-box">
      <div class="native-step-main"><span>${index + 1}</span><div><strong>${label}</strong><small>${time || ''}</small></div><em>${state === 'done' ? 'Selesai' : state === 'active' ? 'Berjalan' : 'Menunggu'}</em></div>
    </div>
    ${index < total - 1 ? '<i></i>' : ''}
  </div>`;
}
function settingsPage() {
  return `<div class="hero"><div><span class="eyebrow">Pengaturan Sistem</span><h1>Website Settings</h1><p>Atur logo, nama website, WhatsApp admin, notifikasi, force online, maintenance, dan link sinkronisasi rekap.</p></div></div><section class="panel" style="margin-top:18px"><div class="info-grid"><div class="info-box"><small>Nama Website</small><strong>Nama Website</strong></div><div class="info-box"><small>WhatsApp Admin</small><strong>+62 812 3456 7890</strong></div><div class="info-box"><small>Email Notification</small><strong>Aktif</strong></div><div class="info-box"><small>Force Online</small><strong>Nonaktif</strong></div></div><div style="height:16px"></div><button class="primary-btn" data-action="Simpan settings">Simpan Pengaturan</button></section>`;
}

function logsPage() { return `<section class="panel"><div class="panel-head"><div><h3>Activity Logs</h3><p>Audit aktivitas user, admin, perubahan status, dan export.</p></div><button class="primary-btn" data-action="Export logs">Export</button></div>${table(rows.map((r,i)=>['Log', roles[currentRole].user, `${r[4]} - ${r[2]}`, r[3], i % 2 ? 'Berhasil' : 'Tercatat', 'approved']))}</section>`; }
function notificationsPage() { return `<section class="panel"><div class="panel-head"><div><h3>Semua Notifikasi</h3><p>Daftar notifikasi bisnis proposal, LPJ, user, dan sistem.</p></div><button class="ghost-btn" data-action="Tandai semua dibaca">Tandai Dibaca</button></div><div class="notif-list">${notifications.map(n => `<div class="notif-item"><strong>${n[0]}</strong><span>${n[1]}</span></div>`).join('')}</div></section>`; }
function profilePage() { return `<div class="detail-layout"><section class="panel"><div class="panel-head"><div><h3>Profil</h3><p>Informasi akun dan preferensi notifikasi.</p></div></div><div class="info-grid"><div class="info-box"><small>Nama</small><strong>${roles[currentRole].user}</strong></div><div class="info-box"><small>Role</small><strong>${roles[currentRole].label}</strong></div><div class="info-box"><small>Email</small><strong>user@telkomuniversity.ac.id</strong></div><div class="info-box"><small>Status</small><strong>Aktif</strong></div></div></section><aside class="panel"><h3>Preferensi</h3><div class="demo-toggle"><div><strong>Email</strong><span>Notifikasi aktif</span></div><button class="switch is-on"><span></span></button></div><div class="demo-toggle"><div><strong>WhatsApp</strong><span>Notifikasi aktif</span></div><button class="switch is-on"><span></span></button></div></aside></div>`; }


function processPage() {
  const isCompetition = currentRole === 'mahasiswa_kompetisi' || currentRole === 'admin_kompetisi';
  const title = isCompetition ? 'Alur Pengajuan Kompetisi Mandiri' : currentRole === 'organization' ? 'Alur Pengajuan ORMAWA/UKM' : 'Alur Pengajuan Lengkap Nama Website';
  const stages = isCompetition
    ? ['Login Mahasiswa', 'Isi Data Kompetisi', 'Upload Proposal', 'Review Admin', 'Revisi / Presentasi', 'Keputusan Dana', 'Upload LPJ', 'LPJ Disetujui']
    : ['Login Organisasi', 'Isi Data Kegiatan', 'Upload Proposal', 'Review Admin', 'Revisi / Presentasi', 'Verifikasi Hardcopy', 'Dana Disetujui', 'Upload LPJ', 'LPJ Disetujui'];
  return `
    <div class="hero"><div><span class="eyebrow">Point TA</span><h1>${title}</h1><p>Bagian ini menampilkan proses pengajuan dari awal sampai selesai, sehingga alur bisnis sistem terlihat jelas saat presentasi tugas akhir.</p></div><div class="hero-actions"><button class="primary-btn" data-action="Simulasi proses">Mulai Simulasi</button><button class="ghost-btn" data-page="detail_pengajuan">Lihat Detail Tracking</button></div></div>
    <section class="panel" style="margin-top:18px"><div class="panel-head"><div><h3>End-to-End Process Flow</h3><p>Setiap tahap memiliki status, aktor, dokumen, dan aksi lanjutan.</p></div></div><div class="process-flow">${stages.map((s,i)=>`<div class="process-step ${i < 4 ? 'done' : i === 4 ? 'current' : ''}"><span>${i+1}</span><strong>${s}</strong><small>${processActor(s)}</small></div>`).join('')}</div></section>
    <div class="dashboard-grid" style="margin-top:18px"><section class="panel"><div class="panel-head"><div><h3>Detail Proses Pengajuan</h3><p>Contoh data berjalan pada workflow Nama Website.</p></div></div>${processTable(stages)}</section><aside class="panel"><div class="panel-head"><div><h3>Dokumen dan Validasi</h3><p>Kontrol kelengkapan berkas.</p></div></div><div class="checklist"><label><input type="checkbox" checked> Proposal kegiatan / kompetisi</label><label><input type="checkbox" checked> Surat pengantar / data pengaju</label><label><input type="checkbox"> Hardcopy diterima SSC</label><label><input type="checkbox"> LPJ dan lampiran bukti</label></div><div class="upload-box" style="margin-top:14px">Drop file proposal, revisi, atau LPJ di sini</div></aside></div>
  `;
}

function trackingPage() {
  return `
    <div class="hero"><div><span class="eyebrow">Realtime Tracking</span><h1>Tracking Status Pengajuan</h1><p>Fitur ini menekankan nilai utama sistem: mahasiswa/organisasi dapat melihat posisi pengajuan secara real-time, catatan admin, dokumen yang perlu diperbaiki, dan estimasi tahap berikutnya.</p></div><div class="hero-actions"><button class="primary-btn" data-action="Refresh realtime status">Refresh Status</button><button class="ghost-btn" data-action="Kirim notifikasi WA/email">Kirim Notifikasi</button></div></div>
    <div class="tracking-layout" style="margin-top:18px"><section class="panel"><div class="panel-head"><div><h3>Live Status Board</h3><p>Simulasi update status real-time pengajuan.</p></div><span class="live-dot">Live</span></div><div class="tracker-card"><div><small>Kode Tracking</small><strong>SPD-ORM-2026-0712</strong><p>Festival Inovasi Mahasiswa 2026 - BEM Telkom University Surabaya</p></div><span class="status revision">Revisi Diminta</span></div><div class="progress-track"><span style="width:58%"></span></div><div class="tracking-steps"><div class="done">Submitted</div><div class="done">Review Admin</div><div class="active">Revisi</div><div>Presentasi</div><div>Hardcopy</div><div>Approved</div><div>LPJ</div></div>${trackingTimeline()}</section><aside class="panel"><div class="panel-head"><div><h3>Realtime Feed</h3><p>Aktivitas terbaru dari sistem.</p></div></div><div class="realtime-feed"><div><strong>04:31</strong><span>Admin meminta revisi bagian RAB.</span></div><div><strong>04:30</strong><span>Dokumen proposal berhasil dipreview.</span></div><div><strong>04:28</strong><span>Notifikasi WhatsApp dikirim ke pengaju.</span></div><div><strong>04:25</strong><span>Status berubah dari Menunggu Review ke Revisi Diminta.</span></div></div><div class="next-action"><small>Tahap berikutnya</small><strong>Upload revisi proposal</strong><p>Deadline tindak lanjut: 3 hari kerja.</p><button class="primary-btn" data-modal="Upload Revisi">Upload Revisi</button></div></aside></div>
  `;
}

function processActor(stage) {
  if (stage.includes('Review') || stage.includes('Verifikasi') || stage.includes('Keputusan')) return 'Aktor: Admin Kemahasiswaan';
  if (stage.includes('LPJ')) return 'Aktor: Pengaju dan Admin';
  if (stage.includes('Presentasi')) return 'Aktor: Pengaju, Admin, Reviewer';
  return 'Aktor: Mahasiswa / Organisasi';
}

function processTable(stages) {
  return `<div class="table-wrap"><table><thead><tr><th>Tahap</th><th>Aktor</th><th>Output</th><th>Status</th></tr></thead><tbody>${stages.map((s,i)=>`<tr><td><strong>${i+1}. ${s}</strong></td><td>${processActor(s).replace('Aktor: ','')}</td><td>${i < 3 ? 'Data dan dokumen tersimpan' : i < 6 ? 'Keputusan / catatan admin' : 'Laporan final'}</td><td><span class="status ${i < 4 ? 'approved' : i === 4 ? 'revision' : 'pending'}">${i < 4 ? 'Selesai' : i === 4 ? 'Berjalan' : 'Menunggu'}</span></td></tr>`).join('')}</tbody></table></div>`;
}

function trackingTimeline() {
  const items = [['Submitted','Proposal dikirim dan nomor tracking dibuat otomatis.'],['Review Admin','Admin memeriksa dokumen, RAB, dan kelengkapan data.'],['Revisi Diminta','Catatan revisi dikirim melalui dashboard, email, dan WhatsApp.'],['Upload Revisi','Pengaju mengunggah dokumen perbaikan.'],['Presentasi / Hardcopy','Admin menjadwalkan presentasi atau verifikasi berkas fisik.'],['Approved / Rejected','Keputusan akhir ditampilkan di tracking.'],['LPJ','Setelah dana diterima, pengaju mengirim LPJ dan bukti kegiatan.']];
  return `<div class="tracking-timeline">${items.map((it,i)=>`<div class="tracking-item ${i < 2 ? 'done' : i === 2 ? 'active' : ''}"><span></span><div><strong>${it[0]}</strong><p>${it[1]}</p></div></div>`).join('')}</div>`;
}
function renderNotifications() { qs('notifList').innerHTML = notifications.map(n => `<div class="notif-item"><strong>${n[0]}</strong><span>${n[1]}</span></div>`).join(''); }
bindActions = function() { document.querySelectorAll('[data-modal]').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.modal))); document.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', () => toast(btn.dataset.action + ' berhasil.'))); document.querySelectorAll('[data-page]').forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); renderPage(btn.dataset.page); })); }
function openModal(type) { qs('modalTitle').textContent = `${type} Pengajuan`; qs('modalText').textContent = `Konfirmasi aksi ${type.toLowerCase()} untuk data yang dipilih.`; qs('modalBackdrop').classList.add('open'); }
function closeModal() { qs('modalBackdrop').classList.remove('open'); toast('Status berhasil diperbarui.'); }
function toast(message) { qs('toast').textContent = message; qs('toast').classList.add('show'); setTimeout(() => qs('toast').classList.remove('show'), 1800); }

document.addEventListener('DOMContentLoaded', init);




// --- Final TA prototype overrides: contextual detail tracking and exact submission forms ---
let selectedRecord = null;
Object.assign(pageTitles, {
  form_ormawa: 'Form Pengajuan ORMAWA/UKM',
  form_kompetisi: 'Form Pengajuan Kompetisi Mandiri'
});

table = function(data, context = 'proposal') {
  return `<div class="table-wrap"><table><thead><tr><th>Jenis</th><th>Pengaju</th><th>Judul</th><th>Tanggal</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${data.map((r, i) => `<tr><td>${r[0]}</td><td><strong>${r[1]}</strong></td><td>${r[2]}</td><td>${r[3]}</td><td><span class="status ${r[5]}">${r[4]}</span></td><td><div class="action-row"><button class="mini-btn primary" data-page="detail_pengajuan" data-record-index="${i}" data-record-context="${context}">Detail</button><button class="mini-btn" data-modal="Approve">Approve</button><button class="mini-btn" data-modal="Revisi">Revisi</button></div></td></tr>`).join('')}</tbody></table></div>`;
}

renderPage = function(page) {
  currentPage = page;
  qs('pageTitle').textContent = pageTitles[page] || 'Dashboard';
  qs('pageKicker').textContent = roles[currentRole].label;
  renderSidebar();
  if (page === 'dashboard') qs('content').innerHTML = dashboard();
  else if (page === 'detail_pengajuan') qs('content').innerHTML = detailPage();
  else if (page === 'form_ormawa') qs('content').innerHTML = submissionForm('ormawa');
  else if (page === 'form_kompetisi') qs('content').innerHTML = submissionForm('kompetisi');
  else if (page === 'process') qs('content').innerHTML = processPage();
  else if (page === 'tracking') qs('content').innerHTML = trackingPage();
  else if (page === 'profile') qs('content').innerHTML = profilePage();
  else if (page === 'settings') qs('content').innerHTML = settingsPage();
  else if (page === 'logs') qs('content').innerHTML = logsPage();
  else if (page === 'notifications') qs('content').innerHTML = notificationsPage();
  else qs('content').innerHTML = genericPage(page);
  bindActions();
}

bindActions = function() {
  document.querySelectorAll('[data-modal]').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.modal)));
  document.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', () => toast(btn.dataset.action + ' berhasil.')));
  document.querySelectorAll('[data-page]').forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (btn.dataset.recordIndex !== undefined) {
      const source = dataForContext(btn.dataset.recordContext || 'proposal');
      selectedRecord = source[Number(btn.dataset.recordIndex)] || null;
      selectedRecord = selectedRecord ? [...selectedRecord, btn.dataset.recordContext || 'proposal'] : null;
    }
    renderPage(btn.dataset.page);
    qs('sidebar').classList.remove('open');
  }));
}

function dataForContext(context) {
  if (context === 'lpj_ormawa') return [
    ['LPJ ORMAWA/UKM', 'HIMA Sistem Informasi', 'LPJ Workshop UI/UX untuk Mahasiswa', '13 Jul 2026', 'Review LPJ', 'review'],
    ['LPJ ORMAWA/UKM', 'UKM Musik', 'LPJ Music Showcase', '12 Jul 2026', 'LPJ Revisi', 'revision'],
    ['LPJ ORMAWA/UKM', 'BEM Telkom University Surabaya', 'LPJ Festival Inovasi Mahasiswa', '11 Jul 2026', 'LPJ Disetujui', 'approved']
  ];
  if (context === 'lpj_kompetisi') return [
    ['LPJ Kompetisi', 'Nadia Putri - 1204200188', 'LPJ National Business Plan Competition', '13 Jul 2026', 'Review LPJ', 'review'],
    ['LPJ Kompetisi', 'Raka Aditya - 1204210091', 'LPJ AI Innovation Challenge', '12 Jul 2026', 'LPJ Revisi', 'revision'],
    ['LPJ Kompetisi', 'Dimas Pratama - 1204210144', 'LPJ Data Science Olympiad', '10 Jul 2026', 'Selesai', 'approved']
  ];
  if (context === 'kompetisi') return rows.filter(r => r[0].includes('Kompetisi'));
  if (context === 'ormawa') return rows.filter(r => r[0].includes('ORMAWA'));
  return rows;
}

genericPage = function(page) {
  const title = pageTitles[page] || 'Halaman';
  const isUser = page.includes('users');
  const isPortal = page.includes('portal');
  const isSchedule = page.includes('jadwal') || page === 'calendar';
  const context = page === 'lpj_ormawa' ? 'lpj_ormawa' : page === 'lpj_kompetisi' ? 'lpj_kompetisi' : page.includes('kompetisi') ? 'kompetisi' : page.includes('ormawa') || page.includes('monitoring') ? 'ormawa' : 'proposal';
  const filtered = isUser ? userRows() : dataForContext(context);
  const createTarget = page === 'proposal_ormawa' ? 'form_ormawa' : page === 'kompetisi' ? 'form_kompetisi' : null;
  return `
    <div class="hero"><div><span class="eyebrow">${roles[currentRole].label}</span><h1>${title}</h1><p>${pageIntro(page)}</p></div><div class="hero-actions">${createTarget ? `<button class="primary-btn" data-page="${createTarget}">Buat Pengajuan</button>` : '<button class="primary-btn" data-action="Tambah data">Tambah Data</button>'}<button class="ghost-btn" data-action="Export PDF/Excel">Export</button></div></div>
    <section class="panel" style="margin-top:18px">
      <div class="panel-head"><div><h3>${isPortal ? 'Konten Portal' : isSchedule ? 'Agenda dan Jadwal' : isUser ? 'Daftar User' : 'Daftar Data'}</h3><p>Search, filter status, filter tanggal, aksi detail, dan modal konfirmasi.</p></div></div>
      <div class="toolbar"><input class="filter-input" placeholder="Cari nama, judul, NIM, atau organisasi"><select class="filter-input"><option>Semua status</option><option>Menunggu Review</option><option>Revisi Diminta</option><option>Review LPJ</option><option>LPJ Revisi</option><option>Disetujui</option></select><input class="filter-input" type="date"><button class="primary-btn" data-action="Filter data">Filter</button></div>
      ${isPortal ? portalGrid() : isSchedule ? scheduleGrid() : table(filtered, context)}
    </section>
  `;
}

detailPage = function() {
  const record = selectedRecord || ['ORMAWA/UKM', 'BEM Telkom University Surabaya', 'Festival Inovasi Mahasiswa 2026', '12 Jul 2026', 'Revisi Diminta', 'revision', 'ormawa'];
  const context = record[6] || inferContext(record);
  const isCompetition = context === 'kompetisi' || context === 'lpj_kompetisi';
  const isLpj = context === 'lpj_ormawa' || context === 'lpj_kompetisi' || record[0].toLowerCase().includes('lpj');
  const title = record[2];
  const owner = record[1];
  const status = record[4];
  const statusClass = record[5];
  const subtitle = isLpj ? (isCompetition ? 'Detail LPJ Kompetisi Mandiri' : 'Detail LPJ ORMAWA/UKM') : (isCompetition ? 'Detail Pengajuan Kompetisi Mandiri' : 'Detail Pengajuan Proposal ORMAWA/UKM');
  return `
    <div class="detail-page-stack">
      <div class="detail-header-row"><div><span class="block-kicker">${subtitle}</span><h1>${title}</h1></div><button class="ghost-btn" data-page="${backPageForContext(context)}">Kembali</button></div>
      ${realtimeStepperForRecord(record)}
      <section class="tu-card detail-summary-card">
        <div class="detail-card-head"><div><h3>${isLpj ? 'Ringkasan LPJ' : isCompetition ? 'Ringkasan Kompetisi' : 'Ringkasan Proposal'}</h3><p>Rangkuman informasi dasar, berkas dokumen, status workflow, dan data pengaju.</p></div><span class="status ${statusClass}">${status}</span></div>
        <div class="detail-section"><h4>I. ${isLpj ? 'Informasi Laporan' : isCompetition ? 'Informasi Kompetisi' : 'Informasi Kegiatan'}</h4><div class="native-info-grid">
          <div><p>Nama Pengaju</p><strong>${owner}</strong></div><div><p>${isLpj ? 'Judul LPJ' : isCompetition ? 'Nama Kompetisi' : 'Nama Kegiatan'}</p><strong>${title}</strong></div><div><p>${isCompetition ? 'Penyelenggara' : 'Unit / Organisasi'}</p><strong>${isCompetition ? 'Indonesian Young Entrepreneur Forum' : owner}</strong></div><div><p>Tanggal Update</p><strong>${record[3]} 04:31</strong></div><div><p>${isLpj ? 'Total Realisasi' : 'Dana Diajukan'}</p><strong class="money">Rp ${isCompetition ? '7.500.000' : '18.500.000'}</strong></div><div><p>Status Saat Ini</p><strong>${status}</strong></div>
        </div></div>
        <div class="detail-section"><h4>II. Berkas Dokumen Pendukung</h4><div class="file-grid">${documentRowsForContext(context).map(([name, meta]) => `<div class="file-row"><strong>${name}</strong><span>${meta}</span></div>`).join('')}</div></div>
      </section>
      ${detailActionPanels(record, context)}
    </div>`;
}

function inferContext(record) {
  const text = `${record[0]} ${record[2]}`.toLowerCase();
  if (text.includes('lpj') && text.includes('kompetisi')) return 'lpj_kompetisi';
  if (text.includes('lpj')) return 'lpj_ormawa';
  if (text.includes('kompetisi')) return 'kompetisi';
  return 'ormawa';
}
function backPageForContext(context) { return ({ lpj_ormawa: 'lpj_ormawa', lpj_kompetisi: 'lpj_kompetisi', kompetisi: 'kompetisi', ormawa: 'proposal_ormawa' })[context] || 'dashboard'; }
function documentRowsForContext(context) {
  if (context === 'lpj_ormawa' || context === 'lpj_kompetisi') return [['Dokumen_LPJ.pdf','Preview / Download'], ['Bukti_Transfer.pdf','Preview / Download'], ['Dokumentasi_Kegiatan.zip','Preview / Download']];
  if (context === 'kompetisi') return [['Proposal_Kompetisi.pdf','Preview / Download'], ['Surat_Undangan.pdf','Preview / Download'], ['Identitas_Peserta.pdf','Preview / Download']];
  return [['Proposal_Awal.pdf','Preview / Download'], ['RAB_Kegiatan.xlsx','Preview / Download'], ['Surat_Pengantar.pdf','Preview / Download']];
}

function trackingItemsForRecord(record) {
  const context = record[6] || inferContext(record);
  const status = record[4].toLowerCase();
  if (context === 'lpj_ormawa' || context === 'lpj_kompetisi') {
    const active = status.includes('revisi') ? 2 : status.includes('disetujui') || status.includes('selesai') ? 5 : 1;
    return markStepper([
      'LPJ Diajukan', 'Review LPJ', 'Revisi LPJ', 'Upload Revisi LPJ', 'Verifikasi Hardcopy LPJ', 'LPJ Disetujui', 'Selesai'
    ], active, status.includes('revisi') ? 'revision' : record[5]);
  }
  if (context === 'kompetisi') {
    const active = status.includes('revisi') ? 2 : status.includes('presentasi') ? 3 : status.includes('disetujui') ? 6 : status.includes('ditolak') ? 6 : 1;
    return markStepper(['Pengajuan Kompetisi', 'Review KKA', 'Revisi Proposal', 'Presentasi', 'Upload Hardcopy Final', 'Verifikasi Hardcopy', status.includes('ditolak') ? 'Ditolak' : 'Disetujui', 'LPJ', 'Selesai'], active, record[5]);
  }
  const active = status.includes('revisi') ? 2 : status.includes('presentasi') ? 3 : status.includes('hardcopy') ? 4 : status.includes('disetujui') ? 5 : status.includes('ditolak') ? 5 : 1;
  return markStepper(['Pengajuan Proposal', 'Review KKA', 'Hasil Review KKA', 'Upload & Penyerahan Hardcopy Final', 'Verifikasi Hardcopy', status.includes('ditolak') ? 'Ditolak' : 'Disetujui', 'Kegiatan Berjalan', 'Menunggu LPJ', 'Review LPJ', 'Selesai'], active, record[5]);
}

function markStepper(labels, activeIndex, tone) {
  return labels.map((label, index) => {
    let state = index < activeIndex ? 'done' : index === activeIndex ? 'active' : 'pending';
    if ((tone === 'rejected' || label === 'Ditolak') && index === activeIndex) state = 'failed';
    const time = index <= activeIndex ? `${String(12 + index).padStart(2, '0')} Jul 2026 ${String(8 + index).padStart(2, '0')}:10` : '';
    return [label, state, time];
  });
}

function realtimeStepperForRecord(record) {
  const items = trackingItemsForRecord(record);
  const active = items.findIndex(item => item[1] === 'active' || item[1] === 'failed');
  return `<div class="tu-card realtime-card"><div class="realtime-head"><div><h3>Tracking Realtime Pengajuan</h3><p>Status tracking disesuaikan otomatis dengan jenis data dan status saat ini: <strong>${record[4]}</strong>.</p></div><span class="live-dot">Live</span></div><div class="native-stepper-root"><div class="native-stepper-row">${items.map((item, index) => nativeStep(item, index, index <= Math.max(active + 2, 5), items.length)).join('')}</div></div><div class="realtime-bottom"><button class="ghost-btn" data-action="Tampilkan semua tahap">Tampilkan semua tahap lanjutan</button><span>Update terakhir: 13 Jul 2026 04:31 WIB</span></div></div>`;
}

function detailActionPanels(record, context) {
  const isLpj = context === 'lpj_ormawa' || context === 'lpj_kompetisi';
  const status = record[4].toLowerCase();
  if (isLpj) {
    return `<div class="detail-two-col"><section class="flow-panel flow-panel-amber"><div class="flow-panel-head"><p>Review LPJ</p><h3>${status.includes('revisi') ? 'Revisi LPJ Diperlukan' : 'LPJ Sedang Ditinjau'}</h3><span>Admin memeriksa realisasi dana, bukti kegiatan, dokumentasi, dan lampiran pertanggungjawaban.</span></div><div class="flow-panel-body"><div class="note-box amber">${status.includes('revisi') ? 'Perbaiki lampiran bukti transaksi dan unggah ulang dokumen LPJ revisi.' : 'LPJ sudah masuk antrean review admin.'}</div><div class="action-row"><button class="primary-btn" data-modal="Review LPJ">Review LPJ</button><button class="ghost-btn" data-action="Download LPJ">Download LPJ</button></div></div></section><section class="flow-panel flow-panel-emerald"><div class="flow-panel-head"><p>Hardcopy LPJ</p><h3>Verifikasi Berkas Fisik</h3><span>Status hardcopy LPJ akan bergerak setelah admin menerima dokumen fisik.</span></div><div class="flow-panel-body"><div class="native-steps"><div><b>1</b><span>Cetak LPJ final</span></div><div><b>2</b><span>Serahkan ke SSC Lt.2</span></div><div><b>3</b><span>Admin verifikasi</span></div></div></div></section></div>`;
  }
  return `<div class="detail-two-col"><section class="flow-panel flow-panel-amber"><div class="flow-panel-head"><p>Catatan Review KKA</p><h3>${status.includes('revisi') ? 'Revisi Proposal Diperlukan' : status.includes('ditolak') ? 'Pengajuan Ditolak' : 'Pengajuan Dalam Proses'}</h3><span>Catatan admin, hasil review, dan aksi lanjutan mengikuti status tracking aktif.</span></div><div class="flow-panel-body"><div class="note-box amber">${status.includes('revisi') ? 'Mohon lengkapi rincian RAB, unggah proposal final revisi, dan konfirmasi kembali.' : status.includes('ditolak') ? 'Pengajuan belum memenuhi ketentuan pendanaan. Silakan buat pengajuan ulang bila diperlukan.' : 'Dokumen sedang diproses oleh admin kemahasiswaan.'}</div><div class="action-row"><button class="primary-btn" data-modal="${status.includes('revisi') ? 'Upload Revisi' : 'Review'}">${status.includes('revisi') ? 'Upload Revisi' : 'Review'}</button><button class="ghost-btn" data-action="Hubungi admin via WhatsApp">Hubungi Admin</button></div></div></section><section class="flow-panel flow-panel-rose"><div class="flow-panel-head"><p>Penyerahan Hardcopy Final</p><h3>${status.includes('hardcopy') ? 'Menunggu Verifikasi Hardcopy' : 'Instruksi Hardcopy'}</h3><span>Tahap ini aktif setelah hasil review KKA menyatakan proposal bisa dilanjutkan.</span></div><div class="flow-panel-body"><div class="native-steps"><div><b>1</b><span>Upload proposal final</span></div><div><b>2</b><span>Cetak hardcopy</span></div><div><b>3</b><span>Serahkan ke Lokasi Serah Berkas</span></div></div></div></section></div><section class="flow-panel flow-panel-emerald"><div class="flow-panel-head"><p>LPJ</p><h3>Tahap LPJ Akan Aktif Setelah Pengajuan Disetujui</h3><span>Ketika dana sudah diproses dan kegiatan selesai, tombol submit LPJ akan muncul pada halaman detail ini.</span></div><div class="flow-panel-body"><button class="ghost-btn" disabled>Belum Bisa Submit LPJ</button></div></section>`;
}

function submissionForm(type) {
  const isCompetition = type === 'kompetisi';
  return `<div class="form-shell"><div class="detail-header-row"><div><span class="block-kicker">${isCompetition ? 'Kompetisi Mandiri' : 'ORMAWA/UKM'}</span><h1>${isCompetition ? 'Form Pengajuan Kompetisi Mandiri' : 'Form Pengajuan Proposal ORMAWA/UKM'}</h1></div><button class="ghost-btn" data-page="${isCompetition ? 'kompetisi' : 'proposal_ormawa'}">Kembali</button></div>${formStepper(isCompetition)}${isCompetition ? competitionFormMarkup() : ormawaFormMarkup()}</div>`;
}

function formStepper(isCompetition) {
  const labels = isCompetition ? ['Informasi Kompetisi', 'Peserta Kompetisi', 'Dana & Dokumen'] : ['Informasi Kegiatan', 'Penanggung Jawab & Rekening', 'Upload Dokumen'];
  return `<div class="form-stepper">${labels.map((l,i)=>`<div class="form-step ${i===0?'active':''}"><b>${i+1}</b><span>${l}</span></div>${i<labels.length-1?'<i></i>':''}`).join('')}</div>`;
}
function formInput(label, placeholder = '', type = 'text') { return `<label class="form-field"><span>${label}</span><input type="${type}" placeholder="${placeholder}"></label>`; }
function formSelect(label, options) { return `<label class="form-field"><span>${label}</span><select>${options.map(o=>`<option>${o}</option>`).join('')}</select></label>`; }
function uploadCard(title, format) { return `<div class="upload-card"><div class="upload-icon">UP</div><strong>${title}</strong><span>Format ${format}, maksimal 20 MB</span><button class="ghost-btn" type="button">Pilih File</button></div>`; }

function ormawaFormMarkup() {
  return `<form class="native-form"><section class="form-card"><div class="form-card-head"><h3>Informasi Kegiatan</h3><p>Sesuai form pengajuan proposal ORMAWA/UKM pada sistem.</p></div><div class="form-grid">${formInput('Nama Kegiatan','Festival Inovasi Mahasiswa 2026')}${formInput('Tanggal Mulai','','date')}${formInput('Tanggal Selesai','','date')}${formSelect('SDGs / Kategori Kegiatan',['Quality Education','Industry Innovation','Sustainable Cities'])}${formInput('Dana Diajukan','18.500.000')}${formInput('Lokasi Kegiatan','Telkom University Surabaya')}<label class="form-field wide"><span>Deskripsi Kegiatan</span><textarea placeholder="Jelaskan latar belakang, tujuan, dan manfaat kegiatan"></textarea></label></div></section><section class="form-card"><div class="form-card-head"><h3>Penanggung Jawab & Rekening</h3><p>Data kontak dan rekening pencairan dana.</p></div><div class="form-grid">${formInput('Nama Penanggung Jawab','Ketua Organisasi A')}${formInput('Email Penanggung Jawab','bem@student.telkomuniversity.ac.id','email')}${formInput('Nomor WhatsApp','081234567890')}${formInput('Nama Pemilik Rekening','BEM Telkom University Surabaya')}${formInput('Nama Bank','Bank Mandiri')}${formInput('Nomor Rekening','1234567890')}</div></section><section class="form-card"><div class="form-card-head"><h3>Upload Dokumen</h3><p>Dokumen wajib: KTM ketua, buku rekening, dan proposal PDF.</p></div><div class="upload-grid">${uploadCard('KTM Ketua / Penanggung Jawab','JPG, PNG, PDF')}${uploadCard('Buku Rekening','JPG, PNG, PDF')}${uploadCard('Proposal Kegiatan','PDF')}</div><div class="form-actions"><button class="ghost-btn" type="button">Simpan Draft</button><button class="primary-btn" type="button" data-action="Pengajuan ORMAWA/UKM dikirim">Kirim Pengajuan</button></div></section></form>`;
}
function competitionFormMarkup() {
  return `<form class="native-form"><section class="form-card"><div class="form-card-head"><h3>Informasi Kompetisi</h3><p>Sesuai form pengajuan Kompetisi Mandiri.</p></div><div class="form-grid">${formInput('Nama Kompetisi','National Business Plan Competition 2026')}${formInput('Penyelenggara','Indonesian Young Entrepreneur Forum')}${formSelect('Bidang Kompetisi',['Akademik','Bisnis','Teknologi','Seni','Olahraga','Other'])}${formSelect('Kategori Kompetisi',['Nasional','Internasional','Regional'])}${formSelect('Tipe Kompetisi',['Individu','Kelompok'])}${formInput('Tanggal Mulai','','date')}${formInput('Tanggal Selesai','','date')}</div></section><section class="form-card"><div class="form-card-head"><h3>Daftar Peserta Kompetisi</h3><p>Data peserta dibuat seperti tabel pada sistem.</p></div><div class="table-wrap"><table><thead><tr><th>No</th><th>Nama</th><th>NIM</th><th>Program Studi</th><th>Posisi</th><th>WhatsApp</th><th>Aksi</th></tr></thead><tbody><tr><td>1</td><td>Nadia Putri</td><td>1204200188</td><td>Sistem Informasi</td><td>Ketua</td><td>081234567890</td><td><button class="mini-btn">Edit</button></td></tr><tr><td>2</td><td>Raka Aditya</td><td>1204210091</td><td>Bisnis Digital</td><td>Anggota</td><td>081298765432</td><td><button class="mini-btn">Hapus</button></td></tr></tbody></table></div><button class="ghost-btn" type="button">Tambah Anggota</button></section><section class="form-card"><div class="form-card-head"><h3>Dana & Dokumen</h3><p>Masukkan dana yang diajukan dan unggah dokumen pendukung.</p></div><div class="form-grid single">${formInput('Dana Diajukan','7.500.000')}</div><div class="upload-grid">${uploadCard('Dokumen Identitas','PDF, JPG, PNG')}${uploadCard('Surat Undangan / Bukti Lomba','PDF, JPG, PNG')}${uploadCard('Proposal Kompetisi','PDF')}</div><div class="form-actions"><button class="ghost-btn" type="button">Simpan Draft</button><button class="primary-btn" type="button" data-action="Pengajuan kompetisi dikirim">Kirim Pengajuan</button></div></section></form>`;
}




// --- Funding quarter management override ---
const quarterData = [
  { name: 'TW 1', year: 2026, period: '01 Jan 2026 - 31 Mar 2026', desc: 'Januari - Maret', status: 'Selesai', submission: 'Ditutup', active: false, budget: 50000000, used: 42500000, proposals: 18 },
  { name: 'TW 2', year: 2026, period: '01 Apr 2026 - 30 Jun 2026', desc: 'April - Juni', status: 'Selesai', submission: 'Ditutup', active: false, budget: 65000000, used: 61000000, proposals: 24 },
  { name: 'TW 3', year: 2026, period: '01 Jul 2026 - 30 Sep 2026', desc: 'Juli - September', status: 'Aktif', submission: 'Dibuka', active: true, budget: 75000000, used: 38500000, proposals: 11 },
  { name: 'TW 4', year: 2026, period: '01 Okt 2026 - 31 Des 2026', desc: 'Oktober - Desember', status: 'Akan Datang', submission: 'Dibuka', active: true, budget: 70000000, used: 0, proposals: 0 }
];

const previousGenericPage = genericPage;
genericPage = function(page) {
  if (page === 'triwulan') return fundingQuarterPage();
  return previousGenericPage(page);
};

function rupiah(value) { return 'Rp ' + Number(value).toLocaleString('id-ID'); }
function fundingQuarterPage() {
  const active = quarterData.find(q => q.status === 'Aktif') || quarterData[0];
  const remaining = Math.max(0, active.budget - active.used);
  return `
    <div class="quarter-shell">
      <div class="detail-header-row"><div><span class="block-kicker">Master Data ORMAWA/UKM</span><h1>Manajemen Triwulan</h1></div><button class="ghost-btn" data-page="master">Kembali ke Master Data</button></div>
      <div class="quarter-stat-grid">
        ${quarterStat('Triwulan Aktif', active.name + ' ' + active.year)}
        ${quarterStat('Total Anggaran Triwulan', rupiah(active.budget))}
        ${quarterStat('Dana Disetujui', rupiah(active.used))}
        ${quarterStat('Sisa Anggaran', rupiah(remaining))}
        ${quarterStat('Jumlah Proposal', active.proposals)}
      </div>
      <section class="quarter-form-card">
        <div class="quarter-form-head"><div class="quarter-icon">+</div><div><h3>Tambah Triwulan Pendanaan</h3><p>Atur periode pendanaan, total anggaran, dan kontrol pembukaan pengajuan ORMAWA/UKM.</p></div></div>
        <details class="quarter-help"><summary><span>Panduan kontrol pengajuan triwulan</span><b>v</b></summary><div class="quarter-help-grid"><div><em>1</em><strong>Atur periode</strong><p>Setiap triwulan memiliki tanggal mulai, tanggal selesai, dan total pagu anggaran.</p></div><div><em>2</em><strong>Buka / tutup pengajuan</strong><p>Admin bisa menutup pengajuan baru tanpa menghentikan proposal yang sudah berjalan.</p></div><div><em>3</em><strong>Pantau realisasi</strong><p>Progress bar menunjukkan total dana disetujui dibanding pagu triwulan.</p></div></div></details>
        <div class="quarter-create-form">
          <label><span>Nama Triwulan</span><select><option>TW 1</option><option>TW 2</option><option selected>TW 3</option><option>TW 4</option></select></label>
          <label><span>Tanggal Mulai</span><input type="date" value="2026-07-01"></label>
          <label><span>Tanggal Selesai</span><input type="date" value="2026-09-30"></label>
          <label><span>Total Anggaran</span><input value="Rp 75.000.000"></label>
          <label><span>Deskripsi</span><input value="Juli - September"></label>
          <label class="quarter-check"><input type="checkbox" checked><span>Pengajuan dibuka</span></label>
          <button class="primary-btn" data-action="Triwulan disimpan">Simpan</button>
        </div>
      </section>
      <section class="quarter-list-card">
        <div class="panel-head"><div><h3>Daftar Triwulan Pendanaan</h3><p>Kelola status aktif, pembukaan pengajuan, anggaran, dan periode triwulan.</p></div></div>
        <div class="quarter-filter"><input placeholder="Cari triwulan atau deskripsi"><select><option>Semua TW</option><option>TW 1</option><option>TW 2</option><option>TW 3</option><option>TW 4</option></select><select><option>2026</option><option>2025</option></select><select><option>Terbaru</option><option>Terlama</option><option>A-Z</option></select><button class="ghost-btn" data-action="Filter triwulan">Terapkan</button></div>
        <div class="quarter-card-grid">${quarterData.map(quarterCard).join('')}</div>
      </section>
      ${quarterModals()}
    </div>`;
}
function quarterStat(label, value) { return `<article class="quarter-stat"><p>${label}</p><strong>${value}</strong></article>`; }
function quarterCard(q, index) {
  const percent = q.budget ? Math.min(100, Math.round((q.used / q.budget) * 100)) : 0;
  const remaining = Math.max(0, q.budget - q.used);
  const statusClass = q.status === 'Aktif' ? 'active' : q.status === 'Akan Datang' ? 'upcoming' : 'completed';
  const submissionClass = q.submission === 'Dibuka' ? 'open' : 'closed';
  return `<article class="quarter-card">
    <div class="quarter-card-top"><div><div class="quarter-title-row"><h4>${q.name} ${q.year}</h4><span class="quarter-badge ${statusClass}">${q.status}</span><span class="quarter-badge ${submissionClass}">Pengajuan ${q.submission}</span>${q.active ? '' : '<span class="quarter-badge inactive">Nonaktif</span>'}</div><p>${q.period}</p><small>${q.desc}</small></div><b>${q.proposals} Proposal</b></div>
    <div class="quarter-budget"><p>Total Anggaran</p><strong>${rupiah(q.budget)}</strong><div class="budget-row"><span>Dana Disetujui</span><span>${percent}%</span></div><div class="budget-bar"><i style="width:${percent}%" class="${percent >= 90 ? 'danger' : percent >= 70 ? 'warn' : 'ok'}"></i></div><div class="budget-mini"><div><small>Dana Disetujui</small><strong>${rupiah(q.used)}</strong></div><div><small>Sisa Anggaran</small><strong>${rupiah(remaining)}</strong></div></div></div>
    <div class="quarter-actions"><button class="mini-btn" data-modal="Edit Triwulan">Edit</button>${q.status === 'Aktif' ? `<button class="mini-btn ${q.submission === 'Dibuka' ? 'danger-text' : 'success-text'}" data-modal="${q.submission === 'Dibuka' ? 'Tutup Pengajuan Triwulan' : 'Buka Pengajuan Triwulan'}">${q.submission === 'Dibuka' ? 'Tutup Pengajuan' : 'Buka Pengajuan'}</button>` : ''}<button class="mini-btn ${q.active ? 'warn-text' : 'success-text'}" data-action="Toggle status triwulan">${q.active ? 'Nonaktifkan' : 'Aktifkan'}</button><button class="mini-btn danger-text" data-modal="Hapus Triwulan">Hapus</button></div>
  </article>`;
}
function quarterModals() {
  return `<section class="quarter-modal-preview"><div class="flow-panel flow-panel-rose"><div class="flow-panel-head"><p>Modal Tutup Pengajuan</p><h3>Konfirmasi Penutupan Pengajuan Baru</h3><span>Di website asli, admin wajib mengisi alasan penutupan. Notifikasi akan dikirim ke organisasi.</span></div><div class="flow-panel-body"><textarea placeholder="Pengajuan pendanaan baru pada TW 3 2026 ditutup untuk seluruh Ormawa/UKM."></textarea><div class="action-row"><button class="ghost-btn">Gunakan Template Alasan</button><button class="primary-btn" data-action="Pengajuan triwulan ditutup">Konfirmasi Tutup Pengajuan</button></div></div></div></section>`;
}

// --- TA critical module additions: OTP auth, review proposal, review LPJ, and TA flow summary ---
Object.assign(pageTitles, {
  review_proposal: 'Review Proposal',
  review_lpj: 'Review LPJ'
});

const previousInit = init;
init = function() {
  previousInit();
  const registerBtn = qs('registerPreviewBtn');
  const registerPreview = qs('registerPreview');
  const registerClose = qs('registerClose');
  if (registerBtn && registerPreview) registerBtn.addEventListener('click', () => registerPreview.classList.add('open'));
  if (registerClose && registerPreview) registerClose.addEventListener('click', () => registerPreview.classList.remove('open'));
};

const previousRenderSidebar = renderSidebar;
renderSidebar = function() {
  Object.values(roles).forEach(function (role) {
    if (!role || !Array.isArray(role.menus)) return;
    role.menus = role.menus.filter(function (menu) {
      if (menu.page === 'ta_flow') return false;
      if (Array.isArray(menu.children)) {
        menu.children = menu.children.filter(function (child) { return child.page !== 'ta_flow'; });
      }
      return true;
    });
  });
  previousRenderSidebar();
};

const previousRenderPageTA = renderPage;
renderPage = function(page) {
  currentPage = page;
  qs('pageTitle').textContent = pageTitles[page] || 'Dashboard';
  qs('pageKicker').textContent = roles[currentRole].label;
  renderSidebar();
  if (page === 'review_proposal') qs('content').innerHTML = reviewProposalPage();
  else if (page === 'review_lpj') qs('content').innerHTML = reviewLpjPage();
  else previousRenderPageTA(page);
  bindActions();
};

function taFlowPage() {
  const modules = [
    ['Login dua jalur', 'ORMAWA/UKM dan Kompetisi Mandiri masuk memakai NIM/email dan password tanpa OTP.'],
    ['Registrasi + OTP', 'Registrasi ORMAWA/UKM atau Mahasiswa Kompetisi memakai OTP setelah data dan dokumen dikirim.'],
    ['Dashboard', 'Ringkasan status, notifikasi, jadwal, dan pekerjaan terbaru.'],
    ['Pengajuan Proposal ORMAWA/UKM', 'Form kegiatan, PJ, rekening, dan upload dokumen.'],
    ['Pengajuan Proposal Kompetisi Mandiri', 'Form kompetisi, peserta, dana, dan dokumen.'],
    ['Review Proposal', 'Admin review, approve, reject, revisi, dan catatan KKA.'],
    ['Tracking Status Real-Time', 'Stepper status berada di halaman detail pengajuan.'],
    ['Jadwal Presentasi', 'Penjadwalan, reschedule, pembatalan, dan status presentasi.'],
    ['Pengelolaan Triwulan', 'Periode pendanaan, anggaran, buka/tutup pengajuan.'],
    ['LPJ', 'Submit LPJ, dokumen pertanggungjawaban, dan hardcopy.'],
    ['Review LPJ', 'Admin review LPJ, minta revisi, approve, dan verifikasi.'],
    ['Notifikasi', 'Notifikasi dashboard, email, dan WhatsApp.'],
    ['Kalender', 'Agenda kegiatan dan presentasi.'],
    ['Manajemen User', 'Approval user, role, aktivasi, dan data akun.']
  ];
  return `<div class="hero"><div><span class="eyebrow">Buku TA</span><h1>Alur Prototype Utama Nama Website</h1><p>Halaman ini merangkum semua proses penting yang dibahas pada perancangan prototype TA.</p></div></div><section class="ta-flow-grid">${modules.map((m,i)=>`<article><b>${i+1}</b><strong>${m[0]}</strong><p>${m[1]}</p></article>`).join('')}</section>`;
}

function reviewProposalPage() {
  return `<div class="hero"><div><span class="eyebrow">Review Proposal</span><h1>Review Proposal KKA/Admin</h1><p>Admin memeriksa dokumen, RAB, data kegiatan/kompetisi, lalu memberi keputusan approve, reject, revisi, atau jadwal presentasi.</p></div><div class="hero-actions"><button class="primary-btn" data-modal="Approve Proposal">Approve</button><button class="danger-btn" data-modal="Reject Proposal">Reject</button><button class="ghost-btn" data-modal="Minta Revisi Proposal">Minta Revisi</button></div></div><div class="detail-two-col" style="margin-top:18px"><section class="flow-panel flow-panel-amber"><div class="flow-panel-head"><p>Checklist Review</p><h3>Kelengkapan Proposal</h3><span>Checklist ini menyesuaikan proses review proposal pada sistem.</span></div><div class="flow-panel-body"><div class="checklist"><label><input type="checkbox" checked> Proposal PDF dapat dibuka</label><label><input type="checkbox" checked> RAB sesuai kebutuhan kegiatan</label><label><input type="checkbox"> Jadwal kegiatan valid</label><label><input type="checkbox"> Data rekening dan PJ sesuai</label></div></div></section><section class="flow-panel flow-panel-rose"><div class="flow-panel-head"><p>Catatan KKA</p><h3>Form Catatan Review</h3><span>Catatan ini akan tampil di detail pengajuan dan notifikasi pengaju.</span></div><div class="flow-panel-body"><textarea>Mohon lengkapi rincian RAB dan unggah proposal final revisi.</textarea><button class="primary-btn" data-action="Catatan review disimpan">Simpan Catatan</button></div></section></div><section class="panel" style="margin-top:18px"><div class="panel-head"><div><h3>Antrean Review Proposal</h3><p>Proposal ORMAWA/UKM dan Kompetisi Mandiri yang menunggu review.</p></div></div>${table(rows, 'proposal')}</section>`;
}

function reviewLpjPage() {
  return `<div class="hero"><div><span class="eyebrow">Review LPJ</span><h1>Review Laporan Pertanggungjawaban</h1><p>Admin memeriksa LPJ, bukti transaksi, dokumentasi, hardcopy, lalu memberi status revisi atau disetujui.</p></div><div class="hero-actions"><button class="primary-btn" data-modal="Approve LPJ">Approve LPJ</button><button class="ghost-btn" data-modal="Minta Revisi LPJ">Minta Revisi</button></div></div><div class="detail-two-col" style="margin-top:18px"><section class="flow-panel flow-panel-emerald"><div class="flow-panel-head"><p>Validasi LPJ</p><h3>Dokumen Pertanggungjawaban</h3><span>Pastikan laporan, bukti, dokumentasi, dan realisasi dana sesuai.</span></div><div class="flow-panel-body"><div class="checklist"><label><input type="checkbox" checked> LPJ PDF lengkap</label><label><input type="checkbox" checked> Bukti transaksi valid</label><label><input type="checkbox"> Dokumentasi kegiatan lengkap</label><label><input type="checkbox"> Hardcopy LPJ diterima</label></div></div></section><section class="flow-panel flow-panel-amber"><div class="flow-panel-head"><p>Catatan Revisi</p><h3>Form Review LPJ</h3><span>Catatan revisi LPJ muncul pada tracking detail LPJ.</span></div><div class="flow-panel-body"><textarea>Perbaiki lampiran bukti transaksi dan unggah ulang dokumen LPJ revisi.</textarea><button class="primary-btn" data-action="Catatan LPJ disimpan">Simpan Review LPJ</button></div></section></div><section class="panel" style="margin-top:18px"><div class="panel-head"><div><h3>Antrean Review LPJ</h3><p>LPJ ORMAWA/UKM dan Kompetisi Mandiri.</p></div></div>${table([...dataForContext('lpj_ormawa'), ...dataForContext('lpj_kompetisi')], 'lpj_ormawa')}</section>`;
}

document.addEventListener('DOMContentLoaded', function () {
  const registerBtn = qs('registerPreviewBtn');
  const registerPreview = qs('registerPreview');
  const registerClose = qs('registerClose');
  if (registerBtn && registerPreview) registerBtn.addEventListener('click', () => registerPreview.classList.add('open'));
  if (registerClose && registerPreview) registerClose.addEventListener('click', () => registerPreview.classList.remove('open'));
});

// Ensure review pages are reachable from admin roles.
document.addEventListener('DOMContentLoaded', function () {
  ['super_admin', 'admin_ormawa', 'admin_kompetisi'].forEach(function (key) {
    const role = roles[key];
    if (!role) return;
    if (!role.menus.some(m => m.page === 'review_proposal')) role.menus.splice(2, 0, { label: 'Review Proposal', page: 'review_proposal' });
    if (!role.menus.some(m => m.page === 'review_lpj')) role.menus.splice(3, 0, { label: 'Review LPJ', page: 'review_lpj' });
  });
});

// --- Correct auth flow: login without OTP, register with OTP by path ---
document.addEventListener('DOMContentLoaded', function () {
  const authTabs = document.querySelectorAll('[data-auth-tab]');
  const ormawaPanel = qs('loginOrmawaPanel');
  const kompetisiPanel = qs('loginKompetisiPanel');
  authTabs.forEach(btn => btn.addEventListener('click', function () {
    authTabs.forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.authTab;
    ormawaPanel?.classList.toggle('active', target === 'ormawa');
    kompetisiPanel?.classList.toggle('active', target === 'kompetisi');
    const defaultRole = target === 'ormawa' ? 'organization' : 'mahasiswa_kompetisi';
    qs('loginRole').value = defaultRole;
    document.querySelectorAll('.role-login').forEach(item => item.classList.toggle('active', item.dataset.loginRole === defaultRole));
  }));

  document.querySelectorAll('.role-login').forEach(btn => btn.addEventListener('click', function () {
    const panel = btn.closest('.login-panel');
    panel?.querySelectorAll('.role-login').forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    qs('loginRole').value = btn.dataset.loginRole;
  }));

  const loginKompetisiBtn = qs('loginKompetisiBtn');
  if (loginKompetisiBtn) loginKompetisiBtn.addEventListener('click', login);

  const registerPreview = qs('registerPreview');
  const registerClose = qs('registerClose');
  document.querySelectorAll('[data-open-register]').forEach(btn => btn.addEventListener('click', function () {
    setRegisterPath(btn.dataset.openRegister || 'ormawa');
    registerPreview?.classList.add('open');
  }));
  document.querySelectorAll('[data-register-path]').forEach(btn => btn.addEventListener('click', function () {
    setRegisterPath(btn.dataset.registerPath || 'ormawa');
  }));
  if (registerClose && registerPreview) registerClose.addEventListener('click', () => registerPreview.classList.remove('open'));
  setRegisterPath('ormawa');
});

function setRegisterPath(path) {
  document.querySelectorAll('[data-register-path]').forEach(btn => btn.classList.toggle('active', btn.dataset.registerPath === path));
  const title = qs('registerTitle');
  const eyebrow = qs('registerEyebrow');
  if (title) title.textContent = path === 'kompetisi' ? 'Registrasi Mahasiswa Kompetisi Mandiri' : 'Registrasi Akun ORMAWA/UKM';
  if (eyebrow) eyebrow.textContent = path === 'kompetisi' ? 'Form registrasi mahasiswa lalu OTP' : 'Pilih jenis ORMAWA/UKM lalu OTP';
  const target = qs('registerFormArea');
  if (!target) return;
  target.innerHTML = path === 'kompetisi' ? registerKompetisiAuthForm() : registerOrmawaAuthForm();
  const otpSide = qs('otpSide');
  if (otpSide) otpSide.innerHTML = otpFlowMarkup(path);
}

function authField(label, value = '', type = 'text') {
  return `<label class="auth-form-field"><span>${label}</span><input type="${type}" value="${value}"></label>`;
}
function authTextarea(label, value = '') {
  return `<label class="auth-form-field wide"><span>${label}</span><textarea>${value}</textarea></label>`;
}
function authSelect(label, options, value = '') {
  return `<label class="auth-form-field"><span>${label}</span><select>${options.map(option => `<option ${option === value ? 'selected' : ''}>${option}</option>`).join('')}</select></label>`;
}
function authUpload(label, hint) {
  return `<div class="auth-upload"><strong>${label}</strong><span>${hint}</span><div class="upload-preview-line"><button type="button" class="ghost-btn">Pilih Berkas</button><small>Belum ada file</small></div></div>`;
}
function authStep(title, body, tone = '') {
  return `<section class="auth-step-card ${tone}"><div class="auth-step-head"><b>${title.split('.')[0]}</b><h4>${title}</h4></div>${body}</section>`;
}
function registerOrmawaAuthForm() {
  return `<div class="auth-register-form"><div class="mini-step-line"><span class="done">Pilih Jenis</span><span class="done">Data ORMAWA/UKM</span><span class="done">Dokumen</span><span class="done">Password</span><span class="active">OTP</span></div>${authStep('1. Pilih Jenis ORMAWA / UKM', `<div class="auth-form-grid single">${authSelect('Jenis ORMAWA / UKM', ['BEM Telkom University Surabaya', 'HIMA Sistem Informasi', 'UKM Robotika', 'Lainnya'], 'BEM Telkom University Surabaya')}</div><p class="mini-help">Sama seperti halaman register ORMAWA/UKM: user memilih tipe organisasi terlebih dahulu sebelum masuk ke form data akun.</p>`, 'rose-step')}${authStep('2. Data ORMAWA / UKM', `<div class="auth-form-grid">${authField('Jenis Terpilih', 'BEM Telkom University Surabaya')}${authField('Nama ORMAWA / UKM', 'BEM Telkom University Surabaya')}${authField('Email ORMAWA / UKM', 'bem@student.telkomuniversity.ac.id', 'email')}${authField('No. WhatsApp Ketua / PIC', '081234567890', 'tel')}</div>`, 'rose-step')}${authStep('3. Dokumen', `<div class="auth-form-grid two">${authUpload('KTM Ketua / PIC', 'Wajib. JPG, JPEG, PNG, HEIF, HEIC, atau JFIF')}${authUpload('Logo / Foto Profil ORMAWA', 'Opsional. Bisa dipotong/crop seperti website asli')}</div>`, 'rose-step')}${authStep('4. Keamanan Akun', `<div class="auth-form-grid">${authField('Password', 'password', 'password')}${authField('Konfirmasi Password', 'password', 'password')}</div>`, 'rose-step')}<button class="primary-btn" type="button">Register ORMAWA/UKM</button></div>`;
}
function registerKompetisiAuthForm() {
  return `<div class="auth-register-form"><div class="mini-step-line blue-line"><span class="done">Data Akun</span><span class="done">Dokumen</span><span class="done">Password</span><span class="active">OTP</span></div>${authStep('1. Data Akun Mahasiswa', `<div class="auth-form-grid">${authField('NIM', '1204200188')}${authField('Nama Lengkap', 'Nadia Putri')}${authField('Email Kampus', 'nadia@student.telkomuniversity.ac.id', 'email')}${authField('Nomor WhatsApp', '081298765432', 'tel')}${authTextarea('Alasan Registrasi', 'Mengajukan pendanaan kompetisi mandiri')}</div>`, 'blue-step')}${authStep('2. Dokumen & Profil', `<div class="auth-form-grid two">${authUpload('KTM Mahasiswa', 'Wajib. JPG, JPEG, PNG, HEIF, HEIC, atau JFIF')}${authUpload('Foto Profil', 'Opsional. Bisa crop avatar seperti website asli')}</div>`, 'blue-step')}${authStep('3. Keamanan Akun', `<div class="auth-form-grid">${authField('Password', 'password', 'password')}${authField('Konfirmasi Password', 'password', 'password')}</div>`, 'blue-step')}<button class="primary-btn blue-btn" type="button">Register Mahasiswa</button></div>`;
}
function otpFlowMarkup(path) {
  const isKompetisi = path === 'kompetisi';
  const destinationEmail = isKompetisi ? 'na***@student.telkomuniversity.ac.id' : 'be***@student.telkomuniversity.ac.id';
  const destinationPhone = isKompetisi ? '0812****5432' : '0812****7890';
  const themeClass = isKompetisi ? 'blue-otp' : 'red-otp';
  const buttonClass = isKompetisi ? 'primary-btn blue-btn full' : 'primary-btn full';
  return `<div class="otp-flow ${themeClass}"><div class="otp-block"><div class="otp-icon">@</div><h4>Pilih Metode Pengiriman OTP</h4><p>Setelah register berhasil, sistem menampilkan halaman pilihan channel OTP seperti website asli.</p><details open><summary>Panduan OTP</summary><div class="otp-guide"><span>1</span><p>Pilih email atau WhatsApp/telepon yang sudah dimasking.</p><span>2</span><p>Klik kirim OTP untuk membuka halaman verifikasi kode.</p><span>3</span><p>Kode digunakan hanya untuk registrasi, bukan login.</p></div></details><label class="otp-channel"><input type="radio" checked><div><strong>Email</strong><small>${destinationEmail}</small></div></label><label class="otp-channel"><input type="radio"><div><strong>WhatsApp / Telepon</strong><small>${destinationPhone}</small></div></label><button class="${buttonClass}" type="button">Kirim OTP</button></div><div class="otp-block verify"><div class="otp-icon key">#</div><h4>Verifikasi OTP</h4><p>Masukkan kode OTP 6 digit yang dikirim ke channel terpilih.</p><label class="otp-code-field"><span>Kode OTP</span><input value="824613" maxlength="6" inputmode="numeric"></label><div class="otp-meta"><strong>Sisa waktu 04:59</strong><span>OTP berlaku sementara dan bisa dikirim ulang setelah cooldown.</span></div><button class="${buttonClass}" type="button">Verifikasi OTP</button><div class="otp-resend-grid"><button type="button">Kirim ulang WhatsApp</button><button type="button">Kirim ulang Email</button></div><div class="otp-link-grid"><button type="button">Ganti metode</button><button type="button">Kembali ke form</button></div></div></div>`;
}

function applyExportDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const screen = params.get('screen') || '';
  const role = roles[params.get('role')] ? params.get('role') : 'super_admin';
  const page = params.get('page') || 'dashboard';

  if (!params.toString()) return;

  if (screen === 'login_ormawa') {
    qs('authScreen')?.classList.remove('is-hidden');
    qs('appShell')?.classList.add('is-hidden');
    document.querySelector('[data-auth-tab="ormawa"]')?.click();
    return;
  }

  if (screen === 'login_kompetisi') {
    qs('authScreen')?.classList.remove('is-hidden');
    qs('appShell')?.classList.add('is-hidden');
    document.querySelector('[data-auth-tab="kompetisi"]')?.click();
    return;
  }

  if (screen === 'register_ormawa' || screen === 'register_kompetisi') {
    qs('authScreen')?.classList.remove('is-hidden');
    qs('appShell')?.classList.add('is-hidden');
    setRegisterPath(screen === 'register_kompetisi' ? 'kompetisi' : 'ormawa');
    qs('registerPreview')?.classList.add('open');
    return;
  }

  qs('authScreen')?.classList.add('is-hidden');
  qs('appShell')?.classList.remove('is-hidden');
  currentRole = role;
  if (qs('roleSwitcher')) qs('roleSwitcher').value = role;
  const roleData = roles[role];
  qs('userName').textContent = roleData.user;
  qs('userRole').textContent = roleData.label;
  qs('rolePill').innerHTML = `${roleData.label}<br><span>${roleData.subtitle}</span>`;
  renderSidebar();
  renderPage(pageTitles[page] ? page : 'dashboard');
}

document.addEventListener('DOMContentLoaded', function () {
  window.setTimeout(applyExportDeepLink, 0);
});




