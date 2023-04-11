export const MIN_PORT = 1000;
export const MAX_PORT = 65535;

export const environmentModes = ['development', 'production', 'stage'];

export enum AppEnvValidationMessage {
  AppEnvironmentRequired = 'Environment name is required',
  AppHostRequired = 'Application host is required',
};

export enum DbEnvValidationMessage {
  DBHostRequired = 'MongoDB host is required',
  DBNameRequired = 'Database name is required',
  DBPortRequired = 'MongoDB port is required',
  DBUserRequired = 'MongoDB user is required',
  DBPasswordRequired = 'MongoDB password is required',
  DBBaseAuthRequired = 'MongoDB authentication base is required',
};
