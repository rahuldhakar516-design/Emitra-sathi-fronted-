const defaultServices = [
    // Identity & Docs
    { title: "Aadhar (UIDAI)", url: "https://uidai.gov.in/en/", category: "identity", icon: "fa-fingerprint" },
    { title: "Voter ID", url: "https://voters.eci.gov.in/", category: "identity", icon: "fa-id-badge" },
    { title: "PAN Card", url: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html", category: "identity", icon: "fa-address-card" },
    { title: "DigiLocker", url: "https://www.digilocker.gov.in/", category: "identity", icon: "fa-lock" },
    { title: "Passport Seva", url: "https://www.passportindia.gov.in/psp", category: "identity", icon: "fa-passport" },
    { title: "E-Shram Portal", url: "https://eshram.gov.in/indexmain", category: "identity", icon: "fa-id-card" },
    { title: "EPFO Portal (UAN)", url: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", category: "identity", icon: "fa-piggy-bank" },
    
    // MP State Services
    { title: "Samagra Portal", url: "https://samagra.gov.in/Default.aspx", category: "mp-state", icon: "fa-users" },
    { title: "MP E-District", url: "https://mpedistrict.gov.in/MPL/index.aspx", category: "mp-state", icon: "fa-file-signature" },
    { title: "MPTAAS (Tribal)", url: "https://www.tribal.mp.gov.in/MPTAAS", category: "mp-state", icon: "fa-users-cog" },
    { title: "Social Security (Pension)", url: "https://socialsecurity.mp.gov.in/home.aspx", category: "mp-state", icon: "fa-hands-helping" },
    { title: "Citizen Police", url: "https://citizen.mppolice.gov.in/Login.aspx", category: "mp-state", icon: "fa-shield-alt" },
    { title: "MP Bhulekh WebGIS", url: "https://webgis2.mpbhulekh.gov.in/#/user-management/signin", category: "mp-state", icon: "fa-map" },
    { title: "MP CPCT", url: "https://cpct.mp.gov.in/per/g01/pub/1172/ASM/WebPortal/1/index.html?1172@@1@@1", category: "mp-state", icon: "fa-keyboard" },
    { title: "MP Online iForms", url: "https://iforms.mponline.gov.in/", category: "mp-state", icon: "fa-file-alt" },
    { title: "MP Rojgar Portal", url: "https://mprojgar.gov.in/home", category: "mp-state", icon: "fa-user-tie" },
    { title: "MP West Discom (Electricity)", url: "https://mpwzservices.mpwin.co.in/westdiscom/home", category: "mp-state", icon: "fa-bolt" },
    { title: "IFMS MP Treasury", url: "https://www.mptreasury.gov.in/IFMS/login.jsp", category: "mp-state", icon: "fa-piggy-bank" },
    { title: "Sambal Portal (MP)", url: "https://sambal.mp.gov.in/", category: "mp-state", icon: "fa-id-card-clip" },
    { title: "MP Labour Dept.", url: "https://www.labour.mp.gov.in/Index.aspx", category: "mp-state", icon: "fa-hard-hat" },
    
    // Education & Jobs
    { title: "MP Board (MPBSE)", url: "https://www.mpbse.nic.in/", category: "education", icon: "fa-school" },
    { title: "ESB MP (Vyapam)", url: "https://esb.mp.gov.in/e_default.html", category: "education", icon: "fa-laptop-code" },
    { title: "Sarkari Result", url: "https://sarkariresult.com.cm/", category: "education", icon: "fa-list-alt" },
    { title: "NSP Scholarships", url: "https://scholarships.gov.in/ApplicationForm/login", category: "education", icon: "fa-user-graduate" },
    { title: "MPBOU (MP Online)", url: "https://mpbou.mponline.gov.in/portal/", category: "education", icon: "fa-university" },
    { title: "MPSOS (MP Online)", url: "https://mpsos.mponline.gov.in/", category: "education", icon: "fa-book-open" },
    { title: "Jiwaji University", url: "https://jiwaji.edu/", category: "education", icon: "fa-university" },
    { title: "DBRAU Agra Results", url: "https://result.agrauniv.online/", category: "education", icon: "fa-graduation-cap" },
    { title: "RBPG College Agra", url: "https://www.rbpgcollegeagra.com/", category: "education", icon: "fa-school" },
    { title: "Shiksha Portal MP", url: "https://shikshaportal.mp.gov.in/Students/Dashboard/Dashboard.aspx", category: "education", icon: "fa-chalkboard-teacher" },
    { title: "MP Online Chayan", url: "https://chayan.mponline.gov.in/", category: "education", icon: "fa-check-square" },
    { title: "MPBSE MP Online", url: "https://mpbse.mponline.gov.in/MPBSE/MPBSE", category: "education", icon: "fa-school" },
    { title: "Sederp Education Portal", url: "https://sederp.educationportal3.in/", category: "education", icon: "fa-book" },
    { title: "Join Indian Army", url: "https://joinindianarmy.nic.in/BRAVOUserLogin.htm", category: "education", icon: "fa-user-shield" },
    { title: "Agniveer Navy", url: "https://agniveernavy.cdac.in/sailorscycle4/login", category: "education", icon: "fa-anchor" },
    
    // Business & CSC
    { title: "CSC Digital Seva", url: "https://digitalseva.csc.gov.in/", category: "business", icon: "fa-desktop" },
    { title: "CSC Digipay", url: "https://digipayweb.csccloud.in/", category: "business", icon: "fa-wallet" },
    { title: "Udyam (MSME)", url: "https://www.udyamregistration.gov.in/UdyamRegistration.aspx", category: "business", icon: "fa-industry" },
    { title: "GST Portal", url: "https://services.gst.gov.in/services/login", category: "business", icon: "fa-file-invoice-dollar" },
    { title: "Income Tax Portal", url: "https://www.incometax.gov.in/iec/foportal/", category: "business", icon: "fa-file-invoice-dollar" },
    { title: "Fino Bank Partner", url: "https://partnerlite.fino.bank.in/LiteWebUI/auth/login", category: "business", icon: "fa-university" },
    { title: "Airtel Payments Bank", url: "https://portal.airtelpayments.bank.in/RetailerPortal/", category: "business", icon: "fa-mobile-alt" },
    { title: "GST Tool", url: "https://gsttool.in/", category: "business", icon: "fa-calculator" },
    { title: "Supplier Meesho", url: "https://supplier.meesho.com/", category: "business", icon: "fa-shopping-bag" },
    { title: "Digital India Portal", url: "https://digitalindiaportal.co.in/", category: "business", icon: "fa-laptop-house" },
    { title: "Digital Portal In", url: "https://digitalportal.in/", category: "business", icon: "fa-laptop-house" },
    { title: "PM Kisan", url: "https://pmkisan.gov.in/", category: "business", icon: "fa-tractor" },
    { title: "LIC Login Portal", url: "https://www.google.com/search?q=lic+login+portal", category: "business", icon: "fa-umbrella" },
    { title: "Bajaj Portal", url: "https://www.google.com/search?q=bajaj+portal", category: "business", icon: "fa-motorcycle" },
    { title: "NPCI", url: "https://www.npci.org.in/", category: "business", icon: "fa-rupee-sign" },
    { title: "Spice Money", url: "https://www.spicemoney.com/", category: "business", icon: "fa-wallet" },
    { title: "A2Z Suvidhaa", url: "https://www.a2zsuvidhaa.com/", category: "business", icon: "fa-credit-card" },
    { title: "NREGA Login (GP)", url: "https://nregastrep.nic.in/netnrega/loginframegp.aspx?page=C&state_code=17", category: "business", icon: "fa-trowel" },
    
    // Transport & Health
    { title: "Ayushman Bharat", url: "https://beneficiary.nha.gov.in/", category: "transport", icon: "fa-heartbeat" },
    { title: "Parivahan (Sarathi)", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelectBean.do", category: "transport", icon: "fa-car" },
    { title: "ABHA (Health ID)", url: "https://abha.abdm.gov.in/abha/v3", category: "transport", icon: "fa-notes-medical" },
    { title: "IRCTC (Train Search)", url: "https://www.irctc.co.in/nget/train-search", category: "transport", icon: "fa-train" },
    
    // Tools & Utilities
    { title: "Bulk Image Resizer", url: "https://imageresizer.com/bulk-resize", category: "tools", icon: "fa-images" },
    { title: "Unlock PDF", url: "https://www.ilovepdf.com/unlock_pdf", category: "tools", icon: "fa-file-pdf" },
    { title: "Compress PDF (200kb)", url: "https://pdf.pi7.org/compress-pdf-to-200kb", category: "tools", icon: "fa-file-pdf" },
    { title: "Compress Image (50kb)", url: "https://image.pi7.org/compress-image-to-50kb", category: "tools", icon: "fa-compress-arrows-alt" },
    { title: "Image to PDF", url: "https://image.pi7.org/image-to-pdf", category: "tools", icon: "fa-file-export" },
    { title: "JPEG to JPG", url: "https://image.pi7.org/jpeg-to-jpg", category: "tools", icon: "fa-file-image" },
    { title: "PNG to JPEG", url: "https://image.pi7.org/png-to-jpeg", category: "tools", icon: "fa-file-image" },
    { title: "Remove Background", url: "https://www.remove.bg/", category: "tools", icon: "fa-eraser" },
    { title: "PhotoRoom", url: "https://www.photoroom.com/", category: "tools", icon: "fa-camera-retro" },
    { title: "Typing Test", url: "https://www.typing.com/student/tests", category: "tools", icon: "fa-keyboard" },
    { title: "Epson L3210 Driver", url: "https://www.epson.co.in/Support/Printers/All-In-One/L-Series/Epson-L3210/s/SPT_C11CJ68506", category: "tools", icon: "fa-print" },
    { title: "HP LaserJet M126 Driver", url: "https://support.hp.com/au-en/drivers/hp-laserjet-pro-mfp-m126-series/model/5303411", category: "tools", icon: "fa-print" },
    { title: "RD Service Online", url: "https://rdserviceonline.com/?srsltid=AfmBOor_K2bURuAo58nMY6HPhsPC0Ad-Smiw3pd3IN4EVJ01d2HHDehJ", category: "tools", icon: "fa-fingerprint" },
    { title: "Mantra RD Service", url: "https://www.mantratec.com/Download/User", category: "tools", icon: "fa-fingerprint" },
    { title: "Merge Photo & Sign", url: "https://image.pi7.org/merge-photo-and-signature", category: "tools", icon: "fa-object-group" },
    { title: "Resume Builder", url: "https://www.resume-now.com/lp/rnarsmsm121", category: "tools", icon: "fa-file-alt" },
    { title: "YouTube", url: "https://www.youtube.com/", category: "tools", icon: "fa-youtube" }
];

// --- INITIALIZE LOCAL STORAGE DATA ---
// Helper: Load services, merge new ones from codebase (defaultServices), and sync back
function loadServices() {
    let activeServices = null;
    try {
        activeServices = JSON.parse(localStorage.getItem('cyberCafeServices'));
    } catch (e) {
        console.error("Error parsing cyberCafeServices:", e);
    }
    if (!activeServices || !Array.isArray(activeServices) || activeServices.length === 0) {
        activeServices = [...defaultServices];
        localStorage.setItem('cyberCafeServices', JSON.stringify(activeServices));
    } else {
        // Merge missing defaultServices (based on title)
        let updated = false;
        defaultServices.forEach(defSvc => {
            const exists = activeServices.some(s => s.title === defSvc.title);
            if (!exists) {
                activeServices.push(defSvc);
                updated = true;
            }
        });
        if (updated) {
            localStorage.setItem('cyberCafeServices', JSON.stringify(activeServices));
        }
    }
    return activeServices;
}

if (!localStorage.getItem('cyberCafeServicesInit')) {
    localStorage.setItem('cyberCafeServices', JSON.stringify(defaultServices));
    localStorage.setItem('cyberCafeServicesInit', 'true');
}

// Global active services array
let services = loadServices();

// Default Profile Information
const defaultProfile = {
    name: "Rahul Singh Dhakad",
    phone: "9111301292",
    address: "Rasoiya Gali Purani Sabji Mandi, Kailaras, Morena, MP - 476224",
    photo: "profile.jpg.jpg"
};
if (!localStorage.getItem('cyberCafeProfile')) {
    localStorage.setItem('cyberCafeProfile', JSON.stringify(defaultProfile));
}
let userProfileData = JSON.parse(localStorage.getItem('cyberCafeProfile')) || defaultProfile;

let categoryNames = {};
let cyberCategories = JSON.parse(localStorage.getItem('cyberCafeCategories')) || [
    { id: 'identity', name: 'Identity & Docs', icon: 'fa-solid fa-id-card' },
    { id: 'mp-state', name: 'MP State Services', icon: 'fa-solid fa-building-columns' },
    { id: 'education', name: 'Education & Jobs', icon: 'fa-solid fa-graduation-cap' },
    { id: 'business', name: 'Business & CSC', icon: 'fa-solid fa-briefcase' },
    { id: 'transport', name: 'Transport & Health', icon: 'fa-solid fa-car' },
    { id: 'tools', name: 'Photo & PDF Tools', icon: 'fa-solid fa-wrench' }
];

function updateCategoryNames() {
    categoryNames = {};
    cyberCategories.forEach(c => { categoryNames[c.id] = c.name; });
}
updateCategoryNames();

let sessionUser = { name: "Operator", role: "operator", id: "0000000000" };
try {
    const storedAuth = JSON.parse(sessionStorage.getItem('cyberCafeAuth'));
    if(storedAuth) sessionUser = storedAuth;
} catch(e) {}

document.addEventListener('DOMContentLoaded', () => {
    // Blacklist check on load
    if (sessionUser && sessionUser.role === 'operator') {
        const rawOps = localStorage.getItem('cyberCafeOperators');
        if (rawOps) {
            const operators = Object.values(JSON.parse(rawOps) || []).filter(Boolean);
            if (operators.length > 0) {
                const me = operators.find(o => String(o.mobile) === String(sessionUser.id));
                if (!me || me.blacklisted === true) {
                    sessionStorage.removeItem('cyberCafeAuth');
                    alert(!me ? "Access Denied: Your account has been deleted by Admin." : "Access Denied: Your account is blocked by Admin.");
                    window.location.href = 'login.html';
                    return;
                }
            }
        }
    }

    const grid = document.getElementById('servicesGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryListUl = document.getElementById('categoryList');
    // We will dynamically add category <li>s before the static buttons
    const noResults = document.getElementById('noResults');
    const timeWidget = document.getElementById('timeWidget');
    
    // Read session auth (already done globally)
    
    // Helper: Membership Status check and Expiration calculator
    function checkMembershipStatus() {
        if (sessionUser && sessionUser.role === 'operator') {
            let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
            const myPayments = membershipPayments.filter(p => p.operatorId === sessionUser.id);
            const now = new Date();
            let activePayment = null;
            
            myPayments.forEach(p => {
                if (p.status === 'approved' && p.validUntil) {
                    const [d, m, y] = p.validUntil.split('-');
                    const validDate = new Date(y, m - 1, d, 23, 59, 59);
                    if (now > validDate) {
                        p.expired = true;
                    } else {
                        activePayment = p;
                    }
                }
            });
            
            localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(membershipPayments));
            
            let operators = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
            const opIndex = operators.findIndex(o => String(o.mobile) === String(sessionUser.id));
            
            if (activePayment) {
                sessionUser.paymentStatus = 'paid';
                if (opIndex !== -1 && operators[opIndex].paymentStatus !== 'paid') {
                    operators[opIndex].paymentStatus = 'paid';
                    localStorage.setItem('cyberCafeOperators', JSON.stringify(operators));
                }
            } else {
                const hasPending = myPayments.some(p => p.status === 'pending');
                if (hasPending) {
                    sessionUser.paymentStatus = 'pending_verification';
                    if (opIndex !== -1 && operators[opIndex].paymentStatus !== 'pending_verification') {
                        operators[opIndex].paymentStatus = 'pending_verification';
                        localStorage.setItem('cyberCafeOperators', JSON.stringify(operators));
                    }
                } else {
                    sessionUser.paymentStatus = 'unpaid';
                    if (opIndex !== -1 && operators[opIndex].paymentStatus !== 'unpaid') {
                        operators[opIndex].paymentStatus = 'unpaid';
                        localStorage.setItem('cyberCafeOperators', JSON.stringify(operators));
                    }
                }
            }
            sessionStorage.setItem('cyberCafeAuth', JSON.stringify(sessionUser));

            // Trigger Plan Expired Popup Modal if expired and not shown yet in this session
            const hasExpired = myPayments.some(p => p.status === 'approved' && p.expired);
            const hasPending = myPayments.some(p => p.status === 'pending');
            if (!activePayment && hasExpired && !hasPending) {
                if (!sessionStorage.getItem('cyberCafeExpiredShown')) {
                    const expiredModal = document.getElementById('planExpiredModal');
                    if (expiredModal) {
                        expiredModal.classList.add('active');
                    }
                }
            }
        }
    }
    window.checkMembershipStatus = checkMembershipStatus;
    checkMembershipStatus();

    // Apply Advanced Configs (Theme, Notes, Popup)
    function applyAdvancedConfigs() {
        // Theme
        const savedTheme = localStorage.getItem('cyberThemeColor');
        if(savedTheme) {
            document.documentElement.style.setProperty('--primary-color', savedTheme);
        }

        // Render Preset Theme Colors with Save and Name features
        const presetColors = [
            { name: 'White', color: '#ffffff' },
            { name: 'Cyan', color: '#00f0ff' },
            { name: 'Emerald', color: '#00ff88' },
            { name: 'Rose', color: '#ff007a' },
            { name: 'Amber', color: '#ffdd57' },
            { name: 'Amethyst', color: '#a200ff' },
            { name: 'Electric', color: '#007aff' },
            { name: 'Orange', color: '#ff6b6b' },
            { name: 'Gold', color: '#ffd700' },
            { name: 'Hot Pink', color: '#ff69b4' },
            { name: 'Neon Green', color: '#39ff14' },
            { name: 'Crimson Red', color: '#ff3333' }
        ];

        const presetsContainer = document.getElementById('frontendThemePresets');
        const activeNameLabel = document.getElementById('frontendActiveThemeName');
        const saveThemeBtn = document.getElementById('frontendSaveThemeBtn');
        const currentSavedTheme = localStorage.getItem('cyberThemeColor') || '#00f0ff';

        // Helper to get preset name by color
        function getPresetName(color) {
            const preset = presetColors.find(p => p.color.toLowerCase() === color.toLowerCase());
            return preset ? preset.name : 'Cyan';
        }

        // Initialize label & header theme badge
        const headerThemeName = document.getElementById('headerThemeName');
        if(headerThemeName) {
            headerThemeName.textContent = getPresetName(currentSavedTheme);
        }
        if(activeNameLabel) {
            activeNameLabel.textContent = getPresetName(currentSavedTheme);
            activeNameLabel.style.backgroundColor = currentSavedTheme;
            activeNameLabel.style.color = '#000000';
            activeNameLabel.style.boxShadow = `0 0 10px ${currentSavedTheme}`;
        }

        if(presetsContainer) {
            presetsContainer.innerHTML = '';
            presetColors.forEach(preset => {
                const dot = document.createElement('div');
                dot.className = 'theme-dot';
                dot.style.width = '20px';
                dot.style.height = '20px';
                dot.style.borderRadius = '50%';
                dot.style.backgroundColor = preset.color;
                dot.style.cursor = 'pointer';
                dot.style.border = '2px solid rgba(255,255,255,0.2)';
                dot.style.transition = 'all 0.2s';
                dot.title = preset.name;
                
                const activeTheme = localStorage.getItem('cyberThemeColor') || '#00f0ff';
                if(activeTheme.toLowerCase() === preset.color.toLowerCase()) {
                    dot.style.border = '2px solid #fff';
                    dot.style.transform = 'scale(1.2)';
                    dot.style.boxShadow = `0 0 10px ${preset.color}`;
                }

                dot.addEventListener('click', () => {
                    presetsContainer.querySelectorAll('.theme-dot').forEach(el => {
                        el.style.border = '2px solid rgba(255,255,255,0.2)';
                        el.style.transform = 'none';
                        el.style.boxShadow = 'none';
                    });
                    dot.style.border = '2px solid #fff';
                    dot.style.transform = 'scale(1.2)';
                    dot.style.boxShadow = `0 0 10px ${preset.color}`;

                    // Update UI preview style immediately
                    document.documentElement.style.setProperty('--primary-color', preset.color);

                    const savedTheme = localStorage.getItem('cyberThemeColor') || '#00f0ff';
                    if (preset.color.toLowerCase() !== savedTheme.toLowerCase()) {
                        // Different from saved, show save button and set preview state
                        if(activeNameLabel) {
                            activeNameLabel.textContent = preset.name + ' (Preview)';
                            activeNameLabel.style.backgroundColor = preset.color;
                            activeNameLabel.style.color = '#000000';
                            activeNameLabel.style.boxShadow = `0 0 10px ${preset.color}`;
                        }
                        if(headerThemeName) {
                            headerThemeName.textContent = preset.name + ' (Preview)';
                        }
                        if(saveThemeBtn) {
                            saveThemeBtn.style.display = 'flex';
                            saveThemeBtn.onclick = () => {
                                localStorage.setItem('cyberThemeColor', preset.color);
                                if(activeNameLabel) {
                                    activeNameLabel.textContent = preset.name;
                                    activeNameLabel.style.backgroundColor = preset.color;
                                }
                                if(headerThemeName) {
                                    headerThemeName.textContent = preset.name;
                                }
                                saveThemeBtn.style.display = 'none';
                                try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_THEME', data: preset.color }); } catch(err) {}
                                if (typeof showToast === 'function') {
                                    showToast(`Theme saved permanently: ${preset.name}!`, "success");
                                }
                            };
                        }
                    } else {
                        // Same as saved, hide save button
                        if(activeNameLabel) {
                            activeNameLabel.textContent = preset.name;
                            activeNameLabel.style.backgroundColor = preset.color;
                            activeNameLabel.style.color = '#000000';
                            activeNameLabel.style.boxShadow = `0 0 10px ${preset.color}`;
                        }
                        if(headerThemeName) {
                            headerThemeName.textContent = preset.name;
                        }
                        if(saveThemeBtn) {
                            saveThemeBtn.style.display = 'none';
                        }
                    }
                });
                presetsContainer.appendChild(dot);
            });
        }
        window.applyAdvancedConfigs = applyAdvancedConfigs;

        // Popup
        let popupConf = null;
        try {
            const rawPopup = localStorage.getItem('cyberPopupConfig');
            if(rawPopup) popupConf = JSON.parse(rawPopup);
        } catch(e) { console.error("Error parsing cyberPopupConfig:", e); }
        const popupModal = document.getElementById('startupPopupModal');
        const popupContent = document.getElementById('startupPopupContent');
        if(popupConf && popupModal && popupContent) {
            const popupConfStr = JSON.stringify(popupConf);
            if (sessionStorage.getItem('cyberPopupShown') !== popupConfStr) {
                if(popupConf.type === 'text') {
                    popupContent.innerHTML = `<h2 style="color:var(--primary-color); margin-bottom:15px;">${popupConf.title}</h2><p style="color:#fff; font-size:1.1rem; line-height:1.5;">${popupConf.body}</p>`;
                } else if(popupConf.type === 'image' && popupConf.imageBase64) {
                    popupContent.innerHTML = `<img src="${popupConf.imageBase64}" style="max-width:100%; border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.5);">`;
                }
                popupModal.classList.add('active');
                sessionStorage.setItem('cyberPopupShown', popupConfStr);
            }
        }
    }
    applyAdvancedConfigs();

    // Helper: Apply Operator Service Permissions
    window.applyOperatorPermissions = function() {
        if(sessionUser.role === 'operator') {
            const ops = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
            const op = ops.find(o => String(o.mobile) === String(sessionUser.id));
            
            if (sessionUser.paymentStatus === 'paid') {
                if(op && Array.isArray(op.allowedServices) && op.allowedServices.length > 0) {
                    services = services.filter(s => op.allowedServices.includes(s.title));
                } else if(op && Array.isArray(op.allowedServices) && op.allowedServices.length === 0) {
                    services = []; // Blocked from all services if approved but none assigned
                }
            }
        }
    };

    applyOperatorPermissions();
    
    // Render Profile Data dynamically based on Role
    window.renderProfile = function() {
        let pName = sessionUser.name;
        let pPhone = sessionUser.role === 'admin' ? userProfileData.phone : sessionUser.id;
        let pAddress = sessionUser.role === 'admin' ? userProfileData.address : 'Address not set';
        let pPhoto = sessionUser.role === 'admin' ? (userProfileData.photo || 'profile.jpg.jpg') : 'profile.jpg.jpg';
        
        if(sessionUser.role === 'operator') {
            const operators = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
            const opData = operators.find(o => String(o.mobile) === String(sessionUser.id));
            if(opData) {
                if(opData.photo) pPhoto = opData.photo;
                if(opData.shopName) pAddress = opData.shopName;
            }
        }
        
        const profileImg = document.querySelector('.profile-img');
        const profileInfoName = document.querySelector('.profile-info h4');
        const profileInfoDetails = document.querySelectorAll('.profile-info p');
        const welcomeHeader = document.querySelector('.welcome-text h1');
        
        if(profileImg) profileImg.src = pPhoto;
        if(profileInfoName) profileInfoName.textContent = pName;
        if(welcomeHeader) welcomeHeader.textContent = `Welcome back, ${pName.split(' ')[0]}`;
        if(profileInfoDetails && profileInfoDetails.length >= 2) {
            profileInfoDetails[0].innerHTML = `<i class="fa-solid fa-location-dot"></i> ${pAddress}`;
            profileInfoDetails[1].innerHTML = `<i class="fa-solid fa-phone"></i> +91 ${pPhone}`;
        }
    };
    
    renderProfile();
    
    // Hide Admin Dashboard button if operator
    if(sessionUser.role !== 'admin') {
        const adminBtn = document.getElementById('adminPanelBtn');
        if(adminBtn) adminBtn.style.display = 'none';
    }

    let currentFilter = 'all';

    // Initialize clock
    function updateTime() {
        const now = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        const dateString = now.toLocaleDateString('hi-IN', dateOptions); // Shows 'शनिवार, 18 अप्रैल 2026'
        const timeString = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

        timeWidget.innerHTML = `
            <div class="date-part">${dateString}</div>
            <div class="time-part">${timeString}</div>
        `;

        // Check for Broadcast and Notes combined
        const broadcastBanner = document.getElementById('cyberBroadcastBanner');
        const broadcastTextItems = document.querySelectorAll('.broadcastTextItem');
        const alertMsg = localStorage.getItem('cyberCafeAlert');
        let savedNotes = null;
        try {
            const rawNotes = localStorage.getItem('cyberNotesConfig');
            if (rawNotes) savedNotes = JSON.parse(rawNotes);
        } catch(e) { console.error("Error parsing cyberNotesConfig:", e); }
        
        // Completely simplified priority logic: Notes ALWAYS override Alerts.
        let displayMsg = null;
        let isNote = false;
        if (savedNotes && savedNotes.text) {
            displayMsg = savedNotes.text;
            isNote = true;
        } else if (alertMsg) {
            displayMsg = alertMsg;
            isNote = false;
        }

        if(broadcastBanner && broadcastTextItems.length > 0) {
            const firstItem = broadcastTextItems[0];
            if(displayMsg) {
                const color = isNote ? (savedNotes.color || '#ffdd57') : '#00f0ff';
                const msgKey = displayMsg + '_' + color;
                
                if (firstItem.getAttribute('data-last-msg') !== msgKey) {
                    broadcastTextItems.forEach(item => {
                        item.setAttribute('data-last-msg', msgKey);
                        item.innerHTML = `<span style="color: ${color}; font-weight: 800;">${displayMsg}</span>`;
                    });
                    setTimeout(() => {
                        const w = firstItem.offsetWidth;
                        const duration = Math.max(w / 60, 5);
                        document.querySelector('.css-marquee').style.animationDuration = `${duration}s`;
                    }, 50);
                }
                broadcastBanner.style.backgroundColor = 'rgba(0,0,0,0.5)';
                broadcastBanner.style.borderBottom = `2px solid ${isNote ? color : 'var(--primary-color)'}`;
                broadcastBanner.style.display = 'block';
            } else {
                if (firstItem.getAttribute('data-last-msg') !== '') {
                    broadcastTextItems.forEach(item => {
                        item.setAttribute('data-last-msg', '');
                        item.innerHTML = '';
                    });
                }
                broadcastBanner.style.display = 'none';
            }
        }
    }
    window.updateTime = updateTime;
    setInterval(updateTime, 1000);
    updateTime();

    // Render cards
    function renderCards(filterText = '') {
        grid.innerHTML = '';
        let hasResults = false;
        const fragment = document.createDocumentFragment();
        
        // OPTIMIZATION: Extract heavy JSON parsing and localStorage reads OUTSIDE the O(N) loop!
        let savedHighlight = null;
        if (sessionUser && sessionUser.role === 'operator') {
            try {
                const ops = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
                const me = ops.find(o => String(o.mobile) === String(sessionUser.id));
                if (me && me.highlightConfig) {
                    savedHighlight = me.highlightConfig;
                }
            } catch (e) {
                console.error("Error reading operator highlights:", e);
            }
        }
        if (!savedHighlight) {
            try {
                savedHighlight = JSON.parse(localStorage.getItem('cyberHighlightConfig'));
            } catch (e) {
                console.error("Error reading global highlights:", e);
            }
        }
        
        services.forEach(service => {
            const matchesFilter = currentFilter === 'all' || service.category === currentFilter;
            const matchesSearch = service.title.toLowerCase().includes(filterText.toLowerCase()) || 
                                  (categoryNames[service.category] ? categoryNames[service.category].toLowerCase().includes(filterText.toLowerCase()) : false);
            
            if (matchesFilter && matchesSearch) {
                hasResults = true;
                
                const card = document.createElement('a');
                card.href = service.url;
                card.target = '_blank';
                card.className = `service-card card-${service.category}`;
                
                // Highlight configuration is already retrieved outside the loop!
                const isHighlighted = savedHighlight && (savedHighlight.title === service.title);
                
                let titleHtml = service.title;
                
                if(isHighlighted) {
                    const hColor = savedHighlight.color || '#ff007a';
                    const rgbVal = hexToRgb(hColor);
                    
                    card.style.border = `2px solid ${hColor}`;
                    card.style.boxShadow = `0 0 15px rgba(${rgbVal}, 0.4), inset 0 0 10px rgba(${rgbVal}, 0.1)`;
                    card.style.background = `rgba(${rgbVal}, 0.08)`;
                    
                    card.setAttribute('onmouseover', `this.style.boxShadow='0 0 22px rgba(${rgbVal}, 0.7), inset 0 0 15px rgba(${rgbVal}, 0.2)'; this.style.transform='translateY(-5px)'`);
                    card.setAttribute('onmouseout', `this.style.boxShadow='0 0 15px rgba(${rgbVal}, 0.4), inset 0 0 10px rgba(${rgbVal}, 0.1)'; this.style.transform='none'`);
                    
                    titleHtml = `${service.title} <i class="fa-solid fa-star" style="color: ${hColor}; font-size: 0.95rem; text-shadow: 0 0 5px ${hColor}; margin-left: 5px;"></i>`;
                }
                
                card.innerHTML = `
                    <div class="card-icon" ${isHighlighted ? `style="color:${savedHighlight.color}; text-shadow: 0 0 8px ${savedHighlight.color};"` : ''}>
                        <i class="fa-solid ${service.icon}"></i>
                    </div>
                    <div class="card-content">
                        <span class="card-title">${titleHtml}</span>
                        <span class="card-category">${categoryNames[service.category] || 'Uncategorized'}</span>
                    </div>
                    <i class="fa-solid fa-arrow-right card-arrow" ${isHighlighted ? `style="color:${savedHighlight.color};"` : ''}></i>
                `;
                
                // Track click event
                card.addEventListener('click', (e) => {
                    if (sessionUser && sessionUser.role === 'operator') {
                        if (sessionUser.paymentStatus === 'unpaid') {
                            e.preventDefault();
                            document.getElementById('payConsentModal').classList.add('active');
                            return;
                        } else if (sessionUser.paymentStatus === 'pending_verification') {
                            e.preventDefault();
                            document.getElementById('payWaitModal').classList.add('active');
                            return;
                        }
                    }

                    const d = new Date();
                    const dd = String(d.getDate()).padStart(2, '0');
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const todayStr = `${dd}-${mm}-${d.getFullYear()}`;
                    
                    let visitCounts = JSON.parse(localStorage.getItem('cyberCafeVisits')) || {};
                    if (!visitCounts[todayStr]) visitCounts[todayStr] = {};
                    visitCounts[todayStr][service.title] = (visitCounts[todayStr][service.title] || 0) + 1;
                    localStorage.setItem('cyberCafeVisits', JSON.stringify(visitCounts));
                });
                
                fragment.appendChild(card);
            }
        });
        
        grid.appendChild(fragment);
        
        if (hasResults) {
            noResults.classList.add('hidden');
        } else {
            noResults.classList.remove('hidden');
        }
    }

    // Event Listeners
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderCards(e.target.value);
        }, 150); // 150ms debounce for smoother typing
    });

    function hexToRgb(hex) {
        if(!hex) return '255, 0, 122';
        hex = hex.replace('#', '');
        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `${r}, ${g}, ${b}`;
    }

    function renderDynamicCategories() {
        // Remove existing dynamic categories
        const existingDynamics = categoryListUl.querySelectorAll('.dynamic-cat');
        existingDynamics.forEach(el => el.remove());
        
        let htmlToInsert = `<li class="dynamic-cat ${currentFilter === 'all' ? 'active' : ''}" data-filter="all"><i class="fa-solid fa-grip-horizontal"></i> All Services</li>`;

        // Highlights Services 2nd item (placed right under 'All Services')
        let savedHighlight = null;
        if (sessionUser && sessionUser.role === 'operator') {
            const ops = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
            const me = ops.find(o => String(o.mobile) === String(sessionUser.id));
            if (me && me.highlightConfig) {
                savedHighlight = me.highlightConfig;
            }
        }
        if (!savedHighlight) {
            savedHighlight = JSON.parse(localStorage.getItem('cyberHighlightConfig'));
        }
        if (savedHighlight && savedHighlight.title) {
            const matchedService = services.find(s => s.title === savedHighlight.title);
            const highlightUrl = matchedService ? matchedService.url : '';
            const hColor = savedHighlight.color || '#ff007a';
            const rgbVal = hexToRgb(hColor);
            
            const inlineStyle = `
                border: 1px solid ${hColor} !important;
                background: rgba(${rgbVal}, 0.1) !important;
                color: ${hColor} !important;
                box-shadow: 0 0 10px rgba(${rgbVal}, 0.3), inset 0 0 10px rgba(${rgbVal}, 0.1) !important;
                border-radius: 8px !important;
                margin-top: 8px !important;
                font-weight: 700 !important;
                transition: all 0.3s ease !important;
                cursor: pointer;
            `;
            
            htmlToInsert += `
                <li class="dynamic-cat highlight-service-item" 
                    style="${inlineStyle}" 
                    data-url="${highlightUrl}" 
                    data-title="${savedHighlight.title.replace(/"/g, '&quot;')}"
                    data-color="${hColor}"
                    onmouseover="this.style.boxShadow='0 0 18px rgba(${rgbVal}, 0.6), inset 0 0 15px rgba(${rgbVal}, 0.2)'; this.style.transform='translateY(-2px)'"
                    onmouseout="this.style.boxShadow='0 0 10px rgba(${rgbVal}, 0.3), inset 0 0 10px rgba(${rgbVal}, 0.1)'; this.style.transform='none'"
                >
                    <i class="fa-solid fa-star" style="color: ${hColor}; font-size: 1.1rem; text-shadow: 0 0 8px ${hColor};"></i> 
                    ${savedHighlight.title}
                </li>
            `;
        }
        
        cyberCategories.forEach(cat => {
            const isActive = currentFilter === cat.id ? 'active' : '';
            let imgHtml = cat.imageBase64 ? `<img src="${cat.imageBase64}" style="width: 22px; height: 22px; border-radius: 4px; object-fit: cover; margin-right: 4px;">` : `<i class="${cat.icon}"></i>`;
            htmlToInsert += `<li class="dynamic-cat ${isActive}" data-filter="${cat.id}" data-url="${cat.url || ''}">${imgHtml} ${cat.name}</li>`;
        });
        
        // Insert right at the top of categoryListUl
        categoryListUl.insertAdjacentHTML('afterbegin', htmlToInsert);
        
        // Bind click events
        const newCategoryItems = categoryListUl.querySelectorAll('.dynamic-cat');
        newCategoryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const url = item.getAttribute('data-url');
                
                // If it is the highlighted service
                if (item.classList.contains('highlight-service-item')) {
                    e.preventDefault();
                    if (sessionUser && sessionUser.role === 'operator') {
                        if (sessionUser.paymentStatus === 'unpaid') {
                            document.getElementById('payConsentModal').classList.add('active');
                            return;
                        } else if (sessionUser.paymentStatus === 'pending_verification') {
                            document.getElementById('payWaitModal').classList.add('active');
                            return;
                        }
                    }
                    
                    if (url && url.trim() !== '') {
                        window.open(url, '_blank');
                        
                        // Log visit activity
                        const title = item.getAttribute('data-title');
                        const d = new Date();
                        const dd = String(d.getDate()).padStart(2, '0');
                        const mm = String(d.getMonth() + 1).padStart(2, '0');
                        const todayStr = `${dd}-${mm}-${d.getFullYear()}`;
                        
                        let visitCounts = JSON.parse(localStorage.getItem('cyberCafeVisits')) || {};
                        if (!visitCounts[todayStr]) visitCounts[todayStr] = {};
                        visitCounts[todayStr][title] = (visitCounts[todayStr][title] || 0) + 1;
                        localStorage.setItem('cyberCafeVisits', JSON.stringify(visitCounts));
                    }
                    return;
                }
                
                if (url && url.trim() !== '') {
                    // Clicked a direct URL category! Open it in a new window/tab!
                    window.open(url, '_blank');
                    return;
                }
                
                newCategoryItems.forEach(el => el.classList.remove('active'));
                item.classList.add('active');
                currentFilter = item.getAttribute('data-filter');
                renderCards(searchInput.value);
            });
        });
        
        // Re-render cards mapping
        updateCategoryNames();
        renderCards(searchInput.value);
    }

    // Initial render
    renderDynamicCategories();
    
    // --- PAYMENT LEDGER LOGIC ---
    const paymentModal = document.getElementById('paymentModal');
    const paymentLedgerBtn = document.getElementById('paymentLedgerBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const paymentForm = document.getElementById('paymentForm');
    const ledgerBody = document.getElementById('ledgerBody');
    const totalAmountDisplay = document.getElementById('totalAmountDisplay');
    const totalDeductDisplay = document.getElementById('totalDeductDisplay');
    const totalProfitDisplay = document.getElementById('totalProfitDisplay');
    const payDateInput = document.getElementById('payDate');
    
    // Set default date to today
    function setDateToToday() {
        if (payDateInput) {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            payDateInput.value = `${dd}-${mm}-${today.getFullYear()}`;
        }
    }
    setDateToToday();
    
    let payments = JSON.parse(localStorage.getItem('cyberCafePayments')) || [];

    function savePayments() {
        localStorage.setItem('cyberCafePayments', JSON.stringify(payments));
    }

    function renderLedger() {
        ledgerBody.innerHTML = '';
        let totalAmt = 0;
        let totalDed = 0;
        let totalProf = 0;
        
        // Show newest first
        const sortedPayments = [...payments].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        sortedPayments.forEach(pay => {
            const amt = Number(pay.amount || 0);
            const ded = Number(pay.deduct || 0);
            const prof = amt - ded;

            totalAmt += amt;
            totalDed += ded;
            totalProf += prof;

            // Handle date representation safely
            let rawDate = pay.dateInputValue ? new Date(pay.dateInputValue) : new Date(pay.date);
            let dateStr = "";
            if (!isNaN(rawDate.getTime())) {
                const dd = String(rawDate.getDate()).padStart(2, '0');
                const mm = String(rawDate.getMonth() + 1).padStart(2, '0');
                const yyyy = rawDate.getFullYear();
                dateStr = `${dd}-${mm}-${yyyy}`;
            } else {
                dateStr = pay.dateInputValue || "-";
            }
            
            let modeDisplay = '';
            if (pay.mode === 'Cash') {
                modeDisplay = '<span class="mode-badge cash">Cash</span>';
            } else if (pay.mode === 'Online') {
                modeDisplay = '<span class="mode-badge online">Online</span>';
            } else {
                modeDisplay = '<span style="color: var(--text-muted); font-size: 0.8rem;">-</span>';
            }
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="white-space:nowrap;">${dateStr}</td>
                <td style="font-weight: 500; color: #fff;">${pay.name}</td>
                <td style="color: var(--text-muted);">${pay.service}</td>
                <td>${modeDisplay}</td>
                <td class="amount-col">₹${amt}</td>
                <td style="color: #ff007a;">₹${ded}</td>
                <td style="color: #00ff88; font-weight: 700;">₹${prof}</td>
                <td>
                    <button class="delete-btn" onclick="deletePayment('${pay.id}')"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            ledgerBody.appendChild(tr);
        });
        
        if (totalAmountDisplay) totalAmountDisplay.textContent = totalAmt;
        if (totalDeductDisplay) totalDeductDisplay.textContent = totalDed;
        if (totalProfitDisplay) totalProfitDisplay.textContent = totalProf;
    }

    // Modal toggling
    if(paymentLedgerBtn) {
        paymentLedgerBtn.addEventListener('click', () => {
            paymentModal.classList.add('active');
            renderLedger();
        });
    }

    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            paymentModal.classList.remove('active');
        });
    }

    // Handle Add
    if(paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const dateVal = document.getElementById('payDate').value;
            const name = document.getElementById('payName').value;
            const service = document.getElementById('payService').value;
            const mode = document.getElementById('payMode').value || 'None';
            const amount = document.getElementById('payAmount').value;
            const deduct = document.getElementById('payDeduct').value || 0;
            
            if(name && service && amount) {
                const newPay = {
                    id: Date.now().toString(),
                    dateInputValue: dateVal,
                    name,
                    service,
                    mode,
                    amount,
                    deduct,
                    date: new Date().toISOString(),
                    operatorId: sessionUser.id,
                    operatorName: sessionUser.name
                };
                payments.push(newPay);
                savePayments();
                
                // Sync to Global Ledger for Admin Backend Real-Time Reporting
                try {
                    let globalLedger = JSON.parse(localStorage.getItem('cyberCafeLedger')) || [];
                    // Ensure we don't add duplicate IDs
                    if (!globalLedger.some(p => p.id === newPay.id)) {
                        globalLedger.push(newPay);
                        localStorage.setItem('cyberCafeLedger', JSON.stringify(globalLedger));
                    }
                } catch(e) { console.error("Global Ledger Sync Error:", e); }
                
                renderLedger();
                paymentForm.reset();
                setDateToToday(); // Reset date to today
            }
        });
    }

    // Make global for inline onclick
    window.deletePayment = function(id) {
        if(confirm('Delete this payment record?')) {
            payments = payments.filter(p => p.id !== id);
            savePayments();
            renderLedger();
        }
    };
    
    // --- ACTIVITY TRACKER LOGIC ---
    const activityModal = document.getElementById('activityModal');
    const activityLogBtn = document.getElementById('activityLogBtn');
    const closeActivityBtn = document.getElementById('closeActivityBtn');
    const activityForm = document.getElementById('activityForm');
    const visitList = document.getElementById('visitList');
    const activityBody = document.getElementById('activityBody');
    const actTotalPaidDisplay = document.getElementById('actTotalPaidDisplay');
    const actWebsiteSelect = document.getElementById('actWebsite');
    
    let activities = JSON.parse(localStorage.getItem('cyberCafeActivities')) || [];

    function saveActivities() {
        localStorage.setItem('cyberCafeActivities', JSON.stringify(activities));
    }

    function renderActivityTracker() {
        // 1. Render Visit Counts (Today)
        const d = new Date();
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const todayStr = `${dd}-${mm}-${d.getFullYear()}`;
        
        let visitCounts = JSON.parse(localStorage.getItem('cyberCafeVisits')) || {};
        const todaysVisits = visitCounts[todayStr] || {};
        
        visitList.innerHTML = '';
        if (Object.keys(todaysVisits).length === 0) {
            visitList.innerHTML = '<li style="color:var(--text-muted);">No websites visited today yet.</li>';
        } else {
            Object.entries(todaysVisits).sort((a,b) => b[1] - a[1]).forEach(([site, count]) => {
                visitList.innerHTML += `<li style="padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between;">
                    <span>${site}</span>
                    <span style="color:#00f0ff; font-weight:600;">${count} click(s)</span>
                </li>`;
            });
        }
        
        // 2. Populate Dropdown
        if(actWebsiteSelect && actWebsiteSelect.options.length <= 1) {
            services.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.title;
                opt.textContent = s.title;
                actWebsiteSelect.appendChild(opt);
            });
        }
        
        // 3. Render Activities Table
        if(!activityBody) return;
        activityBody.innerHTML = '';
        let totalPaid = 0;
        
        const sortedActivities = [...activities].sort((a,b) => new Date(b.date) - new Date(a.date));
        
        sortedActivities.forEach(act => {
            totalPaid += Number(act.paid);
            const ad = new Date(act.date);
            const dateStr = ad.toLocaleDateString('en-IN') + ' ' + ad.toLocaleTimeString('en-IN', {hour: '2-digit', minute:'2-digit'});
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="font-weight: 500; color: #fff;">${act.website}</td>
                <td style="color: var(--text-muted); font-size: 0.85rem; white-space: nowrap;">${dateStr}</td>
                <td>${act.task}</td>
                <td class="amount-col" style="color: #00f0ff;">₹${act.paid}</td>
                <td>
                    <button class="delete-btn" onclick="deleteActivity('${act.id}')"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            activityBody.appendChild(tr);
        });
        
        if (actTotalPaidDisplay) actTotalPaidDisplay.textContent = totalPaid;
    }

    if(activityLogBtn) {
        activityLogBtn.addEventListener('click', () => {
            if(activityModal) activityModal.classList.add('active');
            renderActivityTracker();
        });
    }

    if(closeActivityBtn) {
        closeActivityBtn.addEventListener('click', () => {
            if(activityModal) activityModal.classList.remove('active');
        });
    }

    if(activityForm) {
        activityForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const website = document.getElementById('actWebsite').value;
            const task = document.getElementById('actTask').value;
            const paid = document.getElementById('actPaid').value || 0;
            
            if(website && task) {
                const newAct = {
                    id: Date.now().toString(),
                    website,
                    task,
                    paid,
                    date: new Date().toISOString()
                };
                activities.push(newAct);
                saveActivities();
                renderActivityTracker();
                activityForm.reset();
            }
        });
    }

    window.deleteActivity = function(id) {
        if(confirm('Delete this activity record?')) {
            activities = activities.filter(a => a.id !== id);
            saveActivities();
            renderActivityTracker();
        }
    };
    
    // --- SECURE LOGOUT LOGIC ---
    const logoutBtn = document.getElementById('logoutBtn');
    const headerLogoutBtn = document.getElementById('headerLogoutBtn');
    
    function performLogout() {
        if(confirm('Are you sure you want to securely logout?')) {
            sessionStorage.removeItem('cyberCafeAuth');
            window.location.href = 'login.html';
        }
    }
    
    if(logoutBtn) logoutBtn.addEventListener('click', performLogout);
    if(headerLogoutBtn) headerLogoutBtn.addEventListener('click', performLogout);
    
    // ----------------------------------------
    // SUPPORT & MESSAGING MODULE
    // ----------------------------------------
    let aiChatHistory = []; // Tracks chat in memory during current session
    let typingIndicatorId = null;

    window.openSupportModal = function() {
        const modal = document.getElementById('supportModal');
        if (modal) {
            modal.classList.add('active');
            // Set AI tab as active by default
            switchSupportTab('ai');
            
            // Render first message if chat is empty
            const messagesDiv = document.getElementById('chatMessages');
            if (messagesDiv && messagesDiv.children.length === 0) {
                initializeAiChat();
            }
            if(typeof loadOperatorReplies === 'function') {
                loadOperatorReplies();
            }
        }
    };

    window.switchSupportTab = function(tab) {
        const tabAi = document.getElementById('supportTabAi');
        const tabAdmin = document.getElementById('supportTabAdmin');
        const btnAi = document.getElementById('tabBtnAi');
        const btnAdmin = document.getElementById('tabBtnAdmin');
        
        if (!tabAi || !tabAdmin || !btnAi || !btnAdmin) return;
        
        if (tab === 'ai') {
            tabAi.style.display = 'flex';
            tabAdmin.style.display = 'none';
            btnAi.style.background = 'var(--primary-color)';
            btnAi.style.color = '#000';
            btnAi.style.border = 'none';
            btnAi.style.fontWeight = 'bold';
            
            btnAdmin.style.background = 'transparent';
            btnAdmin.style.color = '#fff';
            btnAdmin.style.border = '1px solid var(--glass-border)';
            btnAdmin.style.fontWeight = '500';
        } else {
            tabAi.style.display = 'none';
            tabAdmin.style.display = 'flex';
            btnAdmin.style.background = 'var(--primary-color)';
            btnAdmin.style.color = '#000';
            btnAdmin.style.border = 'none';
            btnAdmin.style.fontWeight = 'bold';
            
            btnAi.style.background = 'transparent';
            btnAi.style.color = '#fff';
            btnAi.style.border = '1px solid var(--glass-border)';
            btnAi.style.fontWeight = '500';
            
            loadOperatorReplies();
        }
    };

    window.initializeAiChat = function() {
        const messagesDiv = document.getElementById('chatMessages');
        if (!messagesDiv) return;
        
        messagesDiv.innerHTML = '';
        aiChatHistory = [];
        
        // Initial warm welcome message in Hindi/English (Hinglish)
        const welcomeText = `नमस्ते **${sessionUser.name || 'Operator'}**! 🙏\n\nमैं हूँ **AI Mitra**, आपका eMitra Sathi डिजिटल असिस्टेंट। 🤖✨\n\nमैं आपकी eMitra Sathi पोर्टल, सर्विस लिंक्स, यूटिलिटी बिल्स, प्रॉफिट लेजर, और तकनीकी समस्याओं को सुलझाने में मदद कर सकता हूँ।\n\nआज मैं आपकी क्या सहायता करूँ?`;
        
        appendChatMessage('ai', welcomeText);
    };

    // Helper to convert simple markdown-like syntax (**bold**) to HTML safely
    function formatMessageMarkdown(text) {
        if (!text) return "";
        let escaped = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        escaped = escaped.replace(/\n/g, '<br>');
        return escaped;
    }

    window.appendChatMessage = function(sender, text) {
        const messagesDiv = document.getElementById('chatMessages');
        if (!messagesDiv) return;
        
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${sender}`;
        
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        bubble.innerHTML = `
            <div class="chat-content">${formatMessageMarkdown(text)}</div>
            <div class="chat-time">${timeStr}</div>
        `;
        
        messagesDiv.appendChild(bubble);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        
        // Push to in-memory history (OpenAI standard format)
        if (sender === 'ai') {
            aiChatHistory.push({ role: 'assistant', content: text });
        } else if (sender === 'user') {
            aiChatHistory.push({ role: 'user', content: text });
        }
    };

    window.appendChatTyping = function() {
        const messagesDiv = document.getElementById('chatMessages');
        if (!messagesDiv) return;
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-typing';
        typingDiv.id = 'chatTypingIndicator';
        typingDiv.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        messagesDiv.appendChild(typingDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        typingIndicatorId = 'chatTypingIndicator';
    };

    window.removeChatTyping = function() {
        const indicator = document.getElementById('chatTypingIndicator');
        if (indicator) {
            indicator.remove();
        }
        typingIndicatorId = null;
    };

    window.sendChatMessage = async function() {
        const input = document.getElementById('chatInput');
        if (!input) return;
        
        const text = input.value.trim();
        if (!text) return;
        
        // Append user's message to Chat Logs
        appendChatMessage('user', text);
        input.value = '';
        
        // Check API key configuration
        let apiKey = localStorage.getItem('cyberOpenAiKey');
        if (!apiKey || apiKey === 'null' || apiKey === '') {
            apiKey = "";
            localStorage.setItem('cyberOpenAiKey', apiKey);
        }
        
        // Clean key (very important to remove any pasted newlines or spaces)
        apiKey = apiKey.trim();
        
        // Show typing indicator
        appendChatTyping();
        
        try {
            // Retrieve portal info, services, and categories to construct system prompt dynamically
            const profile = JSON.parse(localStorage.getItem('cyberCafeProfile')) || {};
            const services = loadServices();
            const categories = JSON.parse(localStorage.getItem('cyberCafeCategories')) || [];
            
            // Build system prompt restricting AI to support ONLY eMitra Sathi
            const systemPrompt = `You are "AI Mitra", a friendly, premium virtual technical support assistant pre-programmed exclusively for the eMitra Sathi operator portal.
Your job is to assist operators with technical support, navigation, profit ledger tracking, customer activity registration, service links, and payment inquiries related ONLY to the eMitra Sathi platform.

Portal Details:
- Operator Name: ${sessionUser.name || 'Operator'}
- Operator Mobile: ${sessionUser.id || 'Mobile'}
- Shop Name: ${sessionUser.shopName || 'eMitra Cafe'}
- Active Categories: ${categories.map(c => c.name).join(', ')}
- Available Services: ${services.map(s => `${s.title} (${s.url || 'No URL specified'})`).join(', ')}

STRICT OPERATOR GUIDELINES:
1. ONLY talk about eMitra Sathi, the services listed above, technical support (e.g. UTR pending approvals, daily ledger profit logs, membership validity), and standard operator queries.
2. If the user asks about ANYTHING unrelated to eMitra Sathi (such as writing general code, programming questions in Python/JS/Java, general math, geography, general knowledge, writing essays, jokes, science, politics, or general facts), you MUST politely refuse to answer. Use this exact fallback message or a variation of it in the same language:
"I am pre-programmed to only assist with technical support, navigation, and services related strictly to the eMitra Sathi Portal. I cannot help with unrelated queries. Please ask a system-related question."
3. Speak in a friendly, helpful, premium conversational tone. Support English, Hindi, and Hinglish. Match the language style of the user. If they write in Hinglish, reply in beautiful conversational Hinglish!
4. Use formatting such as **bold** text and clean paragraphs. Keep responses concise and practical. Do not use markdown headers (# or ##) or code blocks, keep it clean.`;

            const isGemini = apiKey.startsWith('AIzaSy');

            if (isGemini) {
                // Find all user and assistant messages starting from the first user message
                const firstUserIndex = aiChatHistory.findIndex(msg => msg.role === 'user');
                let geminiContents = [];
                
                if (firstUserIndex !== -1) {
                    geminiContents = aiChatHistory.slice(firstUserIndex).map((msg) => {
                        return {
                            role: msg.role === 'assistant' ? 'model' : 'user',
                            parts: [{ text: msg.content }]
                        };
                    });
                } else {
                    geminiContents.push({
                        role: 'user',
                        parts: [{ text: text }]
                    });
                }

                // Attempt to call Gemini API with a sequence of robust models
                const modelsToTry = ['gemini-3.5-flash', 'gemini-2.5-flash', 'gemini-flash-latest'];
                let response = null;
                let lastError = null;
                let successfulModel = null;

                for (const modelName of modelsToTry) {
                    try {
                        console.log(`Attempting chat with Gemini model: ${modelName}`);
                        response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                contents: geminiContents,
                                systemInstruction: {
                                    parts: [{ text: systemPrompt }]
                                },
                                safetySettings: [
                                    {
                                        category: "HARM_CATEGORY_HARASSMENT",
                                        threshold: "BLOCK_NONE"
                                    },
                                    {
                                        category: "HARM_CATEGORY_HATE_SPEECH",
                                        threshold: "BLOCK_NONE"
                                    },
                                    {
                                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                                        threshold: "BLOCK_NONE"
                                    },
                                    {
                                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                                        threshold: "BLOCK_NONE"
                                    }
                                ],
                                generationConfig: {
                                    temperature: 0.7,
                                    maxOutputTokens: 400
                                }
                            })
                        });

                        if (response.ok) {
                            successfulModel = modelName;
                            break; // Found a working model!
                        } else {
                            const errorData = await response.json().catch(() => ({}));
                            lastError = errorData.error && errorData.error.message ? errorData.error.message : `HTTP ${response.status}`;
                            console.warn(`Gemini model ${modelName} failed:`, lastError);
                        }
                    } catch (e) {
                        lastError = e.message || e;
                        console.warn(`Gemini fetch error for ${modelName}:`, lastError);
                    }
                }

                removeChatTyping();

                if (!successfulModel || !response || !response.ok) {
                    console.error("Gemini API Error across all models:", lastError);
                    appendChatMessage('ai', `❌ **Gemini API Error:** Google Gemini API से कनेक्ट करने में त्रुटि हुई।\n\n**कारण:** \`${lastError || 'All models failed'}\`\n\nकृपया सुनिश्चित करें कि दर्ज की गई Google Gemini (AI Studio) API Key सही है और इसमें फालतू स्पेस या न्यू-लाइन नहीं है।`);
                    return;
                }

                const data = await response.json();
                
                if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
                    const replyText = data.candidates[0].content.parts[0].text.trim();
                    appendChatMessage('ai', replyText);
                } else {
                    console.error("Unexpected Gemini response:", data);
                    let blockReasonStr = "";
                    if (data.candidates && data.candidates[0] && data.candidates[0].finishReason) {
                        blockReasonStr = ` (Finish Reason: \`${data.candidates[0].finishReason}\`)`;
                    }
                    appendChatMessage('ai', `⚠️ **Gemini API Exception:** Google Gemini API ने अनपेक्षित या ब्लॉक की गई प्रतिक्रिया दी${blockReasonStr}। कृपया पुनः प्रयास करें।`);
                }

            } else {
                const historicalMessages = aiChatHistory.slice(-8); // Keep last 8 messages
                
                const messagesPayload = [
                    { role: 'system', content: systemPrompt },
                    ...historicalMessages
                ];
                
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-4o-mini',
                        messages: messagesPayload,
                        temperature: 0.7,
                        max_tokens: 400
                    })
                });
                
                removeChatTyping();
                
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    console.error("OpenAI Error Response:", errorData);
                    const errMsg = errorData.error && errorData.error.message ? errorData.error.message : "Unknown Error";
                    appendChatMessage('ai', `❌ **API Error:** OpenAI API से कनेक्ट करने में त्रुटि हुई।\n\n**कारण (OpenAI Reason):**\n\`${errMsg}\`\n\nकृपया सुनिश्चित करें कि दर्ज किया गया API Key सही है और आपके OpenAI Developer Account में कम से कम $5 का बैलेंस/क्रेडिट उपलब्ध है।`);
                    return;
                }
                
                const data = await response.json();
                const replyText = data.choices[0].message.content.trim();
                
                appendChatMessage('ai', replyText);
            }
            
        } catch (error) {
            console.error("AI Mitra Chat Completion Error:", error);
            removeChatTyping();
            appendChatMessage('ai', `❌ **Connection Error:** इंटरनेट कनेक्शन या सर्वर त्रुटि।\n\n**त्रुटि विवरण:** \`${error.message || error}\`\n\nकृपया इंटरनेट चेक करें और पुनः प्रयास करें।`);
        }
    };

    window.sendSupportMsg = function() {
        const text = document.getElementById('supportText').value.trim();
        if(!text) return;
        
        let messages = JSON.parse(localStorage.getItem('cyberCafeMessages')) || [];
        let newMsg = {
            mobile: sessionUser.id,
            senderName: sessionUser.name,
            text: text,
            date: new Date().toLocaleString(),
            reply: null
        };
        messages.push(newMsg);
        
        localStorage.setItem('cyberCafeMessages', JSON.stringify(messages));
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'NEW_MSG', data: messages }); } catch(err) {}
        
        document.getElementById('supportText').value = '';
        document.getElementById('supportModal').classList.remove('active');
        alert("Message sent to Master Backend!");
        loadOperatorReplies();
    };

    window.loadOperatorReplies = function() {
        let messages = JSON.parse(localStorage.getItem('cyberCafeMessages')) || [];
        let myMsgs = messages.filter(m => m.mobile === sessionUser.id);
        
        const repDiv = document.getElementById('operatorReplies');
        if (!repDiv) return;
        repDiv.innerHTML = '';
        
        if(myMsgs.length === 0) {
            repDiv.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem; text-align:center;">No previous messages sent.</p>`;
            return;
        }

        myMsgs.forEach(m => {
            let msgHtml = `
                <div style="background: rgba(255,255,255,0.05); padding: 10px; margin-bottom: 10px; border-radius: 4px; border-right: 3px solid #ffdd57;">
                    <p style="font-size: 0.8rem; color:#ffdd57;">You sent (${m.date}):</p>
                    <p style="color:#ddd; font-size: 0.95rem;">"${m.text}"</p>
                </div>
            `;
            
            if(m.reply) {
                msgHtml += `
                    <div style="background: rgba(0,255,136,0.1); border-left: 3px solid #00ff88; padding: 10px; margin-bottom: 10px; border-radius: 4px; margin-left:15px;">
                        <p style="font-size: 0.8rem; color:#00ff88;">Admin Reply:</p>
                        <p style="color:#fff; font-size: 0.95rem;">${m.reply}</p>
                    </div>
                `;
            } else {
                msgHtml += `
                    <div style="margin-bottom: 10px; margin-left:15px;">
                        <p style="font-size: 0.8rem; color:var(--text-muted);"><i>Waiting for Admin reply...</i></p>
                    </div>
                `;
            }
            
            repDiv.innerHTML += msgHtml;
        });
    };

    // ----------------------------------------
    // REAL-TIME BACKEND CONNECTION
    // ----------------------------------------
    const cyberSync = new BroadcastChannel('cyberSync');
    cyberSync.onmessage = (event) => {
        const { type, data } = event.data;
        
        if (type === 'UPDATE_SERVICES') {
            localStorage.setItem('cyberCafeServices', JSON.stringify(data));
            showToast("Services updated by Admin. Refreshing...", "info");
            setTimeout(() => { window.location.reload(); }, 1000);
        }
        
        if (type === 'OVERWRITE_CATEGORIES') {
            localStorage.setItem('cyberCafeCategories', JSON.stringify(data));
            cyberCategories = data;
            renderDynamicCategories();
        }

        if (type === 'UPDATE_HIGHLIGHT') {
            if (data) {
                localStorage.setItem('cyberHighlightConfig', JSON.stringify(data));
            } else {
                localStorage.removeItem('cyberHighlightConfig');
            }
            renderDynamicCategories();
        }
        
        if (type === 'SET_ALERT') {
            if (data) {
                localStorage.setItem('cyberCafeAlert', data);
            } else {
                localStorage.removeItem('cyberCafeAlert');
            }
            if (typeof window.updateTime === 'function') {
                window.updateTime();
            }
        }
        
        if (type === 'OVERWRITE_MSGS' || type === 'NEW_MSG') {
            localStorage.setItem('cyberCafeMessages', JSON.stringify(data));
            const modal = document.getElementById('supportModal');
            if (modal && modal.classList.contains('active')) {
                loadOperatorReplies();
            }
        }

        if (type === 'UPDATE_THEME') {
            const color = data;
            localStorage.setItem('cyberThemeColor', color);
            document.documentElement.style.setProperty('--primary-color', color);
            if (typeof window.applyAdvancedConfigs === 'function') {
                window.applyAdvancedConfigs();
            }
        }

        if (type === 'UPDATE_AI_KEY') {
            if (data) {
                localStorage.setItem('cyberOpenAiKey', data);
            } else {
                localStorage.removeItem('cyberOpenAiKey');
            }
        }

        if (type === 'UPDATE_NOTES') {
            const config = data;
            if(config) {
                localStorage.setItem('cyberNotesConfig', JSON.stringify(config));
            } else {
                localStorage.removeItem('cyberNotesConfig');
            }
            if (typeof window.updateTime === 'function') {
                window.updateTime();
            }
        }

        if (type === 'UPDATE_POPUP') {
            const popupConf = data;
            const popupModal = document.getElementById('startupPopupModal');
            const popupContent = document.getElementById('startupPopupContent');
            if (popupConf) {
                localStorage.setItem('cyberPopupConfig', JSON.stringify(popupConf));
                if(popupModal && popupContent) {
                    if(popupConf.type === 'text') {
                        popupContent.innerHTML = `<h2 style="color:var(--primary-color); margin-bottom:15px;">${popupConf.title}</h2><p style="color:#fff; font-size:1.1rem; line-height:1.5;">${popupConf.body}</p>`;
                    } else if(popupConf.type === 'image' && popupConf.imageBase64) {
                        popupContent.innerHTML = `<img src="${popupConf.imageBase64}" style="max-width:100%; border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.5);">`;
                    }
                    popupModal.classList.add('active');
                    sessionStorage.setItem('cyberPopupShown', JSON.stringify(popupConf));
                }
            } else {
                localStorage.removeItem('cyberPopupConfig');
                if (popupModal) popupModal.classList.remove('active');
            }
        }

        if (type === 'UPDATE_MEMBERSHIP_PAYMENTS') {
            const payments = data;
            localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(payments));
            if (typeof window.checkMembershipStatus === 'function') {
                window.checkMembershipStatus();
            }
            if (typeof renderMembershipHistory === 'function') {
                renderMembershipHistory();
            }
            
            if (sessionUser && sessionUser.role === 'operator') {
                const myPayments = payments.filter(p => p.operatorId === sessionUser.id);
                const hasApproved = myPayments.some(p => p.status === 'approved' && !p.expired);
                const hasPending = myPayments.some(p => p.status === 'pending');
                
                if (hasApproved && sessionUser.paymentStatus !== 'paid') {
                    sessionUser.paymentStatus = 'paid';
                    sessionStorage.setItem('cyberCafeAuth', JSON.stringify(sessionUser));
                    
                    document.getElementById('payWaitModal').classList.remove('active');
                    document.getElementById('payQrModal').classList.remove('active');
                    document.getElementById('payConsentModal').classList.remove('active');
                    document.getElementById('payReadyModal').classList.add('active');
                    showToast("Your membership payment was approved!", "success");
                    setTimeout(() => window.location.reload(), 1500);
                } else if (!hasApproved && !hasPending && sessionUser.paymentStatus !== 'unpaid') {
                    sessionUser.paymentStatus = 'unpaid';
                    sessionStorage.setItem('cyberCafeAuth', JSON.stringify(sessionUser));
                    document.getElementById('payWaitModal').classList.remove('active');
                    document.getElementById('payReadyModal').classList.remove('active');
                    showToast("Your active plan was rejected, deleted or expired.", "warning");
                    setTimeout(() => window.location.reload(), 1500);
                }
            }
        }

        if (type === 'OVERWRITE_OPS' || type === 'NEW_OP') {
            const operators = Object.values(data).filter(Boolean);
            localStorage.setItem('cyberCafeOperators', JSON.stringify(operators));
            
            if (sessionUser && sessionUser.role === 'operator') {
                const me = operators.find(o => String(o.mobile) === String(sessionUser.id));
                
                if (!me) {
                    sessionStorage.removeItem('cyberCafeAuth');
                    alert("Access Denied: Your account has been deleted by Admin.");
                    window.location.href = 'login.html';
                    return;
                }
                
                if (me.blacklisted === true) {
                    sessionStorage.removeItem('cyberCafeAuth');
                    alert("Access Denied: Your account is blocked by Admin.");
                    window.location.href = 'login.html';
                    return;
                }
                
                let opStatusChanged = false;
                if (sessionUser.paymentStatus === 'pending_verification' && me.paymentStatus === 'paid') {
                    sessionUser.paymentStatus = 'paid';
                    sessionStorage.setItem('cyberCafeAuth', JSON.stringify(sessionUser));
                    
                    document.getElementById('payWaitModal').classList.remove('active');
                    document.getElementById('payReadyModal').classList.add('active');
                    showToast("Your payment was approved!", "success");
                    opStatusChanged = true;
                } else if (sessionUser.paymentStatus === 'pending_verification' && me.paymentStatus === 'unpaid') {
                    sessionUser.paymentStatus = 'unpaid';
                    sessionStorage.setItem('cyberCafeAuth', JSON.stringify(sessionUser));
                    document.getElementById('payWaitModal').classList.remove('active');
                    showToast("Your payment was rejected. Please verify and try again.", "warning");
                    opStatusChanged = true;
                }

                if (opStatusChanged) {
                    setTimeout(() => window.location.reload(), 1500);
                }
            }
        }
    };
});

