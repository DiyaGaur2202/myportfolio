import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm,SubmitHandler } from "react-hook-form";


function ContactMe({name , email , subject , message}) {
  const { register, handleSubmit} = useForm();

  const onSubmit: SubmitHandler<Inputs> =(formData)=> {
    window.location.href = `mailto:diyagaur2202@gmail.com?subject=${formData.subject}&body= Hi , my name is ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] sm:tracking-[15px] text-gray-500 text-2xl">
        {" "}
        Contact{" "}
      </h3>

      <div className="flex flex-col space-y-5 items-center absolute top-[150px]">
        <h4 className="xltext-3xl text-base" >
        I have got just what you need. {" "}
          <span className="decoration-[#f7ab0a]/50 underline">
            Lets Talk !
          </span>
        </h4>

        <div className="space-y-2 " >
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p  className="text-axl" >+91 81********</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-axl"> diyagaur2202@gmail.com </p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-axl">Bijnor , Uttar Pradesh </p>
          </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 xl:w-fit w-[300px] mx-auto  ">
                
                <div className="flex space-x-2 xl:w-fit " >
                    <input {...register("name")} placeholder="Name" className="contactInput xl:w-fit w-[145px] " type="text" />
                    <input {...register("email")}  placeholder="Email" className="contactInput xl:w-fit w-[145px]" type="text" />
                </div>
                
                <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
                
                <textarea {...register("message")} placeholder="Message" className="contactInput" />
                <button type="submit" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg " >Submit</button>
            </form>          

        </div>
      </div>
    </div>
  );
}

export default ContactMe;
