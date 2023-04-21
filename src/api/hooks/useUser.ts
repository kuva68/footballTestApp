import {
  DeleteUserRequestPayload,
  ModifyUserRequestPayload,
  UserDetailsRequestPayload,
  CreateUserSuccessPayload,
} from '@api/users/types';
import { createUser, deleteUser, getUserDetails, modifyUser } from '@api/users/users';
import { navigate } from '@routes/navigationUtils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { onOpenToast } from '@utils/toast';

function useUser({ userId }: UserDetailsRequestPayload) {
  return useQuery([`user-${userId}`, { userId }], () => getUserDetails({ userId }), {
    enabled: !!userId,
  });
}

function useCreateUser() {
  return useMutation(['new-user'], (data: CreateUserSuccessPayload) => createUser(data), {
    onSuccess: (/*data*/) => {
      onOpenToast({
        status: 'success',
        message: 'User created successfully',
      });
      navigate('Home');
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: 'error',
        message: 'User not created',
      });
      navigate('Home');
    },
  });
}

function useModifyUser() {
  return useMutation(
    ['modify-user'],
    ({ userId, name, job }: ModifyUserRequestPayload) => modifyUser({ userId, name, job }),
    {
      onSuccess: (/*data*/) => {
        onOpenToast({
          status: 'success',
          message: 'User modified successfully',
        });
      },
      onError: (/*data*/) => {
        onOpenToast({
          status: 'error',
          message: 'User not modified',
        });
      },
    },
  );
}

function useDeleteUser() {
  return useMutation(['delete-user'], ({ userId }: DeleteUserRequestPayload) => deleteUser({ userId }), {
    onSuccess: (/*data*/) => {
      onOpenToast({
        status: 'success',
        message: 'User deleted successfully',
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: 'error',
        message: 'User not deleted',
      });
    },
  });
}

export { useUser, useCreateUser, useModifyUser, useDeleteUser };
