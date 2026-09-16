export type ViewMode = "timeline" | "chronological" | "map";

export type SkinType = 
  | "modern"
  | "retro"
  | "techno"
  | "classroom"
  | "ancient"
  | "space"
  | "sage"
  | "gold"
  | "adriatic"
  | "lavender"
  | "danube"
  | "midzor"
  | "autumn";

export type FontFamilyType = 
  | "inter"
  | "merriweather"
  | "cinzel"
  | "playfair"
  | "lora"
  | "raleway"
  | "oswald"
  | "caveat"
  | "comfortaa"
  | "jetbrains"
  | "cormorant";

export interface AppPreferences {
  theme: "light" | "dark";
  skin: SkinType;
  font?: FontFamilyType;
  adaptiveLogo?: boolean;
  openCardIn?: "default" | "drawer" | "center";
}

export interface TagItem {
  id: string;
  name: string;
  color?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  group: string;
  startYear: number;
  startMonth?: number;
  endYear?: number;
  endMonth?: number;
  color?: string;
  tags?: string[];
  lat?: number;
  lng?: number;
  locationName?: string;
  customLinks?: { label: string; url: string }[];
  wolArticleUrl?: string;
  wolMapId?: string;
}

export interface GroupItem {
  name: string;
  color: string;
  visible: boolean;
}

export interface ProjectMetadata {
  id: string;
  name: string;
  description?: string;
  createdAt: number;
  updatedAt: number;
  itemCount?: number;
}

export interface TimelineData {
  items: TimelineItem[];
  groups: GroupItem[];
  availableTags?: TagItem[];
  name?: string;
}

export interface FilterState {
  searchQuery: string;
  selectedGroups: string[];
  selectedTag: string;
  fromYear: number;
  toYear: number;
}
