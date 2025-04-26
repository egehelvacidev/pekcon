export type ServiceType = 
  | 'sea_freight' 
  | 'road_freight' 
  | 'rail_freight' 
  | 'air_freight' 
  | 'project_cargo' 
  | 'intermodal';

export interface Service {
  id: string;
  type: ServiceType;
  slug: string;
  title: {
    tr: string;
    en: string;
  };
  shortDescription: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  icon: string;
  image: string;
} 