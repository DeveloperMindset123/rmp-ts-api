// types.ts
export interface School {
  id: String;
  name: String;
}

export interface TeacherNode {
  _typename?: String;
  avg_difficulty: number;
  avg_rating: number;
  department: String;
  first_name: String;
  last_name: String;
  legacy_id: number;
  id: String;
  is_saved: boolean;
  num_ratings: number;
  school: School;
  would_take_again_percent: number;
}

export interface TeacherSearch {
  cursor: String;
  node: TeacherNode;
}

export interface ProfessorRating {
  avg_rating: number;
  avg_difficulty: number;
  would_take_again_percent: number;
  num_ratings: number;
  formatted_name: String;
  department: String;
  college_name: String;
  link: String;
}

export interface Department {
  id: String;
  name: String;
}

export interface SchoolSummary {
  campus_condition?: number;
  campus_location?: number;
  career_opportunities: number;
  club_and_event_activities?: number;
  food_quality?: number;
  internet_speed?: number;
  library_condition?: number;
  school_reputation?: number;
  school_safety?: number;
  school_satisfaction?: number;
  social_activities?: number;
}

export interface SchoolNode {
  avg_rating_rounded: number;
  city: String;
  id: String;
  legacy_id: number;
  name: String;
  num_ratings: number;
  state: String;
  summary: SchoolSummary;
}

export interface SchoolSearch {
  school_node: SchoolNode[];
  department_map: Map<string, Department[]>;
}

export interface TeacherRatings {
  class: String;
  date_posted: String;
  comment: String;
  difficulty_rating: number;
  teacher_id: String;
  clarity_rating: number;
  student_grade: String;
  is_for_credit: boolean;
  attendance_status: String;
  is_online: boolean;
  comment_likes: number;
  comment_dislikes: number;
  rating_tags: String;
  textbook_use: number;
  would_take_again: boolean;
}

export interface TeacherList {
  avg_difficulty: number;
  avg_rating: number;
  department: String;
  name: String;
  num_ratings: number;
  would_take_again_percent: number;
}
