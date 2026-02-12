import { Job } from "@/types/job";

export const jobs: Job[] = [
  // ===== CREATIVE / DIGITAL =====
  {
    id: "content_creator",
    label: "Content Creator",
    category: "creative",
    visualHint: "ring_light_camera",
    image: "/jobs/content_creator.webp",
    textTemplate:
      "Dengan aura panggungnya, {member} akan jadi Content Creator yang selalu masuk FYP dan bikin penonton betah nonton."
  },
  {
    id: "streamer",
    label: "Streamer / VTuber",
    category: "creative",
    visualHint: "gaming_stream_setup",
    image: "/jobs/streamer.webp",
    textTemplate:
      "{member} akan jadi Streamer yang karismatik, menghibur, dan punya komunitas fanbase yang solid."
  },
  {
    id: "youtuber",
    label: "YouTuber",
    category: "creative",
    visualHint: "youtube_play_button",
    image: "/jobs/youtuber.webp",
    textTemplate:
      "Dengan kreativitasnya, {member} akan jadi YouTuber yang videonya selalu ditunggu-tunggu."
  },
  {
    id: "video_editor",
    label: "Video Editor",
    category: "creative",
    visualHint: "editing_timeline",
    image: "/jobs/video_editor.webp",
    textTemplate:
      "Mata tajam dan selera visual yang kuat membuat {member} cocok jadi Video Editor handal."
  },
  {
    id: "street_photographer",
    label: "Fotografer Street",
    category: "creative",
    visualHint: "dslr_camera",
    image: "/jobs/photographer.webp",
    textTemplate:
      "{member} akan menangkap momen-momen tak terduga dengan gaya yang artistik dan berkarakter."
  },
  {
    id: "concert_videographer",
    label: "Videografer Konser",
    category: "creative",
    visualHint: "handheld_camera_stage",
    image: "/jobs/concert_videographer.webp",
    textTemplate:
      "{member} akan mengabadikan energi panggung dengan sudut pengambilan gambar yang epik."
  },
  {
    id: "graphic_designer",
    label: "Graphic Designer",
    category: "creative",
    visualHint: "design_tablet",
    image: "/jobs/graphic_designer.webp",
    textTemplate:
      "Dengan selera visual yang kuat, {member} akan menciptakan desain yang ikonik dan estetik."
  },
  {
    id: "motion_designer",
    label: "Motion Designer",
    category: "creative",
    visualHint: "after_effects_workspace",
    image: "/jobs/motion_designer.webp",
    textTemplate:
      "Animasi karya {member} akan hidup, dinamis, dan selalu memukau penonton."
  },
  {
    id: "animator",
    label: "Animator",
    category: "creative",
    visualHint: "animation_keyframes",
    image: "/jobs/animator.webp",
    textTemplate:
      "Dengan imajinasi tinggi, {member} akan menghidupkan karakter dan cerita lewat animasi."
  },
  {
    id: "music_producer",
    label: "Music Producer",
    category: "creative",
    visualHint: "daw_mixer",
    image: "/jobs/music_producer.webp",
    textTemplate:
      "Telinga musik yang tajam membuat {member} cocok jadi Music Producer yang jenius."
  },
  {
    id: "sound_engineer",
    label: "Sound Engineer",
    category: "creative",
    visualHint: "audio_mixer_console",
    image: "/jobs/sound_engineer.webp",
    textTemplate:
      "{member} akan memastikan setiap nada terdengar sempurna di studio maupun panggung."
  },

  // ===== ENTERTAINMENT =====
  {
    id: "idol_manager",
    label: "Idol Manager",
    category: "entertainment",
    visualHint: "clipboard_headset",
    image: "/jobs/idol_manager.webp",
    textTemplate:
      "{member} akan jadi Idol Manager yang tegas, suportif, dan selalu menjaga performa tim."
  },
  {
    id: "dance_instructor",
    label: "Dance Instructor",
    category: "entertainment",
    visualHint: "dance_studio_mirror",
    image: "/jobs/dance_instructor.webp",
    textTemplate:
      "{member} akan jadi Dance Instructor yang inspiratif dan penuh energi."
  },
  {
    id: "vocal_coach",
    label: "Vocal Coach",
    category: "entertainment",
    visualHint: "microphone_studio",
    image: "/jobs/vocal_coach.webp",
    textTemplate:
      "{member} akan melatih suara dengan teknik yang presisi dan penuh kesabaran."
  },
  {
    id: "stage_director",
    label: "Stage Director",
    category: "entertainment",
    visualHint: "stage_control_room",
    image: "/jobs/stage_director.webp",
    textTemplate:
      "{member} akan mengatur setiap detail panggung dengan visi artistik yang kuat."
  },
  {
    id: "talent_scout",
    label: "Talent Agency Scout",
    category: "entertainment",
    visualHint: "casting_notebook",
    image: "/jobs/talent_scout.webp",
    textTemplate:
      "{member} punya insting tajam untuk menemukan bakat baru yang bersinar."
  },
  {
    id: "mc_presenter",
    label: "MC / Presenter",
    category: "entertainment",
    visualHint: "handheld_mic_stage",
    image: "/jobs/mc_presenter.jpg",
    textTemplate:
      "Dengan karismanya, {member} akan jadi MC yang luwes dan menghidupkan suasana."
  },
  {
    id: "voice_actor",
    label: "Voice Actor",
    category: "entertainment",
    visualHint: "voice_recording_booth",
    image: "/jobs/voice_actor.webp",
    textTemplate:
      "Suara khas {member} akan membuat karakter animasi jadi lebih hidup."
  },
  {
    id: "dancer",
    label: "Dancer",
    category: "entertainment",
    visualHint: "dance_floor_spotlight",
    image: "/jobs/dancer.webp",
    textTemplate:
      "Gerakan lincah {member} akan memukau setiap penonton di panggung."
  },
  {
    id: "singer",
    label: "Penyanyi",
    category: "entertainment",
    visualHint: "stage_microphone",
    image: "/jobs/singer.webp",
    textTemplate:
      "Dengan suara merdu, {member} akan menggetarkan hati penonton."
  },

  // ===== TECH / BUSINESS =====
  {
    id: "esports_player",
    label: "Esports Player",
    category: "tech_business",
    visualHint: "gaming_arena",
    image: "/jobs/esports_player.webp",
    textTemplate:
      "Refleks cepat dan fokus tinggi membuat {member} cocok jadi Esports Player."
  },
  {
    id: "startup_founder",
    label: "Startup Founder",
    category: "tech_business",
    visualHint: "pitch_deck_presentation",
    image: "/jobs/startup_founder.webp",
    textTemplate:
      "Visi besar {member} akan membawanya membangun startup yang sukses."
  },
  {
    id: "ceo",
    label: "CEO",
    category: "tech_business",
    visualHint: "executive_office",
    image: "/jobs/ceo.webp",
    textTemplate:
      "Karisma dan ketegasan {member} membuatnya cocok jadi CEO visioner."
  },
  {
    id: "drone_pilot",
    label: "Pilot Drone",
    category: "tech_business",
    visualHint: "drone_flying",
    image: "/jobs/drone_pilot.jpg",
    textTemplate:
      "Ketelitian {member} akan membuatnya jadi Pilot Drone yang handal."
  },
  {
    id: "mechanic",
    label: "Mechanic",
    category: "tech_business",
    visualHint: "car_repair_garage",
    image: "/jobs/mechanic.jpg",
    textTemplate:
      "{member} akan jadi Mekanik yang teliti dan cekatan memperbaiki mesin."
  },

  // ===== LIFESTYLE / EVERYDAY =====
  {
  id: "magician",
  label: "Pesulap",
  category: "lifestyle",
  visualHint: "magic_hat",        // ikon topi pesulap / tongkat sihir
  image: "/jobs/magician.jpg",
  textTemplate:
    "Dengan karisma dan ketepatannya, {member} akan jadi Pesulap yang memukau penonton dengan trik-trik elegan dan penuh kejutan."
  },
  {
  id: "tarot_reader",
  label: "Tarot Reader",
  category: "lifestyle",
  visualHint: "tarot_cards",      // ikon kartu tarot / kristal
  image: "/jobs/tarot_reader.jpg",
  textTemplate:
    "Intuisi tajam {member} membuatnya cocok jadi Tarot Reader yang mampu membaca energi dan memberi nasihat penuh makna."
},
{
  id: "casual_runner",
  label: "Pelari Kalcer",
  category: "lifestyle",
  visualHint: "running_shoes",    // ikon sepatu lari
  image: "/jobs/casual_runner.jpg",
  textTemplate:
    "Energi dan semangat {member} akan menjadikannya Pelari Kalcer yang selalu konsisten dan menginspirasi orang lain untuk bergerak."
},
{
  id: "traveller",
  label: "Traveller",
  category: "lifestyle",
  visualHint: "suitcase_plane",   // ikon koper + pesawat
  image: "/jobs/traveller.jpg",
  textTemplate:
    "Rasa ingin tahu tinggi {member} akan membawanya menjelajahi dunia sebagai Traveller yang penuh cerita dan pengalaman tak terlupakan."
},
{
  id: "warteg_owner",
  label: "Pemilik Warteg",
  category: "lifestyle",
  visualHint: "rice_plate",       // ikon piring nasi + lauk
  image: "/jobs/warteg_owner.webp",
  textTemplate:
    "Keramahan dan kehangatan {member} akan membuat Wartegnya selalu ramai dan dicintai pelanggan."
},
{
  id: "hairstylist",
  label: "Hairstylist",
  category: "lifestyle",
  visualHint: "scissors_comb",    // ikon gunting + sisir
  image: "/jobs/hairstylist.jpg",
  textTemplate:
    "Selera estetika {member} akan menjadikannya Hairstylist yang mampu mengubah penampilan klien jadi lebih percaya diri."
},


  {
    id: "barista",
    label: "Barista",
    category: "lifestyle",
    visualHint: "latte_art",
    image: "/jobs/barista.jpg",
    textTemplate:
      "{member} akan jadi Barista yang piawai membuat kopi cantik dan enak."
  },
  {
    id: "baker",
    label: "Baker",
    category: "lifestyle",
    visualHint: "bakery_oven",
    image: "/jobs/baker.jpg",
    textTemplate:
      "Dengan ketelitiannya, {member} akan membuat roti dan kue yang sempurna."
  },
  {
    id: "housewife",
    label: "Ibu Rumah Tangga",
    category: "lifestyle",
    visualHint: "home_kitchen",
    image: "/jobs/housewife.webp",
    textTemplate:
      "{member} akan jadi Ibu Rumah Tangga yang hangat, telaten, dan penuh kasih."
  },

  // ===== PUBLIC SERVICE / TRADITIONAL =====
  {
    id: "asn",
    label: "ASN",
    category: "public_service",
    visualHint: "government_office",
    image: "/jobs/asn.webp",
    textTemplate:
      "{member} akan jadi ASN yang disiplin, profesional, dan melayani masyarakat dengan baik."
  },
  {
    id: "doctor",
    label: "Dokter",
    category: "public_service",
    visualHint: "stethoscope_hospital",
    image: "/jobs/doctor.jpg",
    textTemplate:
      "Dengan kecerdasannya di atas panggung, {member} akan jadi dokter yang tenang, teliti, dan selalu menenangkan pasiennya."
  },
  {
    id: "nurse",
    label: "Perawat",
    category: "public_service",
    visualHint: "hospital_care",
    image: "/jobs/nurse.jpg",
    textTemplate:
      "{member} akan jadi perawat yang penuh empati dan sangat peduli pada pasien."
  },
  {
    id: "police",
    label: "Polisi",
    category: "public_service",
    visualHint: "police_badge",
    image: "/jobs/police.jpg",
    textTemplate:
      "Disiplin dan karismatik, {member} akan jadi polisi yang adil dan dihormati."
  },
  {
    id: "soldier",
    label: "Tentara",
    category: "public_service",
    visualHint: "military_uniform",
    image: "/jobs/soldier.jpg",
    textTemplate:
      "Berani dan tangguh, {member} akan jadi tentara yang melindungi negeri."
  },
  {
    id: "teacher",
    label: "Guru",
    category: "public_service",
    visualHint: "classroom_blackboard",
    image: "/jobs/teacher.jpg",
    textTemplate:
      "{member} akan jadi guru yang inspiratif dan disukai murid-muridnya."
  },
  {
    id: "judge",
    label: "Hakim",
    category: "public_service",
    visualHint: "court_gavel",
    image: "/jobs/judge.jpg",
    textTemplate:
      "Dengan integritas tinggi, {member} akan jadi hakim yang adil."
  },
  {
    id: "prosecutor",
    label: "Jaksa",
    category: "public_service",
    visualHint: "courtroom_documents",
    image: "/jobs/prosecutor.jpg",
    textTemplate:
      "{member} akan jadi jaksa yang tegas dan cerdas dalam menegakkan keadilan."
  },
  {
    id: "architect",
    label: "Arsitek",
    category: "public_service",
    visualHint: "architect_blueprint",
    image: "/jobs/architect.jpg",
    textTemplate:
      "Visi artistik {member} akan melahirkan bangunan yang indah dan fungsional."
  },
  {
    id: "engineer",
    label: "Insinyur",
    category: "public_service",
    visualHint: "engineering_blueprint",
    image: "/jobs/engineer.jpg",
    textTemplate:
      "Logika kuat {member} akan membuatnya jadi insinyur yang brilian."
  },
  {
    id: "pilot",
    label: "Pilot",
    category: "public_service",
    visualHint: "cockpit_view",
    image: "/jobs/pilot.jpg",
    textTemplate:
      "{member} akan menerbangkan pesawat dengan tenang, aman, dan profesional."
  },

  // ===== FUN / GAMEY =====
  {
    id: "spy_agent",
    label: "Agen Mata-Mata",
    category: "fun_gamey",
    visualHint: "spy_silhouette",
    image: "/jobs/spy_agent.jpg",
    textTemplate:
      "{member} akan jadi agen mata-mata yang gesit, cerdas, dan tak terdeteksi."
  },
  {
    id: "time_traveler",
    label: "Time Traveler",
    category: "fun_gamey",
    visualHint: "time_machine_glow",
    image: "/jobs/time_traveler.jpg",
    textTemplate:
      "{member} akan menjelajah lintas waktu dan mengubah sejarah."
  },
  {
    id: "zombie_survivor",
    label: "Zombie Apocalypse Survivor",
    category: "fun_gamey",
    visualHint: "post_apocalypse_city",
    image: "/jobs/zombie_survivor.webp",
    textTemplate:
      "Dengan insting bertahan hidupnya, {member} akan selamat di dunia pasca-zombie."
  },
  {
    id: "npc",
    label: "NPC",
    category: "fun_gamey",
    visualHint: "game_character_idle",
    image: "/jobs/npc.webp",
    textTemplate:
      "{member} akan jadi NPC ikonik yang selalu diingat pemain."
  },
  {
    id: "overthinker",
    label: "Professional Overthinker",
    category: "fun_gamey",
    visualHint: "mind_map_chaos",
    image: "/jobs/overthinker.webp",
    textTemplate:
      "{member} akan memikirkan segalanya… bahkan hal yang belum terjadi."
  },
  {
    id: "yapper",
    label: "Tukang Yapping",
    category: "fun_gamey",
    visualHint: "speech_bubble_storm",
    image: "/jobs/yapper.webp",
    textTemplate:
      "{member} akan selalu punya cerita untuk diceritakan tanpa henti."
  },
  {
    id: "wota",
    label: "Wota",
    category: "fan_culture",
    visualHint: "idol_lightstick",
    image: "/jobs/wota.webp",
    textTemplate:
      "{member} akan jadi Wota setia yang selalu mendukung idolanya."
  },
  {
    id: "wibu",
    label: "Wibu",
    category: "fan_culture",
    visualHint: "anime_room_setup",
    image: "/jobs/wibu.webp",
    textTemplate:
      "{member} akan jadi Wibu sejati dengan koleksi anime yang mengesankan."
  }
];
