import { post, ResponseData } from "@/utils/request";
export interface UserLogIn {
  username: string;
  password: string;
}

export interface UserLogInInfo {
  id: number;
  username: string;
  token: string;
}


export async function login(user: UserLogIn): Promise<ResponseData<UserLogInInfo>> {
  return await post('/api/v1/admin/login', user)
}