// BATCHED & DEBOUNCED SYNC HANDLER: Prevents multiple UI layout recalculations on rapid Firebase updates
let pendingSyncedKeys = new Set();
let firebaseSyncTimeout = null;

document.addEventListener('firebaseSynced', (e) => {
    const changedKey = e.detail ? e.detail.key : null;
    if (changedKey) {
        pendingSyncedKeys.add(changedKey);
    }
    
    clearTimeout(firebaseSyncTimeout);
    firebaseSyncTimeout = setTimeout(() => {
        const keys = Array.from(pendingSyncedKeys);
        pendingSyncedKeys.clear();
        const hasKey = keys.length > 0;
        
        // 1. Refresh Services & Categories (Only if specifically changed)
        const needsServices = !hasKey || keys.some(k => ['cyberCafeServices', 'cyberCafeCategories', 'cyberHighlightConfig'].includes(k));
        if (needsServices) {
            services = loadServices();
            if (typeof window.applyOperatorPermissions === 'function') {
                window.applyOperatorPermissions();
            }
            cyberCategories = JSON.parse(localStorage.getItem('cyberCafeCategories')) || cyberCategories;
            updateCategoryNames();

            if (typeof renderDynamicCategories === 'function') {
                renderDynamicCategories();
            }
            if (typeof renderCards === 'function') {
                renderCards();
            }
        }
        
        // 2. Refresh Profile (Only if specifically changed)
        const needsProfile = !hasKey || keys.includes('cyberCafeProfile');
        if (needsProfile) {
            if (typeof renderProfile === 'function') {
                renderProfile();
            }
        }
        
        // 3. Refresh Theme, Marquee Notes, and Popups (Only if related configs changed)
        const needsAdvanced = !hasKey || keys.some(k => ['cyberThemeColor', 'cyberNotesConfig', 'cyberPopupConfig', 'cyberCafeAlert'].includes(k));
        if (needsAdvanced) {
            if (typeof window.applyAdvancedConfigs === 'function') {
                window.applyAdvancedConfigs();
            }
        }
        
        // 4. Handle Blacklist check (Only if operator list changed)
        const needsBlacklist = !hasKey || keys.includes('cyberCafeOperators');
        if (needsBlacklist) {
            const ops = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
            if (sessionUser && sessionUser.role === 'operator') {
                const me = ops.find(o => String(o.mobile) === String(sessionUser.id));
                if (me && me.blacklisted) {
                    sessionStorage.removeItem('cyberCafeAuth');
                    alert("Your account is blocked by Admin.");
                    window.location.href = 'login.html';
                }
            }
        }
    }, 50); // 50ms batching window
});

