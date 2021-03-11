export interface IDSubmodel {
  Documentation?: string;
  ManufacturerName?: string;
  ManufacturerProductDesignation?: string;
  SerialNumber?: string;
  TypThumbnail?: string;
}

export interface CCISubmodel {
  ERRMSG?: string;
  EXST?: string;
  EXMODE?: string;
  ERRCODE?: number;
  OPMODE?: string;
  OCCST?: string;
  WORKST?: string;
}

export interface AssetsState {
  assets: {
    [assetId: string]: {
      IdentificationSubmodelEndpoint: string;
      ControlComponentInterfaceSubmodelEndpoint?: string;
      ControlComponentConfigurationSubmodelEndpoint?: string;
      EXST?: string;
    };
  };
  assetsList: [];
}
