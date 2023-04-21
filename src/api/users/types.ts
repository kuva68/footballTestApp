export type UsersRequestPayload = {
  pageParam?: number;
  per_page?: number;
};

export type UsersSuccessPayload = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data?: User[] | null;
  support: Support;
};

export type UserDetailsRequestPayload = {
  userId: number;
};

export type UserDetailsSuccessPayload = {
  data: User;
  support: Support;
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type Support = {
  url: string;
  text: string;
};

export type CreateUserRequestPayload = {
  name: string;
  job: string;
};

export type CreateUserSuccessPayload = {
  username: string;
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
  is_fan: boolean;
  is_trainer: boolean;
  is_player: boolean;
  phone: string;
  birthdate: string;
  referral_code_from: string;
  language: number;
  auto_update_lang: boolean;
};

export type ModifyUserRequestPayload = {
  userId: string;
  name: string;
  job: string;
};

export type ModifyUserSuccessPayload = {
  name: string;
  job: string;
  updatedAt: string;
};

export type DeleteUserRequestPayload = {
  userId: string;
};