// Payment Gateway Flow Logic
let payTimerInterval = null;

window.handleConsent = function(agreed) {
    document.getElementById('payConsentModal').classList.remove('active');
    if(agreed) {
        document.getElementById('payQrModal').classList.add('active');
        startPayTimer();
    }
};

window.startPayTimer = function() {
    clearInterval(payTimerInterval);
    let time = 180; // 3 minutes
    const display = document.getElementById('payTimer');
    
    payTimerInterval = setInterval(() => {
        const min = String(Math.floor(time / 60)).padStart(2, '0');
        const sec = String(time % 60).padStart(2, '0');
        display.textContent = `${min}:${sec}`;
        
        if(--time < 0) {
            clearInterval(payTimerInterval);
            document.getElementById('payQrModal').classList.remove('active');
            showToast("Payment session expired. Please try again.", "warning");
        }
    }, 1000);
};

window.submitUtr = function() {
    const utr = document.getElementById('payUtrInput').value.trim();
    if(!utr) return showToast("Please enter a valid Reference ID or UTR", "warning");
    
    clearInterval(payTimerInterval);
    document.getElementById('payQrModal').classList.remove('active');
    
    // Update local storage for this operator
    let operators = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
    const opIndex = operators.findIndex(o => String(o.mobile) === String(sessionUser.id));
    if(opIndex !== -1) {
        operators[opIndex].paymentStatus = 'pending_verification';
        operators[opIndex].utrNumber = utr;
        localStorage.setItem('cyberCafeOperators', JSON.stringify(operators));
        
        // Add to permanent Membership payments history
        let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
        const d = new Date();
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const todayStr = `${dd}-${mm}-${d.getFullYear()}`;
        
        const newPayment = {
            id: 'mem_pay_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            operatorId: sessionUser.id,
            operatorName: sessionUser.name,
            amount: 10,
            utrNumber: utr,
            date: todayStr,
            status: 'pending',
            validUntil: '',
            expired: false
        };
        membershipPayments.push(newPayment);
        localStorage.setItem('cyberCafeMembershipPayments', JSON.stringify(membershipPayments));
        
        // Update session
        sessionUser.paymentStatus = 'pending_verification';
        sessionStorage.setItem('cyberCafeAuth', JSON.stringify(sessionUser));
        
        // Broadcast to backend
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'NEW_OP', data: operators }); } catch(err) {}
        try { new BroadcastChannel('cyberSync').postMessage({ type: 'UPDATE_MEMBERSHIP_PAYMENTS', data: membershipPayments }); } catch(err) {}
        
        document.getElementById('payWaitModal').classList.add('active');
        showToast("Payment submitted! Waiting for Admin approval.", "info");
    }
};

