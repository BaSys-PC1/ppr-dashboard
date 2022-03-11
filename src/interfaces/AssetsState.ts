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
export interface Asset {
  idShort?: string;
  IdentificationSubmodelEndpoint?: string;
  CapabilitiesSubmodelEndpoint?: string;
  CCInterfaceSubmodelEndpoint?: string;
  CCInstanceSubmodelEndpoint?: string;
  ERRMSG?: string;
  EXST?:
    | 'STOPPED'
    | 'RESETTING'
    | 'IDLE'
    | 'STARTING'
    | 'EXECUTE'
    | 'COMPLETING'
    | 'COMPLETE'
    | 'STOPPING'
    | 'ABORTING'
    | 'ABORTED'
    | 'CLEARING'
    | 'HOLDING'
    | 'HELD'
    | 'UNHOLDING'
    | 'SUSPENDING'
    | 'SUSPENDED'
    | 'UNSUSPENDING';
  EXMODE?: 'AUTO' | 'SEMIAUTO' | 'SIMULATION';
  ERRCODE?: number;
  OPMODE?: string;
  OCCST?: 'FREE' | 'OCCUPIED' | 'PRIORITY';
  OCCUPIER?: string;
  WORKST?: string;
}

export interface AssetsState {
  assetMap: {
    [assetId: string]: Asset;
  };
  assetList: string[];
  totalAssets: number;
  currentPage: number;
  hasLoaded: boolean;
}
