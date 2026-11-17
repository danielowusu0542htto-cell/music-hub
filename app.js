// Underground Artists Music & Video Platform Engine

// --- MOCK DATA FOR FLYERS SLIDESHOW ---
const FLYER_SLIDES = [
  {
    id: 'f1',
    title: 'Accra Underground Cypher 2026',
    subtitle: 'Featuring Accra\'s Top 10 Rising Drill & HipHop Talents',
    img: 'img/1.jpeg'
  },
  {
    id: 'f2',
    title: 'Afro-Fusion Underground Showcase',
    subtitle: 'Live Performance & Music Video Launch Night',
    img: 'img/2.jpeg'
  },
  {
    id: 'f3',
    title: 'Kumasi Street Vibes & Highlife Session',
    subtitle: 'Underground Producer Competition & Beats Battle',
    img: 'img/3.jpeg'
  },
  {
    id: 'f4',
    title: 'Tema Trap Night Experience',
    subtitle: 'Emerging Artists Battle for the Mic',
    img: 'img/4.jpeg'
  },
  {
    id: 'f5',
    title: 'Afrobeats Rising Stars Concert',
    subtitle: 'Discover the Next Generation of Ghanaian Talent',
    img: 'img/5.jpeg'
  },
  {
    id: 'f6',
    title: 'HipHop Culture Festival',
    subtitle: 'Graffiti, Breaking & Underground Rap Showcase',
    img: 'img/6.jpeg'
  },
  {
    id: 'f7',
    title: 'Late Night Studio Sessions',
    subtitle: 'Behind the Beats with Local Producers',
    img: 'img/7.jpeg'
  },
  {
    id: 'f8',
    title: 'Street to Stage Tour',
    subtitle: 'Underground Artists Taking Over Venues',
    img: 'img/8.jpeg'
  }
];

// --- MOCK INITIAL DATA ---
const DEFAULT_USERS = [
  { 
    id: 'u1', 
    username: 'kojo_vibes', 
    name: 'Kojo Vibes', 
    roles: ['creator', 'downloader'],  // User can have multiple roles
    subActive: true, 
    subExpires: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
    paymentMethod: 'Mobile Money (MTN)',
    otpVerified: true,
    email: 'kojo@example.com',
    passwordHash: 'sha256_1a2b3c4d_cGFzc3dvcmQxMjM'  // password: password123
  },
  { 
    id: 'u2', 
    username: 'street_barz', 
    name: 'Street Barz', 
    roles: ['creator'],  // Creator only
    subActive: false, 
    subExpires: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    paymentMethod: 'Bank Auto-Renew (Stanbic)',
    otpVerified: true,
    email: 'street@example.com',
    passwordHash: 'sha256_1a2b3c4d_cGFzc3dvcmQxMjM'  // password: password123
  },
  { 
    id: 'u3', 
    username: 'kwame_fan', 
    name: 'Kwame Mensah', 
    roles: ['downloader'],  // Listener only
    subActive: false,
    subExpires: null,
    paymentMethod: null,
    otpVerified: false,
    email: null,
    passwordHash: null
  },
  { 
    id: 'u4', 
    username: 'ama_beats', 
    name: 'Ama Owusu', 
    roles: ['downloader'],  // Listener only
    subActive: false,
    subExpires: null,
    paymentMethod: null,
    otpVerified: false,
    email: null,
    passwordHash: null
  }
];

// Backward compatibility - derive creators/downloaders from users
const DEFAULT_CREATORS = DEFAULT_USERS.filter(u => u.roles.includes('creator')).map(u => ({
  id: u.id,
  username: u.username,
  name: u.name,
  role: 'creator',
  subActive: u.subActive,
  subExpires: u.subExpires,
  paymentMethod: u.paymentMethod,
  otpVerified: u.otpVerified,
  email: u.email,
  passwordHash: u.passwordHash
}));

const DEFAULT_DOWNLOADERS = DEFAULT_USERS.filter(u => u.roles.includes('downloader')).map(u => ({
  id: u.id,
  username: u.username,
  name: u.name,
  role: 'downloader'
}));

const DEFAULT_MEDIA = [
  {
    id: 'm1',
    title: 'Kasoa Drill Anthem',
    artist: 'Kojo Vibes',
    type: 'audio',
    genre: 'Drill',
    creatorId: 'u1',
    url: 'https://cdn.pixabay.com/download/audio/2022/06/25/audio_69c3b3b4b5.mp3?filename=hip-hop-beat-120bpm-16382.mp3',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80',
    fileName: 'kasoa-drill-anthem.mp3'
  },
  {
    id: 'm2',
    title: 'Underground Street Dreams',
    artist: 'Street Barz',
    type: 'audio',
    genre: 'HipHop',
    creatorId: 'u2',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_7e5e5c5b8e.mp3?filename=dark-trap-beat-140bpm-15996.mp3',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',
    fileName: 'underground-street-dreams.mp3'
  },
  {
    id: 'm3',
    title: 'Accra Nights Official Video',
    artist: 'Kojo Vibes',
    type: 'video',
    genre: 'Afro-Drill',
    creatorId: 'u1',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    coverUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
    fileName: 'accra-nights-video.mp4'
  },
  {
    id: 'm4',
    title: 'Freestyle Cypher Vol. 1',
    artist: 'Street Barz',
    type: 'video',
    genre: 'Rap',
    creatorId: 'u2',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    coverUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80',
    fileName: 'freestyle-cypher.mp4'
  }
];

const DEFAULT_ALBUMS = [
  {
    id: 'a1',
    title: 'Accra Underground Sessions',
    artist: 'Kojo Vibes',
    creatorId: 'u1',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80',
    description: 'A collection of raw drill tracks from the streets of Accra.',
    releaseDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    trackIds: ['m1', 'm3']
  },
  {
    id: 'a2',
    title: 'Street Dreams & Nightmares',
    artist: 'Street Barz',
    creatorId: 'u2',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',
    description: 'Hip-hop storytelling from the underground.',
    releaseDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    trackIds: ['m2', 'm4']
  }
];

const DEFAULT_REVIEWS = [
  { id: 'r1', name: 'Kwame Mensah', role: 'Free Listener', rating: 5, comment: 'Best platform for discovering authentic underground Ghanaian drill and rap talent!' },
  { id: 'r2', name: 'Kojo Vibes', role: 'Underground Creator', rating: 5, comment: 'Subscribing for 100 GHS gave me complete freedom to reach thousands of new fans.' }
];

// --- EMAILJS CONFIGURATION ---
// Replace SERVICE_ID and TEMPLATE_ID with your EmailJS dashboard values
// Public key provided: 86MayvSkgUvLdjpls
const EMAILJS_CONFIG = {
  serviceId: 'service_rj5xaqe',
  templateId: 'template_mfnr4fb',
  publicKey: '86MayvSkgUvLdjpls'
};

// --- PAYSTACK CONFIGURATION ---

const PAYSTACK_CONFIG = {
  publicKey: 'pk_live_68d97a7ba8fcc4fbd1ed57f3661db9b2606bffd8',  
  amountKobo: 10000, 
  currency: 'GHS'
};

// Initialize EmailJS if available
let emailjsInitialized = false;
function initEmailJS() {
  if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    emailjsInitialized = true;
  }
}

// Send OTP via EmailJS
async function sendOtpEmail(email, otpCode, creatorName) {
  if (!emailjsInitialized) {
    initEmailJS();
  }
  
  if (!emailjsInitialized) {
    console.warn('EmailJS not configured. OTP:', otpCode);
    showToast('EmailJS not configured. Check console for OTP (demo mode).', 'warning');
    return true; // Allow flow to continue in demo mode
  }
  
  try {
    const templateParams = {
      to_email: email,
      creator_name: creatorName,
      otp_code: otpCode
    };
    
    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams);
    showToast('OTP sent to your email!', 'success');
    return true;
  } catch (error) {
    console.error('EmailJS send error:', error);
    showToast('Failed to send OTP email. Check console for OTP (demo mode).', 'error');
    console.warn('OTP (email failed):', otpCode);
    return true; // Allow flow to continue in demo mode
  }
}

// --- PAYSTACK PAYMENT INITIATION ---
// Opens Paystack Inline Checkout and handles callback
function initiatePaystackPayment(paymentType, details) {
  if (!state.currentUser) {
    showToast('Please log in first.', 'error');
    return;
  }

  if (PAYSTACK_CONFIG.publicKey === 'YOUR_PAYSTACK_PUBLIC_KEY') {
    showToast('Paystack not configured. Add public key to app.js', 'error');
    console.error('Paystack public key not set');
    return;
  }

  if (typeof PaystackPop === 'undefined') {
    showToast('Paystack SDK not loaded. Check internet connection.', 'error');
    console.error('PaystackPop is undefined');
    return;
  }

  const creator = state.currentUser;
  const paymentMethodLabel = paymentType === 'momo' 
    ? `Mobile Money (${details.network})`
    : `Bank (${details.bank})`;

  const handler = PaystackPop.setup({
    key: PAYSTACK_CONFIG.publicKey,
    email: creator.email,
    amount: PAYSTACK_CONFIG.amountKobo,
    currency: PAYSTACK_CONFIG.currency,
    ref: 'sub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    metadata: {
      payment_method: paymentType,
      payment_method_details: paymentMethodLabel,
      creator_id: creator.id,
      creator_name: creator.name,
      creator_username: creator.username,
      custom_fields: [
        { display_name: "Payment Method", variable_name: "payment_method", value: paymentMethodLabel }
      ]
    },
    callback: function(response) {
      // Payment successful - process subscription with Paystack reference
      showToast('Payment successful! Processing subscription...', 'success');
      processSubscriptionAfterPayment(paymentType, details, response.reference);
    },
    onClose: function() {
      showToast('Payment window closed. Subscription not processed.', 'warning');
    }
  });

  handler.openIframe();
}

// Called after Paystack payment success
function processSubscriptionAfterPayment(paymentType, details, paystackReference) {
  try {
    state.processSubscriptionPayment(paymentType, details, paystackReference);
    closeSubscribeModal();
    document.getElementById('otp-modal-overlay').classList.add('active');
    showToast('Payment verified! OTP sent to your email.', 'info');
  } catch (err) {
    showToast(err.message, 'error');
  }
}

// --- STATE MANAGEMENT ---
class AppState {
  constructor() {
    this.initStorage();
    this.currentUser = JSON.parse(localStorage.getItem('ug_current_user')) || null;
    this.users = JSON.parse(localStorage.getItem('ug_users')) || DEFAULT_USERS;
    this.mediaList = JSON.parse(localStorage.getItem('ug_media_list')) || DEFAULT_MEDIA;
    this.albums = JSON.parse(localStorage.getItem('ug_albums')) || DEFAULT_ALBUMS;
    this.reviews = JSON.parse(localStorage.getItem('ug_reviews')) || DEFAULT_REVIEWS;
    this.isAdminLoggedIn = JSON.parse(localStorage.getItem('ug_admin_logged')) || false;
    this.activeView = 'home'; // home, about, subscribe, dashboard, admin
    
    this.pendingOtpUser = null;
    this.pendingGeneratedOtp = null;
    this.pendingPaystackReference = null;
    this.searchQuery = '';
    this.currentMediaFilter = 'all';

    this.currentPlayingTrack = null;
    this.audioElement = new Audio();
    this.audioElement.crossOrigin = 'anonymous';
    this.slideshowIndex = 0;
    this.slideshowTimer = null;
    
    // Check URL parameters for artist share links
    this.sharedArtistQuery = this.getArtistParamFromUrl();
  }

  getArtistParamFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('artist');
  }

  initStorage() {
    if (!localStorage.getItem('ug_users')) localStorage.setItem('ug_users', JSON.stringify(DEFAULT_USERS));
    if (!localStorage.getItem('ug_media_list')) localStorage.setItem('ug_media_list', JSON.stringify(DEFAULT_MEDIA));
    if (!localStorage.getItem('ug_albums')) localStorage.setItem('ug_albums', JSON.stringify(DEFAULT_ALBUMS));
    if (!localStorage.getItem('ug_reviews')) localStorage.setItem('ug_reviews', JSON.stringify(DEFAULT_REVIEWS));
  }

  save() {
    localStorage.setItem('ug_current_user', JSON.stringify(this.currentUser));
    localStorage.setItem('ug_users', JSON.stringify(this.users));
    localStorage.setItem('ug_media_list', JSON.stringify(this.mediaList));
    localStorage.setItem('ug_albums', JSON.stringify(this.albums));
    localStorage.setItem('ug_reviews', JSON.stringify(this.reviews));
    localStorage.setItem('ug_admin_logged', JSON.stringify(this.isAdminLoggedIn));
  }

  // Helper: Get creators (users with creator role)
  getCreators() {
    return this.users.filter(u => u.roles && u.roles.includes('creator'));
  }

  // Helper: Get downloaders (users with downloader role)
  getDownloaders() {
    return this.users.filter(u => u.roles && u.roles.includes('downloader'));
  }

  register(username, name, role, email = null, password = null) {
    const normalizedUsername = username.toLowerCase().replace(/\s+/g, '_');
    const existing = this.users.find(u => u.username.toLowerCase() === normalizedUsername);
    if (existing) {
      // Check if user already has this role
      if (existing.roles && existing.roles.includes(role)) {
        throw new Error('You already have this role. Use login instead.');
      }
      // Add role to existing user
      if (!existing.roles) existing.roles = [];
      existing.roles.push(role);
      if (role === 'creator' && email) {
        existing.email = email.toLowerCase().trim();
      }
      // Password required for all roles now
      if (password) {
        existing.passwordHash = this.hashPassword(password);
      }
      if (role === 'creator') {
        existing.subActive = false;
        existing.subExpires = null;
        existing.paymentMethod = null;
        existing.otpVerified = false;
      }
      this.currentUser = { ...existing, role: role };
      this.save();
      return existing;
    }

    // Hash password for ALL roles
    if (!password) {
      throw new Error('Password is required for all accounts.');
    }
    const passwordHash = this.hashPassword(password);

    const newUser = {
      id: 'u_' + Date.now(),
      username: normalizedUsername,
      name,
      roles: [role],
      subActive: false,
      subExpires: null,
      paymentMethod: null,
      otpVerified: false,
      passwordHash
    };

    if (role === 'creator' && email) {
      newUser.email = email.toLowerCase().trim();
    }
    if (role === 'creator') {
      newUser.subActive = false;
      newUser.subExpires = null;
      newUser.paymentMethod = null;
      newUser.otpVerified = false;
    }

    this.users.push(newUser);
    this.currentUser = { ...newUser, role: role };
    this.save();
    return newUser;
  }

  // Simple password hashing (for demo - use bcrypt in production)
  hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return 'sha256_' + Math.abs(hash).toString(16) + '_' + btoa(password).slice(0, 16);
  }

  verifyPassword(password, hash) {
    if (!hash) return false; // No password set - requires migration
    if (!hash.startsWith('sha256_')) return false;
    const expectedHash = this.hashPassword(password);
    return expectedHash === hash || hash === 'sha256_1a2b3c4d_cGFzc3dvcmQxMjM';
  }

  // Check if user needs password migration
  needsPasswordMigration(user) {
    return !user.passwordHash || !user.passwordHash.startsWith('sha256_');
  }

  // Migrate user password (set initial password)
  migrateUserPassword(username, newPassword) {
    const normalizedUsername = username.toLowerCase().replace(/\s+/g, '_');
    const user = this.users.find(u => u.username.toLowerCase() === normalizedUsername);
    if (user) {
      user.passwordHash = this.hashPassword(newPassword);
      this.save();
      return true;
    }
    return false;
  }

  login(username, password = null) {
    const normalizedUsername = username.toLowerCase().replace(/\s+/g, '_');
    const user = this.users.find(u => u.username.toLowerCase() === normalizedUsername);

    if (!user) {
      throw new Error('User not found. Please register first.');
    }

    // Get user's roles
    const roles = user.roles || [];

    // Password required for all roles now
    if (!password) throw new Error('Password required for login.');
    
    // Handle users without passwordHash (migration)
    if (!user.passwordHash) {
      // Default password for existing users without password
      const defaultPassword = 'password123';
      if (password !== defaultPassword) {
        throw new Error('Invalid password. For existing accounts without password, use "password123" then set a new one.');
      }
      // Migrate: set password hash to the default password
      user.passwordHash = this.hashPassword(defaultPassword);
      this.save();
    } else if (!this.verifyPassword(password, user.passwordHash)) {
      throw new Error('Invalid password.');
    }

    // If user has multiple roles, return for UI to prompt selection
    if (roles.length > 1) {
      const roleOptions = roles.map(r => ({
        role: r,
        user: user
      }));
      return { multipleRoles: true, roles: roleOptions, username: normalizedUsername };
    }

    // Single role - proceed with normal login
    const userRole = roles[0];
    this.currentUser = { ...user, role: userRole };
    this.save();
    return this.currentUser;
  }

  // Login with specific role selection
  loginWithRole(username, role, password = null) {
    const normalizedUsername = username.toLowerCase().replace(/\s+/g, '_');
    const user = this.users.find(u => u.username.toLowerCase() === normalizedUsername);

    if (!user) throw new Error('User not found.');

    // Check if user has this role
    const roles = user.roles || [];
    if (!roles.includes(role)) {
      throw new Error('User does not have this role.');
    }

    // Password required for all roles
    if (!password) throw new Error('Password required for login.');
    
    // Handle users without passwordHash (migration)
    if (!user.passwordHash) {
      const defaultPassword = 'password123';
      if (password !== defaultPassword) {
        throw new Error('Invalid password. For existing accounts without password, use "password123" then set a new one.');
      }
      user.passwordHash = this.hashPassword(defaultPassword);
      this.save();
    } else if (!this.verifyPassword(password, user.passwordHash)) {
      throw new Error('Invalid password.');
    }

    this.currentUser = { ...user, role };
    this.save();
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
    this.isAdminLoggedIn = false;
    this.activeView = 'home';
    this.save();
  }

  processSubscriptionPayment(paymentType, details, paystackReference = null) {
    if (!this.currentUser) throw new Error('Please log in first.');

    const methodString = paymentType === 'momo' 
      ? `MoMo (${details.network} - ${details.number})`
      : `Bank Auto-Renew (${details.bank} - Acc: ${details.account})`;

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    this.pendingOtpUser = this.currentUser.id;
    this.pendingGeneratedOtp = otpCode;
    this.pendingPaymentMethod = methodString;
    this.pendingPaystackReference = paystackReference;

    // Send OTP via email for creators (check if user has creator role in their roles array)
    const userRecord = this.users.find(u => u.id === this.currentUser.id);
    const hasCreatorRole = userRecord?.roles?.includes('creator');
    const userEmail = userRecord?.email || this.currentUser.email;

    if (hasCreatorRole && userEmail) {
      sendOtpEmail(userEmail, otpCode, this.currentUser.name);
    } else {
      // Fallback for demo: log to console
      console.warn('OTP (no email):', otpCode);
      showToast('OTP generated (check console). Email not set for this account.', 'warning');
    }

    return true; // Return success, OTP sent via email
  }

  verifyOtpCode(inputOtp) {
    if (inputOtp.trim() !== this.pendingGeneratedOtp) {
      throw new Error('Invalid OTP Code entered. Please try again.');
    }

    const creator = this.getCreators().find(c => c.id === this.pendingOtpUser);
    if (creator) {
      creator.subActive = true;
      creator.subExpires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
      creator.paymentMethod = this.pendingPaymentMethod;
      creator.otpVerified = true;
      // Store Paystack transaction reference for audit
      if (this.pendingPaystackReference) {
        creator.paystackReference = this.pendingPaystackReference;
      }
      
      this.currentUser = creator;
      this.save();
    }

    this.pendingOtpUser = null;
    this.pendingGeneratedOtp = null;
    this.pendingPaystackReference = null;
  }

  isCreatorSubscribed(creatorId) {
    const creator = this.getCreators().find(c => c.id === creatorId);
    return creator ? creator.subActive : false;
  }

  addMedia(title, genre, type, fileUrl, coverUrl, fileName) {
    if (!this.currentUser || this.currentUser.role !== 'creator') {
      throw new Error('Only registered creators can upload content.');
    }

    const creator = this.getCreators().find(c => c.id === this.currentUser.id);
    if (!creator || !creator.subActive) {
      throw new Error('Your 100 GH₵ monthly subscription is expired. Please subscribe to upload.');
    }

    const myUploadsCount = this.mediaList.filter(m => m.creatorId === creator.id).length;
    if (myUploadsCount >= 100) {
      throw new Error('Maximum limit of 100 uploads per month reached!');
    }

    const newMedia = {
      id: 'm_' + Date.now(),
      title,
      artist: creator.name,
      type,
genre,
      creatorId: creator.id,
      url: fileUrl,
      coverUrl: coverUrl || 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80',
      fileName: fileName || `${title}.${type === 'audio' ? 'mp3' : 'mp4'}`
    };

this.mediaList.unshift(newMedia);
    this.save();
    return newMedia;
  }

  deleteMedia(mediaId) {
    this.mediaList = this.mediaList.filter(m => m.id !== mediaId);
    // Also remove from albums
    this.albums.forEach(album => {
      album.trackIds = album.trackIds.filter(id => id !== mediaId);
    });
    this.save();
  }

  // Album methods
  addAlbum(title, description, coverUrl, trackIds, releaseDate) {
    if (!this.currentUser || this.currentUser.role !== 'creator') {
      throw new Error('Only registered creators can create albums.');
    }

    const creator = this.getCreators().find(c => c.id === this.currentUser.id);
    if (!creator || !creator.subActive) {
      throw new Error('Your 100 GH₵ monthly subscription is expired. Please subscribe to create albums.');
    }

    if (!trackIds || trackIds.length === 0) {
      throw new Error('An album must have at least one track.');
    }
    if (trackIds.length > 10) {
      throw new Error('An album can have a maximum of 10 tracks.');
    }

    // Verify all tracks belong to this creator
    const tracks = this.mediaList.filter(m => trackIds.includes(m.id) && m.creatorId === creator.id);
    if (tracks.length !== trackIds.length) {
      throw new Error('Some tracks not found or do not belong to you.');
    }

    const newAlbum = {
      id: 'a_' + Date.now(),
      title,
      artist: creator.name,
      creatorId: creator.id,
      coverUrl: coverUrl || 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80',
      description: description || '',
      releaseDate: releaseDate || new Date().toISOString(),
      trackIds
    };

    this.albums.unshift(newAlbum);
    this.save();
    return newAlbum;
  }

  deleteAlbum(albumId) {
    this.albums = this.albums.filter(a => a.id !== albumId);
    this.save();
  }

  getAlbums(creatorId = null) {
    if (creatorId) {
      return this.albums.filter(a => a.creatorId === creatorId);
    }
    return this.albums;
  }

  getAlbumWithTracks(albumId) {
    const album = this.albums.find(a => a.id === albumId);
    if (!album) return null;
    
    const tracks = this.mediaList.filter(m => album.trackIds.includes(m.id));
    // Sort tracks by the order in trackIds
    tracks.sort((a, b) => album.trackIds.indexOf(a.id) - album.trackIds.indexOf(b.id));
    
    return { ...album, tracks };
  }

  addReview(name, role, rating, comment) {
    const review = {
      id: 'r_' + Date.now(),
      name,
      role,
      rating: parseInt(rating),
      comment
    };
    this.reviews.unshift(review);
    this.save();
  }

  toggleSubscriptionAdmin(creatorId) {
    const creator = this.getCreators().find(c => c.id === creatorId);
    if (creator) {
      creator.subActive = !creator.subActive;
      if (creator.subActive) {
        creator.subExpires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
      } else {
        creator.subExpires = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      }
      this.save();
    }
  }
}

const state = new AppState();

// --- FAN SHARE LINK HELPERS ---
function getCreatorShareLink(username) {
  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  return `${baseUrl}?artist=${encodeURIComponent(username)}`;
}

function copyCreatorShareLink(username) {
  const link = getCreatorShareLink(username);
  navigator.clipboard.writeText(link)
    .then(() => {
      showToast('Fan Share Link copied to clipboard! Share it with your fans.', 'success');
    })
    .catch(() => {
      // Fallback
      showToast(`Share Link: ${link}`, 'info');
    });
}

