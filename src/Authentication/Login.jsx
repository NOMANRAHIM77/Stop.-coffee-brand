import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginSchema } from './LoginSchema'; 
import { login } from '../slices/authSlice'; 
import { Users } from './Users';

// Shadcn Imports
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: "",
    isSuccess: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue, // Added this to auto-fill the form
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Helper to quickly fill the form for testers
  const handleQuickFill = (email, password) => {
    setValue("email", email);
    setValue("password", password);
  };

  const onSubmit = (data) => {
    const authenticatedUser = Users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (authenticatedUser) {
      setModalConfig({
        isOpen: true,
        title: `Welcome back, ${authenticatedUser.name}!`,
        isSuccess: true,
      });

      dispatch(login({
        id: authenticatedUser.id,
        name: authenticatedUser.name,
        email: authenticatedUser.email,
        avatar: authenticatedUser.img
      }));

      setTimeout(() => {
        setModalConfig((prev) => ({ ...prev, isOpen: false }));
        navigate('/home');
      }, 2000);

    } else {
      setModalConfig({
        isOpen: true,
        title: "Invalid Email or Password",
        isSuccess: false,
      });

      setTimeout(() => {
        setModalConfig((prev) => ({ ...prev, isOpen: false }));
        reset(); 
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <Dialog open={modalConfig.isOpen} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white outline-none">
          <DialogHeader>
            <DialogTitle className={`text-2xl font-black uppercase italic ${modalConfig.isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {modalConfig.title}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 font-bold uppercase">
            {modalConfig.isSuccess ? "Redirecting you to system..." : "Credential mismatch. Try again."}
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full max-w-md bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-4xl font-black uppercase italic mb-6 tracking-tighter underline decoration-[#FFD700]">Login.</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-black uppercase mb-1">Email</label>
            <input
              {...register("email")}
              className="w-full border-2 border-black p-3 focus:bg-[#FFD700] outline-none transition-colors font-bold"
              placeholder="coffee@stop.com"
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1 font-bold italic">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full border-2 border-black p-3 focus:bg-[#FFD700] outline-none transition-colors font-bold"
              placeholder="******"
            />
            {errors.password && (
              <p className="text-red-600 text-xs mt-1 font-bold italic">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-[#FFD700] p-4 font-black uppercase hover:bg-zinc-800 transition-colors disabled:opacity-50 border-2 border-black active:translate-x-1 active:translate-y-1"
          >
            {isSubmitting ? "Processing..." : "Sign In"}
          </button>
        </form>

        {/* TESTING TAB / QUICK LOGIN SECTION */}
        <div className="mt-8 pt-6 border-t-4 border-dashed border-zinc-200">
          <p className="text-[10px] font-black text-zinc-400 mb-3 tracking-widest uppercase">Tester Access / Click to fill</p>
          <div className="space-y-2">
            {Users.map((user) => (
              <div 
                key={user.id}
                onClick={() => handleQuickFill(user.email, user.password)}
                className="group flex justify-between items-center p-2 border-2 border-zinc-100 hover:border-black cursor-pointer transition-all hover:bg-[#FFD700]"
              >
                <div className="text-[10px]">
                  <p className="font-black opacity-40 group-hover:opacity-100">USER: {user.name}</p>
                  <p className="font-bold">{user.email}</p>
                </div>
                <div className="text-[10px] text-right">
                  <p className="font-black opacity-40 group-hover:opacity-100">PASS</p>
                  <p className="font-bold">{user.password}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;