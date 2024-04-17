interface File {
  name: string;
  url: string;
}

interface Status {
  code: string;
  name: string;
  color: string;
}

interface CreatedBy {
  id: number;
  username: string;
  full_name: string;
}

export interface Registry {
  id: number;
  cession: null | any;
  file: File;
  credits_count: number;
  status: Status;
  created_by: CreatedBy;
  created_at: string;
}
