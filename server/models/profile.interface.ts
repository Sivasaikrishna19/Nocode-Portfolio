export interface IResume {
  work_experience: IWorkExperience[];
  education: IEducation[];
  skills: ISkill[];
}

export interface IWorkExperience {
  company_name: string;
  role: string;
  start_date: string;
  end_date: string;
  job_description: string;
}

export interface IEducation {
  name: string;
  start_date: string;
  end_date: string;
  major: string;
  gpa: number;
  in_progress: boolean;
}

export interface ISkill {
  skill: string;
  rating: number;
}
export interface IProject {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  img_url: string;
}
