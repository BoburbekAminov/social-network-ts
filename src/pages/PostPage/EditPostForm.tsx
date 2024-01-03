import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { PostItem } from "../../store/API/postApi";
import {
  PostFormBox,
  PostFormContent,
  PostFormFooter,
  PostFormHeader,
} from "./PostForm.style";
import { Heading } from "../../components/Typography/Heading";
import { useEditPostMutation } from "../../store/API/postApi";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { IEditPostPayload } from "../../store/API/postApi";

type EditPostFormProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  onEditPostSuccess: () => void;
  post: PostItem;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const EditPostForm = ({
  isOpen,
  post,
  onCloseModal,
  onEditPostSuccess,
}: EditPostFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mainText: post.main_text,
    },
  });

  const [editPost, { isLoading, isSuccess }] = useEditPostMutation();

  useEffect(() => {
    if (isSuccess) {
      onEditPostSuccess();
    }
  }, [isSuccess]);

  const handeleEditPostFormSubmit: SubmitHandler<{ mainText: string }> = (
    formData
  ) => {
    const payload: IEditPostPayload = {
      post_id: post.id,
      new_text: formData.mainText,
    };
    editPost(payload);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <PostFormBox onSubmit={handleSubmit(handeleEditPostFormSubmit)}>
        <PostFormHeader>
          <Heading headingType="h3" headingText="Редактировать пост" />
        </PostFormHeader>
        <PostFormContent>
          <Controller
            name="mainText"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.mainText ? true : false}
                errorMessage={errors.mainText?.message}
                placeholder="Текст"
                {...field}
              />
            )}
          />
        </PostFormContent>
        <PostFormFooter>
          <Button
            disabled={isLoading}
            type="submit"
            buttonText="Сохранить"
            isPrimary
          />
          <Button
            disabled={isLoading}
            buttonText="Отменить"
            isPrimary
            onClick={onCloseModal}
          />
        </PostFormFooter>
      </PostFormBox>
    </Modal>
  );
};
