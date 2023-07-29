 export class Game {
    type: string = "";
    name: string = "";
    steam_appid: number =0;
    required_age: string = "";
    is_free: boolean = false;
    controller_support: string  = "";
    dlc: number[] = []
    detailed_description: string = "";
    about_the_game: string = "";
    short_description: string = "";
    supported_languages: string = "";
    header_image: string = "";
    capsule_image: string = "";
    capsule_imagev5: string = "";
    website: string = "";
    pc_requirements: PcRequirements = new PcRequirements();
    mac_requirements: MacRequirements = new MacRequirements();
    linux_requirements: LinuxRequirements = new LinuxRequirements();
    legal_notice: string = "";
    drm_notice: string = "";
    developers: string[] = [];
    publishers: string[] = [];
    price_overview: PriceOverview = new PriceOverview();
    packages: number[] = [];
    package_groups: PackageGroup[] = [];
    platforms: Platforms = new Platforms;
    metacritic: Metacritic = new Metacritic();
    categories: Category[] = [];
    genres: Genre[] = [];
    screenshots: Screenshot[] = [];
    movies: Movie[] = [];
    recommendations: Recommendations = new Recommendations();
    achievements: Achievements = new Achievements();
    release_date: ReleaseDate = new ReleaseDate();
    support_info: SupportInfo = new SupportInfo();
    background: string = "";
    background_raw: string = "";
    content_descriptors: ContentDescriptors = new ContentDescriptors();
  }
  
  class PcRequirements {
    minimum: string = "";
    recommended: string = "";
  }
  
  class MacRequirements {
    minimum: string = "";
    recommended: string = "";
  }
  
  class LinuxRequirements {
    minimum: string = "";
    recommended: string = "";
  }
  
  class PriceOverview {
    currency: string = "";
    initial: number = 0;
    final: number = 0;
    discount_percent: number = 0;
    initial_formatted: string = "";
    final_formatted: string = "";
  }
  
  class PackageGroup {
    name: string = "";
    title: string = "";
    description: string = "";
    selection_text: string = "";
    save_text: string = "";
    display_type: number = 0;
    is_recurring_subscription: string = "";
    subs: Sub[] = [];
  }
  
  class Sub {
    packageid: number = 0;
    percent_savings_text: string = "";
    percent_savings: number = 0;
    option_text: string = "";
    option_description: string = "";
    can_get_free_license: string = "";
    is_free_license: boolean = false;
    price_in_cents_with_discount: number = 0;
  }
  
  class Platforms {
    windows: boolean = false;
    mac: boolean = false;
    linux: boolean = false;
  }
  
  class Metacritic {
    score: number = 0;
    url: string = "";
  }
  
  class Category {
    id: number = 0;
    description: string = "";
  }
  
  class Genre {
    id: string = "";
    description: string = "";
  }
  
  class Screenshot {
    id: number = 0;
    path_thumbnail: string = "";
    path_full: string = "";
  }
  
  class Movie {
    id: number = 0;
    name: string = "";
    thumbnail: string = "";
    webm: Webm = new Webm();
    mp4: Mp4 = new Mp4();
    highlight: boolean = false;
  }
  
  class Webm {
    "480": string = "";
    max: string = "";
  }
  
  class Mp4 {
    "480": string = "";
    max: string = "";
  }
  
  class Recommendations {
    total: number = 0;
  }
  
  class Achievements {
    total: number = 0;
    highlighted: Highlighted[] = [];
  }
  
  class Highlighted {
    name: string = "";
    path: string = "";
  }
  
  class ReleaseDate {
    coming_soon: boolean = false;
    date: string = "";
  }
  
  class SupportInfo {
    url: string = "";
    email: string = "";
  }
  
  class ContentDescriptors {
    ids: number[] = [];
    notes: string = "";
  }
  