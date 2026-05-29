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
if (!localStorage.getItem('cyberCafeServicesInit')) {
    localStorage.setItem('cyberCafeServices', JSON.stringify(defaultServices));
    localStorage.setItem('cyberCafeServicesInit', 'true');
}

// Global active services array
let services = JSON.parse(localStorage.getItem('cyberCafeServices'));
if (!services || services.length === 0) {
    services = defaultServices;
}

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

    // Apply Operator Service Permissions
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
                
                // Highlight dynamic card on home screen grid if config matches
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
            const services = JSON.parse(localStorage.getItem('cyberCafeServices')) || [];
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

document.addEventListener('firebaseSynced', () => {
    // When Firebase syncs data to localStorage (cross-device), trigger renders
    services = JSON.parse(localStorage.getItem('cyberCafeServices')) || [];
    
    cyberCategories = JSON.parse(localStorage.getItem('cyberCafeCategories')) || cyberCategories;
    updateCategoryNames();

    if (typeof renderDynamicCategories === 'function') {
        renderDynamicCategories();
    } else if (typeof renderCards === 'function') {
        renderCards();
    }
    
    if (typeof renderProfile === 'function') {
        renderProfile();
    }
    
    if (typeof window.applyAdvancedConfigs === 'function') {
        window.applyAdvancedConfigs();
    }
    
    const ops = Object.values(JSON.parse(localStorage.getItem('cyberCafeOperators')) || []).filter(Boolean);
    if (sessionUser && sessionUser.role === 'operator') {
        const me = ops.find(o => String(o.mobile) === String(sessionUser.id));
        if (me && me.blacklisted) {
            sessionStorage.removeItem('cyberCafeAuth');
            alert("Your account is blocked by Admin.");
            window.location.href = 'login.html';
        }
    }
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
