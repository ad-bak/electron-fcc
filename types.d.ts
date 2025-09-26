type Statistics = {
  cpuUsage: number;
  ramUsage: number;
  storageUsage: number;
  storageFree: number;
};

type StaticData = {
  cpuUsage: number;
  ramUsage: string;
  storageUsage: number;
};

type EventPayloadMapping = {
  statistics: Statistics;
  getStaticData: StaticData;
};

interface Window {
  electron: {
    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
    getStaticData: () => Promise<StaticData>;
  };
}