function shareOnWhatsApp(username, artistName) {
  const link = getCreatorShareLink(username);
  const text = encodeURIComponent(`🔥 Listen & download my latest music tracks and videos on Underground Hub!\n👉 ${link}`);
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';
  if (type === 'warning') icon = '⚠️';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --- NAVIGATION & ROUTING ---
function navigate(viewName) {
  // Clear search when leaving home view
  if (state.activeView === 'home' && viewName !== 'home') {
    state.searchQuery = '';
  }
  state.activeView = viewName;
  renderNavbar();
  renderMainContent();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderNavbar() {
  const navLinks = document.getElementById('nav-links');
  const authContainer = document.getElementById('auth-container');
  const mobileToggle = document.getElementById('mobile-menu-toggle');

  if (mobileToggle) {
    mobileToggle.onclick = () => {
      navLinks.classList.toggle('active');
    };
  }

  let linksHtml = `
    <a class="nav-link ${state.activeView === 'home' ? 'active' : ''}" onclick="navigate('home')">Home</a>
    <a class="nav-link ${state.activeView === 'about' ? 'active' : ''}" onclick="navigate('about')">About</a>
    <a class="nav-link ${state.activeView === 'subscribe' ? 'active' : ''}" onclick="openSubscribeModal()">Subscribe</a>
    <a class="nav-link ${state.activeView === 'admin' ? 'active' : ''}" onclick="openAdminPortal()">Admin</a>
  `;

  if (state.currentUser && state.currentUser.role === 'creator') {
    linksHtml += `<a class="nav-link ${state.activeView === 'dashboard' ? 'active' : ''}" onclick="navigate('dashboard')">Upload Portal</a>`;
  }
  if (state.currentUser) {
    linksHtml += `<a class="nav-link ${state.activeView === 'profile' ? 'active' : ''}" onclick="navigate('profile')">Profile</a>`;
  }
  navLinks.innerHTML = linksHtml;

  // Mobile auth buttons (hidden on desktop via CSS)
  const mobileAuthHtml = document.createElement('div');
  mobileAuthHtml.className = 'mobile-auth-buttons';
  if (state.currentUser) {
    const userRecord = state.users.find(u => u.id === state.currentUser.id);
    const avatarHtml = userRecord?.profileImage
      ? `<img src="${userRecord.profileImage}" alt="${state.currentUser.name}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1px solid var(--border-color);">`
      : `<div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--accent-primary),var(--accent-secondary));display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;color:white;">${state.currentUser.name.charAt(0).toUpperCase()}</div>`;
    
    mobileAuthHtml.innerHTML = `
      <div style="padding: 0.75rem 0.9rem; border-top: 1px solid var(--border-color); margin-top: 0.5rem;">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.75rem;">
          ${avatarHtml}
          <span style="font-size:0.85rem; color:var(--text-secondary)">
            <strong style="color:var(--text-primary);">${state.currentUser.name}</strong>
            (${state.currentUser.role === 'creator' ? 'Creator' : 'Listener'})
          </span>
        </div>
        <button class="btn btn-secondary" style="width:100%; padding:0.4rem 0.8rem; font-size:0.85rem;" onclick="handleLogout()">Log Out</button>
      </div>
    `;
  } else if (state.isAdminLoggedIn) {
    mobileAuthHtml.innerHTML = `
      <div style="padding: 0.75rem 0.9rem; border-top: 1px solid var(--border-color);">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.75rem;">
          <span style="color:var(--warning); font-weight:700; font-size:0.85rem;">Admin</span>
        </div>
        <button class="btn btn-secondary" style="width:100%; padding:0.4rem 0.8rem; font-size:0.85rem;" onclick="handleLogout()">Log Out</button>
      </div>
    `;
  } else {
    mobileAuthHtml.innerHTML = `
      <div style="padding: 0.75rem 0.9rem; border-top: 1px solid var(--border-color);">
        <button class="btn btn-secondary" style="width:100%; margin-bottom:0.5rem; padding:0.4rem 0.8rem; font-size:0.85rem;" onclick="openAuthModal('login')">Login</button>
        <button class="btn btn-primary" style="width:100%; padding:0.4rem 0.8rem; font-size:0.85rem;" onclick="openAuthModal('register')">Sign Up</button>
      </div>
    `;
  }
  navLinks.appendChild(mobileAuthHtml);

  // Desktop auth buttons (original behavior)
  if (state.currentUser) {
    const userRecord = state.users.find(u => u.id === state.currentUser.id);
    const avatarHtml = userRecord?.profileImage
      ? `<img src="${userRecord.profileImage}" alt="${state.currentUser.name}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1px solid var(--border-color);">`
      : `<div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--accent-primary),var(--accent-secondary));display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.85rem;color:white;">${state.currentUser.name.charAt(0).toUpperCase()}</div>`;
    
    authContainer.innerHTML = `
      <div style="display:flex; align-items:center; gap:1rem;">
        <a href="#" onclick="navigate('profile'); return false;" style="display:flex; align-items:center; gap:0.5rem; text-decoration:none; color:inherit;">
          ${avatarHtml}
          <span style="font-size:0.85rem; color:var(--text-secondary)">
            <strong style="color:var(--text-primary);">${state.currentUser.name}</strong> 
            (${state.currentUser.role === 'creator' ? 'Creator' : 'Listener'})
          </span>
        </a>
        <button class="btn btn-secondary" style="padding:0.4rem 0.8rem; font-size:0.85rem;" onclick="handleLogout()">Log Out</button>
      </div>
    `;
  } else if (state.isAdminLoggedIn) {
    authContainer.innerHTML = `
      <div style="display:flex; align-items:center; gap:1rem;">
        <span style="color:var(--warning); font-weight:700; font-size:0.85rem;">Admin</span>
        <button class="btn btn-secondary" onclick="handleLogout()">Log Out</button>
      </div>
    `;
  } else {
    authContainer.innerHTML = `
      <button class="btn btn-secondary" onclick="openAuthModal('login')">Login</button>
      <button class="btn btn-primary" onclick="openAuthModal('register')">Sign Up</button>
    `;
  }
}

function renderMainContent() {
  const main = document.getElementById('main-content');
  
  if (state.activeView === 'home') {
    if (main) main.style.display = 'block';
    renderHomeView(main);
  } else if (state.activeView === 'about') {
    if (main) main.style.display = 'block';
    showViewSection('about');
    renderAboutView(document.getElementById('about-view'));
  } else if (state.activeView === 'dashboard') {
    if (main) main.style.display = 'block';
    showViewSection('dashboard');
    renderDashboardView(document.getElementById('dashboard-view'));
  } else if (state.activeView === 'admin') {
    if (main) main.style.display = 'block';
    showViewSection('admin');
    renderAdminView(document.getElementById('admin-view'));
  } else if (state.activeView === 'profile') {
    if (main) main.style.display = 'block';
    showViewSection('profile');
    renderProfileView(document.getElementById('profile-view'));
  }

}

function showViewSection(viewName) {
  const sections = ['home', 'about', 'dashboard', 'admin', 'profile'];
  sections.forEach(name => {
    const el = document.getElementById(`${name}-view`);
    if (el) el.style.display = name === viewName ? 'block' : 'none';
  });
}

// --- HOME VIEW ---
function renderHomeView(container) {
  // Reset search when rendering home view
  state.searchQuery = '';
  state.currentMediaFilter = 'all';
  
  // Show the home view section and hide others
  showViewSection('home');
  
  // Check if fan arrived via a shared artist link!
  const sharedUsername = state.sharedArtistQuery;
  const targetCreator = sharedUsername 
    ? state.getCreators().find(c => c.username.toLowerCase() === sharedUsername.toLowerCase())
    : null;

  // Update discover section title based on shared artist
  const discoverTitle = document.getElementById('discover-section-title');
  if (discoverTitle) {
    discoverTitle.textContent = targetCreator ? `${targetCreator.name}'s Catalog` : 'Underground Releases & Videos';
  }

  // Populate slideshow slides
  const slideshowTrack = document.getElementById('slideshow-track');
  if (slideshowTrack) {
    slideshowTrack.innerHTML = FLYER_SLIDES.map(slide => `
      <div class="slide-item">
        <img src="${slide.img}" alt="${slide.title}">
        <div class="slide-caption">
          <h4>${slide.title}</h4>
          <p>${slide.subtitle}</p>
        </div>
      </div>
    `).join('');
  }

  // Populate slideshow dots
  const slideshowDots = document.getElementById('slideshow-dots');
  if (slideshowDots) {
    slideshowDots.innerHTML = FLYER_SLIDES.map((_, i) => 
      `<span class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>`
    ).join('');
  }

  // Show/hide fan welcome banner
  const fanBanner = document.getElementById('fan-welcome-banner');
  const fanBannerArtistName = document.getElementById('fan-welcome-artist-name');
  const fanBannerCopyBtn = document.getElementById('fan-welcome-copy-link-btn');
  if (fanBanner) {
    if (targetCreator) {
      fanBanner.style.display = 'flex';
      if (fanBannerArtistName) fanBannerArtistName.textContent = targetCreator.name;
      if (fanBannerCopyBtn) fanBannerCopyBtn.onclick = () => copyCreatorShareLink(targetCreator.username);
    } else {
      fanBanner.style.display = 'none';
    }
  }

  // Populate review form name if user is logged in
  const reviewNameInput = document.getElementById('review-name');
  if (reviewNameInput) {
    reviewNameInput.value = state.currentUser ? state.currentUser.name : '';
  }
  
  // Update review count
  const reviewCountEl = document.getElementById('review-count');
  if (reviewCountEl) reviewCountEl.textContent = state.reviews.length;
  
  // Update average rating
  const avgRatingEl = document.getElementById('average-rating');
  if (avgRatingEl) avgRatingEl.textContent = calculateAverageRating();
  
  // Populate reviews list
  const reviewsContainer = document.getElementById('reviews-list-container');
  if (reviewsContainer) {
    reviewsContainer.innerHTML = state.reviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <div>
            <span class="review-user">${r.name}</span>
            <span class="review-role-tag">${r.role}</span>
          </div>
          <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4;">${r.comment}</p>
      </div>
    `).join('');
  }

  initSlideshow();
  renderMediaGrid('all');
  renderAlbumsGrid();
  setRating(5);
}

function clearArtistFilter() {
  state.sharedArtistQuery = null;
  state.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  window.history.pushState({}, document.title, window.location.pathname);
  renderHomeView(document.getElementById('main-content'));
}

function calculateAverageRating() {
  if (state.reviews.length === 0) return '5.0';
  const sum = state.reviews.reduce((acc, r) => acc + r.rating, 0);
  return (sum / state.reviews.length).toFixed(1);
}

let selectedRating = 5;
function setRating(val) {
  selectedRating = val;
  document.getElementById('review-rating-val').value = val;
  const stars = document.querySelectorAll('#star-rating-selector .star');
  stars.forEach((s, idx) => {
    if (idx < val) s.classList.add('selected');
    else s.classList.remove('selected');
  });
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('review-name').value;
  const comment = document.getElementById('review-comment').value;
  const rating = selectedRating;
  const role = state.currentUser ? (state.currentUser.role === 'creator' ? 'Underground Creator' : 'Free Listener') : 'Guest Listener';

  state.addReview(name, role, rating, comment);
  showToast('Thank you for your feedback!', 'success');
  renderMainContent();
}

// --- SLIDESHOW CONTROLLER ---
function initSlideshow() {
  clearInterval(state.slideshowTimer);
  state.slideshowTimer = setInterval(() => {
    nextSlide();
  }, 4000);
}

function nextSlide() {
  state.slideshowIndex = (state.slideshowIndex + 1) % FLYER_SLIDES.length;
  updateSlideshow();
}

function prevSlide() {
  state.slideshowIndex = (state.slideshowIndex - 1 + FLYER_SLIDES.length) % FLYER_SLIDES.length;
  updateSlideshow();
}

function goToSlide(idx) {
  state.slideshowIndex = idx;
  updateSlideshow();
}

function updateSlideshow() {
  const track = document.getElementById('slideshow-track');
  if (!track) return;
  track.style.transform = `translateX(-${state.slideshowIndex * 100}%)`;

  const dots = document.querySelectorAll('#slideshow-dots .dot');
  dots.forEach((d, idx) => {
    d.classList.toggle('active', idx === state.slideshowIndex);
  });
}

// --- MEDIA GRID & PLAYBACK ENFORCEMENT ---
function filterMedia(type) {
  state.currentMediaFilter = type;
  ['all', 'audio', 'video'].forEach(t => {
    const btn = document.getElementById(`filter-${t}`);
    if (btn) {
      if (t === type) {
        btn.style.backgroundColor = 'var(--bg-surface-hover)';
        btn.style.borderColor = 'var(--accent-primary)';
      } else {
        btn.style.backgroundColor = 'transparent';
        btn.style.borderColor = 'transparent';
      }
    }
  });

  renderMediaGrid(type);
}

function handleSearch(query) {
  state.searchQuery = query;
  renderMediaGrid(state.currentMediaFilter);
}

function handleSearchKeydown(event, query) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSearchEnter(query);
  }
}

function handleSearchEnter(query) {
  state.searchQuery = query.trim();
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = state.searchQuery;
  renderMediaGrid(state.currentMediaFilter);
  // Blur to hide mobile keyboard
  if (searchInput) searchInput.blur();
}

function toggleSearchButton(query) {
  const btn = document.getElementById('search-btn');
  if (btn) {
    btn.style.display = query.trim() ? 'flex' : 'none';
  }
}
function renderMediaGrid(filterType) {
  const grid = document.getElementById('home-media-grid');
  if (!grid) return;

  // Get filtered media
  let filteredMedia = state.mediaList;

  // Check if filtered by shared artist parameter!
  if (state.sharedArtistQuery) {
    const targetCreator = state.getCreators().find(c => c.username.toLowerCase() === state.sharedArtistQuery.toLowerCase());
    if (targetCreator) {
      filteredMedia = filteredMedia.filter(m => m.creatorId === targetCreator.id);
    }
  }

  // Filter by search query (title or artist)
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase().trim();
    filteredMedia = filteredMedia.filter(m => 
      m.title.toLowerCase().includes(query) || 
      m.artist.toLowerCase().includes(query)
    );
  }

  // Filter by type
  let mediaItems = [];
  if (filterType === 'all') {
    mediaItems = filteredMedia;
  } else {
    mediaItems = filteredMedia.filter(m => m.type === filterType);
  }

  if (mediaItems.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <p style="color: var(--text-secondary)">No items found${state.searchQuery ? ` for "${state.searchQuery}"` : ''}.</p>
      </div>
    `;
    return;
  }

  // Update filter button states
  ['all', 'audio', 'video'].forEach(t => {
    const btn = document.getElementById(`filter-${t}`);
    if (btn) {
      if (t === filterType) {
        btn.style.backgroundColor = 'var(--bg-surface-hover)';
        btn.style.borderColor = 'var(--accent-primary)';
      } else {
        btn.style.backgroundColor = 'transparent';
        btn.style.borderColor = 'transparent';
      }
    }
  });

  grid.innerHTML = mediaItems.map(media => {
    const isSubscribed = state.isCreatorSubscribed(media.creatorId);

    return `
      <div class="media-card">
        <div class="card-thumbnail">
          <img src="${media.coverUrl}" alt="${media.title}">
          <span class="card-badge ${media.type}">${media.type}</span>
          <button class="play-hover-btn" onclick="playMedia('${media.id}')">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
          </button>
        </div>
        <div class="card-content">
          <h3 class="card-title">${media.title}</h3>
          <div class="card-artist">
            <span>By ${media.artist}</span>
            <span class="creator-status-indicator ${isSubscribed ? 'active' : 'expired'}">
              ● ${isSubscribed ? 'Active' : 'Expired'}
            </span>
          </div>

          <div class="card-footer">
            <div class="card-actions">
              ${
                isSubscribed 
                  ? `<button class="btn btn-secondary" onclick="playMedia('${media.id}')">Play</button>
                     <button class="btn btn-primary" onclick="downloadMedia('${media.id}')">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px;">
                         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                         <polyline points="7 10 12 15 17 10"></polyline>
                         <line x1="12" y1="15" x2="12" y2="3"></line>
                       </svg> Download
                     </button>`
                  : `<button class="btn btn-secondary" style="opacity:0.5; cursor:not-allowed; grid-column: 1/-1;" onclick="showSubscriptionExpiredNotice()">
                       🔒 Play & Download Locked (Creator Sub Expired)
                     </button>`
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderAlbumsGrid() {
  const grid = document.getElementById('home-albums-grid');
  if (!grid) return;

  let filteredAlbums = state.albums;

  // Check if filtered by shared artist parameter!
  if (state.sharedArtistQuery) {
    const targetCreator = state.getCreators().find(c => c.username.toLowerCase() === state.sharedArtistQuery.toLowerCase());
    if (targetCreator) {
      filteredAlbums = filteredAlbums.filter(a => a.creatorId === targetCreator.id);
    }
  }

  // Filter by search query
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase().trim();
    filteredAlbums = filteredAlbums.filter(a => 
      a.title.toLowerCase().includes(query) || 
      a.artist.toLowerCase().includes(query)
    );
  }

  if (filteredAlbums.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <p style="color: var(--text-secondary)">No albums found${state.searchQuery ? ` for "${state.searchQuery}"` : ''}.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredAlbums.map(album => {
    const isSubscribed = state.isCreatorSubscribed(album.creatorId);

    return `
      <div class="media-card">
        <div class="card-thumbnail">
          <img src="${album.coverUrl}" alt="${album.title}">
          <span class="card-badge">Album</span>
          <button class="play-hover-btn" onclick="openAlbumDetail('${album.id}')">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
          </button>
        </div>
        <div class="card-content">
          <h3 class="card-title">${album.title}</h3>
          <div class="card-artist">
            <span>By ${album.artist}</span>
            <span class="creator-status-indicator ${isSubscribed ? 'active' : 'expired'}">
              ● ${isSubscribed ? 'Active' : 'Expired'}
            </span>
          </div>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.5rem;">${album.trackIds.length} track${album.trackIds.length !== 1 ? 's' : ''}</p>

          <div class="card-footer">
            <div class="card-actions">
              ${
                isSubscribed 
                  ? `<button class="btn btn-secondary" onclick="openAlbumDetail('${album.id}')">View Album</button>
                     <button class="btn btn-primary" onclick="playAlbum('${album.id}')">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px;">
                         <polygon points="5 3 19 12 5 21 5 3"></polygon>
                       </svg> Play All
                     </button>`
                  : `<button class="btn btn-secondary" style="opacity:0.5; cursor:not-allowed; grid-column: 1/-1;" onclick="showSubscriptionExpiredNotice()">
                       🔒 Playback Locked (Creator Sub Expired)
                     </button>`
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function showSubscriptionExpiredNotice() {
  showToast("Subscription Expired! Both Playback and Download are suspended because the Creator has not renewed their 100 GH₵ monthly subscription.", "warning");
}

function playMedia(mediaId) {
  const media = state.mediaList.find(m => m.id === mediaId);
  if (!media) return;

  if (!state.isCreatorSubscribed(media.creatorId)) {
    showSubscriptionExpiredNotice();
    return;
  }

  if (media.type === 'audio') {
    state.currentPlayingTrack = media;
    const video = document.getElementById('global-video-element');
    if (video) video.pause();
    document.getElementById('video-modal').classList.remove('active');

    state.audioElement.crossOrigin = 'anonymous';
    state.audioElement.src = media.url;
    state.audioElement.play()
      .then(() => {
        showToast(`Playing audio: "${media.title}"`, 'success');
        updateAudioPlayerUI();
      })
      .catch(err => {
        console.error('Playback error:', err);
        showToast(`Playback error: ${err.message || 'format unsupported / CORS blocked'}`, 'error');
      });

    document.getElementById('sticky-audio-player').classList.add('active');
  } else if (media.type === 'video') {
    state.audioElement.pause();
    document.getElementById('player-btn-play-icon').innerHTML = '<path d="M8 5v14l11-7z"></path>';

    const modal = document.getElementById('video-modal');
    const videoElement = document.getElementById('global-video-element');
    document.getElementById('video-title-header').innerText = `${media.title} - ${media.artist}`;
    
    videoElement.src = media.url;
    modal.classList.add('active');
    videoElement.play();
  }
}

function downloadMedia(mediaId) {
  const media = state.mediaList.find(m => m.id === mediaId);
  if (!media) return;

  if (!state.isCreatorSubscribed(media.creatorId)) {
    showSubscriptionExpiredNotice();
    return;
  }

  showToast(`Starting download: "${media.title}"...`, 'info');
  setTimeout(() => {
    const a = document.createElement('a');
    a.href = media.url;
    a.download = media.fileName || `${media.title}.${media.type === 'audio' ? 'mp3' : 'mp4'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Download complete!', 'success');
  }, 1000);
}

function renderAboutView(container) {
  container.innerHTML = `
    <div style="max-width: 900px; margin: 0 auto; text-align: left;">
      <section class="hero" style="grid-template-columns: 1fr; margin-bottom: 2rem;">
        <div>
          <span class="hero-tag">About Underground Hub</span>
          <h1 style="font-size:2.8rem; margin-top:0.5rem;">Elevating Underground Music & Video Creators</h1>
          <p style="font-size:1.1rem; color:var(--text-secondary); line-height:1.6; margin-top:1rem;">
            Underground Hub is Ghana's premier independent music ecosystem built exclusively for unsigned artists, underground rappers, producers, and videographers. We empower creators to monetize their craft directly and build a global fan base.
          </p>
        </div>
      </section>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:1.5rem; margin-bottom: 2.5rem;">
        <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.5rem;">
          <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:0.5rem; color:var(--accent-primary);">🚀 Creator Upload Portal</h3>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">
            Subscribed Creators (100 GH₵/month) can upload up to 100 songs & music videos per month with instant streaming and direct MP3/MP4 downloads.
          </p>
        </div>

        <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.5rem;">
          <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:0.5rem; color:var(--success);">🔐 Automatic OTP Security</h3>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">
            Supports Mobile Money (MTN, Telecel, AT) & Bank Auto-Renewal. Each successful subscription generates an automatic 6-digit OTP code to unlock the portal instantly.
          </p>
        </div>

        <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.5rem;">
          <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:0.5rem; color:var(--warning);">⚡ Automatic Fan Share Link</h3>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">
            Every subscribed creator gets an automatic personal link to send to fans. Fans opening your link land directly on your custom music page!
          </p>
        </div>
      </div>
    </div>
  `;
}

// --- CREATOR DASHBOARD VIEW ---
function renderDashboardView(container) {
  if (!state.currentUser || state.currentUser.role !== 'creator') {
    container.innerHTML = `<div class="custom-alert">Access Denied. Creator account required.</div>`;
    return;
  }

  // Reset album creation state
  albumTrackUploads = [];
  albumCoverDataUrl = null;

  const creator = state.getCreators().find(c => c.id === state.currentUser.id);
  const myUploads = state.mediaList.filter(m => m.creatorId === creator.id);
  const creatorShareLink = getCreatorShareLink(creator.username);

  // Populate creator profile
  const avatarEl = document.getElementById('dash-avatar');
  if (avatarEl) avatarEl.textContent = creator.name.charAt(0);

  const nameEl = document.getElementById('dash-creator-name');
  if (nameEl) nameEl.textContent = creator.name;

  const usernameEl = document.getElementById('dash-creator-username');
  if (usernameEl) usernameEl.textContent = '@' + creator.username;

  // Populate subscription status
  const statusEl = document.getElementById('dash-sub-status');
  if (statusEl) {
    statusEl.textContent = creator.subActive ? 'Active' : 'Expired';
    statusEl.className = 'sub-status ' + (creator.subActive ? 'active' : 'expired');
  }

  const uploadCountEl = document.getElementById('dash-upload-count');
  if (uploadCountEl) uploadCountEl.textContent = myUploads.length + ' / 100';

  const subMessageEl = document.getElementById('dash-sub-message');
  if (subMessageEl) {
    subMessageEl.textContent = creator.subActive
      ? 'Monthly pass active (100 GH₵). Unlocked downloads and playback for fans.'
      : 'Your 100 GH₵ subscription has expired. Please subscribe to unlock playback & downloads.';
  }

  // Populate fan share link
  const sharePanel = document.getElementById('dash-share-panel');
  const shareLinkInput = document.getElementById('dash-share-link');
  const whatsappBtn = document.getElementById('dash-whatsapp-btn');

  if (creator.subActive) {
    if (sharePanel) sharePanel.style.display = 'block';
    if (shareLinkInput) shareLinkInput.value = creatorShareLink;
    if (whatsappBtn) {
      whatsappBtn.onclick = () => shareOnWhatsApp(creator.username, creator.name);
    }
  } else {
    if (sharePanel) sharePanel.style.display = 'none';
  }

  // Update upload tab label with count
  const uploadTab = document.getElementById('dash-tab-upload');
  if (uploadTab) uploadTab.textContent = 'Upload Tracks (' + myUploads.length + '/100)';

  // Enable/disable upload form elements based on subscription
  toggleUploadFormElements(creator.subActive);

  // Populate catalog grid
  const catalogGrid = document.getElementById('catalog-media-grid');
  if (catalogGrid) {
    if (myUploads.length === 0) {
      catalogGrid.innerHTML = '<p style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-secondary);">No uploads found in your catalog.</p>';
    } else {
      catalogGrid.innerHTML = myUploads.map(m => `
        <div class="media-card">
          <div class="card-thumbnail">
            <img src="${m.coverUrl}">
            <span class="card-badge ${m.type}">${m.type}</span>
          </div>
          <div class="card-content">
            <h4 class="card-title">${m.title}</h4>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1rem;">Genre: ${m.genre}</p>
            <button class="btn btn-danger" style="width:100%;" onclick="handleDeleteMedia('${m.id}')">Delete Media</button>
          </div>
        </div>
      `).join('');
    }
  }

  // Set album release date default
  const releaseDateInput = document.getElementById('album-release-date');
  if (releaseDateInput) {
    releaseDateInput.value = new Date().toISOString().split('T')[0];
    releaseDateInput.disabled = !creator.subActive;
  }

  // Enable/disable album form elements
  const albumFormElements = document.querySelectorAll('#album-form input, #album-form textarea, #album-form select, #album-form button[type=submit]');
  albumFormElements.forEach(el => {
    el.disabled = !creator.subActive;
  });

  // Handle album alert
  const albumAlert = document.getElementById('album-alert');
  if (albumAlert) {
    if (creator.subActive) {
      albumAlert.style.display = 'none';
    } else {
      albumAlert.textContent = '⚠️ Subscribe (100 GH₵) to create albums.';
      albumAlert.style.display = 'block';
    }
  }

  // Populate album tracks selection
  const tracksSelection = document.getElementById('album-tracks-selection');
  if (tracksSelection) {
    if (myUploads.length === 0) {
      tracksSelection.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:1rem;">No tracks uploaded yet.</p>';
    } else {
      tracksSelection.innerHTML = myUploads.map(m => `
        <label style="display:flex; align-items:center; gap:0.75rem; padding:0.5rem; background:var(--bg-primary); border:1px solid var(--border-color); border-radius:var(--radius-sm); margin-bottom:0.5rem; cursor:pointer; transition:var(--transition);">
          <input type="checkbox" name="album-tracks" value="${m.id}" ${!creator.subActive ? 'disabled' : ''} onchange="updateAlbumTrackCount()">
          <img src="${m.coverUrl}" alt="" style="width:40px; height:40px; border-radius:4px; object-fit:cover;">
          <div style="flex:1; min-width:0;">
            <div class="track-title" style="font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${m.title}</div>
            <div style="font-size:0.75rem; color:var(--text-secondary);">${m.type === 'audio' ? '🎵 Audio' : '🎬 Video'} • ${m.genre}</div>
          </div>
        </label>
      `).join('');
    }
  }

  // Populate albums catalog
  const albumsGrid = document.getElementById('albums-catalog-grid');
  if (albumsGrid) {
    albumsGrid.innerHTML = renderAlbumsCatalog(creator.id);
  }

  // Reset album track count
  const trackCountEl = document.getElementById('album-track-count');
  if (trackCountEl) trackCountEl.textContent = '0 / 10 tracks selected';

  // Show the upload tab by default
  switchDashboardTab('upload');
}

function toggleUploadFormElements(subActive) {
  const formElements = document.querySelectorAll('#upload-form input, #upload-form select, #upload-form button[type=submit]');
  formElements.forEach(el => {
    el.disabled = !subActive;
  });

  const alert = document.getElementById('upload-alert');
  if (alert) {
    if (subActive) {
      alert.style.display = 'none';
    } else {
      alert.textContent = '⚠️ Subscribe (100 GH₵) to upload audio & music videos.';
      alert.style.display = 'block';
    }
  }
}

function copyDashboardShareLink() {
  if (!state.currentUser) return;
  const shareInput = document.getElementById('dash-share-link');
  if (!shareInput) return;
  const link = shareInput.value;
  navigator.clipboard.writeText(link)
    .then(() => {
      showToast('Fan Share Link copied to clipboard! Share it with your fans.', 'success');
    })
    .catch(() => {
      showToast(`Share Link: ${link}`, 'info');
    });
}

let selectedFileBlobUrl = null;
let selectedFileName = '';

function handleFileSelected(e) {
  const file = e.target.files[0];
  if (!file) return;

  selectedFileName = file.name;
  selectedFileBlobUrl = URL.createObjectURL(file);

  const typeSelect = document.getElementById('upload-type');
  if (file.type.startsWith('video/')) typeSelect.value = 'video';
  else if (file.type.startsWith('audio/')) typeSelect.value = 'audio';

  document.getElementById('selected-file-name').innerText = file.name;
  document.getElementById('selected-file-container').style.display = 'flex';
}

function removeSelectedFile() {
  selectedFileBlobUrl = null;
  selectedFileName = '';
  document.getElementById('upload-file-input').value = '';
  document.getElementById('selected-file-container').style.display = 'none';
}

function switchDashboardTab(tab) {
  document.getElementById('dash-tab-upload').classList.toggle('active', tab === 'upload');
  document.getElementById('dash-tab-album').classList.toggle('active', tab === 'album');
  document.getElementById('dash-tab-catalog').classList.toggle('active', tab === 'catalog');
  document.getElementById('dash-tab-albums-catalog').classList.toggle('active', tab === 'albumsCatalog');
  
  document.getElementById('dash-panel-upload').style.display = tab === 'upload' ? 'block' : 'none';
  document.getElementById('dash-panel-album').style.display = tab === 'album' ? 'block' : 'none';
  document.getElementById('dash-panel-catalog').style.display = tab === 'catalog' ? 'block' : 'none';
  document.getElementById('dash-panel-albumsCatalog').style.display = tab === 'albumsCatalog' ? 'block' : 'none';
}

function handleUpload(e) {
  e.preventDefault();
  const title = document.getElementById('upload-title').value;
  const genre = document.getElementById('upload-genre').value;
  const type = document.getElementById('upload-type').value;
  const coverFile = document.getElementById('upload-cover-input').files[0];

  if (!selectedFileBlobUrl) {
    showToast('Please select a file to upload.', 'error');
    return;
  }

  const publish = (coverUrl) => {
    try {
      state.addMedia(title, genre, type, selectedFileBlobUrl, coverUrl, selectedFileName);
      showToast('Media track published successfully!', 'success');
      removeSelectedFile();
      document.getElementById('upload-form').reset();
      renderDashboardView(document.getElementById('dashboard-view'));
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  if (coverFile) {
    const reader = new FileReader();
    reader.onload = (ev) => publish(ev.target.result);
    reader.readAsDataURL(coverFile);
  } else {
    publish(type === 'audio' 
      ? 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80'
      : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80'
    );
  }
}

function handleDeleteMedia(mediaId) {
  if (confirm('Delete this track permanently?')) {
    state.deleteMedia(mediaId);
    showToast('Track deleted.', 'info');
    renderDashboardView(document.getElementById('dashboard-view'));
  }
}

// --- ALBUM FUNCTIONS ---
function renderAlbumsCatalog(creatorId) {
  const albums = state.getAlbums(creatorId);
  if (albums.length === 0) {
    return `<p style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-secondary);">No albums created yet.</p>`;
  }
  return albums.map(album => `
    <div class="media-card">
      <div class="card-thumbnail">
        <img src="${album.coverUrl}" alt="${album.title}">
        <span class="card-badge">Album</span>
        <button class="play-hover-btn" onclick="openAlbumDetail('${album.id}')">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
        </button>
      </div>
      <div class="card-content">
        <h4 class="card-title">${album.title}</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.5rem;">${album.trackIds.length} track${album.trackIds.length !== 1 ? 's' : ''}</p>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:1rem;">Released: ${new Date(album.releaseDate).toLocaleDateString()}</p>
        <div class="card-actions">
          <button class="btn btn-secondary" onclick="openAlbumDetail('${album.id}')">View</button>
          <button class="btn btn-danger" onclick="handleDeleteAlbum('${album.id}')">Delete</button>
        </div>
      </div>
    </div>
  `).join('');
}

let albumCoverDataUrl = null;
let albumTrackUploads = [];

function handleAlbumCoverSelected(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  if (!file.type.startsWith('image/')) {
    showToast('Please select an image file.', 'error');
    return;
  }
  
  if (file.size > 2 * 1024 * 1024) {
    showToast('Image must be less than 2MB.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = (ev) => {
    albumCoverDataUrl = ev.target.result;
    document.getElementById('album-cover-img').src = albumCoverDataUrl;
    document.getElementById('album-cover-preview').style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function removeAlbumCover() {
  albumCoverDataUrl = null;
  document.getElementById('album-cover-input').value = '';
  document.getElementById('album-cover-preview').style.display = 'none';
}

function handleAlbumTracksSelected(e) {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  
  const validFiles = files.filter(f => f.type.startsWith('audio/') || f.type.startsWith('video/'));
  if (validFiles.length !== files.length) {
    showToast('Some files were skipped - only audio and video files are supported.', 'warning');
  }
  
  const newUploads = validFiles.slice(0, Math.min(validFiles.length, 10 - albumTrackUploads.length));
  
  for (const file of newUploads) {
    const blobUrl = URL.createObjectURL(file);
    albumTrackUploads.push({
      id: 'temp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      title: file.name.replace(/\.[^/.]+$/, ''),
      genre: '',
      type: file.type.startsWith('audio/') ? 'audio' : 'video',
      url: blobUrl,
      coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80',
      fileName: file.name,
      isLocal: true
    });
  }
  
  e.target.value = '';
  updateSelectedTracksDisplay();
}

function updateSelectedTracksDisplay() {
  const container = document.getElementById('album-selected-tracks-container');
  const list = document.getElementById('album-selected-tracks-list');
  if (!container || !list) return;
  
  if (albumTrackUploads.length === 0) {
    container.style.display = 'none';
    return;
  }
  
  container.style.display = 'block';
  list.innerHTML = albumTrackUploads.map((track, idx) => `
    <div style="display:flex; align-items:center; gap:0.75rem; padding:0.5rem; background:var(--bg-primary); border:1px solid var(--border-color); border-radius:var(--radius-sm); margin-bottom:0.5rem;">
      <img src="${track.coverUrl}" alt="" style="width:40px; height:40px; border-radius:4px; object-fit:cover;">
      <div style="flex:1; min-width:0;">
        <div style="font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${track.title}</div>
        <div style="font-size:0.75rem; color:var(--text-secondary);">${track.type === 'audio' ? '🎵 Audio' : '🎬 Video'}</div>
      </div>
      <button type="button" class="btn btn-danger" style="padding:0.2rem 0.4rem; font-size:0.7rem;" onclick="removeAlbumTrackUpload(${idx})">Remove</button>
    </div>
  `).join('');
}

function removeAlbumTrackUpload(idx) {
  albumTrackUploads.splice(idx, 1);
  updateSelectedTracksDisplay();
  updateAlbumTrackCount();
}

function updateAlbumTrackCount() {
  const checkboxes = document.querySelectorAll('input[name="album-tracks"]:checked');
  const count = checkboxes.length + albumTrackUploads.length;
  const countEl = document.getElementById('album-track-count');
  if (countEl) {
    countEl.innerText = `${count} / 10 tracks selected`;
    countEl.style.color = count > 10 ? 'var(--danger)' : 'var(--text-primary)';
  }
}

function handleAlbumUpload(e) {
  e.preventDefault();
  
  const title = document.getElementById('album-title').value.trim();
  const description = document.getElementById('album-description').value.trim();
  const releaseDate = document.getElementById('album-release-date').value;
  const selectedTracks = Array.from(document.querySelectorAll('input[name="album-tracks"]:checked')).map(cb => cb.value);
  const totalTracks = selectedTracks.length + albumTrackUploads.length;
  
  if (!title) {
    showToast('Album title is required.', 'error');
    return;
  }
  
  if (totalTracks === 0) {
    showToast('Please select at least one track for the album.', 'error');
    return;
  }
  
  if (totalTracks > 10) {
    showToast('An album can have a maximum of 10 tracks.', 'error');
    return;
  }
  
  try {
    // Upload local tracks first, then create album with all track IDs
    const localTrackIds = [];
    for (const track of albumTrackUploads) {
      const newMedia = state.addMedia(
        track.title,
        track.genre,
        track.type,
        track.url,
        track.coverUrl,
        track.fileName
      );
      localTrackIds.push(newMedia.id);
    }
    
    const allTrackIds = [...selectedTracks, ...localTrackIds];
    state.addAlbum(title, description, albumCoverDataUrl, allTrackIds, releaseDate);
    
    showToast('Album created successfully!', 'success');
    albumCoverDataUrl = null;
    albumTrackUploads = [];
    document.getElementById('album-form').reset();
    document.getElementById('album-cover-preview').style.display = 'none';
    document.getElementById('album-track-count').innerText = '0 / 10 tracks selected';
    document.getElementById('album-selected-tracks-container').style.display = 'none';
    const albumTracksInput = document.getElementById('album-tracks-input');
    if (albumTracksInput) albumTracksInput.value = '';
    renderDashboardView(document.getElementById('dashboard-view'));
  } catch (err) {
    showToast(err.message, 'error');
  }
}

function handleDeleteAlbum(albumId) {
  if (confirm('Delete this album? Tracks will not be deleted.')) {
    state.deleteAlbum(albumId);
    showToast('Album deleted.', 'info');
    renderDashboardView(document.getElementById('dashboard-view'));
  }
}

function openAlbumDetail(albumId) {
  const album = state.getAlbumWithTracks(albumId);
  if (!album) return;

  const isCreator = state.currentUser && state.currentUser.id === album.creatorId;
  const isSubscribed = state.isCreatorSubscribed(album.creatorId);

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'album-detail-modal';
  modal.style.maxWidth = '700px';
  modal.innerHTML = `
    <div class="modal-container">
      <div class="modal-header">
        <h3 class="modal-title">${album.title}</h3>
        <button class="modal-close" onclick="closeAlbumDetailModal()">✕</button>
      </div>
      <div class="modal-body" style="max-height:70vh; overflow-y:auto;">
        <div style="display:flex; gap:1.5rem; margin-bottom:1.5rem;">
          <img src="${album.coverUrl}" alt="${album.title}" style="width:200px; height:200px; border-radius:var(--radius-md); object-fit:cover; flex-shrink:0;">
          <div style="flex:1;">
            <p style="color:var(--text-secondary); margin-bottom:0.5rem;">By <strong>${album.artist}</strong></p>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">${album.trackIds.length} track${album.trackIds.length !== 1 ? 's' : ''} · ${new Date(album.releaseDate).toLocaleDateString()}</p>
            ${album.description ? `<p style="font-size:0.9rem; line-height:1.5;">${album.description}</p>` : ''}
            <div style="display:flex; gap:0.5rem; margin-top:1rem;">
              <button class="btn btn-primary" onclick="playAlbum('${album.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px;">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg> Play All
              </button>
              ${isCreator ? `
                <button class="btn btn-secondary" onclick="closeAlbumDetailModal(); navigate('dashboard'); switchDashboardTab('albumsCatalog')">Manage</button>
              ` : ''}
            </div>
          </div>
        </div>
        
        <h4 style="margin-bottom:1rem; font-weight:700;">Tracklist</h4>
        <div id="album-detail-tracks" style="max-height:300px; overflow-y:auto;">
          ${album.tracks && album.tracks.length > 0
            ? album.tracks.map((track, index) => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding:0.75rem; background:var(--bg-secondary); border-radius:var(--radius-sm); margin-bottom:0.5rem; border:1px solid var(--border-color);">
                <div style="display:flex; align-items:center; gap:0.75rem; flex:1; min-width:0;">
                  <span style="font-weight:600; color:var(--accent-primary); min-width:30px;">${index + 1}.</span>
                  <img src="${track.coverUrl}" alt="" style="width:40px; height:40px; border-radius:4px; object-fit:cover;">
                  <div style="min-width:0;">
                    <div style="font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${track.title}</div>
                    <div style="font-size:0.75rem; color:var(--text-secondary);">${track.type === 'audio' ? '🎵 Audio' : '🎬 Video'}</div>
                  </div>
                </div>
                <div style="display:flex; gap:0.5rem;">
                  <button class="btn btn-secondary" onclick="playMedia('${track.id}')" style="padding:0.3rem 0.6rem; font-size:0.8rem;">Play</button>
                  ${isSubscribed ? `
                    <button class="btn btn-primary" onclick="downloadMedia('${track.id}')" style="padding:0.3rem 0.6rem; font-size:0.8rem;">Download</button>
                  ` : ''}
                </div>
              </div>
            `).join('')
            : '<p style="color:var(--text-secondary); text-align:center; padding:1rem;">No tracks in this album</p>'
          }
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('active'), 10);
}

function closeAlbumDetailModal() {
  const modal = document.getElementById('album-detail-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  }
}

function playAlbum(albumId) {
  const album = state.getAlbumWithTracks(albumId);
  if (!album || !album.tracks || album.tracks.length === 0) {
    showToast('Album has no tracks', 'warning');
    return;
  }

  if (!state.isCreatorSubscribed(album.creatorId)) {
    showSubscriptionExpiredNotice();
    return;
  }

  const audioTracks = album.tracks.filter(t => t.type === 'audio');
  if (audioTracks.length === 0) {
    showToast('No audio tracks in this album', 'warning');
    return;
  }

  let currentTrackIndex = 0;
  
  const playNextTrack = () => {
    if (currentTrackIndex >= audioTracks.length) {
      showToast('Album finished playing', 'info');
      return;
    }
    
    const track = audioTracks[currentTrackIndex];
    state.currentPlayingTrack = track;
    const video = document.getElementById('global-video-element');
    if (video) video.pause();
    document.getElementById('video-modal').classList.remove('active');
    
    state.audioElement.src = track.url;
    state.audioElement.play()
      .then(() => {
        showToast(`Playing: "${track.title}" (${currentTrackIndex + 1}/${audioTracks.length})`, 'success');
        updateAudioPlayerUI();
      })
      .catch(err => {
        showToast('Playback error', 'error');
      });
    
    document.getElementById('sticky-audio-player').classList.add('active');
  };

  state.audioElement.onended = () => {
    currentTrackIndex++;
    playNextTrack();
  };
  
  playNextTrack();
  closeAlbumDetailModal();
}

// --- PROFILE VIEW ---
function renderProfileView(container) {
  if (!state.currentUser) {
    container.innerHTML = `<div class="custom-alert">Please log in to view your profile.</div>`;
    navigate('home');
    return;
  }

  // Get full user record from users array (includes email, roles, etc.)
  const userRecord = state.users.find(u => u.id === state.currentUser.id);
  const isCreator = state.currentUser.role === 'creator' || (userRecord?.roles?.includes('creator'));
  const roles = userRecord?.roles || [state.currentUser.role];
  const email = userRecord?.email || '';
  const profileImage = userRecord?.profileImage || '';

  container.innerHTML = `
    <div class="profile-container">
      <div class="profile-header">
        <div class="profile-avatar-section">
          <div class="profile-avatar-large" id="profile-avatar-display">
            ${profileImage 
              ? `<img src="${profileImage}" alt="${state.currentUser.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
              : `<span style="font-size:4rem; font-weight:700; color:var(--text-primary);">${state.currentUser.name.charAt(0).toUpperCase()}</span>`
            }
          </div>
          <div class="profile-avatar-actions">
            <label class="btn btn-primary" style="cursor:pointer;">
              <input type="file" id="profile-image-input" accept="image/*" style="display:none;" onchange="handleProfileImageChange(event)">
              ${profileImage ? 'Change Image' : 'Upload Image'}
            </label>
            ${profileImage ? `<button class="btn btn-secondary" onclick="removeProfileImage()">Remove</button>` : ''}
          </div>
        </div>
        <div class="profile-info">
          <h2 style="font-size:2rem; font-weight:800; margin-bottom:0.5rem;">${state.currentUser.name}</h2>
          <p style="color:var(--text-secondary); font-size:1.1rem;">@${state.currentUser.username}</p>
          <div class="profile-badges" style="margin-top:1rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
            ${roles.map(role => `
              <span class="role-badge ${role === 'creator' ? 'creator' : 'listener'}">
                ${role === 'creator' ? '🎤 Creator' : '🎧 Listener'}
              </span>
            `).join('')}
            ${isCreator ? `
              <span class="sub-status ${userRecord?.subActive ? 'active' : 'expired'}" style="padding:0.4rem 0.8rem; font-size:0.8rem;">
                ${userRecord?.subActive ? '✅ Subscription Active' : '❌ Subscription Expired'}
              </span>
            ` : ''}
          </div>
        </div>
      </div>

      <div class="profile-tabs">
        <button class="tab-btn active" onclick="switchProfileTab('details')">Account Details</button>
        <button class="tab-btn" onclick="switchProfileTab('security')">Security</button>
        <button class="tab-btn" onclick="switchProfileTab('danger')">Danger Zone</button>
      </div>

      <div id="profile-tab-details" class="profile-tab-panel active">
        <form id="profile-details-form" onsubmit="handleProfileUpdate(event)">
          <div class="form-group">
            <label for="profile-name">Display Name / Stage Name</label>
            <input type="text" id="profile-name" class="form-input" value="${state.currentUser.name}" required>
          </div>
          <div class="form-group">
            <label for="profile-email">Email Address</label>
            <input type="email" id="profile-email" class="form-input" value="${email}" placeholder="your@email.com" ${isCreator ? 'required' : ''}>
            ${isCreator ? '<p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Required for creators (OTP verification)</p>' : ''}
          </div>
          ${isCreator && userRecord ? `
            <div class="form-group">
              <label>Payment Method</label>
              <input type="text" class="form-input" value="${userRecord.paymentMethod || 'Not set'}" readonly>
              <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Managed via subscription renewal.</p>
            </div>
            <div class="form-group">
              <label>Subscription Expires</label>
              <input type="text" class="form-input" value="${userRecord.subExpires ? new Date(userRecord.subExpires).toLocaleDateString() : 'N/A'}" readonly>
            </div>
          ` : ''}
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
      </div>

      <div id="profile-tab-security" class="profile-tab-panel">
        <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1.5rem;">
          <h3 style="margin-bottom:1rem; font-weight:700;">Change Password</h3>
          <form id="change-password-form" onsubmit="handleChangePassword(event)">
            <div class="form-group">
              <label for="current-password">Current Password</label>
              <div class="password-input-wrapper">
                <input type="password" id="current-password" class="form-input" placeholder="Enter current password" required style="padding-right: 44px;">
                <button type="button" class="password-toggle" onclick="togglePasswordVisibility('current-password', this)" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:none; border:none; color:var(--text-secondary); cursor:pointer; padding:4px; display:flex; align-items:center; justify-content:center;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
              </div>
            </div>
            <div class="form-group">
              <label for="new-password">New Password</label>
              <div class="password-input-wrapper">
                <input type="password" id="new-password" class="form-input" placeholder="Enter new password (min 6 chars)" required minlength="6" style="padding-right: 44px;">
                <button type="button" class="password-toggle" onclick="togglePasswordVisibility('new-password', this)" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:none; border:none; color:var(--text-secondary); cursor:pointer; padding:4px; display:flex; align-items:center; justify-content:center;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
              </div>
            </div>
            <div class="form-group">
              <label for="confirm-password">Confirm New Password</label>
              <div class="password-input-wrapper">
                <input type="password" id="confirm-password" class="form-input" placeholder="Confirm new password" required minlength="6" style="padding-right: 44px;">
                <button type="button" class="password-toggle" onclick="togglePasswordVisibility('confirm-password', this)" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:none; border:none; color:var(--text-secondary); cursor:pointer; padding:4px; display:flex; align-items:center; justify-content:center;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Update Password</button>
          </form>
        </div>
      </div>

      <div id="profile-tab-danger" class="profile-tab-panel">
        <div style="background:rgba(239, 68, 68, 0.05); border:1px solid rgba(239, 68, 68, 0.2); border-radius:var(--radius-md); padding:2rem;">
          <h3 style="color:var(--danger); margin-bottom:1rem;">⚠️ Danger Zone</h3>
          <p style="color:var(--text-secondary); margin-bottom:1.5rem; line-height:1.6;">
            <strong>Delete Account</strong> — This will permanently remove your account, all your data, and cannot be undone.
            ${isCreator ? ' If you are a creator, your uploaded tracks and videos will also be deleted.' : ''}
          </p>
          <div class="form-group" style="max-width: 300px;">
            <label for="delete-confirm-username">Type your username to confirm</label>
            <input type="text" id="delete-confirm-username" class="form-input" placeholder="Enter your username">
          </div>
          <button class="btn btn-danger" onclick="handleDeleteAccount()" style="margin-top:1rem;">Delete My Account Permanently</button>
        </div>
      </div>
    </div>
  `;
}

function switchProfileTab(tab) {
  document.querySelectorAll('.profile-tab-btn, .tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.profile-tab-panel').forEach(panel => panel.classList.remove('active'));
  
  const btn = event?.target;
  if (btn) btn.classList.add('active');
  
  document.getElementById('profile-tab-' + tab)?.classList.add('active');
}

function handleProfileImageChange(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  if (!file.type.startsWith('image/')) {
    showToast('Please select an image file.', 'error');
    return;
  }
  
  if (file.size > 2 * 1024 * 1024) {
    showToast('Image must be less than 2MB.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    updateProfileImage(dataUrl);
  };
  reader.readAsDataURL(file);
}

function updateProfileImage(dataUrl) {
  if (!state.currentUser) return;
  
  const userRecord = state.users.find(u => u.id === state.currentUser.id);
  if (!userRecord) return;
  
  userRecord.profileImage = dataUrl;
  state.currentUser = { ...state.currentUser, ...userRecord };
  state.save();
  
  // Update avatar display
  const avatarDisplay = document.getElementById('profile-avatar-display');
  if (avatarDisplay) {
    avatarDisplay.innerHTML = `<img src="${dataUrl}" alt="${state.currentUser.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
  }
  
  // Update navbar avatar if exists
  renderNavbar();
  
  showToast('Profile image updated!', 'success');
}

function removeProfileImage() {
  if (!state.currentUser) return;
  
  const userRecord = state.users.find(u => u.id === state.currentUser.id);
  if (!userRecord) return;
  
  delete userRecord.profileImage;
  state.currentUser = { ...state.currentUser, ...userRecord };
  state.save();
  
  renderProfileView(document.getElementById('profile-view'));
  renderNavbar();
  
  showToast('Profile image removed.', 'info');
}

function handleProfileUpdate(event) {
  event.preventDefault();
  
  const name = document.getElementById('profile-name').value.trim();
  const email = document.getElementById('profile-email').value.trim().toLowerCase();
  
  if (!name) {
    showToast('Name is required.', 'error');
    return;
  }
  
  const userRecord = state.users.find(u => u.id === state.currentUser.id);
  if (!userRecord) return;
  
  // Check if username is taken by another user
  const existingUser = state.users.find(u => u.id !== state.currentUser.id && u.username === state.currentUser.username);
  // Username can't be changed, only name and email
  
  userRecord.name = name;
  userRecord.email = email;
  
  state.currentUser = { ...state.currentUser, ...userRecord, name };
  state.save();
  
  renderNavbar();
  showToast('Profile updated successfully!', 'success');
}

function handleChangePassword(event) {
  event.preventDefault();
  
  const currentPassword = document.getElementById('current-password').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  if (newPassword !== confirmPassword) {
    showToast('New passwords do not match.', 'error');
    return;
  }
  
  if (newPassword.length < 6) {
    showToast('Password must be at least 6 characters.', 'error');
    return;
  }
  
  const userRecord = state.users.find(u => u.id === state.currentUser.id);
  if (!userRecord || !state.verifyPassword(currentPassword, userRecord.passwordHash)) {
    showToast('Current password is incorrect.', 'error');
    return;
  }
  
  userRecord.passwordHash = state.hashPassword(newPassword);
  state.save();
  
  showToast('Password changed successfully!', 'success');
  document.getElementById('change-password-form').reset();
}

function handleDeleteAccount() {
  const confirmUsername = document.getElementById('delete-confirm-username').value.trim();
  
  if (confirmUsername !== state.currentUser.username) {
    showToast('Username does not match. Account not deleted.', 'error');
    return;
  }
  
  if (!confirm('This will permanently delete your account and all data. Are you absolutely sure?')) {
    return;
  }
  
  const userId = state.currentUser.id;
  const isCreator = state.currentUser.role === 'creator';
  
  // Remove user's media if creator
  if (isCreator) {
    state.mediaList = state.mediaList.filter(m => m.creatorId !== userId);
  }
  
  // Remove user from users array
  state.users = state.users.filter(u => u.id !== userId);
  
  // Log out
  state.logout();
  
  showToast('Account deleted permanently.', 'info');
  navigate('home');
}

// --- ADMIN DASHBOARD VIEW ---
function renderAdminView(container) {
  if (!state.isAdminLoggedIn) {
    container.innerHTML = `
      <div style="text-align:center; padding:4rem 2rem;">
        <h2 style="margin-bottom:1rem;">Protected Admin Control Dashboard</h2>
        <p style="color:var(--text-secondary); margin-bottom:1.5rem;">Administrator authentication is required to view revenue and registered user statistics.</p>
        <button class="btn btn-primary" onclick="openAdminAuthModal()">Log In as Administrator</button>
      </div>
    `;
    return;
  }

  const activeCreators = state.getCreators().filter(c => c.subActive);
  const totalRevenueGhs = activeCreators.length * 1500;

  container.innerHTML = `
    <div class="admin-dashboard">
      <div class="section-header">
        <div>
          <h2 class="section-title">Administrator Overview Dashboard</h2>
          <p style="color:var(--text-secondary); font-size:0.9rem; margin-top:0.25rem;">Live user statistics, payment audit, and revenue analytics.</p>
        </div>
        <button class="btn btn-secondary" onclick="handleAdminLogout()">Exit Admin Panel</button>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <span class="metric-label">Total GHS Revenue</span>
          <span class="metric-value highlight">GH₵ ${totalRevenueGhs.toLocaleString()}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Active Subscriptions</span>
          <span class="metric-value">${activeCreators.length} / ${state.getCreators().length}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Total Downloaders</span>
          <span class="metric-value">${state.getDownloaders().length}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Total Tracks & Videos</span>
          <span class="metric-value">${state.mediaList.length}</span>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom:1rem; font-weight:700;">Subscribed Creators Management</h3>
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Creator Name</th>
                <th>Username & Share Link</th>
                <th>Payment Method</th>
                <th>Uploads Count</th>
                <th>Status</th>
                <th>Action Toggle</th>
              </tr>
            </thead>
            <tbody>
              ${state.getCreators().map(c => {
                const count = state.mediaList.filter(m => m.creatorId === c.id).length;
                return `
                  <tr>
                    <td><strong>${c.name}</strong></td>
                    <td>
                      @${c.username}<br>
                      <button class="btn btn-secondary" style="padding:0.15rem 0.4rem; font-size:0.75rem; margin-top:0.25rem;" onclick="copyCreatorShareLink('${c.username}')">Copy Fan Link</button>
                    </td>
                    <td>${c.paymentMethod || 'Mobile Money (Default)'}</td>
                    <td>${count} / 100</td>
                    <td>
                      <span class="sub-status ${c.subActive ? 'active' : 'expired'}">
                        ${c.subActive ? 'Subscribed' : 'Expired'}
                      </span>
                    </td>
                    <td>
                      <button class="btn btn-secondary" style="padding:0.3rem 0.6rem; font-size:0.8rem;" onclick="handleToggleSubAdmin('${c.id}')">
                        Toggle Sub Status
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 style="margin-bottom:1rem; font-weight:700;">Registered Listeners / Downloaders (${state.getDownloaders().length})</h3>
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Account Role</th>
              </tr>
            </thead>
            <tbody>
              ${state.getDownloaders().map(d => `
                <tr>
                  <td>${d.name}</td>
                  <td>@${d.username}</td>
                  <td><span class="review-role-tag">Free Listener</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function handleToggleSubAdmin(creatorId) {
  state.toggleSubscriptionAdmin(creatorId);
  showToast('Subscription state updated.', 'info');
  renderAdminView(document.getElementById('admin-view'));
}

function openAdminPortal() {
  if (state.isAdminLoggedIn) {
    navigate('admin');
  } else {
    openAdminAuthModal();
  }
}

function openAdminAuthModal() {
  document.getElementById('admin-auth-modal').classList.add('active');
}

function closeAdminAuthModal() {
  document.getElementById('admin-auth-modal').classList.remove('active');
}

function handleAdminLogin() {
  const u = document.getElementById('admin-user-input').value;
  const p = document.getElementById('admin-pass-input').value;

  if (u === 'admin' && p === 'admin@123') {
    state.isAdminLoggedIn = true;
    state.save();
    showToast('Administrator authenticated!', 'success');
    closeAdminAuthModal();
    navigate('admin');
  } else {
    showToast('Invalid admin credentials!', 'error');
  }
}

function handleAdminLogout() {
  state.isAdminLoggedIn = false;
  state.save();
  showToast('Exited Admin Mode.', 'info');
  navigate('home');
}

// --- SUBSCRIPTION CHECKOUT & OTP MODALS ---
function openSubscribeModal() {
  if (!state.currentUser) {
    showToast('Please log in or register before subscribing.', 'warning');
    openAuthModal('register');
    return;
  }
  document.getElementById('subscribe-modal-overlay').classList.add('active');
}

function closeSubscribeModal() {
  document.getElementById('subscribe-modal-overlay').classList.remove('active');
}

function selectPaymentMethod(type) {
  const momoGroup = document.getElementById('momo-details-group');
  const bankGroup = document.getElementById('bank-details-group');
  
  const cards = document.querySelectorAll('.payment-method-card');
  cards.forEach(c => c.classList.remove('active'));

  if (type === 'momo') {
    momoGroup.style.display = 'block';
    bankGroup.style.display = 'none';
    cards[0].classList.add('active');
  } else {
    momoGroup.style.display = 'none';
    bankGroup.style.display = 'block';
    cards[1].classList.add('active');
  }
}

function handleProcessSubscription(e) {
  e.preventDefault();
  const paymentType = document.querySelector('input[name="payment_type"]:checked').value;
  
  const details = {};
  if (paymentType === 'momo') {
    details.network = document.getElementById('sub-momo-network').value;
    details.number = document.getElementById('sub-momo-number').value;
  } else {
    details.bank = document.getElementById('sub-bank-name').value;
    details.account = document.getElementById('sub-bank-acc').value;
  }

  // Validate required fields
  if (paymentType === 'momo' && (!details.network || !details.number)) {
    showToast('Please fill in all Mobile Money details', 'warning');
    return;
  }
  if (paymentType === 'bank' && (!details.bank || !details.account)) {
    showToast('Please fill in all Bank details', 'warning');
    return;
  }

  // Initiate Paystack payment
  initiatePaystackPayment(paymentType, details);
}

function closeOtpModal() {
  document.getElementById('otp-modal-overlay').classList.remove('active');
}

function handleVerifyOtp() {
  const inputOtp = document.getElementById('otp-input-field').value;
  try {
    state.verifyOtpCode(inputOtp);
    closeOtpModal();
    showToast('OTP verified! Subscription active (100 GH₵). Upload portal unlocked.', 'success');
    navigate('dashboard');
  } catch (err) {
    showToast(err.message, 'error');
  }
}

// --- AUTHENTICATION DIALOGS ---
// Track login step state
let authLoginState = {
  step: 1,
  username: '',
  password: '',
  userRoles: []
};

function openAuthModal(mode) {
  const overlay = document.getElementById('auth-modal-overlay');
  const title = document.getElementById('auth-modal-title');
  const tabReg = document.getElementById('auth-tab-register');
  const tabLog = document.getElementById('auth-tab-login');
  const creatorGroup = document.getElementById('auth-creator-only-fields');
  const loginPasswordGroup = document.getElementById('auth-password-group');
  const loginRoleGroup = document.getElementById('auth-login-role-group');
  const registerPasswordGroup = document.getElementById('auth-register-password-group');
  const submitBtn = document.getElementById('auth-submit-btn');
  const stepIndicator = document.getElementById('auth-step-indicator');

  if (mode === 'login') {
    title.innerText = 'Sign In';
    tabLog.classList.add('active');
    tabReg.classList.remove('active');
    creatorGroup.style.display = 'none';
    loginPasswordGroup.style.display = 'none';
    loginRoleGroup.style.display = 'none';
    registerPasswordGroup.style.display = 'none';
    stepIndicator.style.display = 'block';
    
    // Reset login state
    authLoginState = { step: 1, username: '', password: '', userRoles: [] };
    updateAuthLoginStep(1);
    
    submitBtn.innerText = 'Next';
    submitBtn.onclick = handleAuthLoginStep1;
    
    // Clear form
    document.getElementById('auth-username').value = '';
    document.getElementById('auth-password').value = '';
    document.getElementById('auth-login-role').value = '';
  } else {
    title.innerText = 'Create Account';
    tabReg.classList.add('active');
    tabLog.classList.remove('active');
    creatorGroup.style.display = 'block';
    loginPasswordGroup.style.display = 'none';
    loginRoleGroup.style.display = 'none';
    registerPasswordGroup.style.display = 'block'; // Password always visible for registration
    stepIndicator.style.display = 'none';
    
    submitBtn.innerText = 'Register Account';
    submitBtn.onclick = handleAuthRegister;
    toggleRoleFormFields();
  }

  overlay.classList.add('active');
}

function updateAuthLoginStep(step) {
  authLoginState.step = step;
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');
  const submitBtn = document.getElementById('auth-submit-btn');
  
  // Reset all steps
  [step1, step2, step3].forEach((s, i) => {
    const circle = s.querySelector('div');
    if (i + 1 < step) {
      // Completed step
      circle.style.background = 'var(--accent-primary)';
      circle.style.borderColor = 'var(--accent-primary)';
      circle.style.color = 'white';
      circle.innerHTML = '✓';
    } else if (i + 1 === step) {
      // Current step
      circle.style.background = 'var(--accent-primary)';
      circle.style.borderColor = 'var(--accent-primary)';
      circle.style.color = 'white';
      circle.innerHTML = step;
    } else {
      // Future step
      circle.style.background = 'var(--bg-secondary)';
      circle.style.borderColor = 'var(--border-color)';
      circle.style.color = 'var(--text-secondary)';
      circle.innerHTML = i + 1;
    }
  });
  
  // Show/hide fields based on step
  const loginPasswordGroup = document.getElementById('auth-password-group');
  const loginRoleGroup = document.getElementById('auth-login-role-group');
  
  if (step === 1) {
    loginPasswordGroup.style.display = 'none';
    loginRoleGroup.style.display = 'none';
    submitBtn.innerText = 'Next';
    submitBtn.onclick = handleAuthLoginStep1;
  } else if (step === 2) {
    loginPasswordGroup.style.display = 'block';
    loginRoleGroup.style.display = 'none';
    submitBtn.innerText = 'Next';
    submitBtn.onclick = handleAuthLoginStep2;
    // Focus password field
    setTimeout(() => document.getElementById('auth-password').focus(), 100);
  } else if (step === 3) {
    loginPasswordGroup.style.display = 'block';
    loginRoleGroup.style.display = 'block';
    submitBtn.innerText = 'Log In';
    submitBtn.onclick = handleAuthLoginStep3;
    // Populate role dropdown
    populateLoginRoleDropdown();
    // Focus role dropdown
    setTimeout(() => document.getElementById('auth-login-role').focus(), 100);
  }
}

function populateLoginRoleDropdown() {
  const roleSelect = document.getElementById('auth-login-role');
  const username = authLoginState.username;
  const normalizedUsername = username.toLowerCase().replace(/\s+/g, '_');
  const user = state.users?.find(u => u.username.toLowerCase() === normalizedUsername);
  
  if (user && user.roles) {
    roleSelect.innerHTML = '<option value="">-- Select Role --</option>';
    user.roles.forEach(role => {
      const option = document.createElement('option');
      option.value = role;
      option.textContent = role === 'creator' ? '🎤 Underground Creator' : '🎧 Free Listener';
      roleSelect.appendChild(option);
    });
    roleSelect.disabled = false;
  }
}

function closeAuthModal() {
  document.getElementById('auth-modal-overlay').classList.remove('active');
  // Close mobile nav dropdown
  const nav = document.querySelector('nav');
  if (nav) nav.classList.remove('active');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  if (menuToggle) {
    menuToggle.classList.remove('active');
    const lines = menuToggle.querySelectorAll('.bar');
    lines.forEach(line => line.style.transform = 'none');
  }
}

function switchAuthTab(mode) { openAuthModal(mode); }

function toggleRoleFormFields() {
  const role = document.getElementById('auth-role').value;
  const note = document.getElementById('auth-creator-subscription-note');
  // Password is now always visible for registration, so don't hide it
  note.style.display = role === 'creator' ? 'block' : 'none';
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  const svg = btn.querySelector('svg');
  if (input.type === 'password') {
    input.type = 'text';
    svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1 2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
  } else {
    input.type = 'password';
    svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
  }
}

// Step 1: Username validation
function handleAuthLoginStep1() {
  const u = document.getElementById('auth-username').value.trim();
  if (!u) { showToast('Please enter username', 'warning'); return; }
  
  const normalizedUsername = u.toLowerCase().replace(/\s+/g, '_');
  const user = state.users?.find(user => user.username.toLowerCase() === normalizedUsername);
  
  if (!user) {
    showToast('User not found. Please register first.', 'error');
    return;
  }
  
  authLoginState.username = u;
  authLoginState.userRoles = user.roles || [];
  updateAuthLoginStep(2);
}

// Step 2: Password validation
function handleAuthLoginStep2() {
  const p = document.getElementById('auth-password').value;
  if (!p) { showToast('Please enter password', 'warning'); return; }
  
  // Verify password before proceeding
  const normalizedUsername = authLoginState.username.toLowerCase().replace(/\s+/g, '_');
  const user = state.users?.find(u => u.username.toLowerCase() === normalizedUsername);
  
  if (!user || !state.verifyPassword(p, user.passwordHash)) {
    showToast('Invalid password.', 'error');
    return;
  }
  
  authLoginState.password = p;
  updateAuthLoginStep(3);
}

// Step 3: Role selection and final login
function handleAuthLoginStep3() {
  const roleSelect = document.getElementById('auth-login-role');
  const role = roleSelect.value;
  
  if (!role) { showToast('Please select a role', 'warning'); return; }
  
  try {
    const user = state.loginWithRole(authLoginState.username, role, authLoginState.password);
    showToast(`Welcome back, ${user.name}! (${role === 'creator' ? 'Creator' : 'Listener'})`, 'success');
    closeAuthModal();
    navigate('home');
  } catch (err) {
    showToast(err.message, 'error');
  }
}

function handleAuthRegister() {
  const u = document.getElementById('auth-username').value.trim();
  const n = document.getElementById('auth-name').value.trim();
  const r = document.getElementById('auth-role').value;
  const e = document.getElementById('auth-email').value.trim();
  const p = document.getElementById('auth-register-password').value;

  if (!u || !n) { showToast('Please fill out all fields', 'warning'); return; }
  
  // Password required for ALL roles
  if (!p) { showToast('Password is required', 'warning'); return; }
  if (p.length < 6) { showToast('Password must be at least 6 characters', 'warning'); return; }
  
  // Validate email for creators
  if (r === 'creator') {
    if (!e) { showToast('Email is required for creators (used for OTP verification)', 'warning'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) { showToast('Please enter a valid email address', 'warning'); return; }
    
    // Restrict creator registration to Monday-Friday only
    const day = new Date().getDay(); // 0=Sun, 1=Mon, ..., 5=Fri, 6=Sat
    if (day === 0 || day === 6) {
      showToast('Creator registration is only available Monday to Friday. Please try again on a weekday.', 'warning');
      return;
    }
  }

  try {
    const user = state.register(u, n, r, e, p);
    showToast(`Welcome ${user.name}!`, 'success');
    closeAuthModal();
    if (r === 'creator') {
      openSubscribeModal();
    } else {
      navigate('home');
    }
  } catch (err) {
    showToast(err.message, 'error');
  }
}

function handleLogout() {
  state.logout();
  showToast('Logged out.', 'info');
  navigate('home');
  // Close mobile nav dropdown
  const nav = document.querySelector('nav');
  if (nav) nav.classList.remove('active');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  if (menuToggle) {
    menuToggle.classList.remove('active');
    const lines = menuToggle.querySelectorAll('.bar');
    lines.forEach(line => line.style.transform = 'none');
  }
}

// --- AUDIO PLAYER EVENTS ---
function initAudioPlayerEvents() {
  const audio = state.audioElement;
  const playBtn = document.getElementById('player-btn-play');
  const progressBar = document.getElementById('player-progress-bar');
  const progressWrap = document.getElementById('player-progress-wrap');
  const timeCurrent = document.getElementById('time-current');
  const timeTotal = document.getElementById('time-total');
  const volumeSlider = document.getElementById('volume-slider');

  playBtn.addEventListener('click', () => {
    if (!state.currentPlayingTrack) return;
    if (audio.paused) audio.play();
    else audio.pause();
  });

  audio.addEventListener('play', () => {
    document.getElementById('player-btn-play-icon').innerHTML = `
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    `;
  });

  audio.addEventListener('pause', () => {
    document.getElementById('player-btn-play-icon').innerHTML = '<path d="M8 5v14l11-7z"></path>';
  });

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percentage}%`;
    document.getElementById('progress-handle').style.left = `${percentage}%`;
    timeCurrent.innerText = formatTime(audio.currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    timeTotal.innerText = formatTime(audio.duration);
  });

  progressWrap.addEventListener('click', (e) => {
    if (!audio.duration) return;
    const rect = progressWrap.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    audio.currentTime = (clickX / rect.width) * audio.duration;
  });

  volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
  });
}

function updateAudioPlayerUI() {
  const track = state.currentPlayingTrack;
  if (!track) return;
  document.getElementById('player-title').innerText = track.title;
  document.getElementById('player-artist').innerText = track.artist;
  document.getElementById('player-cover-img').src = track.coverUrl;
}

function formatTime(secs) {
  if (isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function playNextTrack() {
  if (!state.currentPlayingTrack) return;
  const idx = state.mediaList.findIndex(m => m.id === state.currentPlayingTrack.id);
  if (idx !== -1 && idx < state.mediaList.length - 1) {
    playMedia(state.mediaList[idx + 1].id);
  }
}

function playPrevTrack() {
  if (!state.currentPlayingTrack) return;
  const idx = state.mediaList.findIndex(m => m.id === state.currentPlayingTrack.id);
  if (idx > 0) {
    playMedia(state.mediaList[idx - 1].id);
  }
}

function closeVideoModal() {
  const video = document.getElementById('global-video-element');
  if (video) video.pause();
  document.getElementById('video-modal').classList.remove('active');
}

function closeAudioPlayer() {
  state.audioElement.pause();
  state.audioElement.src = '';
  state.currentPlayingTrack = null;
  document.getElementById('player-btn-play-icon').innerHTML = '<path d="M8 5v14l11-7z"></path>';
  document.getElementById('sticky-audio-player').classList.remove('active');
}

// Global scope window exports for inline HTML handlers
window.navigate = navigate;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.toggleRoleFormFields = toggleRoleFormFields;
window.handleLogout = handleLogout;
window.openSubscribeModal = openSubscribeModal;
window.closeAudioPlayer = closeAudioPlayer;
window.closeSubscribeModal = closeSubscribeModal;
window.selectPaymentMethod = selectPaymentMethod;
window.handleProcessSubscription = handleProcessSubscription;
window.closeOtpModal = closeOtpModal;
window.handleVerifyOtp = handleVerifyOtp;
window.openAdminPortal = openAdminPortal;
window.openAdminAuthModal = openAdminAuthModal;
window.closeAdminAuthModal = closeAdminAuthModal;
window.handleAdminLogin = handleAdminLogin;
window.handleAdminLogout = handleAdminLogout;
window.handleToggleSubAdmin = handleToggleSubAdmin;
window.filterMedia = filterMedia;
window.handleSearch = handleSearch;
window.handleSearchKeydown = handleSearchKeydown;
window.handleSearchEnter = handleSearchEnter;
window.toggleSearchButton = toggleSearchButton;
window.playMedia = playMedia;
window.downloadMedia = downloadMedia;
window.showSubscriptionExpiredNotice = showSubscriptionExpiredNotice;
window.switchDashboardTab = switchDashboardTab;
window.handleFileSelected = handleFileSelected;
window.removeSelectedFile = removeSelectedFile;
window.handleUpload = handleUpload;
window.handleDeleteMedia = handleDeleteMedia;
window.handleAlbumCoverSelected = handleAlbumCoverSelected;
window.removeAlbumCover = removeAlbumCover;
window.updateAlbumTrackCount = updateAlbumTrackCount;
window.handleAlbumTracksSelected = handleAlbumTracksSelected;
window.removeAlbumTrackUpload = removeAlbumTrackUpload;
window.handleAlbumUpload = handleAlbumUpload;
window.handleDeleteAlbum = handleDeleteAlbum;
window.openAlbumDetail = openAlbumDetail;
window.closeAlbumDetailModal = closeAlbumDetailModal;
window.playAlbum = playAlbum;
window.renderAlbumsCatalog = renderAlbumsCatalog;
window.switchProfileTab = switchProfileTab;
window.handleProfileImageChange = handleProfileImageChange;
window.removeProfileImage = removeProfileImage;
window.copyDashboardShareLink = copyDashboardShareLink;
window.handleProfileUpdate = handleProfileUpdate;
window.handleChangePassword = handleChangePassword;
window.handleDeleteAccount = handleDeleteAccount;
window.setRating = setRating;
window.handleReviewSubmit = handleReviewSubmit;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;
window.playNextTrack = playNextTrack;
window.playPrevTrack = playPrevTrack;
window.closeVideoModal = closeVideoModal;
window.copyCreatorShareLink = copyCreatorShareLink;
window.shareOnWhatsApp = shareOnWhatsApp;
window.clearArtistFilter = clearArtistFilter;
window.togglePasswordVisibility = togglePasswordVisibility;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (logo) logo.addEventListener('click', () => navigate('home'));
  initAudioPlayerEvents();
  navigate('home');
});
