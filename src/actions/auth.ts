'use server';

import { email } from "zod";

export const authenticate = async(email: string, password: string) => {
    console.log(email, password);
};