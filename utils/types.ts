export type NavLink = {
  page: string;
  link: string;
  icon: any;
  color: any;
};


export type Register = {
    name: string;
    phone_number: string;
    address: string;
    email: string;
    password: string;
    retryPassword: string;
    // role: string;
}

export type Login = {
    email: string;
    password: string;
}