// Consolidated and merged cyberSync listener (removed duplicate listener block)

// --- MEMBERSHIP PLAN HISTORY LOGIC ---
const membershipModal = document.getElementById('membershipModal');
const membershipHistoryBtn = document.getElementById('membershipHistoryBtn');
const closeMembershipBtn = document.getElementById('closeMembershipBtn');
const membershipHistoryBody = document.getElementById('membershipHistoryBody');
const membershipPlanStatus = document.getElementById('membershipPlanStatus');

function renderMembershipHistory() {
    if (!membershipHistoryBody || !membershipPlanStatus) return;
    
    let membershipPayments = JSON.parse(localStorage.getItem('cyberCafeMembershipPayments')) || [];
    const myPayments = membershipPayments.filter(p => p.operatorId === sessionUser.id);
    
    membershipHistoryBody.innerHTML = '';
    
    // Show newest first
    const sortedPayments = [...myPayments].sort((a, b) => {
        const partsA = a.date.split('-');
        const partsB = b.date.split('-');
        const dateA = new Date(partsA[2], partsA[1] - 1, partsA[0]);
        const dateB = new Date(partsB[2], partsB[1] - 1, partsB[0]);
        return dateB - dateA;
    });

    let activePlan = null;
    const now = new Date();

    sortedPayments.forEach(p => {
        let statusBadge = '';
        if (p.status === 'approved') {
            statusBadge = '<span class="mode-badge online" style="background:rgba(0, 255, 136, 0.1); color:#00ff88; border:1px solid #00ff88; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:600;"><i class="fa-solid fa-check-circle"></i> Approved</span>';
        } else if (p.status === 'rejected') {
            statusBadge = '<span class="mode-badge cash" style="background:rgba(255, 0, 122, 0.1); color:#ff007a; border:1px solid #ff007a; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:600;"><i class="fa-solid fa-ban"></i> Rejected</span>';
        } else {
            statusBadge = '<span class="mode-badge warning" style="background:rgba(241, 196, 15, 0.1); color:#f1c40f; border:1px solid #f1c40f; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:600;"><i class="fa-solid fa-clock"></i> Pending</span>';
        }

        let validUntilDisplay = p.validUntil || '-';
        let planStatusBadge = '-';

        if (p.status === 'approved' && p.validUntil) {
            const [d, m, y] = p.validUntil.split('-');
            const validDate = new Date(y, m - 1, d, 23, 59, 59);
            if (now > validDate) {
                p.expired = true;
                planStatusBadge = '<span style="color:#ff007a; font-weight:600;"><i class="fa-solid fa-triangle-exclamation"></i> Expired</span>';
            } else {
                activePlan = p;
                planStatusBadge = '<span style="color:#00ff88; font-weight:700;"><i class="fa-solid fa-shield-halved"></i> Active</span>';
            }
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="white-space:nowrap; color:#fff;">${p.date}</td>
            <td style="font-weight: 600; color:#fff;">₹${p.amount}</td>
            <td style="color:#ffdd57; font-family:monospace; font-weight:bold;">${p.utrNumber}</td>
            <td>${statusBadge}</td>
            <td style="color:var(--text-muted);">${validUntilDisplay}</td>
            <td>${planStatusBadge}</td>
        `;
        membershipHistoryBody.appendChild(tr);
    });

    // Populate upper summary box
    if (activePlan) {
        const [d, m, y] = activePlan.validUntil.split('-');
        const validDate = new Date(y, m - 1, d, 23, 59, 59);
        const diffTime = Math.ceil((validDate - now) / (1000 * 60 * 60 * 24));
        
        membershipPlanStatus.style.background = 'rgba(0, 255, 136, 0.1)';
        membershipPlanStatus.style.border = '1px solid #00ff88';
        membershipPlanStatus.innerHTML = `
            <div>
                <h3 style="color:#00ff88; margin-bottom:5px;"><i class="fa-solid fa-circle-check"></i> Membership Plan Active</h3>
                <p style="color:#fff; font-size:0.95rem;">Your account is fully activated. Enjoy all digital portals.</p>
            </div>
            <div style="text-align:right;">
                <span style="display:block; font-size:1.2rem; font-weight:700; color:#00ff88;">${diffTime} Days Left</span>
                <span style="font-size:0.8rem; color:var(--text-muted);">Valid until ${activePlan.validUntil}</span>
            </div>
        `;
    } else {
        const hasPending = myPayments.some(p => p.status === 'pending');
        if (hasPending) {
            const pend = myPayments.find(p => p.status === 'pending');
            membershipPlanStatus.style.background = 'rgba(241, 196, 15, 0.1)';
            membershipPlanStatus.style.border = '1px solid #f1c40f';
            membershipPlanStatus.innerHTML = `
                <div>
                    <h3 style="color:#f1c40f; margin-bottom:5px;"><i class="fa-solid fa-circle-notch fa-spin"></i> Verification Pending</h3>
                    <p style="color:#fff; font-size:0.95rem;">Waiting for Admin to verify your ₹10 payment UTR.</p>
                </div>
                <div style="text-align:right;">
                    <span style="display:block; font-size:1.1rem; font-weight:700; color:#f1c40f;">UTR Submitted</span>
                    <span style="font-size:0.8rem; color:var(--text-muted);">UTR: ${pend.utrNumber}</span>
                </div>
            `;
        } else {
            membershipPlanStatus.style.background = 'rgba(255, 0, 122, 0.1)';
            membershipPlanStatus.style.border = '1px solid #ff007a';
            membershipPlanStatus.innerHTML = `
                <div>
                    <h3 style="color:#ff007a; margin-bottom:5px;"><i class="fa-solid fa-circle-xmark"></i> Plan Expired or Inactive</h3>
                    <p style="color:#fff; font-size:0.95rem;">Please pay ₹10 to unlock your government and business portals for 30 days.</p>
                </div>
                <div style="text-align:right;">
                    <button onclick="document.getElementById('payConsentModal').classList.add('active')" class="btn btn-primary" style="padding:8px 15px; font-size:0.9rem; background:var(--primary-gradient);"><i class="fa-solid fa-unlock"></i> Activate Now</button>
                </div>
            `;
        }
    }
}

if (membershipHistoryBtn) {
    membershipHistoryBtn.addEventListener('click', () => {
        if (membershipModal) {
            membershipModal.classList.add('active');
            renderMembershipHistory();
        }
    });
}

if (closeMembershipBtn) {
    closeMembershipBtn.addEventListener('click', () => {
        if (membershipModal) {
            membershipModal.classList.remove('active');
        }
    });
}

// Initial call to check if user needs to render membership plan details immediately
if (sessionUser && sessionUser.role === 'operator') {
    renderMembershipHistory();
}

// --- MOBILE RESPONSIVE SIDEBAR TOGGLE ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
    const mobileSidebarClose = document.getElementById('mobileSidebarClose');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const sidebar = document.querySelector('.sidebar');
    const categoryList = document.getElementById('categoryList');

    if (mobileSidebarToggle && sidebar && sidebarBackdrop) {
        mobileSidebarToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
            sidebarBackdrop.classList.add('active');
        });
    }

    const closeSidebar = () => {
        if (sidebar && sidebarBackdrop) {
            sidebar.classList.remove('active');
            sidebarBackdrop.classList.remove('active');
        }
    };

    if (mobileSidebarClose) {
        mobileSidebarClose.addEventListener('click', closeSidebar);
    }

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', closeSidebar);
    }

    // Close sidebar when clicking a navigation link or category on mobile
    if (categoryList) {
        categoryList.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                if (e.target.tagName === 'LI' || e.target.closest('li')) {
                    setTimeout(closeSidebar, 200);
                }
            }
        });
    }

    // --- LIGHT/DARK THEME MODE TOGGLE ---
    const headerThemeBadge = document.getElementById('headerThemeBadge');
    if (headerThemeBadge) {
        // Adjust badge styles to feel interactive and clickable
        headerThemeBadge.style.cursor = 'pointer';
        headerThemeBadge.style.userSelect = 'none';
        headerThemeBadge.style.transition = 'transform 0.2s, box-shadow 0.2s';
        
        // Hover effects
        headerThemeBadge.addEventListener('mouseenter', () => {
            headerThemeBadge.style.transform = 'scale(1.05)';
            const isLight = localStorage.getItem('cyberThemeMode') === 'light';
            headerThemeBadge.style.boxShadow = isLight 
                ? '0 4px 15px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0,0,0,0.05)'
                : '0 4px 15px rgba(0, 240, 255, 0.4)';
        });
        headerThemeBadge.addEventListener('mouseleave', () => {
            headerThemeBadge.style.transform = 'scale(1)';
            headerThemeBadge.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        });

        // Function to update the icon and theme class
        const updateThemeModeUI = (mode) => {
            const iconEl = headerThemeBadge.querySelector('i');
            if (mode === 'light') {
                document.body.classList.add('light-theme');
                document.documentElement.setAttribute('data-initial-theme', 'light');
                if (iconEl) {
                    iconEl.className = 'fa-solid fa-sun';
                    iconEl.style.color = '#ffd700'; // Gold Sun
                    iconEl.style.filter = 'drop-shadow(0 0 5px #ffd700)';
                }
            } else {
                document.body.classList.remove('light-theme');
                document.documentElement.removeAttribute('data-initial-theme');
                if (iconEl) {
                    iconEl.className = 'fa-solid fa-moon';
                    iconEl.style.color = '#ffdd57'; // Moon color
                    iconEl.style.filter = 'drop-shadow(0 0 5px #ffdd57)';
                }
            }
        };

        // Initial setup on load
        const savedMode = localStorage.getItem('cyberThemeMode') || 'dark';
        updateThemeModeUI(savedMode);

        // Click event listener
        headerThemeBadge.addEventListener('click', () => {
            const currentMode = localStorage.getItem('cyberThemeMode') || 'dark';
            const newMode = currentMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('cyberThemeMode', newMode);
            updateThemeModeUI(newMode);

            // Sync with other tabs in real-time
            try {
                const channel = new BroadcastChannel('cyberSyncThemeMode');
                channel.postMessage({ type: 'UPDATE_THEME_MODE', data: newMode });
            } catch (err) {}

            if (typeof showToast === 'function') {
                showToast(`Switched to ${newMode === 'light' ? 'Light' : 'Dark'} Mode!`, "success");
            }
        });

        // Broadcast listener for multi-tab sync
        try {
            const channel = new BroadcastChannel('cyberSyncThemeMode');
            channel.onmessage = (event) => {
                if (event.data && event.data.type === 'UPDATE_THEME_MODE') {
                    updateThemeModeUI(event.data.data);
                }
            };
        } catch(err) {}
    }
});

// ==========================================
// --- WORK DELEGATION & LIVE CHAT LOGIC ---
// ==========================================

// Global state variables
let selectedTicketId = null;
let currentRecordedBlob = null;
let voiceMediaRecorder = null;
let voiceAudioChunks = [];
let voiceRecordingTimer = null;
let voiceStartTime = null;
const MAX_FILE_SIZE_BYTES = 2 * 1024 * 1024; // 2MB limit

// 1. Modals Open/Close
let selectedWorkFiles = [];

function openSendWorkModal() {
    document.getElementById('modalSendWork').classList.add('active');
    // Clear form fields
    document.getElementById('formSendWork').reset();
    selectedWorkFiles = [];
    renderSelectedFilesList();
    deleteRecordedVoice();
}

function closeSendWorkModal() {
    document.getElementById('modalSendWork').classList.remove('active');
    stopVoiceRecordingIfActive();
}

function openWorkHistoryModal() {
    document.getElementById('modalWorkHistory').classList.add('active');
    initWorkRequestsFirebaseListener();
}

function closeWorkHistoryModal() {
    document.getElementById('modalWorkHistory').classList.remove('active');
    // Clear selected ticket & update badge
    selectedTicketId = null;
    updateOperatorUnreadBadge();
}

// 2. Multiple Media Upload Handling
function handleMultipleFilesSelect(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        if (file.type.startsWith('image/')) {
            if (file.size > MAX_FILE_SIZE_BYTES) {
                showToast(`Image "${file.name}" is large. Compressing...`, "info");
                compressImage(file, 2000, 2000, function(compressedBase64) {
                    selectedWorkFiles.push({
                        type: 'image',
                        data: compressedBase64,
                        name: file.name
                    });
                    renderSelectedFilesList();
                });
            } else {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    selectedWorkFiles.push({
                        type: 'image',
                        data: evt.target.result,
                        name: file.name
                    });
                    renderSelectedFilesList();
                };
                reader.readAsDataURL(file);
            }
        } else if (file.type === 'application/pdf') {
            if (file.size > MAX_FILE_SIZE_BYTES) {
                showToast(`PDF "${file.name}" exceeds 2MB limit.`, "error");
                continue;
            }
            const reader = new FileReader();
            reader.onload = function(evt) {
                selectedWorkFiles.push({
                    type: 'pdf',
                    data: evt.target.result,
                    name: file.name
                });
                renderSelectedFilesList();
            };
            reader.readAsDataURL(file);
        } else {
            showToast(`Unsupported file type: ${file.name}`, "error");
        }
    }
    
    // Clear input value so same file can be selected again
    e.target.value = "";
}

function renderSelectedFilesList() {
    const container = document.getElementById('selectedFilesContainer');
    if (!container) return;
    
    container.innerHTML = "";
    
    if (selectedWorkFiles.length === 0) {
        container.style.display = "none";
        return;
    }
    
    container.style.display = "flex";
    
    selectedWorkFiles.forEach((file, index) => {
        const card = document.createElement('div');
        card.style.width = "90px";
        card.style.height = "120px";
        card.style.border = "1px solid var(--glass-border)";
        card.style.borderRadius = "8px";
        card.style.padding = "6px";
        card.style.background = "rgba(0,0,0,0.3)";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "center";
        card.style.justifyContent = "space-between";
        card.style.position = "relative";
        card.style.textAlign = "center";
        card.style.marginBottom = "5px";
        
        let previewHtml = "";
        if (file.type === 'image') {
            previewHtml = `<img src="${file.data}" style="width: 100%; height: 55px; object-fit: cover; border-radius: 4px;">`;
        } else {
            previewHtml = `<i class="fa-solid fa-file-pdf" style="font-size: 2rem; color: #ff3333; margin-top: 5px;"></i>`;
        }
        
        card.innerHTML = `
            ${previewHtml}
            <span style="font-size: 0.65rem; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; display: block; margin-top: 4px;" title="${file.name}">${file.name}</span>
            <button type="button" style="background: #ff007a; border: none; color:#fff; padding: 4px 6px; border-radius: 6px; font-size: 0.65rem; cursor: pointer; position: relative; z-index: 10; margin-top: 8px; width: 100%; text-align: center;" onclick="removeSelectedWorkFile(${index}, event)">Remove</button>
        `;
        container.appendChild(card);
    });
}

window.removeSelectedWorkFile = function(index, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    selectedWorkFiles.splice(index, 1);
    renderSelectedFilesList();
};

// 3. Image Compression Helper (Canvas)
function compressImage(file, maxW, maxH, callback) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            
            if (width > maxW) {
                height = Math.round((height * maxW) / width);
                width = maxW;
            }
            if (height > maxH) {
                width = Math.round((width * maxH) / height);
                height = maxH;
            }
            
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            
            const dataUrl = canvas.toDataURL('image/jpeg', 0.9); // 90% compression quality
            callback(dataUrl);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// 4. Voice Note Recorder Logic
function toggleVoiceRecording() {
    const micIcon = document.getElementById('micBtnIcon');
    const micBtn = document.getElementById('btnRecordVoice');
    const statusText = document.getElementById('recordingStatus');

    if (!voiceMediaRecorder || voiceMediaRecorder.state === 'inactive') {
        // Request microphone permission and start recording
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                voiceAudioChunks = [];
                voiceMediaRecorder = new MediaRecorder(stream);
                
                voiceMediaRecorder.ondataavailable = event => {
                    voiceAudioChunks.push(event.data);
                };

                voiceMediaRecorder.onstop = () => {
                    const audioBlob = new Blob(voiceAudioChunks, { type: 'audio/wav' });
                    
                    // Enforce size limit on audio
                    if (audioBlob.size > MAX_FILE_SIZE_BYTES) {
                        showToast("Voice clip exceeds size limit.", "error");
                        deleteRecordedVoice();
                        return;
                    }
                    
                    currentRecordedBlob = audioBlob;
                    
                    // Convert audio to base64
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        attachedAudioBase64 = reader.result;
                        renderAudioPlayback();
                    };
                    reader.readAsDataURL(audioBlob);

                    // Stop mic tracks to free resources
                    stream.getTracks().forEach(track => track.stop());
                };

                voiceMediaRecorder.start();
                voiceStartTime = Date.now();
                
                // Update UI state
                micBtn.classList.add('recording');
                micIcon.className = 'fa-solid fa-stop';
                micIcon.style.color = '#fff';
                statusText.textContent = "Recording...";
                
                document.getElementById('recordingTimer').style.display = 'block';
                document.getElementById('recordingWave').style.display = 'flex';
                document.getElementById('audioPlaybackContainer').style.display = 'none';

                // Timer ticker
                clearInterval(voiceRecordingTimer);
                voiceRecordingTimer = setInterval(() => {
                    const elapsedSecs = Math.floor((Date.now() - voiceStartTime) / 1000);
                    const minutesStr = String(Math.floor(elapsedSecs / 60)).padStart(2, '0');
                    const secondsStr = String(elapsedSecs % 60).padStart(2, '0');
                    document.getElementById('recordingTimer').textContent = `${minutesStr}:${secondsStr} / 01:00`;
                    
                    if (elapsedSecs >= 60) {
                        // Max limit of 1 min reached, auto stop
                        toggleVoiceRecording();
                    }
                }, 500);
            })
            .catch(err => {
                console.error("Microphone access error:", err);
                showToast("Microphone access denied or unsupported.", "error");
            });
    } else {
        // Stop recording
        stopVoiceRecordingIfActive();
    }
}

function stopVoiceRecordingIfActive() {
    const micIcon = document.getElementById('micBtnIcon');
    const micBtn = document.getElementById('btnRecordVoice');
    const statusText = document.getElementById('recordingStatus');

    if (voiceMediaRecorder && voiceMediaRecorder.state !== 'inactive') {
        voiceMediaRecorder.stop();
    }
    
    clearInterval(voiceRecordingTimer);
    if (micBtn) micBtn.classList.remove('recording');
    if (micIcon) {
        micIcon.className = 'fa-solid fa-microphone';
        micIcon.style.color = '#00ff88';
    }
    if (statusText) statusText.textContent = "Click mic to record";
    
    const timer = document.getElementById('recordingTimer');
    const wave = document.getElementById('recordingWave');
    if (timer) timer.style.display = 'none';
    if (wave) wave.style.display = 'none';
}

let attachedAudioBase64 = null;

function renderAudioPlayback() {
    const playbackContainer = document.getElementById('audioPlaybackContainer');
    const player = document.getElementById('recordedAudioPlayer');
    const statusText = document.getElementById('recordingStatus');
    
    if (playbackContainer && player && currentRecordedBlob) {
        player.src = URL.createObjectURL(currentRecordedBlob);
        playbackContainer.style.display = 'flex';
        if (statusText) statusText.textContent = "Voice note recorded";
    }
}

function deleteRecordedVoice() {
    currentRecordedBlob = null;
    attachedAudioBase64 = null;
    
    const playbackContainer = document.getElementById('audioPlaybackContainer');
    const player = document.getElementById('recordedAudioPlayer');
    const statusText = document.getElementById('recordingStatus');
    
    if (player) player.src = "";
    if (playbackContainer) playbackContainer.style.display = 'none';
    if (statusText) statusText.textContent = "Click mic to record";
}

// 5. Submit Work Request to Firebase
function handleSendWorkSubmit(e) {
    e.preventDefault();

    const instructions = document.getElementById('sendWorkInstructions').value.trim();
    if (!instructions) {
        showToast("Please enter task instructions.", "error");
        return;
    }

    // Compile all files including audio voice notes
    let uploadFiles = [...selectedWorkFiles];
    if (attachedAudioBase64) {
        uploadFiles.push({
            type: 'audio',
            data: attachedAudioBase64,
            name: 'voicenote.wav'
        });
    }

    if (typeof db === 'undefined' || db === null) {
        showToast("Firebase connection not available.", "error");
        return;
    }

    const submitBtn = document.getElementById('btnSubmitWork');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Submitting... <i class="fa-solid fa-spinner fa-spin"></i>`;

    const requestId = 'work_' + Date.now();
    const primaryFile = uploadFiles.length > 0 ? uploadFiles[0] : null;
    
    const payload = {
        id: requestId,
        operatorId: sessionUser.id,
        operatorName: sessionUser.name,
        operatorPhone: sessionUser.id,
        timestamp: Date.now(),
        status: 'pending',
        message: instructions,
        // Legacy support
        fileType: primaryFile ? primaryFile.type : 'none',
        fileData: primaryFile ? primaryFile.data : null,
        fileName: primaryFile ? primaryFile.name : null,
        // Multiple files support
        files: uploadFiles,
        replies: [
            {
                sender: 'operator',
                senderName: sessionUser.name,
                text: "Work Ticket Created: " + instructions.substring(0, 40) + (instructions.length > 40 ? "..." : ""),
                timestamp: Date.now()
            }
        ]
    };

    // Push to Firebase directly
    db.ref('cyberCafeWorkRequests/' + requestId).set(payload)
        .then(() => {
            showToast("Successful send your work", "success");
            closeSendWorkModal();
            // Automatically open history & chat view
            setTimeout(() => {
                openWorkHistoryModal();
                selectTicket(requestId);
            }, 800);
        })
        .catch(err => {
            console.error("Firebase submit error:", err);
            showToast("Failed to submit request. Please try again.", "error");
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `Submit Work <i class="fa-solid fa-circle-check"></i>`;
        });
}

// 6. Real-time Firebase Listener for Operator Work Requests
let workRequestsList = [];

function loadWorkRequestsFromCache() {
    try {
        if (sessionUser && sessionUser.id) {
            const cachedRequests = localStorage.getItem('cyberCafeWorkRequests_' + sessionUser.id);
            if (cachedRequests) {
                workRequestsList = JSON.parse(cachedRequests);
                workRequestsList.sort((a, b) => b.timestamp - a.timestamp);
            }
        }
    } catch(e) {
        console.error("Error loading cached work requests:", e);
    }
}

let hasFirebaseListenerInitialized = false;

function initWorkRequestsFirebaseListener() {
    if (typeof db === 'undefined' || db === null || !sessionUser || !sessionUser.id) return;
    
    // Load cached tickets to display instantly
    if (workRequestsList.length === 0) {
        loadWorkRequestsFromCache();
    }
    
    // Redraw lists from cache immediately
    renderTicketList();
    if (selectedTicketId) {
        renderChatWindow(selectedTicketId);
    }

    if (hasFirebaseListenerInitialized) return;
    hasFirebaseListenerInitialized = true;
    
    // Listen to changes on requests matching operatorId
    db.ref('cyberCafeWorkRequests').orderByChild('operatorId').equalTo(sessionUser.id)
        .on('value', (snapshot) => {
            workRequestsList = [];
            snapshot.forEach(child => {
                workRequestsList.push(child.val());
            });
            
            // Sort by newest timestamp first
            workRequestsList.sort((a, b) => b.timestamp - a.timestamp);
            
            // Save to local cache permanently
            try {
                localStorage.setItem('cyberCafeWorkRequests_' + sessionUser.id, JSON.stringify(workRequestsList));
            } catch(e) {
                console.error("Error caching work requests:", e);
            }
            
            renderTicketList();
            
            if (selectedTicketId) {
                // Update selected ticket details
                const updatedTicket = workRequestsList.find(t => t.id === selectedTicketId);
                if (updatedTicket) {
                    renderChatWindow(selectedTicketId);
                }
            }
            
            updateOperatorUnreadBadge();
        });
}

// Helper to keep track of viewed messages to show unread badges
function getLocalLastViewedTimes() {
    try {
        return JSON.parse(localStorage.getItem('cyberCafeLastViewedTickets') || '{}');
    } catch(e) {
        return {};
    }
}

function saveLocalLastViewedTime(ticketId, time) {
    const times = getLocalLastViewedTimes();
    times[ticketId] = time;
    localStorage.setItem('cyberCafeLastViewedTickets', JSON.stringify(times));
    updateOperatorUnreadBadge();
}

function updateOperatorUnreadBadge() {
    const viewTimes = getLocalLastViewedTimes();
    let unreadCount = 0;
    
    workRequestsList.forEach(ticket => {
        // Only count unread admin replies when not currently viewing that ticket
        if (selectedTicketId && ticket.id === selectedTicketId) return;
        
        const lastViewed = viewTimes[ticket.id] || 0;
        const adminReplies = (ticket.replies || []).filter(r => r.sender === 'admin');
        
        if (adminReplies.length > 0) {
            const lastAdminReply = adminReplies[adminReplies.length - 1];
            if (lastAdminReply.timestamp > lastViewed) {
                unreadCount++;
            }
        }
    });

    const badge = document.getElementById('operatorWorkBadge');
    if (badge) {
        if (unreadCount > 0) {
            badge.style.display = 'inline-block';
            badge.textContent = unreadCount;
        } else {
            badge.style.display = 'none';
        }
    }
}

// 7. Render ticket list in history modal
let ticketSearchFilterText = "";

function filterTicketList() {
    ticketSearchFilterText = document.getElementById('ticketSearchInput').value.toLowerCase();
    renderTicketList();
}

function renderTicketList() {
    const listContainer = document.getElementById('ticketHistoryList');
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    
    const filtered = workRequestsList.filter(t => {
        const textMatch = t.message.toLowerCase().includes(ticketSearchFilterText) || 
                          t.id.toLowerCase().includes(ticketSearchFilterText);
        return textMatch;
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 40px 10px;">
                <i class="fa-solid fa-folder-open" style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;"></i>
                <p>No work tickets found</p>
            </div>
        `;
        return;
    }

    const viewTimes = getLocalLastViewedTimes();

    filtered.forEach(ticket => {
        const item = document.createElement('div');
        item.className = `ticket-list-item ${selectedTicketId === ticket.id ? 'active' : ''}`;
        item.onclick = () => selectTicket(ticket.id);
        
        // Check if has unread admin replies
        const lastViewed = viewTimes[ticket.id] || 0;
        const adminReplies = (ticket.replies || []).filter(r => r.sender === 'admin');
        const hasUnread = adminReplies.length > 0 && adminReplies[adminReplies.length - 1].timestamp > lastViewed;
        
        const dateStr = new Date(ticket.timestamp).toLocaleDateString('en-IN', {
            day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
        });

        item.innerHTML = `
            <div class="ticket-title-row">
                <span style="font-weight: 700; color: #fff; font-size: 0.9rem;">#${ticket.id.slice(-8)}</span>
                <span class="ticket-status-badge badge-${ticket.status}">${ticket.status}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${ticket.message}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size: 0.72rem; color: var(--text-muted);">${dateStr}</span>
                ${hasUnread ? `<span style="width: 8px; height: 8px; background: #ff007a; border-radius: 50%; display: inline-block; box-shadow: 0 0 8px #ff007a;"></span>` : ''}
            </div>
        `;
        listContainer.appendChild(item);
    });
}

// 8. Select and load ticket details + chat
function selectTicket(ticketId) {
    selectedTicketId = ticketId;
    
    // Hide placeholder
    const placeholder = document.getElementById('chatPlaceholder');
    if (placeholder) placeholder.style.display = 'none';

    // Rerender list to reflect active ticket selection state
    renderTicketList();
    renderChatWindow(ticketId);
    
    // Save last read time
    saveLocalLastViewedTime(ticketId, Date.now());
}

function renderChatWindow(ticketId) {
    const ticket = workRequestsList.find(t => t.id === ticketId);
    if (!ticket) return;

    // Header
    const dateStr = new Date(ticket.timestamp).toLocaleString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    document.getElementById('chatTicketTitle').textContent = `Work Order #${ticket.id.slice(-8)}`;
    document.getElementById('chatTicketTime').textContent = `Submitted: ${dateStr}`;
    
    const statusBadge = document.getElementById('chatTicketStatus');
    statusBadge.className = `ticket-status-badge badge-${ticket.status}`;
    statusBadge.textContent = ticket.status;

    // Instructions message
    document.getElementById('chatTicketMessage').textContent = ticket.message;

    // Attachments
    const attachContainer = document.getElementById('chatTicketAttachments');
    attachContainer.innerHTML = "";
    
    if (ticket.files && Array.isArray(ticket.files) && ticket.files.length > 0) {
        ticket.files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.style.display = "flex";
            fileItem.style.flexDirection = "column";
            fileItem.style.gap = "6px";
            fileItem.style.border = "1px solid var(--glass-border)";
            fileItem.style.borderRadius = "8px";
            fileItem.style.padding = "8px";
            fileItem.style.background = "rgba(255,255,255,0.02)";
            fileItem.style.width = "130px";
            fileItem.style.alignItems = "center";
            fileItem.style.textAlign = "center";

            if (file.type === 'image') {
                fileItem.innerHTML = `
                    <a href="${file.data}" target="_blank">
                        <img src="${file.data}" alt="${file.name}" style="width:110px; height:110px; object-fit:cover; border-radius:6px; border:1px solid var(--glass-border);">
                    </a>
                    <span style="font-size: 0.72rem; color: var(--text-muted); display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:110px;" title="${file.name}">${file.name}</span>
                    <a href="${file.data}" download="${file.name || 'image.jpg'}" class="btn" style="padding: 4px 6px; font-size: 0.7rem; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 4px; width: 100%; background:rgba(255,255,255,0.1); border:1px solid var(--glass-border); color:#fff;">
                        <i class="fa-solid fa-download"></i> Download
                    </a>
                `;
            } else if (file.type === 'pdf') {
                fileItem.innerHTML = `
                    <i class="fa-solid fa-file-pdf" style="font-size: 2.2rem; color: #ff3333; margin-top: 10px; margin-bottom: 10px;"></i>
                    <span style="font-size: 0.72rem; color: var(--text-muted); display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:110px; margin-bottom: 6px;" title="${file.name}">${file.name}</span>
                    <a href="${file.data}" download="${file.name || 'document.pdf'}" class="chat-attachment-pdf" style="display:inline-flex; align-items:center; justify-content:center; gap:4px; background:rgba(255, 51, 51, 0.1); color:#ff3333; border:1px solid rgba(255, 51, 51, 0.3); padding:4px 6px; border-radius:4px; text-decoration:none; font-size:0.70rem; font-weight:600; width: 100%;">
                        <i class="fa-solid fa-file-pdf"></i> Download
                    </a>
                `;
            } else if (file.type === 'audio') {
                fileItem.innerHTML = `
                    <div class="ticket-audio-player" style="width:100%; justify-content:center;">
                        <i class="fa-solid fa-microphone" style="color: #00ff88; font-size: 1.1rem;"></i>
                        <audio src="${file.data}" controls style="max-width: 90px; height: 24px; outline:none; background:#000; border-radius:12px; overflow:hidden;"></audio>
                    </div>
                `;
            }
            attachContainer.appendChild(fileItem);
        });
    } else if (ticket.fileType && ticket.fileType !== 'none' && ticket.fileData) {
        const fileItem = document.createElement('div');
        fileItem.style.display = "flex";
        fileItem.style.flexDirection = "column";
        fileItem.style.gap = "6px";
        fileItem.style.border = "1px solid var(--glass-border)";
        fileItem.style.borderRadius = "8px";
        fileItem.style.padding = "8px";
        fileItem.style.background = "rgba(255,255,255,0.02)";
        fileItem.style.width = "130px";
        fileItem.style.alignItems = "center";
        fileItem.style.textAlign = "center";

        if (ticket.fileType === 'image') {
            fileItem.innerHTML = `
                <a href="${ticket.fileData}" target="_blank">
                    <img src="${ticket.fileData}" alt="${ticket.fileName}" style="width:110px; height:110px; object-fit:cover; border-radius:6px; border:1px solid var(--glass-border);">
                </a>
                <span style="font-size: 0.72rem; color: var(--text-muted); display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:110px;" title="${ticket.fileName}">${ticket.fileName}</span>
                <a href="${ticket.fileData}" download="${ticket.fileName || 'image.jpg'}" class="btn" style="padding: 4px 6px; font-size: 0.7rem; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 4px; width: 100%; background:rgba(255,255,255,0.1); border:1px solid var(--glass-border); color:#fff;">
                    <i class="fa-solid fa-download"></i> Download
                </a>
            `;
        } else if (ticket.fileType === 'pdf') {
            fileItem.innerHTML = `
                <i class="fa-solid fa-file-pdf" style="font-size: 2.2rem; color: #ff3333; margin-top: 10px; margin-bottom: 10px;"></i>
                <span style="font-size: 0.72rem; color: var(--text-muted); display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:110px; margin-bottom: 6px;" title="${ticket.fileName}">${ticket.fileName}</span>
                <a href="${ticket.fileData}" download="${ticket.fileName || 'document.pdf'}" class="chat-attachment-pdf" style="display:inline-flex; align-items:center; justify-content:center; gap:4px; background:rgba(255, 51, 51, 0.1); color:#ff3333; border:1px solid rgba(255, 51, 51, 0.3); padding:4px 6px; border-radius:4px; text-decoration:none; font-size:0.70rem; font-weight:600; width: 100%;">
                    <i class="fa-solid fa-file-pdf"></i> Download
                </a>
            `;
        } else if (ticket.fileType === 'audio') {
            fileItem.innerHTML = `
                <div class="ticket-audio-player">
                    <i class="fa-solid fa-microphone" style="color: #00ff88; font-size: 1.2rem;"></i>
                    <audio src="${ticket.fileData}" controls style="max-width: 180px; height: 28px; outline:none; background:#000; border-radius:14px; overflow:hidden;"></audio>
                </div>
            `;
        }
        attachContainer.appendChild(fileItem);
    } else {
        attachContainer.innerHTML = `<span style="font-size: 0.8rem; color: var(--text-muted);">No attachments</span>`;
    }

    // Replies / Messages Bubbles
    const messageContainer = document.getElementById('chatMessagesList');
    messageContainer.innerHTML = "";

    const replies = ticket.replies || [];
    replies.forEach(reply => {
        const bubble = document.createElement('div');
        const isMe = reply.sender === 'operator';
        bubble.className = `chat-message-bubble ${isMe ? 'message-operator' : 'message-admin'}`;
        
        const timeVal = reply.timestamp ? new Date(reply.timestamp).toLocaleTimeString('en-IN', {
            hour: '2-digit', minute: '2-digit'
        }) : '';

        bubble.innerHTML = `
            <span class="chat-msg-sender">${reply.senderName || (isMe ? 'Operator' : 'Admin')}</span>
            <span style="white-space: pre-wrap;">${reply.text}</span>
            <span class="chat-msg-time">${timeVal}</span>
        `;
        messageContainer.appendChild(bubble);
    });

    // Scroll chat window to bottom
    const scrollContainer = document.getElementById('chatScrollContainer');
    if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
}

// 9. Send Chat message inside ticket replies
function handleSendChatMessage(e) {
    if (e) e.preventDefault();

    if (!selectedTicketId) return;
    const input = document.getElementById('chatInputMessage');
    const msgText = input.value.trim();
    if (!msgText) return;

    const ticket = workRequestsList.find(t => t.id === selectedTicketId);
    if (!ticket) return;

    const replies = ticket.replies || [];
    
    // Create new reply payload
    const newReply = {
        sender: 'operator',
        senderName: sessionUser.name,
        text: msgText,
        timestamp: Date.now()
    };

    replies.push(newReply);

    // Save scroll state before adding
    input.value = "";
    
    db.ref('cyberCafeWorkRequests/' + selectedTicketId + '/replies').set(replies)
        .then(() => {
            saveLocalLastViewedTime(selectedTicketId, Date.now());
        })
        .catch(err => {
            console.error("Chat send error:", err);
            showToast("Failed to send message.", "error");
        });
}

function handleChatSubmitOnEnter(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendChatMessage();
    }
}

// Auto init listener on load if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    if (sessionUser && sessionUser.role === 'operator') {
        setTimeout(initWorkRequestsFirebaseListener, 1500); // Wait for firebase to settle
    }
});

// Global Toast Notification Helper
function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    let icon = type === 'success' ? 'fa-check-circle' : (type === 'warning' ? 'fa-exclamation-circle' : (type === 'error' ? 'fa-times-circle' : 'fa-info-circle'));
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <div>
            <div style="font-weight: 700; font-size: 1.05rem; color: #fff;">Notification</div>
            <div style="font-size: 0.9rem; color: #ddd; margin-top:2px;">${message}</div>
        </div>
    `;
    
    container.appendChild(toast);
    
    try {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
        audio.volume = 0.4;
        audio.play();
    } catch(e) {}
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
window.showToast = showToast;


