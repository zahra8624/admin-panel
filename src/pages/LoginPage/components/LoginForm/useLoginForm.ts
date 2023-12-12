import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUser } from "../../../../hooks";

interface LoginFormData {
  phone: string;
  password: string;
}

const validations = yup.object({
  phone: yup.string().required("لطفا شماره تلفن خود را وارد نمایید."),
  password: yup.string().required("لطفا رمز خود را وارد نمایید."),
});

export const useLoginForm = () => {
  const formProps = useForm<LoginFormData>({
    resolver: yupResolver(validations),
  });
  const { handleSubmit } = formProps;
  const [loginUser, { isPending: isLoginLoading }] = useLoginUser();

  const onSubmit = handleSubmit((data) => {
    loginUser(data);
  });

  return { onSubmit, formProps, isLoginLoading };
};
