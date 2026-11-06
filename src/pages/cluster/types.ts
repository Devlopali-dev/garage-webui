//

export type GetNodeInfoResult = {
  success: {
    [key: string]: NodeInfo;
  };
  error: Error;
};

export type NodeInfo = {
  nodeId: string;
  garageVersion: string;
  garageFeatures: string[] | null;
  rustVersion: string;
  dbEngine: string;
  hostname?: string | null;
  addr?: string | null;
  isUp?: boolean | null;
  role?: Role | null;
  draining?: boolean | null;
  dataPartition?: DataPartition | null;
  metadataPartition?: DataPartition | null;
};

export type GetStatusResult = {
  layoutVersion: number;
  nodes: NodeResp[];
};

export type NodeResp = {
  id: string;
  role?: Role | StagedRole | null;
  addr?: string | null;
  hostname?: string | null;
  garageVersion?: string | null;
  isUp: boolean;
  lastSeenSecsAgo?: number | null;
  draining: boolean;
  dataPartition?: DataPartition | null;
  metadataPartition?: DataPartition | null;
  resyncQueueLen?: number | null;
};

export type Node = NodeResp;

export type DataPartition = {
  available: number;
  total: number;
};

export type Role = {
  id?: string;
  zone: string;
  capacity: number | null;
  tags: string[];
};

export type StagedRole = { id: string; remove: boolean } & Partial<
  Omit<Role, "id">
>;

export type GetClusterLayoutResult = {
  version: number;
  roles: Role[];
  parameters: LayoutParameters;
  partitionSize: number;
  stagedParameters?: LayoutParameters | null;
  stagedRoleChanges: StagedRole[];
};

export type LayoutParameters = {
  zoneRedundancy: number;
};

export type AssignNodeBody = {
  id: string;
  zone: string;
  capacity: number | null;
  tags: string[];
};

export type ApplyLayoutResult = {
  message: string[];
  layout: GetClusterLayoutResult;
};
