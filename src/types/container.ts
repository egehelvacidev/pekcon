export type ContainerType = 
  | 'dry' 
  | 'reefer' 
  | 'open_top' 
  | 'flat_rack' 
  | 'tank';

export type ContainerSize = 
  | '10' 
  | '20' 
  | '40' 
  | '45';

export type ContainerFeature = 
  | 'standard' 
  | 'high_cube' 
  | 'double_door' 
  | 'curtain_side';

export type ContainerCondition = 
  | 'new' 
  | 'used';

export interface ContainerFilterOptions {
  type?: ContainerType;
  size?: ContainerSize;
  feature?: ContainerFeature;
  condition?: ContainerCondition;
}

export interface ContainerDimensions {
  internal: {
    length: string;
    width: string;
    height: string;
  };
  external: {
    length: string;
    width: string;
    height: string;
  };
  door: {
    width: string;
    height: string;
  };
}

export interface ContainerCapacity {
  maxGrossWeight: string;
  tare: string;
  payload: string;
  capacity: string;
}

export interface ContainerSpec {
  dimensions: ContainerDimensions;
  capacity: ContainerCapacity;
}

export interface Container {
  id: string;
  slug: string;
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  type: ContainerType;
  size: ContainerSize;
  feature: ContainerFeature;
  condition: ContainerCondition;
  images: string[];
  specs: ContainerSpec;
} 