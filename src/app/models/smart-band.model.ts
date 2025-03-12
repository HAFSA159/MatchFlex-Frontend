export interface SmartBand {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  inStock: boolean;
  rating: number;
  colors?: string[];
  groupName?: string;
}

export interface SmartBandState {
  bands: SmartBand[];
  selectedBand: SmartBand | null;
  loading: boolean;
  error: string | null;
}
