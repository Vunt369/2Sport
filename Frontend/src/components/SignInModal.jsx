import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
}
  from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';
import axios from "axios";

export default function SignInModal() {
  const { t } = useTranslation("translation");
  const { register, handleSubmit, formState: { errors } } = useForm();
  let [isOpen, setIsOpen] = useState(false)

  const onSubmit = (data) => {
    const { email, name } = data;

    axios
      .get("https://64b2547838e74e386d54fa40.mockapi.io/api/v1/user")
      // .then((response) => {
      //     const users = response.data;
      //     const authenticatedUser = users.find(
      //         (user) => user.Email === email && user.Name === name
      //     );

      //     if (authenticatedUser) {
      //         dispatch(login(authenticatedUser));
      //         toast.success("Login success");
      //       } else {
      //         toast.error("Invalid email or password");
      //       }
      //     })
      .catch((error) => {
        console.error("Login failed", error);
        toast.error("Error");
      });
  };

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div >
        <button
          type="button"
          onClick={openModal}
          className="border-r-2 pr-4"
        >
          <FontAwesomeIcon icon={faUser} className="pr-1" /> {t("loginbtn")}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex justify-between w-full max-w-lg transform overflow-hidden rounded-md shadow-xl transition-all">
              
                    <div className="flex-col flex py-20 px-5 space-y-5 bg-zinc-700 text-white">
                      <h1 className=" font-rubikmonoone" >Welcome back</h1>
                      <p> Welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.</p>
                      <button className="">No account yet? Sign up!</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white text-black flex-col flex py-20 px-5 space-y-5">
                      <input
                        type="text"
                        placeholder="Email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}

                      />
                      {errors.email && <p className="tw-text-teal-950">Email is required</p>}
                      <input
                        type="password"
                        placeholder="Password"
                        {...register("name", { required: true })}

                      />
                      {errors.name && <p className="tw-text-teal-950">Password is required</p>}
                      <button
                        type="submit"
                      >
                        Login
                      </button>
                    </form>
    
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
