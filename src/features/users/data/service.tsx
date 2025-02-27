import { del, get, post, put, ResponseData } from '../../../utils/request';


// 分页参数
export type BasePage = {
  pageNum: number;
  pageSize: number;
};




// 创建用户请求类型
export type UserCreateInfo = {
  username: string;
  email: string;
  group_id: number;
  role_id: number;
};

// 更新用户请求类型
export type UserUpdateInfo = {
  id?: number;
  username?: string;
  email?: string;
  group_id?: number;
  role_id?: number;
  status?: number; // 与后端一致，使用 number
};

// API 函数
export async function userList(page: BasePage): Promise<ResponseData<{}>> {
  return await post<{}>('/api/v1/admin/userlist', page);
  
 
}

export async function createUser(user: UserCreateInfo): Promise<ResponseData<{}>> {
  return await post<{}>('/api/v1/system/createUsers', user);
}

export async function updateUser(id: number, user: UserUpdateInfo): Promise<ResponseData<{}>> {
  return await put<{}>(`/api/v1/system/sysuser/${id}`, user);
}

export async function deleteUser(id: number): Promise<ResponseData<{}>> {
  return await del<{}>(`/api/v1/system/sysuser/${id}`);
}