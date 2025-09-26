type Statistics = {
  cpuUsage: never;
  ramUsage: number;
  storageUsage: number;
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
